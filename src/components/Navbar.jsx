import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-100 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Left Side */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-purple-500 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-purple-500 font-medium">Find Candidate</a>
          <a href="#" className="text-purple-500 font-bold">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-purple-500 font-medium">My Jobs</a>
          <a href="#" className="text-gray-600 hover:text-purple-500 font-medium">Applications</a>
          <a href="#" className="text-gray-600 hover:text-purple-500 font-medium">Customer Support</a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 font-medium">+1-202-555-0178</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-5 h-5"
            />
            <select
              className="bg-transparent text-gray-600 font-medium focus:outline-none"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
