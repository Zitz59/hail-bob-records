// app/releases/[slug]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import {wpReleasesRepo} from "@/lib/releases/wpRepo";

export async function generateStaticParams() {
    try {
        const releases = await wpReleasesRepo.list();
        return releases.map((release) => ({
            slug: release.slug,
        }));
    } catch (error) {
        console.error("Static params error:", error);
        return [];
    }
}

export default async function ReleasePage({ params }: { params:Promise <{ slug: string }> }) {
    // Получаем данные из WP по слагу из URL
    const {slug} = await params;

    const release = await wpReleasesRepo.getBySlug(slug);

    // Если WP не нашел такой релиз — показываем 404
    if (!release) {
        notFound();
    }

    return (
        <main className=" bg-black text-white p-4 md:p-10 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Левая колонка: Большая обложка */}
                <div className="flex flex-col">
                    <div className="relative aspect-square w-full">
                        <Image
                            src={release.cover}
                            alt={release.title}
                            fill // Используем fill для заполнения контейнера
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </div>
                </div>

                {/* Правая колонка: Инфо */}
                <div className="flex flex-col gap-6">
                    <header className="border-b-2 border-white pb-4">
        <span className="font-hailBob text-sm text-zinc-500 uppercase tracking-widest">
            {release.catalogNumber || 'HB-XXX'}
        </span>
                        <h1 className="font-hailBob text-5xl md:text-7xl uppercase leading-none mt-2">
                            {release.artist}
                        </h1>
                        <h2 className="text-2xl italic opacity-80 mt-2">{release.title}</h2>
                    </header>

                    {/* Описание из WordPress (Content) */}
                    <div
                        className="prose prose-invert max-w-none text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: release.description || '' }}
                    />

                    {/* --- НОВОЕ: Треклист --- */}
                    {release.tracklist && (
                        <div className="mt-4">
                            <h3 className="font-hailBob text-xs uppercase text-zinc-500 mb-2 tracking-widest">Tracklist</h3>
                            <div className="font-mono text-sm leading-relaxed whitespace-pre-line border-l-2 border-zinc-800 pl-4">
                                {release.tracklist}
                            </div>
                        </div>
                    )}

                    {/* --- НОВОЕ: Плеер (Bandcamp Embed) --- */}
                    {release.embedCode && (
                        <div className="mt-6 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                            <div
                                className="w-full"
                                dangerouslySetInnerHTML={{ __html: release.embedCode }}
                            />
                        </div>
                    )}

                    {/* Блок метаданных */}
                    <div className="grid grid-cols-2 border-2 border-white p-4 font-hailBob text-xs uppercase mt-4">
                        <div className="border-r border-white pb-2">Released: {release.year}</div>
                        <div className="pl-4 pb-2 text-right">Label: Hail Bob Records</div>
                    </div>

                    {/* Ссылки */}
                    <div className="flex flex-wrap gap-4 mt-auto pt-6">
                        {release.links?.bandcamp && (
                            <a href={release.links.bandcamp} target="_blank" className="bg-white text-black px-6 py-2 uppercase font-bold hover:bg-zinc-300 transition-colors">
                                Bandcamp
                            </a>
                        )}
                        {/* Здесь можно добавить Credits, если они есть */}
                        {release.credits && (
                            <p className="w-full text-[10px] text-zinc-600 uppercase mt-2 font-mono">
                                {release.credits}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}