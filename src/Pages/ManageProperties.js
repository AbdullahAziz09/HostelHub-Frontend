import React, { useState } from "react";

const ManageProperties = () => {
  const [hostels, setHostels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    hostelName: "",
    address: "",
    contactNumber: "",
    rooms: "",
    seats: "",
    category: "",
    amenities: "",
    frontElevation: null,
    roomPictures: null,
    otherPictures: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files });
  };

  const handleAddEdit = (id = null) => {
    if (id) {
      const hostel = hostels.find((h) => h.id === id);
      setFormData(hostel);
    } else {
      setFormData({
        id: null,
        hostelName: "",
        address: "",
        contactNumber: "",
        rooms: "",
        seats: "",
        category: "",
        amenities: "",
        frontElevation: null,
        roomPictures: null,
        otherPictures: null,
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setHostels((prev) =>
        prev.map((h) =>
          h.id === formData.id ? { ...formData, id: formData.id } : h
        )
      );
    } else {
      setHostels((prev) => [
        ...prev,
        { ...formData, id: Date.now() },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this hostel?")) {
      setHostels((prev) => prev.filter((h) => h.id !== id));
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Manage Hostels</h1>
        <button
          onClick={() => handleAddEdit()}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Add Rooms
        </button>
      </div>

      {/* Hostels Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="px-6 py-3">Hostel Name</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hostels.length ? (
              hostels.map((hostel) => (
                <tr key={hostel.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4">{hostel.hostelName}</td>
                  <td className="px-6 py-4">{hostel.address}</td>
                  <td className="px-6 py-4">{hostel.category}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleAddEdit(hostel.id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(hostel.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No hostels found. Click "Add New Hostel" to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {formData.id ? "Edit Hostel Details" : "Add New Hostel"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Grid Layout for Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Hostel Name
                  </label>
                  <input
                    type="text"
                    name="hostelName"
                    value={formData.hostelName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rooms
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Seats
                  </label>
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Boys">Boys</option>
                    <option value="Girls">Girls</option>
                    <option value="Apartments">Apartments</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Amenities
                  </label>
                  <input
                    type="text"
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleInputChange}
                    placeholder="Comma separated (e.g., WiFi, Parking)"
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Front Elevation
                  </label>
                  <input
                    type="file"
                    name="frontElevation"
                    onChange={handleFileChange}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Room Pictures
                  </label>
                  <input
                    type="file"
                    name="roomPictures"
                    onChange={handleFileChange}
                    multiple
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Other Pictures
                  </label>
                  <input
                    type="file"
                    name="otherPictures"
                    onChange={handleFileChange}
                    multiple
                    className="w-full mt-1"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg mr-4 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProperties;
