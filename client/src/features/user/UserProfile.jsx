import React, { useState } from "react";
import FeedbackList from "../feedback/FeedbackList";
import { useGetProfileQuery, useUpdateProfileMutation } from "./userApi";

const UserProfile = () => {
  const { data: user, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [form, setForm] = useState({
    name: "",
    location: "",
    availability: "",
    isPublic: true,
  });

  const [image, setImage] = useState(null);

  React.useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        location: user.location || "",
        availability: user.availability || "",
        isPublic: user.isPublic,
      });
    }
  }, [user]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in form) {
      formData.append(key, form[key]);
    }

    if (image) {
      formData.append("profileImage", image);
    }

    try {
      await updateProfile(formData).unwrap();
      alert("Profile updated");
    } catch (err) {
      alert(err?.data?.message || "Update failed");
    }
  };

  if (isLoading) return <p>Loading profile...</p>;

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <img
        src={user.profileImage || "/default-avatar.png"}
        alt="avatar"
        width="100"
        style={{ borderRadius: "50%" }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
      />

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />
      <input
        name="availability"
        placeholder="Availability (e.g., evenings, weekends)"
        value={form.availability}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="isPublic"
          checked={form.isPublic}
          onChange={handleChange}
        />
        Make profile public
      </label>

      <button type="submit" disabled={isUpdating}>
        Update Profile
      </button>
      <FeedbackList userId={user._id} />
    </form>
  );
};

export default UserProfile;
