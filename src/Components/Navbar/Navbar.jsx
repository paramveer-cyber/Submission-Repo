import twitchW from "../../assets/twitchw.webp";
import twitchB from "../../assets/twitchb.webp";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="nav-container">
            <nav className="navbar">
                <div className="navbar-logo">KAMUI</div>
                <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                    <span />
                    <span />
                    <span />
                </div>

                <ul className={`navbar-links ${open ? "active" : ""}`}>
                    <li>Game</li>
                    <li>Cards</li>
                    <li>Community</li>
                    <li>Esports</li>

                    <li>
                        <button className="btn">
                            Twitch
                            <span className="twitch-icon">
                                <img src={twitchW} alt="Twitch white" className="icon white" />
                                <img src={twitchB} alt="Twitch black" className="icon black" />
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
