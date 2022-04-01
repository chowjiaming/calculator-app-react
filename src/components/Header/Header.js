import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="app-name">calc</h1>
      <div className="theme-toggle-container">
        <h2 className="theme-title">THEME</h2>
        <div className="switch">
          <h2 className="theme-number">1</h2>
          <h2 className="theme-number">2</h2>
          <h2 className="theme-number">3</h2>
          <div className="knob" />
        </div>
      </div>
    </header>
  );
}
