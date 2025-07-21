import React from "react";

const SunIcon = ({ active }) => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <defs>
      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff59d"/>
        <stop offset="100%" stopColor="#ff9800"/>
      </radialGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#sunGradient)" filter={active ? "url(#glow)" : undefined} />
  </svg>
);

const MoonIcon = ({ active }) => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <defs>
      <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e3f2fd"/>
        <stop offset="100%" stopColor="#1976d2"/>
      </radialGradient>
    </defs>
    <path d="M36 24c0 8-6.5 14-14 14 4-2 7-7 7-14s-3-12-7-14c7.5 0 14 6 14 14z" fill="url(#moonGradient)" filter={active ? "url(#glow)" : undefined} />
  </svg>
);

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className={`theme-toggle-pill${theme === "dark" ? " dark" : ""}`}
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
    >
      <span className={`theme-toggle-icon-wrap${theme === "light" ? " active" : ""}`}> <SunIcon active={theme === "light"} /> </span>
      <span className="theme-toggle-divider" />
      <span className={`theme-toggle-icon-wrap${theme === "dark" ? " active" : ""}`}> <MoonIcon active={theme === "dark"} /> </span>
    </button>
  );
} 