import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'StanleyUkeje-Platform',
      environment: process.env.NODE_ENV || 'development',
    },
    { status: 200 }
  );
}
