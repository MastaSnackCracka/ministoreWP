/*! For license information please see new-front.js.LICENSE.txt */
!function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};String.prototype.startsWith=String.prototype.startsWith||function(e){return 0===this.indexOf(e)},String.prototype.padStart=String.prototype.padStart||function(e,t){for(var i=this;i.length<e;)i=t+i;return i};var n={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=t>0?e.toFixed(t).replace(/0+$/,"").replace(/\.$/,""):e.toString();return i||"0"}var o=function(){function o(t,n,r,s){e(this,o);var a=this;if(void 0===t);else if(Array.isArray(t))this.rgba=t;else if(void 0===r){var c=t&&""+t;c&&function(e){if(e.startsWith("hsl")){var t=e.match(/([\-\d\.e]+)/g).map(Number),n=i(t,4),r=n[0],s=n[1],c=n[2],p=n[3];void 0===p&&(p=1),r/=360,s/=100,c/=100,a.hsla=[r,s,c,p]}else if(e.startsWith("rgb")){var l=e.match(/([\-\d\.e]+)/g).map(Number),u=i(l,4),h=u[0],d=u[1],f=u[2],g=u[3];void 0===g&&(g=1),a.rgba=[h,d,f,g]}else e.startsWith("#")?a.rgba=o.hexToRgb(e):a.rgba=o.nameToRgb(e)||o.hexToRgb(e)}(c.toLowerCase())}else this.rgba=[t,n,r,void 0===s?1:s]}return t(o,[{key:"printRGB",value:function(e){var t=(e?this.rgba:this.rgba.slice(0,3)).map((function(e,t){return r(e,3===t?3:0)}));return e?"rgba("+t+")":"rgb("+t+")"}},{key:"printHSL",value:function(e){var t=[360,100,100,1],i=["","%","%",""],n=(e?this.hsla:this.hsla.slice(0,3)).map((function(e,n){return r(e*t[n],3===n?3:1)+i[n]}));return e?"hsla("+n+")":"hsl("+n+")"}},{key:"printHex",value:function(e){var t=this.hex;return e?t:t.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=o.hslToRgb(this._hsla)},set:function(e){3===e.length&&(e[3]=1),this._rgba=e,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=o.rgbToHsl(this._rgba)},set:function(e){3===e.length&&(e[3]=1),this._hsla=e,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){return"#"+this.rgba.map((function(e,t){return t<3?e.toString(16):Math.round(255*e).toString(16)})).map((function(e){return e.padStart(2,"0")})).join("")},set:function(e){this.rgba=o.hexToRgb(e)}}],[{key:"hexToRgb",value:function(e){var t=(e.startsWith("#")?e.slice(1):e).replace(/^(\w{3})$/,"$1F").replace(/^(\w)(\w)(\w)(\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/,"$1FF");if(!t.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+e);var i=t.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map((function(e){return parseInt(e,16)}));return i[3]=i[3]/255,i}},{key:"nameToRgb",value:function(e){var t=e.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),i=n[t];return void 0===i?i:o.hexToRgb(i.replace(/\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(e){var t=i(e,4),n=t[0],r=t[1],o=t[2],s=t[3];n/=255,r/=255,o/=255;var a=Math.max(n,r,o),c=Math.min(n,r,o),p=void 0,l=void 0,u=(a+c)/2;if(a===c)p=l=0;else{var h=a-c;switch(l=u>.5?h/(2-a-c):h/(a+c),a){case n:p=(r-o)/h+(r<o?6:0);break;case r:p=(o-n)/h+2;break;case o:p=(n-r)/h+4}p/=6}return[p,l,u,s]}},{key:"hslToRgb",value:function(e){var t=i(e,4),n=t[0],r=t[1],o=t[2],s=t[3],a=void 0,c=void 0,p=void 0;if(0===r)a=c=p=o;else{var l=function(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},u=o<.5?o*(1+r):o+r-o*r,h=2*o-u;a=l(h,u,n+1/3),c=l(h,u,n),p=l(h,u,n-1/3)}var d=[255*a,255*c,255*p].map(Math.round);return d[3]=s,d}}]),o}(),s=function(){function i(){e(this,i),this._events=[]}return t(i,[{key:"add",value:function(e,t,i){e.addEventListener(t,i,!1),this._events.push({target:e,type:t,handler:i})}},{key:"remove",value:function(e,t,n){this._events=this._events.filter((function(r){var o=!0;return e&&e!==r.target&&(o=!1),t&&t!==r.type&&(o=!1),n&&n!==r.handler&&(o=!1),o&&i._doRemove(r.target,r.type,r.handler),!o}))}},{key:"destroy",value:function(){this._events.forEach((function(e){return i._doRemove(e.target,e.type,e.handler)})),this._events=[]}}],[{key:"_doRemove",value:function(e,t,i){e.removeEventListener(t,i,!1)}}]),i}();function a(e,t,i){var n=!1;function r(e,t,i){return Math.max(t,Math.min(e,i))}function o(e,o,s){if(s&&(n=!0),n){e.preventDefault();var a=t.getBoundingClientRect(),c=a.width,p=a.height,l=o.clientX,u=o.clientY,h=r(l-a.left,0,c),d=r(u-a.top,0,p);i(h/c,d/p)}}function s(e,t){1===(void 0===e.buttons?e.which:e.buttons)?o(e,e,t):n=!1}function a(e,t){1===e.touches.length?o(e,e.touches[0],t):n=!1}e.add(t,"mousedown",(function(e){s(e,!0)})),e.add(t,"touchstart",(function(e){a(e,!0)})),e.add(window,"mousemove",s),e.add(t,"touchmove",a),e.add(window,"mouseup",(function(e){n=!1})),e.add(t,"touchend",(function(e){n=!1})),e.add(t,"touchcancel",(function(e){n=!1}))}var c="keydown",p="mousedown",l="focusin";function u(e,t){return(t||document).querySelector(e)}function h(e){e.preventDefault(),e.stopPropagation()}function d(e,t,i,n,r){e.add(t,c,(function(e){i.indexOf(e.key)>=0&&(r&&h(e),n(e))}))}var f=function(){function i(t){e(this,i),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1,defaultColor:"#0cf"},this._events=new s,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(t)}return t(i,[{key:"setOptions",value:function(e){var t=this;if(e){var i=this.settings;if(e instanceof HTMLElement)i.parent=e;else{i.parent&&e.parent&&i.parent!==e.parent&&(this._events.remove(i.parent),this._popupInited=!1),function(e,t,i){for(var n in e)i&&i.indexOf(n)>=0||(t[n]=e[n])}(e,i),e.onChange&&(this.onChange=e.onChange),e.onDone&&(this.onDone=e.onDone),e.onOpen&&(this.onOpen=e.onOpen),e.onClose&&(this.onClose=e.onClose);var n=e.color||e.colour;n&&this._setColor(n)}var r=i.parent;if(r&&i.popup&&!this._popupInited){var o=function(e){return t.openHandler(e)};this._events.add(r,"click",o),d(this._events,r,[" ","Spacebar","Enter"],o),this._popupInited=!0}else e.parent&&!i.popup&&this.show()}}},{key:"openHandler",value:function(e){if(this.show()){e&&e.preventDefault(),this.settings.parent.style.pointerEvents="none";var t=e&&e.type===c?this._domEdit:this.domElement;setTimeout((function(){return t.focus()}),100),this.onOpen&&this.onOpen(this.colour)}}},{key:"closeHandler",value:function(e){var t=e&&e.type,i=!1;if(e)if(t===p||t===l){var n=(this.__containedEvent||0)+100;e.timeStamp>n&&(i=!0)}else h(e),i=!0;else i=!0;i&&this.hide()&&(this.settings.parent.style.pointerEvents="",t!==p&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(e,t){this.closeHandler(),this.setOptions(e),t&&this.openHandler()}},{key:"setColor",value:function(e,t){this._setColor(e,{silent:t})}},{key:"_setColor",value:function(e,t){if("string"==typeof e&&(e=e.trim()),e){t=t||{};var i=void 0;try{i=new o(e)}catch(e){if(t.failSilently)return;throw e}if(!this.settings.alpha){var n=i.hsla;n[3]=1,i.hsla=n}this.colour=this.color=i,this._setHSLA(null,null,null,null,t)}}},{key:"setColour",value:function(e,t){this.setColor(e,t)}},{key:"show",value:function(){if(!this.settings.parent)return!1;if(this.domElement){var e=this._toggleDOM(!0);return this._setPosition(),e}var t,i,n=this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',r=(t=n,(i=document.createElement("div")).innerHTML=t,i.firstElementChild);return this.domElement=r,this._domH=u(".picker_hue",r),this._domSL=u(".picker_sl",r),this._domA=u(".picker_alpha",r),this._domEdit=u(".picker_editor input",r),this._domSample=u(".picker_sample",r),this._domOkay=u(".picker_done button",r),this._domCancel=u(".picker_cancel button",r),r.classList.add("layout_"+this.settings.layout),this.settings.alpha||r.classList.add("no_alpha"),this.settings.editor||r.classList.add("no_editor"),this.settings.cancelButton||r.classList.add("no_cancel"),this._ifPopup((function(){return r.classList.add("popup")})),this._setPosition(),this.colour?this._updateUI():this._setColor(this.settings.defaultColor),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var e=this,t=this,i=this.domElement,n=this._events;function r(e,t,i){n.add(e,t,i)}r(i,"click",(function(e){return e.preventDefault()})),a(n,this._domH,(function(e,i){return t._setHSLA(e)})),a(n,this._domSL,(function(e,i){return t._setHSLA(null,e,1-i)})),this.settings.alpha&&a(n,this._domA,(function(e,i){return t._setHSLA(null,null,null,1-i)}));var o=this._domEdit;r(o,"input",(function(e){t._setColor(this.value,{fromEditor:!0,failSilently:!0})})),r(o,"focus",(function(e){var t=this;t.selectionStart===t.selectionEnd&&t.select()})),this._ifPopup((function(){var t=function(t){return e.closeHandler(t)};r(window,p,t),r(window,l,t),d(n,i,["Esc","Escape"],t);var o=function(t){e.__containedEvent=t.timeStamp};r(i,p,o),r(i,l,o),r(e._domCancel,"click",t)}));var s=function(t){e._ifPopup((function(){return e.closeHandler(t)})),e.onDone&&e.onDone(e.colour)};r(this._domOkay,"click",s),d(n,i,["Enter"],s)}},{key:"_setPosition",value:function(){var e=this.settings.parent,t=this.domElement;e!==t.parentNode&&e.appendChild(t),this._ifPopup((function(i){"static"===getComputedStyle(e).position&&(e.style.position="relative");var n=!0===i?"popup_right":"popup_"+i;["popup_top","popup_bottom","popup_left","popup_right"].forEach((function(e){e===n?t.classList.add(e):t.classList.remove(e)})),t.classList.add(n)}))}},{key:"_setHSLA",value:function(e,t,i,n,r){r=r||{};var o=this.colour,s=o.hsla;[e,t,i,n].forEach((function(e,t){(e||0===e)&&(s[t]=e)})),o.hsla=s,this._updateUI(r),this.onChange&&!r.silent&&this.onChange(o)}},{key:"_updateUI",value:function(e){if(this.domElement){e=e||{};var t=this.colour,i=t.hsla,n="hsl("+360*i[0]+", 100%, 50%)",r=t.hslString,o=t.hslaString,s=this._domH,a=this._domSL,c=this._domA,p=u(".picker_selector",s),l=u(".picker_selector",a),h=u(".picker_selector",c);b(0,p,i[0]),this._domSL.style.backgroundColor=this._domH.style.color=n,b(0,l,i[1]),m(0,l,1-i[2]),a.style.color=r,m(0,h,1-i[3]);var d=r,f=d.replace("hsl","hsla").replace(")",", 0)"),g="linear-gradient("+[d,f]+")";if(this._domA.style.background=g+", linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em",!e.fromEditor){var v=this.settings.editorFormat,_=this.settings.alpha,k=void 0;switch(v){case"rgb":k=t.printRGB(_);break;case"hsl":k=t.printHSL(_);break;default:k=t.printHex(_)}this._domEdit.value=k}this._domSample.style.color=o}function b(e,t,i){t.style.left=100*i+"%"}function m(e,t,i){t.style.top=100*i+"%"}}},{key:"_ifPopup",value:function(e,t){this.settings.parent&&this.settings.popup?e&&e(this.settings.popup):t&&t()}},{key:"_toggleDOM",value:function(e){var t=this.domElement;if(!t)return!1;var i=e?"":"none",n=t.style.display!==i;return n&&(t.style.display=i),n}}]),i}(),g=document.createElement("style");function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}g.textContent='.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{flex:1 1 auto}.layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.layout_default .picker_editor{order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{order:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:#fff}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.picker_alpha,.picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}',document.documentElement.firstElementChild.appendChild(g),f.StyleElement=g;var k=function(){function e(t){v(this,e),this.input=t,this.setVars()&&(this.loadWidget(),this.setEvents())}var t,i,n;return t=e,(i=[{key:"setVars",value:function(){if("1"!==this.input.getAttribute("data-colorpicker-loaded"))return this.input.setAttribute("data-colorpicker-loaded","1"),this.picker=null,!0}},{key:"setEvents",value:function(){this.input.addEventListener("click",this.openWidget.bind(this))}},{key:"loadWidget",value:function(){var e=this;this.picker||(this.picker=new f({parent:this.input.parentNode,popup:"top",alpha:!1,color:this.input.value,onClose:function(t){e.input.value=t.hex.substr(0,7),setTimeout(e.sendEventChange.bind(e,e.input),0)}}))}},{key:"openWidget",value:function(){this.picker.show()}},{key:"sendEventChange",value:function(e){var t=document.createEvent("Event");t.initEvent("change",!0,!0),e.dispatchEvent(t)}}])&&_(t.prototype,i),n&&_(t,n),e}(),b=function e(){if(v(this,e),this.inputs=document.querySelectorAll(".fpf-color input"),this.inputs.length)for(var t=0;t<this.inputs.length;t++)new k(this.inputs[t])};function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(t){m(this,e),this.input=t,this.setVars()&&(this.checkValue(),this.setEvents())}var t,i,n;return t=e,i=[{key:"setVars",value:function(){if("1"!==this.input.getAttribute("data-timepicker-loaded"))return this.input.setAttribute("data-timepicker-loaded","1"),this.atts={minute_step:"data-minute-step",hour_12:"data-hour-12"},this.classes={picker_wrapper:"fpf-colorpicker",picker_wrapper_open:"fpf-colorpicker-open",picker_select:"fpf-colorpicker-select",picker_separator:"fpf-colorpicker-separator"},this.config={minute_step:parseInt(this.input.getAttribute(this.atts.minute_step)||1),hour_12:"1"===this.input.getAttribute(this.atts.hour_12)},this.events={close_picker:this.closeWidget.bind(this),check_value:this.checkValue.bind(this)},this.picker=null,this.select_hour=null,this.select_minute=null,this.select_clock=null,!0}},{key:"setEvents",value:function(){this.input.addEventListener("click",this.openWidget.bind(this)),this.input.addEventListener("change",this.events.check_value)}},{key:"checkValue",value:function(){var e=this.config.hour_12?this.input.value.match(/^([0-9]{2}):([0-9]{2}) (AM|PM)$/):this.input.value.match(/^([0-9]{2}):([0-9]{2})$/),t=e&&e[1]||null,i=e&&e[2]||null,n=e&&e[3]||null;this.loadWidget(t,i,n),e&&this.updateValue()}},{key:"loadWidget",value:function(e,t,i){this.picker&&document.body.removeChild(this.picker),this.picker=document.createElement("div"),this.picker.classList.add(this.classes.picker_wrapper);var n=document.createElement("div");n.classList.add(this.classes.picker_separator),n.innerText=":",this.select_hour=this.generateHourSelect(e,this.config.hour_12?1:0,this.config.hour_12?12:23),this.select_hour.classList.add(this.classes.picker_select),this.select_hour.addEventListener("change",this.updateValue.bind(this)),this.select_minute=this.generateHourSelect(t,0,59,this.config.minute_step),this.select_minute.classList.add(this.classes.picker_select),this.select_minute.addEventListener("change",this.updateValue.bind(this)),this.config.hour_12&&(this.select_clock=this.generateClockSelect(i),this.select_clock.classList.add(this.classes.picker_select),this.select_clock.addEventListener("change",this.updateValue.bind(this))),this.picker.appendChild(this.select_hour),this.picker.appendChild(n),this.picker.appendChild(this.select_minute),this.select_clock&&this.picker.appendChild(this.select_clock),this.picker.addEventListener("click",(function(e){e.stopPropagation()})),document.body.appendChild(this.picker)}},{key:"generateHourSelect",value:function(e,t,i){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=document.createElement("select"),o=t;o<=i;o+=n)if(o%n==0){var s=document.createElement("option"),a=o<10?"0".concat(o):o;s.setAttribute("value",a),a.toString()===e&&s.setAttribute("selected","selected"),s.innerText=a,r.appendChild(s)}return r}},{key:"generateClockSelect",value:function(e){for(var t=document.createElement("select"),i=["AM","PM"],n=0;n<i.length;n++){var r=document.createElement("option");r.setAttribute("value",i[n]),i[n]===e&&r.setAttribute("selected","selected"),r.innerText=i[n],t.appendChild(r)}return t}},{key:"openWidget",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=this.input.getBoundingClientRect();this.picker.style.top="".concat(e+t.top+t.height,"px"),this.picker.style.left="".concat(t.left,"px"),this.picker.classList.add(this.classes.picker_wrapper_open),window.addEventListener("click",this.events.close_picker)}},{key:"closeWidget",value:function(){this.picker.classList.remove(this.classes.picker_wrapper_open),window.removeEventListener("click",this.events.close_picker)}},{key:"updateValue",value:function(){var e="".concat(this.select_hour.value,":").concat(this.select_minute.value);this.config.hour_12&&(e+=" ".concat(this.select_clock.value)),this.sendEventChange(e)}},{key:"sendEventChange",value:function(e){this.input.value=e,this.input.removeEventListener("change",this.events.check_value);var t=document.createEvent("Event");t.initEvent("change",!0,!0),this.input.dispatchEvent(t),this.input.addEventListener("change",this.events.check_value)}}],i&&w(t.prototype,i),n&&w(t,n),e}(),E=function e(){if(m(this,e),this.inputs=document.querySelectorAll(".fpf-time input"),this.inputs.length)for(var t=0;t<this.inputs.length;t++)new y(this.inputs[t])};new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new b,new E}}();