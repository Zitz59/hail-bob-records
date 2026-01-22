'use client'

import {useRef, useState, useEffect} from "react";
import Visualizer from "@/app/components/Visualizer/Visualizer";

export default function RadioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Состояния управления
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasVideo, setHasVideo] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Состояние для метаданных
    const [trackInfo, setTrackInfo] = useState("STATION ID: HAIL BOB RECORDS — TRANSMISSION START");

    const STREAM_URL = 'https://your-icecast-host.com:8000/hailbob';

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.src = ""; // Сбрасываем буфер для Live-потока
            setIsPlaying(false);
        } else {
            try {
                setIsLoading(true);
                setHasError(false);
                audioRef.current.src = STREAM_URL;
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.error("Playback error:", err);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div
            className="w-full max-w-2xl border-2 border-white bg-black p-4 font-hailBob shadow-[8px_8px_0px_0px_white]">
            <audio ref={audioRef} crossOrigin="anonymous"/>

            {/* Экран: Видео или Осциллограф */}
            <div
                className="aspect-video border border-zinc-800 mb-0 flex items-center justify-center overflow-hidden bg-black">
                {hasVideo ? (
                    <div className="text-white uppercase animate-pulse">Live Video Stream Incoming...</div>
                ) : (
                    <Visualizer audioRef={audioRef} isPlaying={isPlaying}/>
                )}
            </div>

            {/* Бегущая строка (Marquee) */}
            <div className="border-x-2 border-white bg-white text-black overflow-hidden whitespace-nowrap py-1">
                <div className="inline-block animate-marquee uppercase text-sm font-bold">
                    {trackInfo} &nbsp;&nbsp; {trackInfo} &nbsp;&nbsp; {trackInfo}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-0 border-2 border-white">
                <button
                    onClick={togglePlay}
                    disabled={isLoading}
                    className={`
                        col-span-3 py-6 px-4 text-2xl font-bold uppercase transition-all
                        ${isPlaying
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                    }
                        border-r-2 border-white disabled:opacity-30
                    `}
                >
                    {isLoading ? 'Connecting...' : isPlaying ? '■ Stop' : '▶ Listen Live'}
                </button>

                <button
                    onClick={() => setHasVideo(!hasVideo)}
                    className={`
                        col-span-1 flex flex-col items-center justify-center text-[10px] uppercase font-bold
                        ${hasVideo ? 'bg-zinc-800 text-white' : 'bg-black text-zinc-400'}
                        hover:text-white transition-colors
                    `}
                >
                    <span>Mode:</span>
                    <span className="text-xs">{hasVideo ? 'Video' : 'Osc'}</span>
                </button>

                <div className="col-span-2 border-t-2 border-r-2 border-white p-2 text-[10px] uppercase">
                    Status: <span className={isPlaying ? "text-green-500" : "text-red-500"}>
                        {hasError ? "Error" : isPlaying ? "Online" : "Ready"}
                    </span>
                </div>

                <div className="col-span-2 border-t-2 border-white p-2 text-[10px] uppercase text-right">
                    Bpm: <span className="tabular-nums">128.00</span>
                </div>
            </div>
        </div>
    );
}