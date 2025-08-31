import {Release} from "@/types/release";

// 1) интерфейс — "контракт" для слоя данных
export interface ReleasesRepo {
	list(): Promise<Release[]>; 	// получить все релизы
	getBySlug(slug: string): Promise<Release | null>; // один релиз
}