import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  let ip = '127.0.0.1';

  if (forwarded) {
    ip = forwarded.split(',')[0].trim();
  } else if (realIp) {
    ip = realIp.trim();
  }

  return NextResponse.json({ ip });
}
