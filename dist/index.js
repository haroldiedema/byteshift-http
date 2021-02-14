"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("reflect-metadata");var e=require("http"),t=require("https"),s=require("fs"),r=require("path");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=i(e),o=i(t),a=i(s),E=i(r);class h{constructor(e){this.keys={},this.data={},e&&this.insert(e)}get size(){return Object.keys(this.data).length}insert(e){Object.keys(e).forEach((t=>{this.set(t,e[t])}))}get(e){return this.data[e.toLowerCase()]}has(e){return void 0!==this.data[e.toLowerCase()]}set(e,t){void 0===this.keys[e]&&(this.keys[e.toLowerCase()]=e),this.data[e.toLowerCase()]=t}get all(){const e={};return Object.keys(this.data).forEach((t=>{e[this.keys[t]]=this.data[t]})),e}forEach(e){Object.keys(this.data).forEach((t=>{e(this.data[t],this.keys[t])}))}toArray(e){const t=Object.values(this.data);return e?t.sort(e):t}}const c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;class l{constructor(e,t){this.name=e,this.value=t,this.maxAge=0,this.domain=null,this.path="/",this.expires=null,this.httpOnly=null,this.secure=null,this.sameSite=null}serialize(){if(!c.test(this.name))throw new Error('Failed to serialize cookie "'+this.name+'" due to invalid characters in the name.');if(!c.test(this.value))throw new Error('Failed to serialize cookie "'+this.value+'" due to invalid characters in the value.');let e=this.name+"="+encodeURIComponent(this.value);if(this.maxAge){const t=this.maxAge-0;if(isNaN(t)||!isFinite(t))throw new TypeError('maxAge of cookie "'+this.name+'" is invalid');e+="; Max-Age="+Math.floor(t)}if(this.domain){if(!c.test(this.domain))throw new Error('Failed to serialize cookie "'+this.name+'" due to invalid characters in the domain property.');e+="; Domain="+this.domain}if(this.path){if(!c.test(this.path))throw new Error('Failed to serialize cookie "'+this.name+'" due to invalid characters in the path property.');e+="; Path="+this.path}if(this.expires){if(!(this.expires instanceof Date))throw new Error('Failed to serialize cookie "'+this.name+'" because "expires" is expected to be a Date object.');e+="; Expires="+this.expires.toUTCString()}if(this.httpOnly&&(e+="; HttpOnly"),this.secure&&(e+="; Secure"),this.sameSite)switch(this.sameSite){case!0:case"strict":e+="; SameSite=Strict";break;case"lax":e+="; SameSite=Lax";break;case"none":e+="; SameSite=None"}return e}}class p{constructor(){this._cookies=new Map}set(e,t,s=86400,r=null,i=null,n=!1,o=!1,a="lax"){const E=new l(e,t);if(E.domain=r,E.path=i,E.httpOnly=n,E.secure=o,E.sameSite=a,s>0){const e=s;E.expires=new Date((new Date).getTime()+1e3*e),E.maxAge=e}this._cookies.set(e,E)}serialize(){const e=[];return this._cookies.forEach((t=>{e.push(t.serialize())})),e}}class u{constructor(e,t=exports.HttpStatus.OK,s="text/plain"){this._code=exports.HttpStatus.OK,this._content="",this._isSent=!1,this._headers=new h,this._cookies=new p,this.content=e,this.contentType=s,this.statusCode=t}get cookies(){return this._cookies}set statusCode(e){this._code=e}get statusCode(){return this._code}set contentType(e){this._headers.set("Content-Type",e)}set content(e){this._content=e}get content(){return this._content}get isSent(){return this._isSent}send(e){if(this._isSent)throw new Error("This response was already sent.");this._isSent=!0;const t=this._cookies.serialize();for(let s of t)e.setHeader("Set-Cookie",s);e.writeHead(this._code,this._headers.all),e.write(this._content),e.end()}}var d;(d=exports.HttpStatus||(exports.HttpStatus={}))[d.CONTINUE=100]="CONTINUE",d[d.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",d[d.PROCESSING=102]="PROCESSING",d[d.EARLY_HINTS=103]="EARLY_HINTS",d[d.OK=200]="OK",d[d.CREATED=201]="CREATED",d[d.ACCEPTED=202]="ACCEPTED",d[d.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",d[d.NO_CONTENT=204]="NO_CONTENT",d[d.RESET_CONTENT=205]="RESET_CONTENT",d[d.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",d[d.MULTI_STATUS=207]="MULTI_STATUS",d[d.ALREADY_REPORTED=208]="ALREADY_REPORTED",d[d.IM_USED=226]="IM_USED",d[d.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",d[d.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",d[d.FOUND=302]="FOUND",d[d.SEE_OTHER=303]="SEE_OTHER",d[d.NOT_MODIFIED=304]="NOT_MODIFIED",d[d.USE_PROXY=305]="USE_PROXY",d[d.RESERVED=306]="RESERVED",d[d.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",d[d.PERMANENTLY_REDIRECT=308]="PERMANENTLY_REDIRECT",d[d.BAD_REQUEST=400]="BAD_REQUEST",d[d.UNAUTHORIZED=401]="UNAUTHORIZED",d[d.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",d[d.FORBIDDEN=403]="FORBIDDEN",d[d.NOT_FOUND=404]="NOT_FOUND",d[d.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",d[d.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",d[d.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",d[d.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",d[d.CONFLICT=409]="CONFLICT",d[d.GONE=410]="GONE",d[d.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",d[d.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",d[d.REQUEST_ENTITY_TOO_LARGE=413]="REQUEST_ENTITY_TOO_LARGE",d[d.REQUEST_URI_TOO_LONG=414]="REQUEST_URI_TOO_LONG",d[d.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",d[d.REQUESTED_RANGE_NOT_SATISFIABLE=416]="REQUESTED_RANGE_NOT_SATISFIABLE",d[d.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",d[d.I_AM_A_TEAPOT=418]="I_AM_A_TEAPOT",d[d.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",d[d.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",d[d.LOCKED=423]="LOCKED",d[d.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",d[d.TOO_EARLY=425]="TOO_EARLY",d[d.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",d[d.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",d[d.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",d[d.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",d[d.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",d[d.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",d[d.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",d[d.BAD_GATEWAY=502]="BAD_GATEWAY",d[d.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",d[d.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",d[d.VERSION_NOT_SUPPORTED=505]="VERSION_NOT_SUPPORTED",d[d.VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL=506]="VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL",d[d.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",d[d.LOOP_DETECTED=508]="LOOP_DETECTED",d[d.NOT_EXTENDED=510]="NOT_EXTENDED",d[d.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED";class R{setResponse(e){this.response=e}hasResponse(){return this.response instanceof u}getResponse(){return this.response}}class T extends R{constructor(e,t,s,r){super(),this.error=e,this.request=t,this.controller=s,this.methodName=r}}class _ extends R{constructor(e,t,s,r,i){super(),this.options=e,this.request=t,this.session=s,this.templateFile=r,this.data=i}}class g extends R{constructor(e,t){super(),this.request=e,this.route=t}}class O{constructor(e,t,s){this.request=e,this.route=t,this.response=s}}class f extends R{constructor(e,t,s){super(),this.request=e,this.fileName=t,this.mimeType=s}}class A{constructor(e,t,s,r){this.request=e,this.response=t,this.fileName=s,this.mimeType=r}}const L=/\((.*?)\)/g,S=/(\(\?)?:\w+/g,m=/[\-{}\[\]+?.,\\^$|#\s]/g,N=/\*/g;class I{constructor(e){this.r=e;const t=new URL(e.url,"http://localhost/"),s={};t.searchParams.forEach(((e,t)=>s[t]=e)),this._clientIp=e.socket.remoteAddress,this._method=e.method.toUpperCase(),this._path=t.pathname,this._headers=new h(e.headers),this._cookies=new h(e.headers.cookie?this._parseCookies(e.headers.cookie):{}),this._query=new h(s),this._parameters=new h}get(e){return this._cookies.has(e)?this._cookies.get(e):this._headers.has(e)?this._headers.get(e):this._parameters.has(e)?this._parameters.get(e):this._query.has(e)?this._query.get(e):void 0}get clientIp(){return this._clientIp}get path(){return this._path}get method(){return this._method}get cookies(){return this._cookies}get headers(){return this._headers}get query(){return this._query}get parameters(){return this._parameters}isMatchingRoute(e){if(this.method!==e.method)return!1;e._matcher||(e._matcher=this._parsePattern(e.path));let t=e._matcher.regExp.exec(this.path);return!!t&&(t=t.slice(1,-1),t.reduce(((t,s,r)=>(s&&this._parameters.set(e._matcher.namedParams[r],s),t)),{}),!0)}_parsePattern(e){let t=[];return e=e.replace(m,"\\$&").replace(L,"(?:$1)?").replace(S,(function(e,s){return t.push(e.slice(1)),s?e:"([^/?]+)"})).replace(N,(function(){return t.push("path"),"([^?]*?)"})),{regExp:new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$"),namedParams:t}}_parseCookies(e){if("string"!=typeof e)return{};const t={},s=e.split(/; */);for(let e=0;e<s.length;e++){let r=s[e],i=r.indexOf("=");if(i<1)continue;let n=r.substr(0,i).trim(),o=r.substr(++i,r.length).trim();'"'==o[0]&&(o=o.slice(1,-1)),null==t[n]&&(t[n]=decodeURIComponent(o))}return t}}class x extends u{constructor(e,t=exports.HttpStatus.OK,s=!0){super(e,t,"text/html")}}class v{constructor(){this.routes=[]}registerController(e){void 0!==e.prototype.__ROUTES__?Object.keys(e.prototype.__ROUTES__).forEach((t=>{e.prototype.__ROUTES__[t].forEach((s=>{(Array.isArray(s.method)?s.method:[s.method]).forEach((r=>{this.routes.push({path:s.path,method:r,signature:s.signature,_controller:[e,t]})}))}))})):console.warn("Given controller has no registered routes.")}findByRequest(e){const t=this.routes.find((t=>e.isMatchingRoute(t)));if(t)return t}}class y extends Error{constructor(e,t,s){super(t),this.title=e,this.message=t,this.statusCode=s}}class D extends y{constructor(e="An internal server error occurred."){super("Internal Server Error",e,exports.HttpStatus.INTERNAL_SERVER_ERROR)}}class U extends y{constructor(e="The requested resource could not be found."){super("Not Found",e,exports.HttpStatus.NOT_FOUND)}}class w{onServerError(e){let t='<!DOCTYPE html>\n<html>\n<head>\n    <title>Error</title>\n    <meta charset="UTF-8">\n    <style type="text/css">\n    body, html {\n        font-family: Arial, sans-serif;\n        font-size: 14px;\n        color: #272727;\n        background: #eee;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n    }\n\n    * { box-sizing: border-box; }\n\n    main {\n        width: 800px;\n        border: 1px solid #dadade;\n        border-radius: 6px;\n        background: #fff;\n        box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n        overflow: hidden;\n    }\n\n    img {\n        margin-bottom: 10px;\n    }\n\n    header {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: flex-start;\n        background: #444;\n        color: #fff;\n    }\n\n    header > .title {\n        width: 100%;\n        font-family: "Arial", sans-serif;\n        font-weight: lighter;\n        font-size: 48px;\n        padding: 10px;\n        text-align: center;\n    }\n    footer {\n        padding: 5px;\n        width: 100%;\n        background: #eee;\n        color: #777;\n        font-weight: lighter;\n        font-size: 14px;\n        text-align: center;\n    }\n    section {\n        padding: 20px;\n        text-align: center;\n        font-size: 16px;\n    }\n\n    section > pre {\n        padding: 20px;\n        background: #333;\n        color: #eee;\n        text-align: left;\n        width: 100%;\n        white-space: pre-wrap;\n        font-size: 13px;\n    }\n    </style>\n</head>\n<body>\n<img id="logo" src="data:image/png;base64,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" alt="">\n<main>\n    <header>\n        <div class="title">Something went wrong</div>\n    </header>\n    <section>\n        {{ message }}\n        <pre>{{ trace }}</pre>\n    </section>\n    <footer>\n        {{ title }}\n    </footer>\n</main>\n</body>\n</html>\n',s=e.error.title||e.error.constructor.name;e.error.statusCode&&(s="<span> "+e.error.statusCode+"</span> - "+s),t=t.replace("{{ title }}",s),t=t.replace("{{ message }}",e.error.message),t=t.replace("{{ trace }}",e.error.stack),e.setResponse(new x(t))}}class C{constructor(){this.storage=new Map}delete(e){this.storage.delete(e)}gc(){const e=(new Date).getTime(),t=[];this.storage.forEach(((s,r)=>{e>s.ttl&&t.push(r)})),t.forEach((e=>this.storage.delete(e)))}get(e){return this.storage.has(e)?this.storage.get(e).data:void 0}set(e,t){this.storage.set(e,{data:t,ttl:(new Date).getTime()+864e5})}}class b{constructor(e){try{this.data=JSON.parse(e)||{}}catch(e){this.data={}}}has(e){return void 0!==this.data[e]}get(e,t){return this.has(e)?this.data[e]:t}set(e,t){this.data[e]=t}delete(e){delete this.data[e]}toString(){return JSON.stringify(this.data)}}class M{constructor(e,t){this.sessionStorage=e,this.cookieName=t,this.sessionData=new Map}onRequest(e){const t=e.request.cookies.get(this.cookieName);this.sessionData.set(e.request,new b(t?this.sessionStorage.get(t):"{}"))}onResponse(e){const t=e.request.cookies.get(this.cookieName)||this.generateSessionId();this.sessionStorage.set(t,this.sessionData.get(e.request).toString()),e.response.cookies.set(this.cookieName,t,0)}getSessionByRequest(e){return this.sessionData.get(e)}generateSessionId(){return[...Array(64)].map((e=>(~~(36*Math.random())).toString(36))).join("")}}class k{constructor(e,t){this.directories=e,this.requestEventListeners=[],this.responseEventListeners=[],this.defaultMimeTypes={txt:"text/plain",html:"text/html",js:"text/javascript",css:"text/css",gif:"image/gif",png:"image/png",svg:"image/svg",json:"application/json"},t||(t=e=>this.defaultMimeTypes[e]||"application/octet-stream"),this.lookupMimeType=t}registerStaticRequestEventListener(e){this.requestEventListeners.push(e),this.requestEventListeners=this.requestEventListeners.sort(((e,t)=>e.priority>t.priority?-1:1))}registerStaticResponseEventListener(e){this.responseEventListeners.push(e),this.responseEventListeners=this.responseEventListeners.sort(((e,t)=>e.priority>t.priority?-1:1))}async onErrorEvent(e){if(!(e.error instanceof U))return;const t=this.lookup(e.request.path);if(!t)return;const s=await this.lookupMimeType(E.default.extname(t).replace(/^\./,"").toLowerCase()),r=new f(e.request,t,s);let i=!1;for(let t of this.requestEventListeners)if(i=!1===await t.callback(r),r.hasResponse()&&!e.hasResponse()&&e.setResponse(r.getResponse()),i)break;const n=new u(a.default.readFileSync(t),exports.HttpStatus.OK,s),o=new A(e.request,n,t,s);i=!1;for(let t of this.responseEventListeners)if(i=!1===await t.callback(o),r.hasResponse()&&!e.hasResponse()&&e.setResponse(r.getResponse()),i)break;e.hasResponse()||e.setResponse(n)}lookup(e){for(let t of this.directories){let s=E.default.resolve(t,e.replace(/^\//,""));if(!1!==s.toLowerCase().startsWith(t.toLowerCase())&&a.default.existsSync(s))return s}}}class q{constructor(e){this.templateDirectories=e,this.renderEventListeners=[]}registerRenderEventListener(e){this.renderEventListeners.push(e),this.renderEventListeners=this.renderEventListeners.sort(((e,t)=>e.priority>t.priority?-1:1))}async render(e,t,s,r){r=r||{};const i=this.findTemplateFile(s.name);if(!i)throw new U('The template "'+s.name+'" could not be found. Looked in "'+this.templateDirectories.join('", "')+'".');const n=new _(s.options,e,t,i,r);for(let e of this.renderEventListeners)if(await e.callback(n),n.hasResponse())return n.getResponse();throw new D('No available template renderer is able to render "'+s.name+'".')}findTemplateFile(e){for(let t of this.templateDirectories){const r=E.default.resolve(t,e);if(s.existsSync(r))return r}}}exports.Bag=h,exports.Cookie=l,exports.CookieBag=p,exports.ErrorEvent=T,exports.Harmony=class{constructor(e){this.options=e,this.errorEventListeners=[],this.requestEventListeners=[],this.responseEventListeners=[],this.router=new v,this.server=e.enableHttps?o.default.createServer(e.httpsOptions,this.handle.bind(this)):n.default.createServer(this.handle.bind(this)),this.registerErrorEventListener((new w).onServerError,-1/0),e.controllers&&e.controllers.forEach((e=>this.registerController(e))),e.errorEventListeners&&e.errorEventListeners.forEach((e=>this.registerErrorEventListener(e.callback,e.priority))),e.requestEventListeners&&e.requestEventListeners.forEach((e=>this.registerRequestEventListener(e.callback,e.priority))),e.responseEventListeners&&e.responseEventListeners.forEach((e=>this.registerResponseEventListener(e.callback,e.priority))),e.enableSession&&(e.session=e.session||{},this.sessionManager=new M(e.session.storage||new C,e.session.cookieName||"HARMONY_SID"),this.registerRequestEventListener((e=>this.sessionManager.onRequest(e)),1/0),this.registerResponseEventListener((e=>this.sessionManager.onResponse(e)),-1/0)),e.static=e.static||{},e.static.publicDirectories&&e.static.publicDirectories.length>0&&(this.staticAssetHandler=new k(e.static.publicDirectories,e.static.lookupMimeType),this.registerErrorEventListener((e=>this.staticAssetHandler.onErrorEvent(e)),1/0),Array.isArray(e.static.staticRequestEventListeners)&&e.static.staticRequestEventListeners.length>0&&e.static.staticRequestEventListeners.forEach((e=>{this.staticAssetHandler.registerStaticRequestEventListener(e)})),Array.isArray(e.static.staticResponseEventListeners)&&e.static.staticResponseEventListeners.length>0&&e.static.staticResponseEventListeners.forEach((e=>{this.staticAssetHandler.registerStaticResponseEventListener(e)}))),e.templating&&e.templating.templateDirectories&&(this.templateManager=new q(e.templating.templateDirectories),Array.isArray(e.templating.renderEventListeners)&&e.templating.renderEventListeners.length>0&&e.templating.renderEventListeners.forEach((e=>{this.templateManager.registerRenderEventListener(e)})))}start(){this.server.listen(this.options.port||8e3)}use(e){e.install(this)}registerController(e){this.router.registerController(e)}registerErrorEventListener(e,t=0){this.errorEventListeners.push({callback:e,priority:t}),this.errorEventListeners=this.errorEventListeners.sort(((e,t)=>e.priority>t.priority?-1:1))}registerRequestEventListener(e,t=0){this.requestEventListeners.push({callback:e,priority:t}),this.requestEventListeners=this.requestEventListeners.sort(((e,t)=>e.priority>t.priority?-1:1))}registerResponseEventListener(e,t=0){this.responseEventListeners.push({callback:e,priority:t}),this.responseEventListeners=this.responseEventListeners.sort(((e,t)=>e.priority>t.priority?-1:1))}registerStaticRequestEventListener(e,t=0){if(void 0===this.staticAssetHandler)throw new Error("Unable to register a static request event listener because static resource handling is disabled. Please ensure at least one public directory is configured.");this.staticAssetHandler.registerStaticRequestEventListener({callback:e,priority:t})}registerStaticResponseEventListener(e,t=0){if(void 0===this.staticAssetHandler)throw new Error("Unable to register a static response event listener because static resource handling is disabled. Please ensure at least one public directory is configured.");this.staticAssetHandler.registerStaticResponseEventListener({callback:e,priority:t})}registerRenderTemplateListener(e,t=0){if(void 0===this.templateManager)throw new Error("Unable to register a render template event listener because templating is currently disabled. Please ensure that at least one template directory is configured.");this.templateManager.registerRenderEventListener({callback:e,priority:t})}async handle(e,t){const s=new I(e),r=this.router.findByRequest(s);let i;try{if(!r)throw new U;if(i=this.options.serviceContainer?this.options.serviceContainer.get(r._controller[0]):new r._controller[0],"function"!=typeof i[r._controller[1]])throw new D('Method "'+r._controller[1]+'" is not an accessible method in this controller.');const e=new g(s,r);let n,o=!1;for(let t of this.requestEventListeners)if(o=!1===await t.callback(e),n||!e.hasResponse()||e.getResponse().isSent||(n=e.getResponse()),o)break;if(!(n||(n=await this.handleControllerAction(i,r._controller[1],r,s),n instanceof u))){if(i.__TEMPLATES__&&i.__TEMPLATES__[r._controller[1]]){const e=this.sessionManager?this.sessionManager.getSessionByRequest(s):void 0;n=await this.templateManager.render(s,e,i.__TEMPLATES__[r._controller[1]],n)}if(!(n instanceof u))throw new D('Method "'+r._controller[1]+'" did not return a Response object.')}const a=new O(s,r,n);for(let e of this.responseEventListeners)if(!1===e.callback(a))break;n.isSent||n.send(t)}catch(e){const n=new T(e,s,i,r?r._controller[1]:void 0);let o=!1;for(let s of this.errorEventListeners){const r=!1===await s.callback(n);if(!1===o&&n.hasResponse()){const s=n.getResponse();!1===s.isSent&&(s.statusCode===exports.HttpStatus.OK&&e.statusCode&&(s.statusCode=e.statusCode),s.send(t),o=!0)}if(r)return}}}async handleControllerAction(e,t,s,r){const i=e[t],n=[],o=Object.values(r.parameters.all);for(let e=0;e<s.signature.length;e++){const t=s.signature[e];if(t.type===I)n.push(r),o.unshift(null);else if(t.type===b){if(!this.sessionManager)throw new D("Controller attempted to access Session, but sessions are disabled.");n.push(this.sessionManager.getSessionByRequest(r)),o.unshift(null)}else n.push(o[e])}return await i(...n)}},exports.HtmlResponse=x,exports.JsonResponse=class extends u{constructor(e,t=exports.HttpStatus.OK,s=!0){super(s?JSON.stringify(e,null,4):JSON.stringify(e),t,"application/json")}},exports.RenderTemplateEvent=_,exports.Request=I,exports.RequestEvent=g,exports.Response=u,exports.ResponseEvent=O,exports.Route=function(e,t){return t=t||{},function(s,r,i){void 0===s.__ROUTES__&&(s.__ROUTES__={}),void 0===s.__ROUTES__[r]&&(s.__ROUTES__[r]=[]);const n=[],o=Reflect.getMetadata("design:paramtypes",s,r),a=/^(\w+)\(([A-Za-z0-9_,\s]+)\)/i.exec(s[r].toString()),E=a&&a[2]?a[2].split(",").map((e=>e.trim())):[];if(E)for(let e=0;e<E.length;e++)n.push({name:E[e],type:o[e]});s.__ROUTES__[r].push({path:e,method:t.method||"GET",signature:n})}},exports.Router=v,exports.Session=b,exports.StaticRequestEvent=f,exports.StaticResponseEvent=A,exports.Template=function(e,t){return t=t||{},function(s,r,i){if(void 0===s.__TEMPLATES__){const e={};Object.defineProperty(s,"__TEMPLATES__",{configurable:!1,enumerable:!1,get:()=>e})}if(void 0!==s.__TEMPLATES__[r])throw new Error('Multiple @Template annotations found for method "'+r+'".');s.__TEMPLATES__[r]={name:e,options:t}}};
//# sourceMappingURL=index.js.map
