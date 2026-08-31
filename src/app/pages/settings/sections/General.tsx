// BranchProfile.tsx or General.tsx
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi";
import { PencilSquareIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Input, Upload } from "@/components/ui";
import apiHelper from "@/utils/apiHelper";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthContext } from "@/app/contexts/auth/context";

export default function General() {
  const { user } = useAuthContext();
  const id = user?.id;
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [employee, setEmployee] = useState<any>(null);

  // Editable fields (only self-editable fields yahan)
  const [formData, setFormData] = useState({
    mobileNumber: "",
    alternateNumber: "",
    email: "",
  });

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      const response = await apiHelper.get(`/employees/${id}`);
      setEmployee(response.data);
      setFormData({
        mobileNumber: response.data?.mobileNumber || "",
        alternateNumber: response.data?.alternateNumber || "",
        email: response.data?.email || "",
      });
    } catch (err) {
      console.log(err);
      setError("Failed to load employee");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEmployee();
    }
  }, [id]);

  const handleEditClick = () => {
    setFormData({
      mobileNumber: employee?.mobileNumber || "",
      alternateNumber: employee?.alternateNumber || "",
      email: employee?.email || "",
    });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setAvatar(null);
    setFormData({
      mobileNumber: employee?.mobileNumber || "",
      alternateNumber: employee?.alternateNumber || "",
      email: employee?.email || "",
    });
    toast.info("Changes discarded");
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const data = new FormData();
      data.append("mobileNumber", formData.mobileNumber);
      data.append("alternateNumber", formData.alternateNumber);
      data.append("email", formData.email);

      // Image OPTIONAL hai — sirf tab append karo jab naya select hua ho
      if (avatar) {
        data.append("avatar", avatar);
      }

      const res = await apiHelper.put(`/employees/profile/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setEmployee(res.data.data);
      setIsEditing(false);
      setAvatar(null);
      toast.success("Profile updated successfully");
    } catch (error: any) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">
          Loading employee details...
        </div>
      </div>
    );
  }

  // Error state
  if (!employee) {
    return (
      <div className="flex h-64 flex-col items-center justify-center space-y-4">
        <div className="text-center text-red-500 dark:text-red-400">
          <p className="text-lg font-semibold">{error || "Employee not found"}</p>
          <p className="mt-2 text-sm text-gray-500">
            The employee you're looking for doesn't exist or has been removed.
          </p>
        </div>
        <Button onClick={() => navigate("/dashboard")}>
          <ArrowLeftIcon className="mr-1.5 size-4.5" />
          Back to employee
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex cursor-pointer items-center text-sm text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <ArrowLeftIcon className="mr-1.5 size-4" />
        Back to employee
      </button>

      {/* Header with Avatar */}
      <div className="flex items-center justify-between">
        <div>
          <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
            {employee?.employeeName || "Employee Profile"}
          </h5>

          <span className="mt-2 inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-500/20 dark:text-primary-300">
            {employee?.role || "-"}
          </span>
        </div>

        <div className="mt-4 flex flex-col space-y-1.5">
          <Avatar
            size={20}
            src={
              avatar
                ? URL.createObjectURL(avatar)
                : employee?.profileImage
                  ? apiHelper.getImageUrl(employee.profileImage)
                  : "/images/avatar/avatar-20.jpg"
            }
            classNames={{
              root: "ring-primary-600 dark:ring-primary-500 dark:ring-offset-dark-700 rounded-xl ring-offset-[3px] ring-offset-white transition-all hover:ring-3",
              display: "rounded-xl",
            }}
            indicator={
              isEditing && (
                <div className="dark:bg-dark-700 absolute right-0 bottom-0 -m-1 flex items-center justify-center rounded-full bg-white">
                  {avatar ? (
                    <Button
                      onClick={() => setAvatar(null)}
                      isIcon
                      className="size-6 rounded-full"
                    >
                      <XMarkIcon className="size-4" />
                    </Button>
                  ) : (
                    <Upload
                      name="avatar"
                      onChange={(files) => setAvatar(files[0])}
                      accept="image/*"
                    >
                      {(props) => (
                        <Button
                          isIcon
                          className="size-6 rounded-full"
                          {...props}
                        >
                          <HiPencil className="size-3.5" />
                        </Button>
                      )}
                    </Upload>
                  )}
                </div>
              )
            }
          />
        </div>
      </div>

      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />

      {/* Form Fields */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 [&_.prefix]:pointer-events-none">
        {/* Non-editable — admin controlled */}
        <Input label="Employee Name" value={employee?.employeeName || ""} readOnly />
        <Input label="Department" value={employee?.department || ""} readOnly />
        <Input label="Branch" value={employee?.branch || ""} readOnly />
        <Input label="Role" value={employee?.role || ""} readOnly />

        {/* Editable by employee */}
        <Input
          label="Mobile Number"
          value={formData.mobileNumber}
          readOnly={!isEditing}
          onChange={(e) =>
            setFormData({ ...formData, mobileNumber: e.target.value })
          }
        />
        <Input
          label="Alternate Number"
          value={formData.alternateNumber}
          readOnly={!isEditing}
          onChange={(e) =>
            setFormData({ ...formData, alternateNumber: e.target.value })
          }
        />
        <Input
          label="Email"
          value={formData.email}
          readOnly={!isEditing}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input label="Status" value={employee?.status || ""} readOnly />
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end gap-3">
        {!isEditing ? (
          <Button color="primary" onClick={handleEditClick}>
            <PencilSquareIcon className="size-4" />
          </Button>
        ) : (
          <>
            <Button onClick={handleCancel} disabled={saving}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}