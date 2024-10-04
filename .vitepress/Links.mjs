const SIDEBAR_LINKS = {
	'/javascript-basic/' : {
		text: 'JavaScript Dasar',
		items: [
			{ text: 'Agenda Belajar', link: '/basic' }
		]
	},

	'/javascript-oop/': {
		text: 'JavaScript OOP',
		items: [
			{ text: 'Agenda Belajar', link: '/javascript-oop/' },
			{ text: 'Pengenalan OOP', link: '/javascript-oop/pendahuluan' },
			{ text: 'Membuat Object', link: '/javascript-oop/create-object' },
			{
				text: 'Constructor',
				collapsed: false,
				items: [
					{ text: 'Constructor Function', link: '/javascript-oop/constructor-function' },
					{ text: 'Const. Function Property', link: '/javascript-oop/constructor-function-property' },
					{ text: 'Const. Function Method', link: '/javascript-oop/constructor-function-method' },
					{ text: 'Const. Function Param', link: '/javascript-oop/constructor-function-param' },
					{ text: 'Constructor Inheritance', link: '/javascript-oop/constructor-inheritance' },
				]
			},
			{ text: 'Prototype', link: '/javascript-oop/prototype' },
			{ text: 'Prototype Inheritance', link: '/javascript-oop/prototype-inheritance' },
			{
				text: 'Class',
				collapsed: false,
				items: [
					{ text: 'Class Keyword', link: '/javascript-oop/class-keyword' },
					{ text: 'Class Constructor', link: '/javascript-oop/class-constructor' },
					{ text: 'Class Property', link: '/javascript-oop/class-property' },
					{ text: 'Class Method', link: '/javascript-oop/class-method' },
					{ text: 'Class Inheritance', link: '/javascript-oop/class-inheritance' },
					{ text: 'Class Super Constructor', link: '/javascript-oop/class-super-constructor' },
					{ text: 'Class Super Method', link: '/javascript-oop/class-super-method' },
					{ text: 'Class Getter Setter', link: '/javascript-oop/class-getter-setter' },
					{ text: 'Class Public Field', link: '/javascript-oop/class-public-field' },
					{ text: 'Class Private Field', link: '/javascript-oop/class-private-field' },
					{ text: 'Class Private Method', link: '/javascript-oop/class-private-method' },
				]
			},
			{ text: 'Operator Instanceof', link: '/javascript-oop/operator-instanceof' },
			{ text: 'Static Field', link: '/javascript-oop/static-field' },
			{ text: 'Static method', link: '/javascript-oop/static-method' },
			{ text: 'Error', link: '/javascript-oop/error' },
			{ text: 'Error Handling', link: '/javascript-oop/error-handling' },
			{ text: 'Class Error Manual', link: '/javascript-oop/class-error-manual' },
			{ text: 'Iterable & Iterator', link: '/javascript-oop/iterable-iterator' },
		]
	},

	'/javascript-standard-library/': {
		text: 'JavaScript Standard Library',
		items: [
			{ text: 'Agenda Belajar', link: '/javascript-standard-library/' },
			{ 
				text: 'Number', 
				collapsed: true,
				items: [
					{ text: 'Intro: Number', link: '/javascript-standard-library/number' },
					{ text: 'Number Static Property', link: '/javascript-standard-library/number-static-property' },
					{ text: 'Number Static Method', link: '/javascript-standard-library/number-static-method' },
					{ text: 'Number Instance Method', link: '/javascript-standard-library/number-instance-method' },
				] 
			},
			{
				text: 'String',
				collapsed: true,
				items: [
					{ text: 'Intro: String', link: '/javascript-standard-library/string' },
					{ text: 'Instance Method & Property', link: '/javascript-standard-library/string-instance-method-and-property' },
				]
			},
			{ 
				text: 'Array', 
				collapsed: true,
				items: [
					{ text: 'Intro: Array', link: '/javascript-standard-library/array' },
					{ text: 'Array Loop', link: '/javascript-standard-library/array-loop' },
					{ text: 'Array Queue', link: '/javascript-standard-library/array-queue' },
					{ text: 'Array Stack', link: '/javascript-standard-library/array-stack' },
					{ text: 'Array Search', link: '/javascript-standard-library/array-search' },
					{ text: 'Array Filter', link: '/javascript-standard-library/array-filter' },
					{ text: 'Array Transform', link: '/javascript-standard-library/array-transform' },
				] 
			},
			{
				text: 'Object',
				collapsed: true,
				items: [
					{ text: 'Intro: Object', link: '/javascript-standard-library/object' },
					{ text: 'Object Freeze & Seal', link: '/javascript-standard-library/object-freeze-and-seal' },
					{ text: 'Object Assign', link: '/javascript-standard-library/object-assign' },
					{ text: 'Object Property Name & Value', link: '/javascript-standard-library/object-property-name-and-value' },
				]
			},
			{
				text: 'JSON',
				collapsed: true,
				items: [
					{ text: 'Intro: JSON', link: '/javascript-standard-library/json-intro' },
					{ text: 'JSON', link: '/javascript-standard-library/json' },
				]
			},
			{
				text: 'Date',
				collapsed: true,
				items: [
					{ text: 'Intro: Date', link: '/javascript-standard-library/date' },
					{ text: 'Epoch & UNIX Timestamp', link: '/javascript-standard-library/epoch-unix-timestamp' },
					{ text: 'Date Parsing', link: '/javascript-standard-library/date-parsing' },
					{ text: 'Date Getter & Setter', link: '/javascript-standard-library/date-getter-and-setter' },
				]
			},
			{ text: 'BigInt', link: '/javascript-standard-library/bigint' },
			{ text: 'Math', link: '/javascript-standard-library/math' },
			{ text: 'Boolean', link: '/javascript-standard-library/boolean' },
			{ text: 'Map', link: '/javascript-standard-library/map' },
			{ text: 'Set', link: '/javascript-standard-library/set' },
			{ text: 'Symbol', link: '/javascript-standard-library/symbol' },
			{ text: 'RegExp', link: '/javascript-standard-library/regexp' },
			{ text: 'Proxy', link: '/javascript-standard-library/proxy' },
			{ text: 'Reflect', link: '/javascript-standard-library/reflect' },
			{ text: 'Encode', link: '/javascript-standard-library/encode' },
			{ text: 'Base64', link: '/javascript-standard-library/base64' },
			{ text: 'Eval', link: '/javascript-standard-library/eval' },
		]
	},

	'/javascript-modules/': {
		text: 'JavaScript Modules',
		items: [
			{ text: 'Agenda', link: '/javascript-modules/' },
		]
	},

	'/javascript-dom/': {
		text: 'JavaScript DOM',
		items: [
			{ text: 'Intro', link: '/javascript-dom/' },
			{ text: 'Document Object Model', link: '/javascript-dom/document-object-model' },
			{ text: 'Document',  link: '/javascript-dom/document' },
			{ text: 'Node',  link: '/javascript-dom/node' },
			{ text: 'Element',  link: '/javascript-dom/element' },
			{ text: 'Create Element',  link: '/javascript-dom/create-element' },
			{ text: 'NodeList',  link: '/javascript-dom/nodelist' },
			{ text: 'Attribute',  link: '/javascript-dom/attribute' },
			{ text: 'NamedNodeMap',  link: '/javascript-dom/named-node-map' },
			{ text: 'Text Node',  link: '/javascript-dom/text-node' },
			{ text: 'Event Handler', link: '/javascript-dom/event-handler' },
			{ text: 'Event Target', link: '/javascript-dom/event-target' },
			{ text: 'Global Event Handler', link: '/javascript-dom/global-event-handler' },
			{ text: 'Event', link: '/javascript-dom/event' },
			{ text: 'Style', link: '/javascript-dom/style' },
			{ text: 'InnerText', link: '/javascript-dom/inner-text' },
			{ text: 'InnerHTML', link: '/javascript-dom/inner-html' },
			{ text: 'Window', link: '/javascript-dom/window' },
			{ text: 'QuerySelector', link: '/javascript-dom/queryselector' },
			{ text: 'Node Type', link: '/javascript-dom/node-type' },
			{ text: 'HTML Element', link: '/javascript-dom/html-element' },
			{ text: 'HTML Form Element', link: '/javascript-dom/html-form-element' },
			{ text: 'HTML Form Name', link: '/javascript-dom/html-form-name' },
			{ text: 'HTML Table Element', link: '/javascript-dom/html-table-element' },
		]
	},
	
	'/javascript-async/': {
		text: 'JavaScript Async',
		items: [
			{ text: 'Agenda Belajar', link: '/javascript-async/' },
			{ text: 'Pengenalan Async', link: '/javascript-async/async-introduction' },
			{ text: 'Async method setTimeout()', link: '/javascript-async/settimeout' },
			{ text: 'Async method setInterval()', link: '/javascript-async/setinterval' },
			{
				text: 'AJAX',
				collapsed: false,
				items: [
					{ text: 'Definisi AJAX', link: '/javascript-async/ajax/definisi-ajax' },
					{ text: 'Response Status', link: '/javascript-async/ajax/response-status' },
					{ text: 'AJAX State', link: '/javascript-async/ajax/state' },
					{ text: 'Mengirim Data', link: '/javascript-async/ajax/send-data' },
					{ text: 'URL Search Params', link: '/javascript-async/ajax/url-search-params' },
					{ text: 'Form Data', link: '/javascript-async/ajax/form-data' },
					{ text: 'Upload File', link: '/javascript-async/ajax/upload-file' },
				]
			},
			{
				text: 'Promise',
				collapsed: false,
				items: [
					{ text: 'Definisi Promise', link: '/javascript-async/promise/definisi-promise' },
					{ text: 'Promise Method', link: '/javascript-async/promise/promise-method' },
					{ text: 'Promise Static Method', link: '/javascript-async/promise/static-method' },
				]
			},
			{
				text: 'Fetch API',
				collapsed: false,
				items: [
					{ text: 'Definisi Fetch API', link: '/javascript-async/fetch-api/definisi-fetch-api' },
					{ text: 'Request Object', link: '/javascript-async/fetch-api/request' },
					{ text: 'Response Object', link: '/javascript-async/fetch-api/response' },
				]
			},
			{
				text: 'Async Await',
				collapsed: false,
				items: [
					{ text: 'Definisi Async Await', link: '/javascript-async/async-await/definisi-async-await' },
					{ text: 'Async', link: '/javascript-async/async-await/async' },
					{ text: 'Await', link: '/javascript-async/async-await/await' },
					{ text: 'Error Handling', link: '/javascript-async/async-await/error-handling' },
				]
			},
			{
				text: 'Web Worker',
				collapsed: false,
				items: [
					{ text: 'Javascript Thread', link: '/javascript-async/web-worker/thread' },
					{ text: 'Definisi Web Worker', link: '/javascript-async/web-worker/definisi-web-worker' },
					{ text: 'Worker Object', link: '/javascript-async/web-worker/worker-object' },
				]
			},
		]
	},

	'/references/': [
		{
			text: 'Referensi',
			link: '/references/'
		}
	]
}

const NAV_LINKS = [
	{ text: 'Web API', link: 'https://developer.mozilla.org/en-US/docs/Web/API' },
	{ text: 'Docs', link: '/docs' },
	{ 
		text: 'Materi', 
		items: [
			{ text: 'JavaScript Dasar', link: '/javascript-basic/' },
			{ text: 'JavaScript OOP', link: '/javascript-oop/' },
			{ text: 'JavaScript Std. Library', link: '/javascript-standard-library/' },
			{ text: 'JavaScript Modules', link: '/javascript-modules/' },
			{ text: 'JavaScript DOM', link: '/javascript-dom/' },
			{ text: 'JavaScript Async', link: '/javascript-async/' },
		],
	},
	{ text: 'Referensi', link: '/references' }
]

const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Javascript-pzn-docs-id' }
]

const links = {
	nav: NAV_LINKS,
	sidebar: SIDEBAR_LINKS,
	socialLinks: SOCIAL_LINKS,
}

export default links