'use client'
//TODO:
// 1)CSS прыгает при нажатии на кнопку - исправить!
// 2)Плеер перекрывает важные элементы интерфейса, исправить!

import YouTube from 'react-youtube'
import { useRef, useState } from 'react'

export default function RadioPlayer() {
    const playerRef = useRef<any>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const onReady = (event: any) => {
        playerRef.current = event.target
    }

    const play = () => {
        playerRef.current?.playVideo()
        setIsPlaying(true)
    }

    const pause = () => {
        playerRef.current?.pauseVideo()
        setIsPlaying(false)
    }

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-black text-white p-4 rounded-xl z-50">
            {/* Hidden YouTube Player */}
            <YouTube
                videoId="ABC123XYZ"
                onReady={onReady}
                opts={{
                    height: '0',
                    width: '0',
                    playerVars: {
                        autoplay: 0,
                        controls: 0,
                        modestbranding: 1,
                    },
                }}
            />

            {/* UI */}
            <p className="text-sm opacity-70">Hail Bob Radio — Live</p>

            {!isPlaying ? (
                <button
                    onClick={play}
                    className="mt-2 w-full py-3 bg-white text-black rounded-lg"
                >
                    ▶ Listen Live
                </button>
            ) : (
                <button
                    onClick={pause}
                    className="mt-2 w-full py-3 border border-white rounded-lg"
                >
                    ❚❚ Pause
                </button>
            )}
        </div>
    )
}
