import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

export default function NavigationBar() {
  return (
    <header className={styles.Header}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}