import Image from "next/image";
import Link from "next/link";
import type { Release } from "@/types/release";

type Props = { release: Release };

export default function ReleaseCard({ release: r }: Props) {
	return (
		<li className="rounded-lg border border-gray-200">
			<Link
				href={`/releases/${r.slug}`}
				className="flex flex-col items-center no-underline text-inherit p-4"
				// 👆 добавили одинаковые паддинги со всех сторон
			>
				{/* Квадрат 423x423 с центровкой картинки */}
				<div className="relative w-[423px] h-[423px] overflow-hidden rounded-lg">
					<Image
						src={r.cover}
						alt={`${r.artist} – ${r.title}`}
						fill
						sizes="423px"
						className="object-cover"
					/>
				</div>

				{/* Подписи */}
				<div className="mt-3 text-center">
					<strong>{r.artist}</strong>
					<div>
						{r.title} · {r.year}
					</div>
					{r.catalogNumber && (
						<div className="opacity-70">{r.catalogNumber}</div>
					)}
				</div>
			</Link>
		</li>

	);
}
