import { useState } from 'react'
import styles from './searchBar.module.scss';

export default function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleChangeName = event => {
    setMovieName(event.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(movieName);
    setMovieName('');
  };
  return (
    <div>
      <header>
        <form className={styles.Searchbar} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={movieName}
            onChange={handleChangeName}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    </div>
  );
}