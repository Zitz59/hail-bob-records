import ReleaseCard from "@/app/components/ReleaseCard/ReleaseCard";
import {wpReleasesRepo} from "@/lib/releases/wpRepo";

export default async function ReleasesPage() {
	const releases = await wpReleasesRepo.list();

	return (
		<>
			<h1 className="text-4xl font-bold mb-8 pt-8">Releases</h1>

			<ul
				className="
				grid gap-8 list-none p-0 m-0
				grid-cols-1
				md:grid-cols-2
				xl:grid-cols-3
				"
			>
				{releases.map((r) => (
					<ReleaseCard key={r.slug} release={r}/>
				))}
			</ul>
		</>


	);
}
