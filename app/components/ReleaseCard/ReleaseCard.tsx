// import Image from "next/image";
// import Link from "next/link";
// import type {Release} from "@/types/release";
//
// type Props = { release: Release };
//
// export default function ReleaseCard({release: r}: Props) {
// 	return (
// 		<li className="w-full">
// 			<Link
// 				href={`/releases/${r.slug}`}
// 				className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-60 transition min-h-[44px]"
// 			>
// 				{/* Квадрат 423x423 с центровкой картинки */}
// 				<div className="relative w-full aspect-[1/1] overflow-hidden rounded-lg">
// 					<Image
// 						src={r.cover}
// 						alt={`${r.artist} – ${r.title}`}
// 						fill
// 						sizes="(max-width: 768px) 100vw, 50vw"
// 						className="object-cover"
// 					/>
// 				</div>
// 				{/* Подписи */}
// 				<div className="mt-4 text-center leading-tight">
// 					<strong className="block text-lg">{r.artist}</strong>
// 					<span className="block opacity-90">
// 						{r.title} · {r.year}
// 					</span>
// 					<span className="block opacity-60 text-sm mt-1">{r.catalogNumber && (
// 						<div className="opacity-70">{r.catalogNumber}</div>
// 					)}</span>
// 				</div>
// 			</Link>
// 		</li>
//
// 	);
// }
import Image from "next/image";
import Link from "next/link";
import type {Release} from "@/types/release";

type Props = { release: Release };

export default function ReleaseCard({release: r}: Props) {
	return (
		<li className="w-full list-none">
			<Link
				href={`/releases/${r.slug}`}
				className="group block border border-white bg-black hover:bg-white transition-colors duration-200"
			>
				{/* Контейнер для изображения без скруглений */}
				<div className="relative w-full aspect-square overflow-hidden border-b border-white">
					<Image
						src={r.cover}
						alt={`${r.artist} – ${r.title}`}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
					/>

					{/* Каталожный номер как "бирка" поверх фото */}
					{r.catalogNumber && (
						<div className="absolute top-0 right-0 bg-transparent text-black px-2 py-1 text-[10px] font-hailBob font-bold uppercase">
							{r.catalogNumber}
						</div>
					)}
				</div>

				{/* Блок с текстом — используем наш шрифт */}
				<div className="p-4 text-left leading-none uppercase text-white group-hover:text-black">
					<strong className="block text-xl font-hailBob tracking-tighter truncate">
						{r.artist}
					</strong>
					<div className="mt-2 flex justify-between items-end gap-2">
                    <span className="text-sm opacity-90 truncate italic">
                        {r.title}
                    </span>
						<span className="text-[10px] opacity-60 tabular-nums">
                        {r.year}
                    </span>
					</div>
				</div>
			</Link>
		</li>
	);
}