'use client'
//TODO:
// 1)CSS прыгает при нажатии на кнопку - исправить!
// 2)Плеер перекрывает важные элементы интерфейса, исправить!

import {useEffect, useRef, useState} from 'react'

const STREAM_URL = 'https://your-icecast-host.com:8000/hailbob'

export default function RadioPlayer() {

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState<boolean>(false)


    const play = async () => {
        if (!audioRef.current) return
        try {
            setIsLoading(true)
            setHasError(false)

            audioRef.current.volume = 1
            await audioRef.current.play()
            setIsPlaying(true)
        } catch (error) {
            console.error('Radio play error', error)
            setHasError(true)
        } finally {
            setIsLoading(false)
        }

    }

    const pause = () => {
        audioRef.current?.pause()
        setIsPlaying(false)
    }



    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-40">
            {/* Audio element */}
            <audio
                ref={audioRef}
                src={STREAM_URL}
                preload="none"
            />

            <p className="text-sm opacity-70">Hail Bob Radio — Live</p>

            <button
                onClick={isPlaying ? pause : play}
                disabled={isLoading}
                className="
          mt-2 w-full py-3
          rounded-lg
          bg-white text-black
          transition
          disabled:opacity-50
        "
            >
                {isLoading
                    ? 'Connecting…'
                    : isPlaying
                        ? '❚❚ Stop'
                        : '▶ Listen Live'}
            </button>

            {hasError && (
                <p className="mt-2 text-xs text-red-400">
                    Stream unavailable
                </p>
            )}
        </div>
    )
}
