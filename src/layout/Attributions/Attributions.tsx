import type {JSX} from 'preact/jsx-runtime';
import './Attributions.css';

export function Attributions(): JSX.Element {
  return (
    <footer className="attribution">
      <div className="attribution__text">
        Design inspired by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/chowjiaming"
          target="_blank"
          rel="noreferrer"
        >
          Joseph Chow
        </a>
        .
      </div>
    </footer>
  );
}
