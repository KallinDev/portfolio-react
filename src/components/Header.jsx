// src/components/Header.jsx
import '../index.css';
export default function Header() {
  return (
    <>
      <header className="site-header">
        <nav className="site-header-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  );
}
