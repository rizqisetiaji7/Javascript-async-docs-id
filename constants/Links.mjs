export const SIDEBAR_LINKS = [
	{
		text: 'Intro',
		collapsed: false,
		items: [
			{ text: 'Agenda Belajar', link: '/docs' },
			{ text: 'Pengenalan Async', link: '/docs/intro/async-introduction' },
			{ text: 'Async method setTimeout()', link: '/docs/intro/settimeout' },
			{ text: 'Async method setInterval()', link: '/docs/intro/setinterval' },
		]
	},
	{
		text: 'AJAX',
		collapsed: false,
		items: [
			{ text: 'Pengertian AJAX', link: '/docs/ajax/pengertian-ajax' },
			{ text: 'Response Status', link: '/docs/ajax/response-status' },
			{ text: 'State', link: '/docs/ajax/state' },
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
			{ text: 'Pengertian Promise', link: '/docs/promise/pengertian-promise' },
			{ text: 'Promise Method', link: '/docs/promise/promise-method' },
		]
	}
]


export const NAV_LINKS = [
	{ text: 'Home', link: '/' },
	{ text: 'Docs', link: '/docs' }
]

export const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Javascript-async-docs-id' }
]