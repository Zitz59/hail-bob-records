// app/releases/[slug]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import {wpReleasesRepo} from "@/lib/releases/wpRepo";

export default async function ReleasePage({ params }: { params:Promise <{ slug: string }> }) {
    // Получаем данные из WP по слагу из URL
    const {slug} = await params;

    const release = await wpReleasesRepo.getBySlug(slug);

    // Если WP не нашел такой релиз — показываем 404
    if (!release) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-10 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Левая колонка: Большая обложка */}
                <div className="border-2 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)]">
                    <Image
                        src={release.cover}
                        alt={release.title}
                        width={600}
                        height={600}
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* Правая колонка: Инфо в стиле L.I.E.S. */}
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

                    {/* Блок метаданных */}
                    <div className="grid grid-cols-2 border-2 border-white p-4 font-hailBob text-xs uppercase">
                        <div className="border-r border-white pb-2">Released: {release.year}</div>
                        <div className="pl-4 pb-2 text-right">Label: Hail Bob</div>
                    </div>

                    {/* Ссылки (если они есть в ACF) */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                        {release.links?.bandcamp && (
                            <a href={release.links.bandcamp} target="_blank" className="bg-white text-black px-6 py-2 uppercase font-bold hover:bg-zinc-300">
                                Bandcamp
                            </a>
                        )}
                        {/* Добавь другие кнопки аналогично */}
                    </div>
                </div>
            </div>
        </main>
    );
}