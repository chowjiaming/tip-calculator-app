import type {JSX} from 'preact/jsx-runtime';
import './Title.css';

export function Title(): JSX.Element {
  return (
    <header className="title">
      <h1 className="title__text">spli</h1>
      <h1 className="title__text">tter</h1>
    </header>
  );
}
