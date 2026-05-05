const ENDPOINT =
  'https://api.hsforms.com/submissions/v3/integration/submit/21193017/fd66f4fc-bc17-4431-839f-aeb39c7c7e52';

export async function POST(request) {
  try {
    const body = await request.json();

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.text();

    return new Response(data, {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[HubSpot API] Error:', err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
