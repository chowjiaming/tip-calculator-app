import "./Attributions.css";

const Attributions: React.FC = () => {
  return (
    <footer className="attribution">
      <div className="attribution__text">
        Design inspired by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="attribution__link"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/chowjiaming"
          className="attribution__link"
          target="_blank"
          rel="noreferrer"
        >
          Joseph Chow
        </a>
        .
      </div>
    </footer>
  );
};

export default Attributions;
