import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  console.log("-----");
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link href="/" passHref>
          <a className={styles.headerLogo}>image du Logo</a>
        </Link>

        <nav>
          <ul className={styles.headerNav}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>Blog Post</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.headerRight}>
          <div className={styles.headerRightSearch}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="What do you want to learn?"
            />
            <button type="button" />
          </div>

          <div className={styles.headerRightProfil}>
            <img src="/images/avatar.jpg" alt="profil-photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
