"use client"
import React, { useState } from 'react';
// import { Menu, X } from 'react-feather';
import {Menu, X} from "react-feather"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const header = [
    { title: "Home" },
    { title: "Price" },
    { title: "Blog" },
    { title: "FAQs" },
    { title: "About Us" },
  ];

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between gap-32 items-center">
        <div className="text-red-500 text-3xl font-bold">
        Witt.
        </div>
        <ul className="hidden md:flex justify-center items-center space-x-6">
          {header.map((item, index) => (
            <li key={index} className=" hover:text-gray-500">
              {item.title}
            </li>
          ))}
        </ul>
        <div className="md:hidden flex justify-end">
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            {header.map((item, index) => (
              <li key={index} className="text-gray-900 hover:text-gray-500">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
