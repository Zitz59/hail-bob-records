'use client'

import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	// При загрузке — читаем тему из localStorage
	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
		if (storedTheme) {
			setTheme(storedTheme)
			document.documentElement.classList.toggle('dark', storedTheme === 'dark')
		}
	}, [])

	// Переключение темы
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	return (
		<div className="flex items-center gap-3 px-4 py-2">
			<span className="text-yellow-400 text-xl">☀️</span>

			<label className="relative inline-block w-14 h-8 cursor-pointer">
				<input
					type="checkbox"
					checked={theme === 'dark'}
					onChange={toggleTheme}
					className="sr-only peer"
				/>
				<div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-gray-700 transition-colors duration-300" />
				<div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 peer-checked:translate-x-6" />
			</label>

			<span className="text-yellow-300 text-xl">🌙</span>
		</div>
	)
}