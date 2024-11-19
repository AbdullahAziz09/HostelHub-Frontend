import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const featuredHostels = [
  { id: 1, name: 'Hostel A', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '123 Main St, City', ratings: 4.5 },
  { id: 2, name: 'Hostel B', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '456 Second St, City', ratings: 4.2 },
  { id: 3, name: 'Hostel C', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '789 Third St, City', ratings: 3.8 },
  { id: 4, name: 'Hostel D', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '101 Fourth St, City', ratings: 4.0 },
  { id: 5, name: 'Hostel E', image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '202 Fifth St, City', ratings: 4.7 },
  { id: 6, name: 'Hostel F', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '303 Sixth St, City', ratings: 4.3 },
  { id: 7, name: 'Hostel G', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '404 Seventh St, City', ratings: 3.9 },
  { id: 8, name: 'Hostel H', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '505 Eighth St, City', ratings: 4.4 },
  { id: 9, name: 'Hostel I', image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '606 Ninth St, City', ratings: 4.6 },
  { id: 10, name: 'Hostel J', image:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400', address: '707 Tenth St, City', ratings: 4.8 },
];



const FeaturedHostels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to display per page

  const nextHostel = () => {
    if (currentIndex + itemsPerPage < featuredHostels.length) {
      setCurrentIndex(currentIndex + itemsPerPage); // Move 4 steps forward
    }
  };

  const prevHostel = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage); // Move 4 steps backward
    }
  };

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Featured Hostels</h2>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={prevHostel}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <button
          onClick={nextHostel}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 disabled:opacity-50"
          disabled={currentIndex + itemsPerPage >= featuredHostels.length}
        >
          Next
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex justify-center space-x-6 transition-transform duration-500"
        >
          {featuredHostels.slice(currentIndex, currentIndex + itemsPerPage).map((hostel) => (
            <div
              key={hostel.id}
              className="flex-none w-72 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 my-6"
            >
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{hostel.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{hostel.address}</p>
                <p className="text-yellow-500 mb-4">
                  {'⭐'.repeat(Math.round(hostel.ratings))} ({hostel.ratings})
                </p>
                <Link
                  to={`/hostel-detail/${hostel.id}`}
                  className="block text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHostels;
