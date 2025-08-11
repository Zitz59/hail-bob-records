export type WPPost = {
	id: number
	slug: string
	date: string
	title: { rendered: string }
	excerpt: { rendered: string }
	content: { rendered: string }
	_embedded: any
}