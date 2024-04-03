const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ab.png","add.png","addImage.png","addP.png","Arimo-Bold.ttf","Arimo-BoldItalic.ttf","Arimo-Italic.ttf","Arimo-Regular.ttf","at.png","Atsign.png","back-icon.png","Barlow-Black.ttf","Barlow-BlackItalic.ttf","Barlow-Bold.ttf","Barlow-BoldItalic.ttf","Barlow-ExtraBold.ttf","Barlow-ExtraBoldItalic.ttf","Barlow-ExtraLight.ttf","Barlow-ExtraLightItalic.ttf","Barlow-Italic.ttf","Barlow-Light.ttf","Barlow-LightItalic.ttf","Barlow-Medium.ttf","Barlow-MediumItalic.ttf","Barlow-Regular.ttf","Barlow-SemiBold.ttf","Barlow-SemiBoldItalic.ttf","Barlow-Thin.ttf","Barlow-ThinItalic.ttf","bell.png","bell2.png","bg.jpg","cancel.png","cash.png","close.png","contact.png","cr.png","date.png","del.png","details.png","diver.png","doct.png","done.png","ds.png","ds2.png","edit.png","email.png","exams.png","Facebook.png","favicon.png","firebase-messaging-sw.js","Instagram.png","left.png","Logo.png","open.png","password.png","pf.png","Phone.png","Place.png","play.png","ppl.png","ppl2.png","pt.png","ques.png","quizdate.png","quizic.png","qus.png","read.png","redclose.png","right.png","save.png","sch.png","sources.png","srch.png","Telegram.png","ticb.png","time.png","transfer.png","up-arrow.png","upload.png","url.png","username.png","videos.png","WhatsApp.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dh5gbIJU.js","app":"_app/immutable/entry/app.Ce4C3JNv.js","imports":["_app/immutable/entry/start.Dh5gbIJU.js","_app/immutable/chunks/entry.FgZLFe1E.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.CMuitwt0.js","_app/immutable/entry/app.Ce4C3JNv.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.BbzLVxRS.js","_app/immutable/chunks/index.hWlefRDD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-iTqooNMZ.js')),
			__memo(() => import('./chunks/1-BgbyhGO9.js')),
			__memo(() => import('./chunks/2-DRO8T1K9.js')),
			__memo(() => import('./chunks/3-0Io2licB.js')),
			__memo(() => import('./chunks/4-Ddih-giP.js')),
			__memo(() => import('./chunks/5-ERiaQ1AC.js')),
			__memo(() => import('./chunks/6-BXhNjVSF.js')),
			__memo(() => import('./chunks/7-fKvhNWad.js')),
			__memo(() => import('./chunks/8-B5K9Z2WS.js')),
			__memo(() => import('./chunks/9-BpEndlU1.js')),
			__memo(() => import('./chunks/10-BWGiHPGm.js')),
			__memo(() => import('./chunks/11-DFtGdRcU.js')),
			__memo(() => import('./chunks/12-6FCR9cSx.js')),
			__memo(() => import('./chunks/13-D0uitflN.js')),
			__memo(() => import('./chunks/14-UGFprekP.js')),
			__memo(() => import('./chunks/15-BKDZMxS8.js')),
			__memo(() => import('./chunks/16-ijnSjCQq.js')),
			__memo(() => import('./chunks/17-DrTZ3C6U.js')),
			__memo(() => import('./chunks/18-OZvgi1os.js')),
			__memo(() => import('./chunks/19-C6OnmD_b.js')),
			__memo(() => import('./chunks/20-JEd3K7g0.js')),
			__memo(() => import('./chunks/21-C3JGKBDj.js')),
			__memo(() => import('./chunks/22-BperRuP0.js')),
			__memo(() => import('./chunks/23-DYSm4gef.js')),
			__memo(() => import('./chunks/24-Dyl-NqSg.js')),
			__memo(() => import('./chunks/25-heqAA4vl.js')),
			__memo(() => import('./chunks/26-N7Hq14BM.js')),
			__memo(() => import('./chunks/27-CQqrZcoL.js')),
			__memo(() => import('./chunks/28-DkmY2xRx.js')),
			__memo(() => import('./chunks/29-7o7RFKWq.js')),
			__memo(() => import('./chunks/30-BnDOT___.js'))
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
