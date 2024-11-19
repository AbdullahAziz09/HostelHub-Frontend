import React from "react";
import { useParams } from "react-router-dom";
import { FaWifi, FaBath, FaFan } from "react-icons/fa"; // Icons for amenities

const HostelDetail = () => {
  const { id } = useParams();

  const hostel = {
    id: id,
    name: "Hostel A",
    image: "https://via.placeholder.com/800x400", // Replace with a real image URL
    address: "123 Main St, City",
    ratings: 4.5,
    rooms: [
      {
        name: "Deluxe Room",
        seats: 2,
        price: 150,
        amenities: [
          { label: "AC", icon: <FaFan /> },
          { label: "Attached Bath", icon: <FaBath /> },
          { label: "WiFi", icon: <FaWifi /> },
        ],
      },
      {
        name: "Standard Room",
        seats: 3,
        price: 120,
        amenities: [
          { label: "Non-AC", icon: <FaFan /> },
          { label: "Non-Attached Bath", icon: <FaBath /> },
          { label: "WiFi", icon: <FaWifi /> },
        ],
      },
      {
        name: "Single Room",
        seats: 1,
        price: 100,
        amenities: [
          { label: "AC", icon: <FaFan /> },
          { label: "Attached Bath", icon: <FaBath /> },
          { label: "WiFi", icon: <FaWifi /> },
        ],
      },
      {
        name: "Budget Room",
        seats: 4,
        price: 80,
        amenities: [
          { label: "Non-AC", icon: <FaFan /> },
          { label: "Non-Attached Bath", icon: <FaBath /> },
          { label: "WiFi", icon: <FaWifi /> },
        ],
      },
    ],
    whatsapp: "+1234567890",
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-white min-h-screen p-6 md:p-12">
      {/* Header Section */}
      <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
        <img
          src={hostel.image}
          alt={hostel.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md">{hostel.name}</h1>
          <p className="text-gray-300">{hostel.address}</p>
          <p className="mt-2 text-yellow-400 flex items-center">
            {"⭐".repeat(Math.floor(hostel.ratings))}
            <span className="ml-2 text-sm">({hostel.ratings.toFixed(1)})</span>
          </p>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Rooms Available</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostel.rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              {/* Room Info */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-700">{room.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {room.seats} seat{room.seats > 1 ? "s" : ""}
                </p>
                <p className="text-lg text-gray-600 font-bold mt-3">
                  ${room.price} / night
                </p>
              </div>
              {/* Amenities */}
              <div className="mt-4 space-y-2">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center text-gray-600 text-sm">
                    {amenity.icon}
                    <span className="ml-2">{amenity.label}</span>
                  </div>
                ))}
              </div>
              {/* Book Now Button */}
              <a
                href={`https://wa.me/${hostel.whatsapp}?text=Hi! I’m interested in booking the ${room.name} at ${hostel.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gradient-to-l transition-all duration-300 text-center transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;
