'use client';
import { useState } from 'react';
import Menu from './menu/menu';
import styles from './navbar.module.scss';
export default function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  function handleMenuVisibility() {
    setMenuVisibility(prev => !prev);
  }
  return <nav className={styles.navbar}>
    <a href="/" className={styles.navbar__title}>La Biblioteca Mágica</a>
    <div role="menu">
      <img src="/icons/menu.svg" alt="Icono del menu de la pagina" onClick={handleMenuVisibility} />
    </div>
    <Menu visible={menuVisibility} handleVisibility={setMenuVisibility} />
  </nav>
}