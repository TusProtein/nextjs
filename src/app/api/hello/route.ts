import { NextResponse } from 'next/server';

type Data = {
  message: string;
};

export async function GET() {
  const res: Data = { message: 'Hello Tusprotein' };
  return NextResponse.json(res);
}

export async function POST() {
  const res: Data = { message: 'Hello Tusprotein POST' };
  return NextResponse.json(res);
}
