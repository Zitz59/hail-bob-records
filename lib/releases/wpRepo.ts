import {ReleasesRepo} from './repository'
import type {Release} from '@/types/release'
import {WPPost} from "@/types/wordpress";

const WP_BASE = process.env.WORDPRESS_API_URL

if (!WP_BASE) {
    console.warn("WARNING: WORDPRESS_API_URL is not defined in environment variables!")
}

export const wpReleasesRepo: ReleasesRepo = {
    async list(): Promise<Release[]> {
        // Увеличим лимит, WP по умолчанию отдает только 10 записей
        const res = await fetch(`${WP_BASE}/releases?_embed&per_page=100`, {
            next: {revalidate: 60},
        })

        if (!res.ok) {
            console.error('WP list error:', res.statusText)
            throw new Error('Failed to fetch releases')
        }

        const data: WPPost[] = await res.json()
        return data.map(mapWpToRelease)
    },

    async getBySlug(slug: string): Promise<Release | null> {
        // Безопасное кодирование параметров
        const params = new URLSearchParams({
            slug: slug,
            _embed: '1'
        })

        const res = await fetch(`${WP_BASE}/releases?${params.toString()}`, {
            next: {revalidate: 60}
        })

        if (!res.ok) throw new Error('Failed to fetch release')

        const data: WPPost[] = await res.json()
        if (!data.length) return null

        return mapWpToRelease(data[0])
    },
}

function mapWpToRelease(post: WPPost): Release {
    console.log(post)
    //достаём URL обложки
    const coverUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg';

    return {
        slug: post.slug,
        title: post.title.rendered,
        artist: post.acf?.artist || 'Unknown Artist',
        year: post.acf?.year || 'N/A',
        catalogNumber: post.acf?.catalog_number || 'HB-???',
        cover: coverUrl,
        description: post.content?.rendered,
        tracklist: post.acf?.tracklist || '',
        embedCode: post.acf?.embed_code || '',
        credits: post.acf?.credits || '',
        links: {
            bandcamp: post.acf?.bandcamp_link || '', // проверь имя поля в ACF!
            spotify: post.acf?.spotify_link || '',
            apple: post.acf?.apple_link || '',
        }
    }
}