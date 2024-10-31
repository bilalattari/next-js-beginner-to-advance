import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

const verifyToken = async () => {};

const login = async () => {
  const login = await fetch("https://google.com");
  return { role: "admin" };
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    async signIn({ account, profile }) {
      return { ...profile, role: "user" }; // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token, user, profile }) {
      const loginToMyServer = await login(token.email);
      // User is available during sign-in
      token.role = loginToMyServer.role;
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
});
