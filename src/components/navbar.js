"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg font-bold">twiscode</p>

        <div className="hidden md:flex space-x-4">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <Link href="/teams">Teams</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={handleMobileMenuToggle}>
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <Link href="/about" className="block py-2">
            About
          </Link>
          <Link href="/services" className="block  py-2">
            Services
          </Link>
          <Link href="/teams" className="block py-2">
            Teams
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
