'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link'; // Use this if you're using Next.js router
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import {
  LayoutDashboard,
  House,
  BookOpen,
  Briefcase,
  PhoneCall,
  User,
} from 'lucide-react';

const DraggableNavButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get the current route

  // Set initial position once on the client side
  useEffect(() => {
    const isSmallScreen = window.innerWidth < 640;
    setPosition({
      x: isSmallScreen ? window.innerWidth - 60 : window.innerWidth - 100,
      y: isSmallScreen ? window.innerHeight - 60 : window.innerHeight - 100,
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - (buttonRef.current?.offsetWidth ?? 0) / 2,
          y: e.clientY - (buttonRef.current?.offsetHeight ?? 0) / 2,
        });
      }
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 640;
      setPosition({
        x: isSmallScreen ? window.innerWidth - 60 : window.innerWidth - 100,
        y: isSmallScreen ? window.innerHeight - 60 : window.innerHeight - 100,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent closing the menu if the button is clicked
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { icon: <House size={20} />, label: 'Home', link: '/' },
    { icon: <BookOpen size={20} />, label: 'Blog', link: '/blog' },
    { icon: <Briefcase size={20} />, label: 'Careers', link: '/careers' },
    { icon: <PhoneCall size={20} />, label: 'Contact', link: '/contact' },
    { icon: <User size={20} />, label: 'About', link: '/about' },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onClick={toggleMenu}
        className="fixed z-[55] p-3 rounded-full bg-blue-950 text-white shadow-lg hover:bg-blue-900 transition-colors group"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <LayoutDashboard size={24} />
        {/* Tooltip for draggable button */}
        <span className="absolute bottom-full left-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-1/2">
          Ombrio Assistant
        </span>
      </button>

      {/* Radial Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {menuItems.map((item, index) => {
            const angle = (index / menuItems.length) * (2 * Math.PI);
            const offset = 80;
            const x =
              offset * Math.cos(angle) +
              (buttonRef.current?.offsetWidth ?? 0) / 2;
            const y =
              offset * Math.sin(angle) +
              (buttonRef.current?.offsetHeight ?? 0) / 2;

            // Check if the item is active (current route)
            const isActive = pathname === item.link;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Link href={item.link}>
                  <button
                    className={`relative z-50 flex items-center justify-center w-12 h-12 rounded-full text-gray-700 shadow-md group ${
                      isActive ? 'bg-blue-400' : 'bg-white hover:bg-blue-100'
                    }`}
                  >
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                    {/* Tooltip for radial menu items */}
                    <span className="absolute bottom-full left-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-1/2">
                      {item.label}
                    </span>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DraggableNavButton;
