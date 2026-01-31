export type Release = {
	slug: string;
	artist: string;
	title: string;
	year: string;
	catalogNumber?: string;
	cover: string;
	description?: string;

	tracklist?: string;
	embedCode?: string;    // Приводим к camelCase
	credits?: string;      // Необязательно
	links?: {
		spotify?: string;
		apple?: string;
		bandcamp?: string;
		youtube?: string;
	}
}