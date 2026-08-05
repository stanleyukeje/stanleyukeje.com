import { NextRequest, NextResponse } from 'next/server';

export function updateSupabaseSession(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  return response;
}
