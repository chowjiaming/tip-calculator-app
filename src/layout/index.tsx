import type {JSX} from 'preact/jsx-runtime';

// Define the Props type for the Layout component.
type Props = {
  children: JSX.Element;
};

// The Layout component takes children as props and wraps them with the
// application's header, content, and footer.
export function Layout({children}: Props): JSX.Element {
  return (
    <div class="app">
      {/* Header section with the title */}
      <header class="title">
        <h1 class="title__text">spli</h1>
        <h1 class="title__text">tter</h1>
      </header>

      {/* The main content, passed as children */}
      {children}

      {/* Footer section with attribution */}
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
    </div>
  );
}
