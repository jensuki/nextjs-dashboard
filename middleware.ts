import NextAuth from "next-auth";
import { authConfig } from './auth.config';

// we initialize NextAuth.js with authConfig object and then exportng the 'auth' property
export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

    // then using the 'matcher' option from middleware to specify that it should run on specific paths
    // now protected routes wont start rendering until the middleware verifies the auth
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}