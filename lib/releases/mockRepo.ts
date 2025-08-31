import { ReleasesRepo} from "@/lib/releases/repository";
import {RELEASES} from "@/lib/releases/mockData";

export const releasesRepo: ReleasesRepo = {
	async list (){
		return RELEASES;
	},
	async getBySlug(slug: string) {
		return RELEASES.find(r=>r.slug === slug) ?? null;
	}
}