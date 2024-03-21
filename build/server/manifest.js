const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ab.png","add.png","addImage.png","addP.png","Arimo-Bold.ttf","Arimo-BoldItalic.ttf","Arimo-Italic.ttf","Arimo-Regular.ttf","back-icon.png","Barlow-Black.ttf","Barlow-BlackItalic.ttf","Barlow-Bold.ttf","Barlow-BoldItalic.ttf","Barlow-ExtraBold.ttf","Barlow-ExtraBoldItalic.ttf","Barlow-ExtraLight.ttf","Barlow-ExtraLightItalic.ttf","Barlow-Italic.ttf","Barlow-Light.ttf","Barlow-LightItalic.ttf","Barlow-Medium.ttf","Barlow-MediumItalic.ttf","Barlow-Regular.ttf","Barlow-SemiBold.ttf","Barlow-SemiBoldItalic.ttf","Barlow-Thin.ttf","Barlow-ThinItalic.ttf","bell.png","bell2.png","bg.jpg","cancel.png","cash.png","close.png","contact.png","date.png","del.png","details.png","diver.png","done.png","ds.png","ds2.png","edit.png","email.png","exams.png","favicon.png","firebase-messaging-sw.js","left.png","Logo.png","password.png","ppl.png","ppl2.png","pt.png","ques.png","qus.png","redclose.png","right.png","save.png","sch.png","sources.png","srch.png","time.png","transfer.png","upload.png","url.png","videos.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.CgsWkIjY.js","app":"_app/immutable/entry/app.b6ntK3iw.js","imports":["_app/immutable/entry/start.CgsWkIjY.js","_app/immutable/chunks/entry.F0Rf4B2-.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BnwJMdZt.js","_app/immutable/entry/app.b6ntK3iw.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.CvS8aZFR.js","_app/immutable/chunks/index.BLvvEpyq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DLKb8IdA.js')),
			__memo(() => import('./chunks/1-BF3yb6XR.js')),
			__memo(() => import('./chunks/2-TVP3ReaU.js')),
			__memo(() => import('./chunks/3-COPEY8i9.js')),
			__memo(() => import('./chunks/4-BYdcThbQ.js')),
			__memo(() => import('./chunks/5-DZgEJ6vf.js')),
			__memo(() => import('./chunks/6-yf72NJjJ.js')),
			__memo(() => import('./chunks/7-zDZzqv4P.js')),
			__memo(() => import('./chunks/8-CUzqM1Sm.js')),
			__memo(() => import('./chunks/9-CBycR4HG.js')),
			__memo(() => import('./chunks/10-BgBl6ULm.js')),
			__memo(() => import('./chunks/11-BgnW0SDO.js')),
			__memo(() => import('./chunks/12-wA_Nup1B.js')),
			__memo(() => import('./chunks/13-DUjpgvdi.js')),
			__memo(() => import('./chunks/14-Cx3X6Fc2.js')),
			__memo(() => import('./chunks/15-CZpM3lQE.js')),
			__memo(() => import('./chunks/16-gzGFYSHk.js')),
			__memo(() => import('./chunks/17-CY89IX9q.js')),
			__memo(() => import('./chunks/18-Bi7FciIH.js')),
			__memo(() => import('./chunks/19-Des0qt7L.js')),
			__memo(() => import('./chunks/20-B1P9AfgS.js')),
			__memo(() => import('./chunks/21-BY1CKu_E.js')),
			__memo(() => import('./chunks/22-CojhmERR.js')),
			__memo(() => import('./chunks/23-x4rR2_4y.js')),
			__memo(() => import('./chunks/24-Awia_2gk.js')),
			__memo(() => import('./chunks/25-6WpNTBTV.js')),
			__memo(() => import('./chunks/26-zUjxiQF2.js')),
			__memo(() => import('./chunks/27-DdC4Imh6.js')),
			__memo(() => import('./chunks/28-RhWp3xCS.js')),
			__memo(() => import('./chunks/29-VkLhiHLW.js')),
			__memo(() => import('./chunks/30-B4oGtULq.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/courses",
				pattern: /^\/admin\/courses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/courses/new",
				pattern: /^\/admin\/courses\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]",
				pattern: /^\/admin\/courses\/([^/]+?)\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/chapters",
				pattern: /^\/admin\/courses\/([^/]+?)\/chapters\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/exams",
				pattern: /^\/admin\/courses\/([^/]+?)\/exams\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/lectures",
				pattern: /^\/admin\/courses\/([^/]+?)\/lectures\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/users",
				pattern: /^\/admin\/courses\/([^/]+?)\/users\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/exams",
				pattern: /^\/admin\/exams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/fellowships",
				pattern: /^\/admin\/fellowships\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/new",
				pattern: /^\/admin\/fellowships\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/chapters",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/chapters\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/exams",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/exams\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/lectures",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/lectures\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/users",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/users\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/admin/store",
				pattern: /^\/admin\/store\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/codes",
				pattern: /^\/codes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/codes/[code]",
				pattern: /^\/codes\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/courses/[course]",
				pattern: /^\/courses\/([^/]+?)\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/exams/[exam]",
				pattern: /^\/exams\/([^/]+?)\/?$/,
				params: [{"name":"exam","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/fellowships",
				pattern: /^\/fellowships\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/fellowships/[fellowship]",
				pattern: /^\/fellowships\/([^/]+?)\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
