import kanji from "../../assets/kanji.webp";
import "./HeroText.css";

export default function HeroText() {
  return (
    <div className="hero-text">
      <img src={kanji} alt="" className="hero-kanji" draggable="false" />
      <h1 className="hero-title">KAMUI</h1>
      <p className="hero-subtitle">A BLOCKCHAIN CARD GAME</p>
      <button className="hero-btn">JOIN THE WAITLIST</button>
    </div>
  );
}
