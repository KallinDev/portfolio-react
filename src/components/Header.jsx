import React, { useState, useRef, useEffect } from "react";
import "../index.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();

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
          <a href="/" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="/about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="/projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="/skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="/contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
