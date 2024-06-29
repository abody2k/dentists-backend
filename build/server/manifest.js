const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.jpg","404.png","ab.png","add.png","addImage.png","addP.png","AddUser.png","Arimo-Bold.ttf","Arimo-BoldItalic.ttf","Arimo-Italic.ttf","Arimo-Regular.ttf","At sign.png","at.png","AT2.png","Atsign.png","back-icon.png","Barlow-Black.ttf","Barlow-BlackItalic.ttf","Barlow-Bold.ttf","Barlow-BoldItalic.ttf","Barlow-ExtraBold.ttf","Barlow-ExtraBoldItalic.ttf","Barlow-ExtraLight.ttf","Barlow-ExtraLightItalic.ttf","Barlow-Italic.ttf","Barlow-Light.ttf","Barlow-LightItalic.ttf","Barlow-Medium.ttf","Barlow-MediumItalic.ttf","Barlow-Regular.ttf","Barlow-SemiBold.ttf","Barlow-SemiBoldItalic.ttf","Barlow-Thin.ttf","Barlow-ThinItalic.ttf","bell.png","bell2.png","bg.jpg","cancel.png","cash.png","Classroom.png","close-icon.png","close.png","closesec.png","contact.png","Copy.png","cr.png","date.png","del.png","details.png","diver.png","doct.png","Documents.png","done.png","Dots.png","DoubleLeft.png","Download.png","ds.png","ds2.png","edit.png","editorjs.mjs","editorjs.umd.js","Edituser.png","EDTULOGO.png","email.png","Enter.png","error.gif","Exam.png","exams.png","ExternalLink.png","Facebook.png","favicon.png","FB.png","firebase-messaging-sw.js","Generate.png","hide.png","IG.png","Instagram.png","left.png","line.gif","loading.gif","Logo.png","Logo7.png","Logout.png","notification1.png","notitication.png","nots.png","open-icon.png","open.png","opensec.png","password.png","People.png","pf.png","PH.png","Phone.png","Place.png","play.png","ppl.png","ppl2.png","profileImage.jpg","profs.png","pt.png","qr-code-icon-png.webp","QrCode.png","ques.png","quizdate.png","quizic.png","qus.png","read.png","Rectangle 377.png","redclose.png","Resume.png","right.png","save.png","sch.png","Schedule.png","Settings.png","SettingsIcon.png","Share.png","show.png","sources.png","srch.png","srch2.png","submitted.gif","subscription-model.png","TA.png","Telegram.png","ticb.png","Time (2).png","time.png","transfer.png","up-arrow.png","upload.png","url.png","username.png","VerifiedAccount.png","videos.png","WA.png","warning.gif","WhatsApp.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ttf":"font/ttf",".mjs":"text/javascript",".js":"text/javascript",".gif":"image/gif",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CuEf7aiw.js","app":"_app/immutable/entry/app.CyFStDBX.js","imports":["_app/immutable/entry/start.CuEf7aiw.js","_app/immutable/chunks/entry.r7Vd5oIu.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.huCWhqxS.js","_app/immutable/entry/app.CyFStDBX.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.-OUPI9FG.js","_app/immutable/chunks/index.jRfWhGhs.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BS-kZIxP.js')),
			__memo(() => import('./chunks/1-cfwsxKtO.js')),
			__memo(() => import('./chunks/2-eQgjeY1q.js')),
			__memo(() => import('./chunks/3-D8kChbG2.js')),
			__memo(() => import('./chunks/4-Ywg_LTpE.js')),
			__memo(() => import('./chunks/5-JkC7c4Fy.js')),
			__memo(() => import('./chunks/6-1uQzK4iE.js')),
			__memo(() => import('./chunks/7-DJZ0AqL1.js')),
			__memo(() => import('./chunks/8-Ca1Qymt9.js')),
			__memo(() => import('./chunks/9-DLX2gGBb.js')),
			__memo(() => import('./chunks/10-KNhWLlSj.js')),
			__memo(() => import('./chunks/11-2BiJ0_ze.js')),
			__memo(() => import('./chunks/12-BD_ZFtuK.js')),
			__memo(() => import('./chunks/13--vZWBAPX.js')),
			__memo(() => import('./chunks/14-Drs2PFgf.js')),
			__memo(() => import('./chunks/15-uHiqEGIR.js')),
			__memo(() => import('./chunks/16-DaVuhhAY.js')),
			__memo(() => import('./chunks/17-BG1JvFai.js')),
			__memo(() => import('./chunks/18-DnXD3tQN.js')),
			__memo(() => import('./chunks/19-yF_Z347M.js')),
			__memo(() => import('./chunks/20-DTI2BukP.js')),
			__memo(() => import('./chunks/21-Cf60zacI.js')),
			__memo(() => import('./chunks/22-DTIzhrAT.js')),
			__memo(() => import('./chunks/23-CHW4sow3.js')),
			__memo(() => import('./chunks/24-DUR7DCeQ.js')),
			__memo(() => import('./chunks/25-C7YrieXt.js')),
			__memo(() => import('./chunks/26-CGEiJgVn.js')),
			__memo(() => import('./chunks/27-DwYYKDap.js')),
			__memo(() => import('./chunks/28-OTIi9HZO.js')),
			__memo(() => import('./chunks/29-DbH7DozE.js')),
			__memo(() => import('./chunks/30-BlSvyqiW.js')),
			__memo(() => import('./chunks/31-DtFGN-mm.js')),
			__memo(() => import('./chunks/32-CXJh6gT4.js')),
			__memo(() => import('./chunks/33-Cz4_tveV.js')),
			__memo(() => import('./chunks/34-CpO6lues.js')),
			__memo(() => import('./chunks/35-BMAqLnK8.js')),
			__memo(() => import('./chunks/36-BadsiH7W.js')),
			__memo(() => import('./chunks/37-uCz7vF23.js')),
			__memo(() => import('./chunks/38-C2hrjP6n.js')),
			__memo(() => import('./chunks/39-heY0E06p.js')),
			__memo(() => import('./chunks/40-Yo280IQ8.js')),
			__memo(() => import('./chunks/41-CPlpppW2.js')),
			__memo(() => import('./chunks/42-4Xur5rUZ.js')),
			__memo(() => import('./chunks/43-DIyX-pTl.js')),
			__memo(() => import('./chunks/44-DDwpP2iu.js')),
			__memo(() => import('./chunks/45-B0exoaCw.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/accounts",
				pattern: /^\/admin\/accounts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/blogs",
				pattern: /^\/admin\/blogs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/courses",
				pattern: /^\/admin\/courses\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/courses/new",
				pattern: /^\/admin\/courses\/new\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]",
				pattern: /^\/admin\/courses\/([^/]+?)\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/chapters",
				pattern: /^\/admin\/courses\/([^/]+?)\/chapters\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/exams",
				pattern: /^\/admin\/courses\/([^/]+?)\/exams\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/exams/[examID]",
				pattern: /^\/admin\/courses\/([^/]+?)\/exams\/([^/]+?)\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false},{"name":"examID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/lectures",
				pattern: /^\/admin\/courses\/([^/]+?)\/lectures\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/courses/[course]/users",
				pattern: /^\/admin\/courses\/([^/]+?)\/users\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/admin/exams",
				pattern: /^\/admin\/exams\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/admin/fellowships",
				pattern: /^\/admin\/fellowships\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/new",
				pattern: /^\/admin\/fellowships\/new\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/chapters",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/chapters\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/exams",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/exams\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/exams/[examID]",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/exams\/([^/]+?)\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false},{"name":"examID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/lectures",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/lectures\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/admin/fellowships/[fellowship]/users",
				pattern: /^\/admin\/fellowships\/([^/]+?)\/users\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/admin/profiles/[profiles]",
				pattern: /^\/admin\/profiles\/([^/]+?)\/?$/,
				params: [{"name":"profiles","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/admin/settings",
				pattern: /^\/admin\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/admin/store",
				pattern: /^\/admin\/store\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/admin/test",
				pattern: /^\/admin\/test\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/codes",
				pattern: /^\/codes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/codes/[code]",
				pattern: /^\/codes\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/courses/[course]",
				pattern: /^\/courses\/([^/]+?)\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/courses/[course]/[examType]/[examID]",
				pattern: /^\/courses\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"course","optional":false,"rest":false,"chained":false},{"name":"examType","optional":false,"rest":false,"chained":false},{"name":"examID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/exams",
				pattern: /^\/exams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/exams/[exam]",
				pattern: /^\/exams\/([^/]+?)\/?$/,
				params: [{"name":"exam","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/fellowships",
				pattern: /^\/fellowships\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/fellowships/[fellowship]",
				pattern: /^\/fellowships\/([^/]+?)\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/fellowships/[fellowship]/[examType]/[examID]",
				pattern: /^\/fellowships\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"fellowship","optional":false,"rest":false,"chained":false},{"name":"examType","optional":false,"rest":false,"chained":false},{"name":"examID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/profile/[code]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/reset/[reset]",
				pattern: /^\/reset\/([^/]+?)\/?$/,
				params: [{"name":"reset","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
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
