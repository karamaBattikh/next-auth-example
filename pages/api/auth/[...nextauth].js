import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 15 * 24 * 60 * 60, // 15 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  pages: {
    signIn: "/auth/signin", // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      if (
        account.provider === "google" &&
        profile.verified_email === true &&
        profile.email.endsWith("@oyez.fr")
      ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
    // redirect: async (url, baseUrl) => {
    //   return url.startsWith(baseUrl)
    //     ? Promise.resolve(url)
    //     : Promise.resolve(baseUrl);
    // },
    // session: async (session, user, sessionToken) => {
    //   session.foo = user.name; // Add property to session
    //   return Promise.resolve(session);
    // },
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = user ? true : false;
      // Add auth_time to token on signin in
      if (isSignIn) {
        token.auth_time = Math.floor(Date.now() / 1000);
      }
      return Promise.resolve(token);
    },
  },
  // events: {},

  // Enable debug messages in the console if you are having problems
  // debug: false,
};

export default (req, res) => NextAuth(req, res, options);
