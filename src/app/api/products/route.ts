import { NextResponse } from 'next/server';

export async function GET() {
  // const res: Data = { message: 'Get All Products' };
  // return NextResponse.json(res);

  const res = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10'
  );
  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST() {
  return NextResponse.json({ message: 'Error!!!' }, { status: 404 });
}
