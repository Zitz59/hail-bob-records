export type Release = {
	slug: string;			// используется в URL: /releases/<slug>
	artist: string;
	title: string;
	year: number;
	catalogNumber?:string;
	cover: string;			 // путь до обложки (из /public)
	description?: string;	 // HTML или markdown (пока просто строка)
	tracks?: {              // список треков (можно не заполнять)
		title: string;
		duration?: string;
	}[];
	links?: {				 // внешние ссылки (стриминги)
		spotify?: string;
		apple?: string;
		bandcamp?: string;
		youtube?: string;
	}
}