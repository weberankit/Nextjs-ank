export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse incoming JSON data
    const { title } = body;

    // Send title to external API
    const res = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, userId: 9 }), // Sending only title + userId
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`External API Error: ${res.status}`);
    }

    const text = await res.text(); // Read response as text
    let data;

    try {
      data = JSON.parse(text); // Try parsing JSON
    } catch (error) {
      throw new Error(`Invalid JSON response: ${text}`);
    }

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to submit data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
