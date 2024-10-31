import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "./lib/dbConnect";
import { UserModel } from "@/app/lib/modals/UserModel";

const getUser = async (email) => {
  await connectDB();
  const user = await UserModel.findOne({ email });
  return user;
};

const updateUser = async (email, obj) => {
  await connectDB();
  const user = await UserModel.findOneAndUpdate({ email }, { ...obj });
  return user;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      async profile(profile) {
        console.log("profile==>", profile);
        let user = await getUser(profile.email);
        if (!user) {
          console.log("profile.email=>", profile.email);
          const newUser = await UserModel({
            email: profile.email,
            title: profile.name,
            image: profile.picture,
            provider: "google",
          });
          await newUser.save();
          console.log("newUser=>", newUser);
          return { ...profile, role: newUser.role };
        } else {
          await updateUser(profile.email, {
            title: profile.name,
            image: profile.picture,
          });
          user = await getUser(profile.email);
          return { ...profile, role: user.role };
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      console.log("user=>", user, token);
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token = { ...user };
      }
      return token;
    },
    session({ session, token }) {
      console.log("token==>", token);
      session.user.id = token.id;
      session.user = token;
      return session;
    },
  },
});
