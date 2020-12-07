import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./home.module.css";

const Home = () => {
  const [session, loading] = useSession();
  return (
    <div className={styles.home}>
      {!session && (
        <div className={styles.homeConnection}>
          <h2 className={styles.homeConnectionTitle}>Connexion</h2>
          <Link href="/api/auth/signin" passHref>
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              <button type="button" className={styles.homeConnectionButton}>
                Connectez-vous via Google
              </button>
            </a>
          </Link>
        </div>
      )}

      {loading && <div>loading</div>}

      {session && (
        <>
          Signed in as <p> {session?.user?.email} </p>
          <br />
          <img src={session?.user?.image} alt="" />
          <br />
          <button type="button" onClick={signOut}>
            sign out
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
