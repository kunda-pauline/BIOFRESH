import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Route protection middleware.
 * Any request to /dashboard/* that doesn't carry a valid session cookie
 * is redirected to /login.
 */
export function middleware(request: NextRequest) {
  const session = request.cookies.get('biofresh_session');
  const { pathname } = request.nextUrl;

  // Protect all dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!session || session.value !== 'authenticated') {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect old public routes to home or login
  if (
    pathname.startsWith('/formulator') ||
    pathname.startsWith('/science') ||
    pathname.startsWith('/history')
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/formulator/:path*',
    '/science/:path*',
    '/history/:path*',
  ],
};
