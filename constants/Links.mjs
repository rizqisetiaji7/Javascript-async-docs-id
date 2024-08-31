export const SIDEBAR_LINKS = {
	'/docs/async/': [
		{
			text: 'Intro',
			items: [
				{ text: 'Agenda Belajar', link: '/docs/async/' },
				{ text: 'Pengenalan Async', link: '/docs/async/intro/async-introduction' },
				{ text: 'Async method setTimeout()', link: '/docs/async/intro/settimeout' },
				{ text: 'Async method setInterval()', link: '/docs/async/intro/setinterval' },
			]
		},
		{
			text: 'AJAX',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/async/ajax/definisi-ajax' },
				{ text: 'Response Status', link: '/docs/async/ajax/response-status' },
				{ text: 'AJAX State', link: '/docs/async/ajax/state' },
				{ text: 'Mengirim Data', link: '/docs/async/ajax/send-data' },
				{ text: 'URL Search Params', link: '/docs/async/ajax/url-search-params' },
				{ text: 'Form Data', link: '/docs/async/ajax/form-data' },
				{ text: 'Upload File', link: '/docs/async/ajax/upload-file' },
			]
		},
		{
			text: 'Promise',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/async/promise/definisi-promise' },
				{ text: 'Promise Method', link: '/docs/async/promise/promise-method' },
				{ text: 'Promise Static Method', link: '/docs/async/promise/static-method' },
			]
		},
		{
			text: 'Fetch API',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/async/fetch-api/definisi-fetch-api' },
				{ text: 'Request Object', link: '/docs/async/fetch-api/request' },
				{ text: 'Response Object', link: '/docs/async/fetch-api/response' },
			]
		},
		{
			text: 'Async Await',
			collapsed: false,
			items: [
				{ text: 'Definisi', link: '/docs/async/async-await/definisi-async-await' },
				{ text: 'Async', link: '/docs/async/async-await/async' },
				{ text: 'Await', link: '/docs/async/async-await/await' },
				{ text: 'Error Handling', link: '/docs/async/async-await/error-handling' },
			]
		},
		{
			text: 'Web Worker',
			collapsed: false,
			items: [
				{ text: 'Javascript Thread', link: '/docs/async/web-worker/thread' },
				{ text: 'Definisi', link: '/docs/async/web-worker/definisi-web-worker' },
				{ text: 'Worker Object', link: '/docs/async/web-worker/worker-object' },
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
	{ 
		text: 'Dokumentasi', 
		items: [
			{ text: 'JavaScript Async', link: '/docs/async' }
		],
	},
	{ text: 'Referensi', link: '/references/' }
]

export const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Javascript-async-docs-id' }
]