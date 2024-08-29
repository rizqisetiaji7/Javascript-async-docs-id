export const SIDEBAR_LINKS = {
	'/docs/': [
		{
			text: 'Intro',
			items: [
				{ text: 'Agenda Belajar', link: '/docs/' },
				{ text: 'Pengenalan Async', link: '/docs/intro/async-introduction' },
				{ text: 'Async method setTimeout()', link: '/docs/intro/settimeout' },
				{ text: 'Async method setInterval()', link: '/docs/intro/setinterval' },
			]
		},
		{
			text: 'AJAX',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/ajax/definisi-ajax' },
				{ text: 'Response Status', link: '/docs/ajax/response-status' },
				{ text: 'AJAX State', link: '/docs/ajax/state' },
				{ text: 'Mengirim Data', link: '/docs/ajax/send-data' },
				{ text: 'URL Search Params', link: '/docs/ajax/url-search-params' },
				{ text: 'Form Data', link: '/docs/ajax/form-data' },
				{ text: 'Upload File', link: '/docs/ajax/upload-file' },
			]
		},
		{
			text: 'Promise',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/promise/definisi-promise' },
				{ text: 'Promise Method', link: '/docs/promise/promise-method' },
				{ text: 'Promise Static Method', link: '/docs/promise/static-method' },
			]
		},
		{
			text: 'Fetch API',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/fetch-api/definisi-fetch-api' },
				{ text: 'Request Object', link: '/docs/fetch-api/request' },
				{ text: 'Response Object', link: '/docs/fetch-api/response' },
			]
		},
		{
			text: 'Async Await',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/async-await/definisi-async-await' },
				{ text: 'Async', link: '/docs/async-await/async' },
				{ text: 'Await', link: '/docs/async-await/await' },
				{ text: 'Error Handling', link: '/docs/async-await/error-handling' },
			]
		},
		{
			text: 'Web Worker',
			collapsed: false,
			items: [
				{ text: 'Javascript Thread', link: '/docs/web-worker/thread' },
				{ text: 'Definisi', link: '/docs/web-worker/definisi-web-worker' },
				{ text: 'Worker Object', link: '/docs/web-worker/worker-object' },
			]
		},
	],
	'/references/': [
		{
			text: 'Referensi',
			link: '/references/'
		}
	]
}


export const NAV_LINKS = [
	{ text: 'Web API', link: 'https://developer.mozilla.org/en-US/docs/Web/API' },
	{ text: 'Dokumentasi', link: '/docs/' },
	{ text: 'Referensi', link: '/references/' }
]

export const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Javascript-async-docs-id' }
]