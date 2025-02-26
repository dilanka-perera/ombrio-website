'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, Home, FileText, Briefcase, Mail, Info } from 'lucide-react';

const DraggableNavButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Set initial position once on the client side
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 100,
      y: window.innerHeight - 100,
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
      setPosition({
        x: window.innerWidth - 100,
        y: window.innerHeight - 100,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <FileText size={20} />, label: 'Blog' },
    { icon: <Briefcase size={20} />, label: 'Careers' },
    { icon: <Mail size={20} />, label: 'Contact' },
    { icon: <Info size={20} />, label: 'About' },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onClick={toggleMenu}
        className="fixed z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <Menu size={24} />
      </button>

      {/* Radial Menu */}
      {isMenuOpen && (
        <div className="fixed z-40">
          {menuItems.map((item, index) => {
            const angle = (index / menuItems.length) * (2 * Math.PI);
            const offset = 80;
            const x =
              position.x +
              offset * Math.cos(angle) +
              (buttonRef.current?.offsetWidth ?? 0) / 2;
            const y =
              position.y +
              offset * Math.sin(angle) +
              (buttonRef.current?.offsetHeight ?? 0) / 2;

            return (
              <button
                key={index}
                className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 60,
                }}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DraggableNavButton;
