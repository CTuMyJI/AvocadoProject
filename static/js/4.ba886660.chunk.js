(this.webpackJsonpavocado=this.webpackJsonpavocado||[]).push([[4],{297:function(e,t,a){e.exports={image:"ProfileInfo_image__2Ok94"}},298:function(e,t,a){e.exports={wrapper:"Post_wrapper__2uvtR",avatar:"Post_avatar__1AvTv",likeCount:"Post_likeCount__1WmJv"}},299:function(e,t,a){"use strict";a.r(t);var n=a(36),l=a(37),s=a(40),r=a(38),o=a(41),u=a(0),i=a.n(u),c=a(39),p=a(94),m=a.n(p),d=a(297),f=a.n(d),E=a(128),h=function(e){var t=Object(u.useState)(!1),a=Object(E.a)(t,2),n=a[0],l=a[1],s=Object(u.useState)(e.status),r=Object(E.a)(s,2),o=r[0],c=r[1];Object(u.useEffect)((function(){c(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-----")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(o)},onChange:function(e){c(e.currentTarget.value)},value:o})))},b=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{src:t.photos.large||m.a,alt:"...",className:f.a.image})),i.a.createElement(h,{status:a,updateStatus:n}),i.a.createElement("h3",null,t.fullName),i.a.createElement("ul",null,"About Me: ",i.a.createElement("h6",null,t.aboutMe)),i.a.createElement("ul",null,"Facebook: ",i.a.createElement("h6",null,t.contacts.facebook)),i.a.createElement("ul",null,"Github: ",i.a.createElement("h6",null,t.contacts.github))):i.a.createElement(c.a,null)},v=a(10),P=a(95),g=a(27),O=a(298),j=a.n(O),k=function(e){return e.profile?i.a.createElement("div",null,i.a.createElement("div",{className:j.a.wrapper},i.a.createElement("img",{className:j.a.avatar,src:e.profile.photos.large||m.a,alt:"..."})),i.a.createElement("div",null,i.a.createElement("ul",null,e.post)),i.a.createElement("div",null,i.a.createElement("ul",null,"Like: ",e.likeCount))):i.a.createElement(c.a,null)},S=a(87),w=a(127),_=a(43),x=a(24),T=Object(_.a)(10),N=Object(w.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(S.a,{placeholder:"Post text",className:"form-control mr-sm-2",component:x.b,name:"newPostText",validate:[_.b,T]})),i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-success btn-lg"},"Add post")))})),C=i.a.memo((function(e){var t=Object(g.a)(e.posts).reverse().map((function(t){return i.a.createElement(k,{key:t.id,post:t.post,likeCount:t.likeCount,profile:e.profile})}));return i.a.createElement("div",null,i.a.createElement("h3",null,"My posts"),i.a.createElement(N,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",null,t))})),y=Object(v.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),{addPost:P.a})(C),A=function(e){return i.a.createElement("div",null,i.a.createElement(b,{profile:e.profile,newPostText:e.newPostText,addPost:e.addPost,updateNewPostText:e.updateNewPostText,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(y,null))},L=a(30),I=a(6),M=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,profileList:this.props.profileList,posts:this.props.posts,addPost:this.props.addPost,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(i.a.Component);t.default=Object(I.d)(Object(v.b)((function(e){return{profile:e.profilePage.profile,posts:e.profilePage.posts,profileList:e.profilePage.profileList,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{addPost:P.a,getUserProfile:P.d,getStatus:P.c,updateStatus:P.e}),L.g)(M)}}]);
//# sourceMappingURL=4.ba886660.chunk.js.map