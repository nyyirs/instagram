import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIEN_SECRET,
    }),
    // ...add more providers here
  ],

  // Default login screen
  /*   theme: {
    logo: "https://links.papareact.com/sq0",
    brandColor: "#F13287",
    colorScheme: "auto",
  }, */

  //Custom Login Page
  pages: {
    signIn: "/auth/signin",
  },
});
