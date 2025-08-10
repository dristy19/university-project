import React from 'react';
import logo from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-[#101828] py-6 text-white">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-3 text-left">
            <img src={logo} alt="College360 Logo" className="h-12 w-full mb-2" />
            <p className="text-xs mb-1">An ISO Certified 9001:2015 company</p>
            <p className="text-xs">College360 is a platform to search nearby colleges by name, place, and more.</p>
            <p className="text-xs mt-1">Address: Bhopal, Madhya Pradesh [462011]</p>
            <p className="text-xs">Phone: +91-96303 44455</p>
          </div>
          <div className="p-3">
            <h3 className="text-[#fdc700] text-sm font-bold mb-2">Top Courses</h3>
            <ul className="space-y-1 text-xs">
              <li>M.Tech</li>
              <li>B.Tech</li>
              <li>B.Tech - CSE</li>
              <li>B.Tech - ME</li>
              <li>B.Tech - ECE</li>
              <li>B.Tech - Civil</li>
              <li>MBA</li>
              <li>B.Tech - EEE</li>
              <li>BBA</li>
              <li>BAMS</li>
            </ul>
          </div>
          <div className="p-3">
            <h3 className="text-[#fdc700] text-sm font-bold mb-2">Top Universities</h3>
            <ul className="space-y-1 text-xs">
              <li>Engineering and Technology</li>
              <li>Management and Business Administration</li>
              <li>Law</li>
              <li>IT and Computer Applications</li>
              <li>Pharmacy</li>
              <li>Arts</li>
              <li>Medical and Health Sciences</li>
              <li>Ayush UG</li>
              <li>Paramedical Course</li>
            </ul>
          </div>
          <div className="p-3">
            <h3 className="text-[#fdc700] text-sm font-bold mb-2">Top Exams</h3>
            <ul className="space-y-1 text-xs">
              <li>CAT</li>
              <li>GATE</li>
              <li>JEE-Main</li>
              <li>NEET</li>
              <li>XAT</li>
              <li>CLAT</li>
              <li>MAT</li>
              <li>TET</li>
            </ul>
          </div>
          <div className="p-3">
            <h3 className="text-[#fdc700] text-sm font-bold mb-2">Other Links</h3>
            <ul className="space-y-1 text-xs">
              <li>About</li>
              <li>Contact Us</li>
              <li>Advertising</li>
              <li>Career</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center border-t border-gray-700 pt-2">
          <div className="flex justify-center space-x-2 mb-2">
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-facebook-f text-xs"></i>
            </a>
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-twitter text-xs"></i>
            </a>
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-instagram text-xs"></i>
            </a>
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-linkedin-in text-xs"></i>
            </a>
          </div>
          <p className="text-xs">Copyright © 2025 Webdoit Global Creations Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;