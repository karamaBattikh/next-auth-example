import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";
import styles from "./header.module.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [session, loading] = useSession();

  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link href="/" passHref>
          <a className={styles.headerLogo}>image du Logo</a>
        </Link>
        <nav>
          <ul className={styles.headerNav}>
            <li>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs" passHref>
                <a>Blog Post</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.headerProfile}>
          {session && (
            <>
              <p> {session?.user?.name}</p>
              <button type="button" onClick={() => setToggle(!toggle)}>
                <img src={session?.user?.image} alt="profile-photo" />
              </button>
            </>
          )}

          {!session && (
            <Link href="/" passHref>
              <a>Sign Int</a>
            </Link>
          )}

          {toggle && (
            <div className={styles.headerProfileMenu}>
              <Link href="/profile" passHref>
                <a onClick={() => setToggle(false)}>Profil</a>
              </Link>
              <button type="button" onClick={signOut}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
