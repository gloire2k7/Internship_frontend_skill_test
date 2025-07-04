"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 md:px-8 bg-white border-b border-background-gray relative z-20">
      {/* Left: Logo and Brand */}
      <div className="flex items-center gap-2">
        {/* Actual logo SVG */}
        <span className="inline-block w-8 h-8 align-middle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_106_34625)">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.27C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.0753C18.4467 7.65027 17.4396 9.68849 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.1981C0.977333 14.1981 4.90991 7.3063 6.43925 4.62135C7.62519 2.53926 8.95382 1.22901 10.6813 0.809006C12.7879 0.29685 15.2547 1.4106 16.5697 3.44183C17.4837 4.85338 18.2925 6.1454 16.8671 8.5858C16.6977 8.87568 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.2514C9.08019 7.4219 9.08019 5.33685 10.5191 4.50735C11.9579 3.67785 13.7662 4.72035 13.7662 6.37935C13.7662 8.03835 11.9579 9.0809 10.5191 8.2514Z" fill="#5FD788"/>
            </g>
            <defs>
              <clipPath id="clip0_106_34625">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="text-dark-text font-semibold text-lg">Toutem</span>
      </div>
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-dark-text font-medium text-sm">
        <li><a href="#" className="hover:text-green transition-colors">HOME</a></li>
        <li><a href="#" className="hover:text-green transition-colors">ABOUT US</a></li>
        <li><a href="#" className="hover:text-green transition-colors">SHOP</a></li>
        <li><a href="#" className="hover:text-green transition-colors">CONTACT</a></li>
      </ul>
      {/* Right: Icons (Desktop only) */}
      <div className="hidden md:flex items-center gap-4">
        {/* Shopping Bag Icon */}
        <span className="inline-block w-6 h-6 align-middle">
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0493 14.6919L13.4942 4.84063H10.7214V4.04532C10.7214 2.0617 9.07272 0.448059 7.04616 0.448059C5.0196 0.448059 3.37096 2.06178 3.37096 4.04532V4.84063H0.478081L0.000561102 14.7345L7.77038e-05 14.7516C-0.0038423 15.1076 0.140719 15.4571 0.396479 15.7099C0.652319 15.9631 1.00776 16.1084 1.37168 16.1084H12.6798C13.0548 16.1084 13.418 15.9555 13.676 15.6887C13.9339 15.4219 14.07 15.0586 14.0493 14.6919ZM4.32952 4.04532C4.32952 2.57912 5.54816 1.38627 7.04616 1.38627C8.54408 1.38627 9.7628 2.57912 9.7628 4.04532V4.84063H4.32944V4.04532H4.32952ZM12.9798 15.0437C12.9019 15.124 12.7926 15.1701 12.6797 15.1701H1.3716C1.262 15.1701 1.15504 15.1264 1.07784 15.05C1.00248 14.9756 0.959201 14.8733 0.958481 14.7684L1.39232 5.77884H3.3708V6.96692C3.3708 7.22602 3.58536 7.43602 3.85008 7.43602C4.1148 7.43602 4.32936 7.22602 4.32936 6.96692V5.77884H9.76272V6.96692C9.76272 7.22602 9.97728 7.43602 10.242 7.43602C10.5067 7.43602 10.7212 7.22602 10.7212 6.96692V5.77884H12.5869L13.0919 14.7436C13.0984 14.854 13.0574 14.9634 12.9798 15.0437Z" fill="black"/>
          </svg>
        </span>
        {/* Search Icon */}
        <span className="inline-block w-6 h-6 align-middle">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4439 12.0126L15.8698 15.3658C16.0434 15.5357 16.0434 15.8111 15.8698 15.981C15.6963 16.1509 15.4149 16.1509 15.2413 15.981L11.8154 12.6278C10.5617 13.7111 8.91485 14.3684 7.11111 14.3684C3.18375 14.3684 0 11.2522 0 7.40822C0 3.56423 3.18375 0.448059 7.11111 0.448059C11.0385 0.448059 14.2222 3.56423 14.2222 7.40822C14.2222 9.17367 13.5507 10.7856 12.4439 12.0126ZM7.11111 13.4984C10.5475 13.4984 13.3333 10.7717 13.3333 7.40822C13.3333 4.04473 10.5475 1.31808 7.11111 1.31808C3.67467 1.31808 0.888889 4.04473 0.888889 7.40822C0.888889 10.7717 3.67467 13.4984 7.11111 13.4984Z" fill="black"/>
          </svg>
        </span>
      </div>
      {/* Hamburger Icon (Mobile only) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block w-7 h-0.5 bg-dark-text mb-1 rounded transition-all" />
        <span className="block w-7 h-0.5 bg-dark-text mb-1 rounded transition-all" />
        <span className="block w-7 h-0.5 bg-dark-text rounded transition-all" />
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-6 md:hidden animate-fade-in z-30">
          <a href="#" className="text-dark-text font-medium text-base hover:text-green transition-colors" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#" className="text-dark-text font-medium text-base hover:text-green transition-colors" onClick={() => setMenuOpen(false)}>ABOUT US</a>
          <a href="#" className="text-dark-text font-medium text-base hover:text-green transition-colors" onClick={() => setMenuOpen(false)}>SHOP</a>
          <a href="#" className="text-dark-text font-medium text-base hover:text-green transition-colors" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
} 