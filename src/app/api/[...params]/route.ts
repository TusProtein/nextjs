// app/api/[...proxy]/route.ts

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req: Request) {
  return proxy(req);
}
export async function POST(req: Request) {
  return proxy(req);
}
export async function PUT(req: Request) {
  return proxy(req);
}
export async function PATCH(req: Request) {
  return proxy(req);
}
export async function DELETE(req: Request) {
  return proxy(req);
}

async function proxy(req: Request) {
  const backendBase = process.env.API_URL;

  if (!backendBase) {
    throw new Error('Missing API_URL env variable');
  }

  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/api/, '');
  const query = url.search || '';
  const finalUrl = `${backendBase}/api${path}${query}`;

  const method = req.method;
  const headers = new Headers(req.headers);
  headers.set('host', new URL(backendBase).host);

  let body: BodyInit | undefined = undefined;

  if (!['GET', 'HEAD'].includes(method)) {
    const contentType = headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const json = await req.json();
      body = JSON.stringify(json);
      headers.set('content-type', 'application/json');
      headers.set('content-length', Buffer.byteLength(body).toString());
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await req.text();
      body = text;
      headers.set('content-length', Buffer.byteLength(body).toString());
    } else {
      // Cẩn thận nếu là multipart/form-data – phức tạp hơn
      body = await req.arrayBuffer();
    }
  }

  const res = await fetch(finalUrl, {
    method,
    headers,
    body,
  });

  const contentType = res.headers.get('content-type') || 'text/plain';
  const responseBody = await res.text();

  return new Response(responseBody, {
    status: res.status,
    headers: { 'Content-Type': contentType },
  });
}
