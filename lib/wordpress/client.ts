const WP_BASE = process.env.WORDPRESS_API_URL ?? 'https://example.com/wp-json/wp/v2';

export async function wpFetch<T>(path:string,init?:RequestInit): Promise<T> {
	const res = await fetch(`${WP_BASE}${path}`, {
		// cache: 'force-cache', next: { revalidate: 60 },
		...init,
		headers: {Accept: 'application/json', ...(init?.headers || {})},

	});
	if (!res.ok) throw new Error(`WP error: ${res.status}`);
	return res.json() as Promise<T>;
}