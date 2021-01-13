import { useState, useRef } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";
import useClickOutside from "hooks/useOnclickOutside";
import styles from "./header.module.scss";

const Header = () => {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);
  const [session, loading] = useSession();
  useClickOutside(ref, () => setToggle(false));
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Link href="/" passHref>
          <a className={styles.headerLogo}> Logo</a>
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
        <div className={styles.headerProfile} ref={ref}>
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
