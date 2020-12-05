import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./home.module.css";

const Home = () => {
  const [session, loading] = useSession();
  return (
    <div className={styles.home}>
      {!session && (
        <div className={styles.homeConnection}>
          <h2 className={styles.homeConnectionTitle}>Connexion</h2>
          <a
            href="/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            <button className={styles.homeConnectionButton}>
              Connectez-vous via Google
            </button>
          </a>
        </div>
      )}

      {loading && <div>loading</div>}

      {session && (
        <>
          Signed in as <img src={session?.user?.image} alt="" />
          {session?.user?.email} <br />
          <div>You can now access to secret pages</div>
          <button onClick={signOut}>sign out</button>
        </>
      )}
    </div>
  );
};

export default Home;
