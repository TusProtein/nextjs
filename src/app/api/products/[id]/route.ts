import { NextResponse } from 'next/server';

type Data = {
  message: string;
};

export async function GET() {
  const res: Data = { message: 'Get Products Detail' };
  return NextResponse.json(res);
}

export async function POST() {
  const res: Data = { message: 'Get Products Detail POST' };
  return NextResponse.json(res);
}
