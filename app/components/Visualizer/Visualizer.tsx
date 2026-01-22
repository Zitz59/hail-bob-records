// app/components/RadioPlayer/Visualizer.tsx
'use client'
import React, {useEffect, useRef} from 'react'

interface VisualizerProps {
    audioRef: React.RefObject<HTMLAudioElement | null>;
    isPlaying: boolean;
}

export default function Visualizer({audioRef, isPlaying}: VisualizerProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!isPlaying || !audioRef.current || !canvasRef.current) return;

        // Инициализация Web Audio API
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audioRef.current);

        source.connect(analyser);
        analyser.connect(audioContext.destination);

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationId: number;

        const draw = () => {
            animationId = requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray);

            if (ctx) {
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'white';
                ctx.beginPath();

                const sliceWidth = canvas.width / bufferLength;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    const v = dataArray[i] / 128.0;
                    const y = (v * canvas.height) / 2;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                    x += sliceWidth;
                }

                ctx.lineTo(canvas.width, canvas.height / 2);
                ctx.stroke();
            }
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            // Важно: отключаем узлы при размонтировании,
            // но будь осторожен: повторное создание MediaElementSource на одном элементе
            // может вызвать ошибку в некоторых браузерах.
            source.disconnect();
            analyser.disconnect();
        };
    }, [isPlaying, audioRef]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full bg-black block"
            width={600} // Фиксированное разрешение для четкости линии
            height={150}
        />
    );
}