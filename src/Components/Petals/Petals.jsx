import "./Petals.css";

export default function Petals({ count }) {
    return (
        <div className="petals-container">
            {Array.from({ length: count }).map((_, i) => {
                const size = 8 + Math.random() * 12;
                return (
                    <span
                        key={i}
                        className="petal"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            "--x-start": `${-40 - Math.random() * 40}vw`,
                            "--x-end": `${100 + Math.random() * 30}vw`,
                            "--y-start": `${-45 + Math.random() * 60}vh`,
                            "--y-end": `${120 + Math.random() * 30}vh`,
                            "--wobble": `${20 + Math.random() * 40}px`,
                            "--spin": `${Math.random() > 0.5 ? 360 : -360}deg`,

                            animationDuration: `${30 + Math.random() * 10}s`,
                            animationDelay: `-${Math.random() * 20}s`,
                            opacity: 0.6 + Math.random() * 0.4,
                        }}
                    />
                );
            })}
        </div>
    );
}
