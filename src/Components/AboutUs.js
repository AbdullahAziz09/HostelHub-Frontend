import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          About <span className="text-blue-600">HostelHub</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your ultimate destination for finding the perfect hostel experience. At HostelHub, we connect students and travelers with comfortable, affordable, and well-equipped hostels worldwide.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Hostel Interior"
             className="rounded-xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {/* Mission Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide a seamless and hassle-free platform for hostel seekers by offering top-notch accommodation options, transparency, and unparalleled support.
            </p>
          </div>

          {/* Vision Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted name in hostel accommodation, redefining the way students and travelers find and experience hostels globally.
            </p>
          </div>

          {/* Core Values Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Core Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Commitment to Quality and Comfort</li>
              <li>Transparency in Listings</li>
              <li>Building a Community of Trust</li>
              <li>Affordable Accommodation for Everyone</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          HostelHub makes it easy for you to find the right hostel with detailed listings, real reviews, and excellent support. Join thousands of happy customers who’ve found their ideal stay with us.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
