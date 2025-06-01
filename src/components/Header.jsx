import React, { useState, useRef, useEffect } from "react";
import "../index.css";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Reset animating flag on route change
  useEffect(() => {
    setIsAnimating(false);
  }, [location.pathname]);

  // Handles nav with animation and prevents double navigation
  const handleNav = (to) => {
    if (isAnimating || location.pathname === to) return; // Prevent double nav or nav to same page
    setIsAnimating(true);
    window.dispatchEvent(new Event("page-animate-out"));
    setTimeout(() => {
      setOpen(false);
      setIsAnimating(false);
      navigate(to);
    }, 500); // Match your CSS transition duration
  };

  return (
    <header className="site-header">
      <nav className="site-header-nav" ref={navRef}>
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          tabIndex={0}
        >
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
        </div>
        <div className={`nav-links${open ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.to}
              className="nav-link-btn"
              onClick={() => handleNav(link.to)}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                font: "inherit",
                cursor: "pointer",
                padding: 0,
                margin: 0,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
