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

          <button
            type="button"
            className={styles.homeConnectionButton}
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            Connectez-vous via Google
          </button>
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
