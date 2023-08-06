"use strict";(self.webpackChunkammarIsrar=self.webpackChunkammarIsrar||[]).push([[772],{5772:(ie,Z,o)=>{o.r(Z),o.d(Z,{HomepageModule:()=>se});var p=o(6814),x=o(6717),b=o(8645),M=o(7394);class S extends M.w0{constructor(n,t){super()}schedule(n,t=0){return this}}const c={setInterval(s,n,...t){const{delegate:i}=c;return i?.setInterval?i.setInterval(s,n,...t):setInterval(s,n,...t)},clearInterval(s){const{delegate:n}=c;return(n?.clearInterval||clearInterval)(s)},delegate:void 0};var z=o(9039);const w={now:()=>(w.delegate||Date).now(),delegate:void 0};class d{constructor(n,t=d.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,i){return new this.schedulerActionCtor(this,n).schedule(i,t)}}d.now=w.now;const h=new class O extends d{constructor(n,t=d.now){super(n,t),this.actions=[],this._active=!1}flush(n){const{actions:t}=this;if(this._active)return void t.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,i){for(;n=t.shift();)n.unsubscribe();throw i}}}(class H extends S{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var i;if(this.closed)return this;this.state=n;const a=this.id,r=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(r,a,t)),this.pending=!0,this.delay=t,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(r,this.id,t),this}requestAsyncId(n,t,i=0){return c.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;null!=t&&c.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let a,i=!1;try{this.work(n)}catch(r){i=!0,a=r||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:n,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,z.P)(i,this),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}}),R=h;var E=o(5592),P=o(671);function m(s=0,n,t=R){let i=-1;return null!=n&&((0,P.K)(n)?t=n:i=n),new E.y(a=>{let r=function J(s){return s instanceof Date&&!isNaN(s)}(s)?+s-t.now():s;r<0&&(r=0);let l=0;return t.schedule(function(){a.closed||(a.next(l++),0<=i?this.schedule(void 0,i):a.complete())},r)})}var X=o(7398),g=o(8180),A=o(5211),T=o(2096),U=o(9360),f=o(8251),$=o(2420);function v(){return(0,U.e)((s,n)=>{s.subscribe((0,f.x)(n,$.Z))})}var N=o(975),Q=o(1631),I=o(4829);function C(s,n){return n?t=>(0,A.z)(n.pipe((0,g.q)(1),v()),t.pipe(C(s))):(0,Q.z)((t,i)=>(0,I.Xf)(s(t,i)).pipe((0,g.q)(1),(0,N.h)(t)))}function q(s,n=h){const t=m(s,n);return C(()=>t)}var k=o(7715),G=o(6328),L=o(6232),e=o(4946),W=o(9734),Y=o(1384);let K=(()=>{class s{constructor(){this.testimonial="",this.name="",this.designation="",this.company=""}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-testimonial"]],inputs:{testimonial:"testimonial",name:"name",designation:"designation",company:"company"},standalone:!0,features:[e.jDz],decls:16,vars:4,consts:[[1,"bg-white","p-4","w-full","rounded-xl","shadow-lg"],[1,"p-3"],["src","../../../assets/quote.png","alt","Quote",1,"h-8"],[1,"p-2"],[1,"flex","justify-end"],["src","../../../assets/quote.png","alt","Quote",1,"h-8","rotate-180"],[1,"font-bold","text-xl"],[1,"font-bold"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"p",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"img",5),e.qZA()(),e.TgZ(7,"div",1)(8,"p",6),e._uU(9),e.qZA(),e.TgZ(10,"p")(11,"span",7),e._uU(12),e.qZA(),e._uU(13," at "),e.TgZ(14,"span",7),e._uU(15),e.qZA()()()()),2&t&&(e.xp6(4),e.Oqu(i.testimonial),e.xp6(5),e.Oqu(i.name),e.xp6(3),e.Oqu(i.designation),e.xp6(3),e.Oqu(i.company))}}),s})(),j=(()=>{class s{constructor(){this.title="",this.description="",this.asset=""}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-feature"]],inputs:{title:"title",description:"description",asset:"asset"},standalone:!0,features:[e.jDz],decls:8,vars:3,consts:[[1,"grid","grid-cols-4","bg-blue-300","rounded-xl"],[1,"flex","justify-center","items-start","col-span-1","mt-3"],["alt","",1,"p-3","w-28","rounded-3xl",3,"src"],[1,"col-span-3"],[1,"p-text","font-bold"],[1,"p-4","pl-0"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"p",4),e._uU(5),e.qZA(),e.TgZ(6,"p",5),e._uU(7),e.qZA()()()),2&t&&(e.xp6(2),e.MGl("src","../../../assets/",i.asset,".gif",e.LSH),e.xp6(3),e.Oqu(i.title),e.xp6(2),e.Oqu(i.description))},dependencies:[p.ez]}),s})();function _(s,n){if(1&s&&(e.TgZ(0,"div"),e._UZ(1,"app-feature",30),e.qZA()),2&s){const t=n.$implicit;e.xp6(1),e.Q6J("title",t.title)("description",t.description)("asset",t.asset)}}function ee(s,n){if(1&s&&(e.TgZ(0,"div"),e._UZ(1,"app-testimonial",31),e.qZA()),2&s){const t=n.$implicit;e.xp6(1),e.s9C("testimonial",t.testimonial),e.s9C("name",t.name),e.s9C("designation",t.designation),e.s9C("company",t.company)}}const te=[{path:"",component:(()=>{class s{constructor(t){this.contactService=t,this.designation="",this.allDesignations=["a Frontend Developer","a Python Developer","a Django Developer","an Automation Engineer"],this.nameUnsub=new b.x,this.designationsUnsub=new b.x,this.type$=({word:i,speed:a,backwards:r=!1})=>function B(s=0,n=h){return s<0&&(s=0),m(s,s,n)}(a).pipe((0,X.U)(l=>i.substr(0,r?i.length-l-1:l+1)),(0,g.q)(i.length)),this.typeEffect$=i=>(0,A.z)(this.type$({word:i,speed:120}),(0,T.of)("").pipe(q(2e3),v()),this.type$({word:i,speed:60,backwards:!0}),(0,T.of)("").pipe(q(300),v())),this.achievements=[{title:"International Industry experience",description:"Worked with multiple reputed international organizations on B2B products, and received high praise.",asset:"favourite"},{title:"Gold Medalist",description:"Received a gold medal for excellent academic performance, receiving 5 academic scholarships. Got the degree with 3.78 CPGA.",asset:"winner"},{title:"Innovation Mindset",description:"Quality first! Therefore, I always strive for improvement, coming up with with new ideas for features and overall product efficiency.",asset:"idea"},{title:"Adaptive Thinking",description:"I am always learning, and I adapt to the environment. I learn and I strive to improve myself, always growing my knowledge and thought-process.",asset:"options"}],this.testimonials=[{testimonial:"[Ammar] is an independent tech that requires minimal supervision and is also known as an individual who is willing to take risks and he will reach out to people and involve them with projects which already demonstrate that Ammar has been effective in his role and has gained respect from all his peers! An individual who never fears with providing suggestions and opinions with strong characteristics and justification!",name:"Amanda Lai",designation:"Client Delivery Manager",company:"AI-XPRT"},{testimonial:"Ammar has done an excellent job in the Barclays project. In every task that has been assigned to him, Ammar has always ensured to go above and beyond. He is self-motivated, has excellent verbal and written communication skills, and is able to work effectively to ensure the completion of all projects in a timely manner. In addition, Ammar was always willing to offer his assistance and had an excellent rapport with his colleagues, as well as our clients.",name:"Hasheni Jeyakumaran",designation:"Human Resource Manager",company:"AI-XPRT"}]}ngOnDestroy(){this.designationsUnsub.next(),this.designationsUnsub.complete()}ngOnInit(){(0,k.D)(this.allDesignations).pipe((0,G.b)(this.typeEffect$),function V(s){let t,n=1/0;return null!=s&&("object"==typeof s?({count:n=1/0,delay:t}=s):n=s),n<=0?()=>L.E:(0,U.e)((i,a)=>{let l,r=0;const D=()=>{if(l?.unsubscribe(),l=null,null!=t){const u="number"==typeof t?m(t):(0,I.Xf)(t(r)),F=(0,f.x)(a,()=>{F.unsubscribe(),y()});u.subscribe(F)}else y()},y=()=>{let u=!1;l=i.subscribe((0,f.x)(a,void 0,()=>{++r<n?l?D():u=!0:a.complete()})),u&&D()};y()})}()).subscribe({next:t=>{this.designation=t}})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(W.y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-dashboard"]],decls:62,vars:3,consts:[[1,"bg-blue-300"],[1,"text-3xl"],[1,"font-bold"],[1,"m-6","ml-0","md:text-8xl","mobile:text-6xl","font-[500]"],[1,"outline-box"],[1,"mt-10","text-xl"],[1,"text-2xl"],[1,"outline-box","ml-1"],[1,"p-text"],[1,"rounded-xl","m-5","p-2","bg-white","shadow-lg"],[1,"grid","grid-cols-3","place-items-center","gap-2"],[1,"md:p-4","mobile:p-2"],[1,"flex","justify-center","p-heading","text-primary"],[1,"flex","text-center","justify-center","p-text","font-bold"],[1,"mt-6","w-40"],["text","Download CV",3,"click"],[1,"bg-blue-200"],[1,"p-heading"],[1,"text-primary"],[1,"grid","md:grid-cols-2","mobile:grid-cols-1","gap-3","m-10"],[4,"ngFor","ngForOf"],["text","Hire me",3,"click"],[1,"grid","grid-cols-3","gap-4","p-4"],["href","https://www.qvantel.com/",1,"flex","justify-center","w-full","transition","ease-in-out","bg-white","shadow-md","hover:bg-blue-400","rounded-md","hover:shadow-xl"],["src","../../../assets/qvantel_logo.svg","alt","",1,"w-[150px]","p-4"],["href","https://www.ai-xprt.com/",1,"flex","justify-center","w-full","transition","ease-in-out","bg-white","shadow-md","hover:bg-cyan-300","rounded-md","hover:shadow-xl"],["src","../../../assets/ai-xprt_logo.png","alt","",1,"w-[150px]","p-4"],["href","https://autosphere.ai/",1,"flex","justify-center","w-full","transition","ease-in-out","bg-white","shadow-md","hover:bg-purple-500","rounded-md","hover:shadow-xl"],["src","../../../assets/autosphere_logo.svg","alt","",1,"w-[150px]","p-4"],[1,"grid","mobile:grid-cols-1","sm:grid-cols-1","md:grid-cols-2","gap-6","p-4"],[3,"title","description","asset"],[3,"testimonial","name","designation","company"]],template:function(t,i){1&t&&(e.TgZ(0,"html")(1,"body")(2,"section",0)(3,"p",1)(4,"span",2),e._uU(5,"Hello"),e.qZA(),e._uU(6,", I am"),e.qZA(),e.TgZ(7,"p",3)(8,"span",4),e._uU(9,"Ammar Israr"),e.qZA()(),e.TgZ(10,"p",5),e._uU(11,"and I am "),e.TgZ(12,"strong",6)(13,"span",7),e._uU(14),e.qZA()()(),e.TgZ(15,"p",8),e._uU(16,"A passionate Software Engineer, having industry experience from multiple reputed organizations."),e.qZA(),e.TgZ(17,"div",9)(18,"div",10)(19,"div",11)(20,"p",12),e._uU(21,"3"),e.qZA(),e.TgZ(22,"p",13),e._uU(23,"Organizations served"),e.qZA()(),e.TgZ(24,"div",11)(25,"p",12),e._uU(26,"20+"),e.qZA(),e.TgZ(27,"p",13),e._uU(28,"Major features added"),e.qZA()(),e.TgZ(29,"div",11)(30,"p",12),e._uU(31,"10+"),e.qZA(),e.TgZ(32,"p",13),e._uU(33,"Projects worked on"),e.qZA()()()(),e.TgZ(34,"div",14)(35,"app-button",15),e.NdJ("click",function(){return i.contactService.downloadResume()}),e.qZA()()(),e.TgZ(36,"section",16)(37,"p",17),e._uU(38,"Why hire me for your next "),e.TgZ(39,"span",18),e._uU(40,"project?"),e.qZA()(),e.TgZ(41,"div",19),e.YNc(42,_,2,3,"div",20),e.qZA(),e.TgZ(43,"p",8),e._uU(44,"\"The Sky's the limit\". Let's take your project to new heights."),e.qZA(),e.TgZ(45,"div",14)(46,"app-button",21),e.NdJ("click",function(){return i.contactService.sendEmail()}),e.qZA()()(),e.TgZ(47,"section",0)(48,"p",17),e._uU(49,"Organizations served"),e.qZA(),e.TgZ(50,"div",22)(51,"a",23),e._UZ(52,"img",24),e.qZA(),e.TgZ(53,"a",25),e._UZ(54,"img",26),e.qZA(),e.TgZ(55,"a",27),e._UZ(56,"img",28),e.qZA()()(),e.TgZ(57,"section",16)(58,"p",17),e._uU(59,"Recommendations"),e.qZA(),e.TgZ(60,"div",29),e.YNc(61,ee,2,4,"div",20),e.qZA()()()()),2&t&&(e.xp6(14),e.Oqu(i.designation),e.xp6(28),e.Q6J("ngForOf",i.achievements),e.xp6(19),e.Q6J("ngForOf",i.testimonials))},dependencies:[p.sg,Y.r,K,j],styles:[".outline-box[_ngcontent-%COMP%]{border-radius:.75rem;padding:.25rem;--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity));outline-style:solid;outline-width:2px;outline-color:#3b82f6}"]}),s})()}];let ne=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[x.Bz.forChild(te),x.Bz]}),s})(),se=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,ne,j]}),s})()}}]);