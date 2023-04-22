import type {JSX} from 'preact/jsx-runtime';
import '@/layout/Attributions/Attributions.css';

/**
 * Renders the attributions footer.
 *
 * @returns {JSX.Element} The JSX code for the Attributions component.
 */
export function Attributions(): JSX.Element {
  return (
    <footer class="attribution">
      <div class="attribution__text">
        Design inspired by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Made with ❤️ by{' '}
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
