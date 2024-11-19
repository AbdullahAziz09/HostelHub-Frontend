import React, { useState } from "react";

const Profile = () => {
  const [profileStatus, setProfileStatus] = useState("Incomplete");
  const [formData, setFormData] = useState({
    name: "Abdullah Aziz",
    email: "a@example.com",
    phone: "123-456-7890",
    cnic: "",
    address: "",
    cnicImage: null,
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for incomplete fields
    if (formData.cnic && formData.address && formData.cnicImage && formData.profileImage) {
      setProfileStatus("Complete");
    } else {
      alert("Please complete all fields to update your profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Complete Your Profile</h1>

        {/* Profile Status */}
        <div className={`mb-6 text-sm font-semibold ${profileStatus === "Complete" ? "text-green-600" : "text-red-600"}`}>
          Profile Status: {profileStatus}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Display Existing Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                disabled
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                disabled
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Editable Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">CNIC</label>
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleInputChange}
                placeholder="Enter your CNIC"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your Address"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Upload CNIC Front Image</label>
              <input
                type="file"
                name="cnicImage"
                onChange={handleFileChange}
                className="w-full mt-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Upload CNIC Back Image</label>
              <input
                type="file"
                name="profileImage"
                onChange={handleFileChange}
                className="w-full mt-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
