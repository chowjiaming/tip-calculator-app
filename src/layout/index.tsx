import type {JSX} from 'preact/jsx-runtime';

type Props = {
  children: JSX.Element;
};

export function Layout({children}: Props): JSX.Element {
  return (
    <div class="app">
      <header class="title">
        <h1 class="title__text">spli</h1>
        <h1 class="title__text">tter</h1>
      </header>
      {children}
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
