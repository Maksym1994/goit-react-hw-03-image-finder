(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__28Xu0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3xegF"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1FRcY",Modal:"Modal_Modal__1VTu5"}},25:function(e,t,a){e.exports={Button:"Button_Button__2CdBJ"}},31:function(e,t,a){},32:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),o=a.n(c),s=(a(31),a(4)),i=a(5),l=a(7),u=a(6),m=(a(32),a(8)),h=a.n(m),d=a(0),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictureName:""},e.handleChange=function(t){e.setState({pictureName:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.pictureName.trim()?(e.props.onSubmit(e.state.pictureName),e.setState({pictureName:""})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.pictureName;return Object(d.jsx)("header",{className:h.a.Searchbar,children:Object(d.jsxs)("form",{className:h.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(d.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:h.a.SearchFormInput,value:e,onChange:this.handleChange,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=a(15),b=a(24),g=a.n(b),f=function(e,t){return g.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22683403-802ec757cc56aeed5d838f42d","&image_type=photo&orientation=horizontal&per_page=12"))},O=a(13),y=a.n(O),v=function(e){var t=e.images,a=e.onClick;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(d.jsx)("li",{className:y.a.ImageGalleryItem,onClick:function(){return a(r)},children:Object(d.jsx)("img",{src:n,alt:t,className:y.a.ImageGalleryItemImage})},t)}))},S=a(9),_=a.n(S),x=a(14),I=a.n(x),N=document.querySelector("#modal-root"),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.id;return Object(c.createPortal)(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:I.a.Modal,children:Object(d.jsx)("img",{src:t,alt:a})})})}),N)}}]),a}(n.Component),k=a(25),C=a.n(k),B=function(e){var t=e.onClick;return Object(d.jsx)("button",{onClick:t,type:"button",className:C.a.Button,children:"Load more..."})},F=a(26),G=a.n(F),M=(a(73),function(){return Object(d.jsx)(G.a,{type:"Puff",color:"red",height:90,width:90})}),L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:"idle",page:1,searchPicture:null,showButton:!1},e.handleSelectedImage=function(t){e.setState({searchPicture:t})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.pictureName,r=this.state.page;e.pictureName!==n&&(this.setState({images:null,page:1,status:"pending"}),f(n,1).then((function(e){0!==e.data.total?a.setState({images:e.data.hits,showButton:!0,status:"resolved"}):a.setState({status:"rejected"})}))),t.page!==r&&1!==r&&f(n,r).then((function(e){var n=e.data.hits;a.setState({images:[].concat(Object(j.a)(t.images),Object(j.a)(n)),status:"resolved",showButton:!0}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.searchPicture,n=e.status,r=e.showButton;return"idle"===n?Object(d.jsx)("h2",{className:_.a.title,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}):"rejected"===n?Object(d.jsxs)("h2",{className:_.a.title,children:["\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",this.props.pictureName," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"]}):Object(d.jsxs)(d.Fragment,{children:["pending"===n&&Object(d.jsx)("div",{className:_.a.loader,children:Object(d.jsx)(M,{})}),"resolved"===n&&Object(d.jsx)("ul",{className:_.a.ImageGallery,children:Object(d.jsx)(v,{images:t,onClick:this.handleSelectedImage})}),r&&Object(d.jsx)(B,{onClick:this.handleLoadMore}),a&&Object(d.jsx)(w,{src:a,onCloseModal:this.handleSelectedImage})]})}}]),a}(n.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictureName:""},e.handleFormSubmit=function(t){e.setState({pictureName:t,page:1,images:[]})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.pictureName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(L,{pictureName:e})]})}}]),a}(n.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1yHwE",SearchForm:"Searchbar_SearchForm__3stHf",SearchFormButton:"Searchbar_SearchFormButton__SB8kz",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2Y4cG",SearchFormInput:"Searchbar_SearchFormInput__3VcXK"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3nP8_",loader:"ImageGallery_loader__zxfsR",title:"ImageGallery_title__1k9pZ"}}},[[74,1,2]]]);
//# sourceMappingURL=main.d716656e.chunk.js.map