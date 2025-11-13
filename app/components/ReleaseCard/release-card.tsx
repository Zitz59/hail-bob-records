import Image from "next/image";
import Link from "next/link";
import type {Release} from "@/types/release";

type Props = { release: Release };

export default function ReleaseCard({release: r}: Props) {
	return (
		<li className="w-full">
			<Link
				href={`/releases/${r.slug}`}
				className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-60 transition min-h-[44px]"
			>
				{/* Квадрат 423x423 с центровкой картинки */}
				<div className="relative w-full aspect-[1/1] overflow-hidden rounded-lg">
					<Image
						src={r.cover}
						alt={`${r.artist} – ${r.title}`}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
					/>
				</div>
				{/* Подписи */}
				<div className="mt-4 text-center leading-tight">
					<strong className="block text-lg">{r.artist}</strong>
					<span className="block opacity-90">
						{r.title} · {r.year}
					</span>
					<span className="block opacity-60 text-sm mt-1">{r.catalogNumber && (
						<div className="opacity-70">{r.catalogNumber}</div>
					)}</span>
				</div>
			</Link>
		</li>

	);
}
