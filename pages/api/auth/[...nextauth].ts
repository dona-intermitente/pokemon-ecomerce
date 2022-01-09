import NextAuth, { NextAuthOptions } from 'next-auth'
/*import { login } from '../../../query/user';*/
import { NextApiRequest, NextApiResponse } from 'next';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';

const options:NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "[email protected]" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        try {
          console.log(credentials);
          
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_USER_API}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password
          });

          //TODO: cuando logre hacer la mutacion descomento esto
          /*const { data } = await login(
            credentials.email,
            credentials.password
          );*/

          console.log(data);
          
          if (data) {
            const user = { id: data.user.id, name: data.user.username, email: data.user.email, jwt: data.jwt }
            return user;
          }
          else {
            return null;
          }
        } catch (e:any) {
          //console.log('caught error');
          //const errorMessage = e.response.data.message
          // Redirecting to the login page with error message          in the URL
          //throw new Error(errorMessage + '&email=' + credentials.email)
          return null;
        }
      }
    })
  ],

  session: {
    strategy: 'jwt'
  },

  callbacks: {
    // Getting the JWT token from API response
    jwt: async ({token,user}) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user?.jwt;
        token.id = user?.id;
        token.name = user?.name;
        token.email = user?.email;
      }
      return Promise.resolve(token);

    },

    session: async ({session,token}) => {
      if (token) {
        session.jwt = token.jwt
        session.id = token.id
      }
      return Promise.resolve(session);
    },
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);

export default Auth;