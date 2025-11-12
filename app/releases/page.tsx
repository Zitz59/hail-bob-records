import ReleaseCard from "@/app/components/ReleaseCard/release-card";
import { releasesRepo } from "@/lib/releases/mockRepo";

export default async function ReleasesPage() {
	const releases = await releasesRepo.list();

	return (
		<main className="container mx-auto px-6">
			<h1 className="text-4xl font-bold mb-8 pt-8">Releases</h1>

			<ul
				className={[
					"grid gap-8 list-none p-0 m-0",
					"[grid-template-columns:repeat(auto-fill,minmax(423px,1fr))]",
				].join(" ")}
			>
				{releases.map((r) => (
					<ReleaseCard key={r.slug} release={r} />
				))}
			</ul>
		</main>

	);
}
