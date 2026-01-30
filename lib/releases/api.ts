export async function getReleases() {
    const res = await fetch("https://yourdomain.com/wp-json/wp/v2/releases?_embed",
        {
            next:{revalidate:60}, //обновлять раз в минуту
        }
        )
    if (!res.ok) {
        throw new Error("Failed to fetch releases from API");
    }
    return res.json();
}