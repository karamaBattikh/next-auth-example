import { providers, signIn } from "next-auth/client";

export default function SignIn({ providers }) {
  console.log("🚀 ~ file: signin.js ~ line 4 ~ SignIn ~ providers", providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
