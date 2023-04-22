import type {JSX} from 'preact/jsx-runtime';

/**
 * Title component representing the app header.
 *
 * @returns {JSX.Element} The rendered Title component.
 */
export function Title(): JSX.Element {
  return (
    <header class="title">
      <h1 class="title__text">spli</h1>
      <h1 class="title__text">tter</h1>
    </header>
  );
}
