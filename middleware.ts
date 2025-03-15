import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/events/:id',
  '/api/webhooks/clerk',
  '/api/webhooks/test',
  '/api/webhooks/stripe',
  '/api/uploadthing',
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    // Allow access to public routes without protection
    return;
  }

  // Enforce authentication for non-public routes
  if (!auth) {
    throw new Error('Unauthorized: User is not authenticated');
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
