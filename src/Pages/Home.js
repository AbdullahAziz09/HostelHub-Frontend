import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FeaturedHostels from '../Components/FeaturedHostels';
import AboutUs from '../Components/AboutUs';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto mt-12 px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to HostelHub</h1>
          <p className="mt-4 text-lg text-center text-gray-600">
            Your one-stop solution for finding and listing hostels.
          </p>
        </div>

        {/* Featured Hostels Section */}
        <section className="mt-12">
          <FeaturedHostels />
        </section>

        {/* About Us Section */}
        <section className="mt-12">
          <AboutUs />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
