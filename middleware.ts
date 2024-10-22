import { clerkMiddleware } from "@clerk/nextjs/server";

// Define a custom middleware handler
export default clerkMiddleware();

// Configuring matcher to apply middleware to specific routes
export const config = {
  matcher: [
    '/',
    '/events/:id',
    '/api/webhooks/clerk',
    '/api/webhooks/test',
    '/(api|trpc)(.*)', // API routes
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', // Exclude static files
  ],
};
