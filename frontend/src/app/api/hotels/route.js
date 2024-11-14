// app/api/hotels/route.js
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const perPage = 100;
  const destination = searchParams.get('destination') || '';
  const occupancy = searchParams.get('occupancy') || '';

  const url = `https://api.elixirtrips.com/wp-json/wp/v2/hotels?per_page=${perPage}&page=${page}&destination=${destination}&occupancy=${occupancy}`;

  try {
    const response = await axios.get(url);
    return new Response(JSON.stringify(response.data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch hotels' }), {
      status: 500,
    });
  }
}

