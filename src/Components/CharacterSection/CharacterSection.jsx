import "./CharacterSection.css";
import character from "../../assets/character.webp";

export default function CharacterSection() {
  return (
    <section className="character">
      <div className="character-bg" />

      <div className="character-inner">
        <div className="characterl">
          <span className="character-powered">Powered by Ethereum</span>
          <h1 className="character-heading">
            A STRATEGIC <br /> CARD GAME
          </h1>
          <p className="character-desc">
            Proudly powered by Ethereum, enter the immersive world of Kamui; a
            multi-platform gaming experience. Marrying the best elements of Gods
            Unchained and Hearthstone in a fresh and vibrant package.
          </p>

          <div className="character-platforms">
            <span>macOS</span>
            <span>Windows</span>
            <span>Linux</span>
            <span>iPhone</span>
            <span>Android</span>
            <span>iPad Pro</span>
          </div>
        </div>
      </div>

      <div className="characterr">
        <img src={character} alt="" draggable={false} />
      </div>
    </section>
  );
}
