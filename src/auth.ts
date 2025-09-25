import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { jwtDecode } from "jwt-decode";
export const authOptions: NextAuthOptions = {

  pages: {
    signIn: `/signin`,
  },
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password, 
          }),
          headers: { "Content-Type": "application/json" },

      
        });

        const payload = await res.json();
        console.log(payload);

        if(payload.message==="success"){

          const {id}: {id:string} = jwtDecode(payload.token)
          return{
            id: id,
            user: payload.user,
            token: payload.token
          }
        }

        throw new Error(payload.message);
        



      
      },
    }),
  ],
callbacks:{   async session({ session, token }) {
      if(token){
        session.user =  token?.user
      }
      return session
    }, 


    async jwt({ token, user}) {

      if (user){
        token.user = user.user
        token.token = user.token
      }
      return token
    }}
  
};
