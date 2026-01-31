export type WPPost = {
    id: number
    slug: string
    date: string
    title: { rendered: string }
    excerpt: { rendered: string }
    content: { rendered: string }
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            media_details?: {
                sizes: {
                    full: { source_url: string };
                    large?: { source_url: string };
                }
            }
        }>;
    };
    acf?: {

        artist?: string;
        year?: string;
        catalog_number?: string;
        tracklist: string;
        embed_code: string;
        credits: string;
        apple_link: string;
        spotify_link: string;
        bandcamp_link: string;
    };
}