/*
 * FlashCanvas
 *
 * Copyright (c) 2009 Tim Cameron Ryan
 * Released under the MIT/X License
 *
 * @author Tim Cameron Ryan
 * @author Shinya Muramatsu
 */
window.CanvasRenderingContext2D||function(){function q(a){for(var b=0,d=a.length;b<d;b++)this[a[b]]=b}function m(a){var b=a.f;arguments.callee[b]||(arguments.callee[b]=0);return arguments.callee[b]++}function r(a){var b=a.propertyName;if(b=="width"||b=="height"){a=a.srcElement;var d=a.getContext("2d"),e=parseInt(a[b]);if(isNaN(e)||e<0)e=b=="width"?300:150;a.style[b]=e+"px";d.w(a.clientWidth,a.clientHeight)}}function s(){window.detachEvent("onbeforeunload",arguments.callee);for(var a=document.getElementsByTagName("canvas"),
b=0,d=a.length;b<d;++b){var e=a[b],g=e.firstChild,f;for(f in g)if(typeof g[f]=="function")g[f]=null;for(f in e)if(typeof e[f]=="function")e[f]=null}}var n=function(){var a=document.getElementsByTagName("script");return a[a.length-1].getAttribute("src",2)}().replace(/[^\/]+$/,"")+"flashcanvas.swf",c=new q(["toDataURL","save","restore","scale","rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient",
"createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText","measureText","drawImage","createImageData","getImageData","putImageData","addColorStop"]),i={};function l(a,b){this.canvas=a;this.F=b;this.f=a.uniqueID;
this.q();var d=this;window.setInterval(function(){i[d.f]===0&&d.g()},30)}l.prototype={save:function(){this.l.push({globalAlpha:this.globalAlpha,c:this.c,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,b:this.b,shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this.d();this.e();this.k();
this.i();this.j();this.N();this.a.push(c.save)},restore:function(){if(this.l.length>0){var a=this.l.pop();this.globalAlpha=a.globalAlpha;this.c=a.c;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;this.lineJoin=a.lineJoin;this.b=a.b;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this.a.push(c.restore)},
scale:function(a,b){this.a.push(c.scale,a,b)},rotate:function(a){this.a.push(c.rotate,a)},translate:function(a,b){this.a.push(c.translate,a,b)},transform:function(a,b,d,e,g,f){this.a.push(c.transform,a,b,d,e,g,f)},setTransform:function(a,b,d,e,g,f){this.a.push(c.setTransform,a,b,d,e,g,f)},d:function(){var a=this.a;if(this.o!=this.globalAlpha){this.o=this.globalAlpha;a.push(c.globalAlpha,this.globalAlpha)}if(this.p!=this.c){this.p=this.c;a.push(c.c,this.c)}},k:function(){if(this.D!=this.strokeStyle){var a=
this.D=this.strokeStyle;this.a.push(c.strokeStyle,typeof a=="object"?a.id:a)}},i:function(){if(this.m!=this.fillStyle){var a=this.m=this.fillStyle;this.a.push(c.fillStyle,typeof a=="object"?a.id:a)}},createLinearGradient:function(a,b,d,e){this.a.push(c.createLinearGradient,a,b,d,e);return new k(this)},createRadialGradient:function(a,b,d,e,g,f){this.a.push(c.createRadialGradient,a,b,d,e,g,f);return new k(this)},createPattern:function(a,b){if(a.tagName.toUpperCase()=="IMG"){this.a.push(c.createPattern,
a.src,b);this.g();++i[this.f];return new o(this)}},j:function(){var a=this.a;if(this.t!=this.lineWidth&&isFinite(this.lineWidth)){this.t=this.lineWidth;a.push(c.lineWidth,this.lineWidth)}if(this.r!=this.lineCap){this.r=this.lineCap;a.push(c.lineCap,this.lineCap)}if(this.s!=this.lineJoin){this.s=this.lineJoin;a.push(c.lineJoin,this.lineJoin)}if(this.v!=this.b&&isFinite(this.b)){this.v=this.b;a.push(c.b,this.b)}},e:function(){var a=this.a;if(this.B!=this.shadowOffsetX){this.B=this.shadowOffsetX;a.push(c.shadowOffsetX,
this.shadowOffsetX)}if(this.C!=this.shadowOffsetY){this.C=this.shadowOffsetY;a.push(c.shadowOffsetY,this.shadowOffsetY)}if(this.z!=this.shadowBlur){this.z=this.shadowBlur;a.push(c.shadowBlur,this.shadowBlur)}if(this.A!=this.shadowColor){this.A=this.shadowColor;a.push(c.shadowColor,this.shadowColor)}},clearRect:function(a,b,d,e){this.a.push(c.clearRect,a,b,d,e)},fillRect:function(a,b,d,e){this.d();this.e();this.i();this.a.push(c.fillRect,a,b,d,e)},strokeRect:function(a,b,d,e){this.d();this.e();this.k();
this.j();this.a.push(c.strokeRect,a,b,d,e)},beginPath:function(){this.a.push(c.beginPath)},closePath:function(){this.a.push(c.closePath)},moveTo:function(a,b){this.a.push(c.moveTo,a,b)},lineTo:function(a,b){this.a.push(c.lineTo,a,b)},quadraticCurveTo:function(a,b,d,e){this.a.push(c.quadraticCurveTo,a,b,d,e)},bezierCurveTo:function(a,b,d,e,g,f){this.a.push(c.bezierCurveTo,a,b,d,e,g,f)},arcTo:function(a,b,d,e,g){this.a.push(c.arcTo,a,b,d,e,g)},rect:function(a,b,d,e){this.a.push(c.rect,a,b,d,e)},arc:function(a,
b,d,e,g,f){f=f?1:0;this.a.push(c.arc,a,b,d,e,g,f)},fill:function(){this.d();this.e();this.i();this.a.push(c.fill)},stroke:function(){this.d();this.e();this.k();this.j();this.a.push(c.stroke)},clip:function(){this.a.push(c.clip)},N:function(){var a=this.a;if(this.n!=this.font){this.n=this.font;a.push(c.font,this.font)}if(this.G!=this.textAlign){this.G=this.textAlign;a.push(c.textAlign,this.textAlign)}if(this.H!=this.textBaseline){this.H=this.textBaseline;a.push(c.textBaseline,this.textBaseline)}},
drawImage:function(){var a=arguments,b=a.length;if(a[0].tagName.toUpperCase()=="IMG"){this.d();this.e();if(b==3)this.a.push(c.drawImage,b,a[0].src,a[1],a[2]);else if(b==5)this.a.push(c.drawImage,b,a[0].src,a[1],a[2],a[3],a[4]);else if(b==9)this.a.push(c.drawImage,b,a[0].src,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);else return;this.g();++i[this.f]}},q:function(){this.globalAlpha=this.o=1;this.c=this.p="source-over";this.fillStyle=this.m=this.strokeStyle=this.D="#000000";this.lineWidth=this.t=1;this.lineCap=
this.r="butt";this.lineJoin=this.s="miter";this.b=this.v=10;this.shadowBlur=this.z=this.shadowOffsetY=this.C=this.shadowOffsetX=this.B=0;this.shadowColor=this.A="rgba(0,0,0,0)";this.font=this.n="10px sans-serif";this.textAlign=this.G="start";this.textBaseline=this.H="alphabetic";this.a=[];this.l=[]},L:function(){var a=this.a;this.a=[];return a},g:function(){var a=this.L();if(a.length>0)return eval(this.F.CallFunction('<invoke name="postCommands" returntype="javascript"><arguments><string>'+a.join("&#0;")+
"</string></arguments></invoke>"))},w:function(a,b){this.F.resize(a,b);this.q()}};function k(a){this.K=a;this.id=m(a)}k.prototype={addColorStop:function(a,b){this.K.a.push(c.addColorStop,this.id,a,b)}};function o(a){this.id=m(a)}var h={u:[],M:function(){if(document.readyState=="complete"){document.detachEvent("onreadystatechange",arguments.callee);for(var a=null;a=h.u.shift();)a();h.I=function(b){b()}}},I:function(a){h.u.push(a)},h:null,O:function(a,b){if(!h.h){h.h=document.createStyleSheet();h.h.cssText=
""}h.h.cssText+=a+" { "+b+"}"}};document.attachEvent("onreadystatechange",h.M);var j={J:function(a){var b=300,d=150;if(a.attributes.width!=undefined)b=Math.max(Number(a.getAttribute("width"))||0,0);if(a.attributes.height!=undefined)d=Math.max(Number(a.getAttribute("height"))||0,0);a.style.width=b+"px";a.style.height=d+"px";var e=a.uniqueID;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="flashcanvas'+
e+'"><param name="allowScriptAccess" value="always"><param name="movie" value="'+n+'"><param name="quality" value="high"><param name="wmode" value="transparent"></object>';var g=a.firstChild;i[e]=0;var f=new l(a,g);a.getContext=function(t){return t=="2d"?f:null};a.toDataURL=function(){f.a.push(c.toDataURL);return f.g()};a.attachEvent("onpropertychange",r);f.w(b,d)},P:function(a){i[a]&&--i[a]}};document.createElement("canvas");h.O("canvas","display: inline-block; overflow: hidden; width: 300px; height: 150px;");
h.I(function(){for(var a=document.getElementsByTagName("canvas"),b=0,d=a.length;b<d;++b)a[b].getContext||j.J(a[b])});window.attachEvent("onbeforeunload",s);var p=new ActiveXObject("Microsoft.XMLHTTP");p.open("GET",n,false);p.send(null);window.CanvasRenderingContext2D=l;window.CanvasGradient=k;window.CanvasPattern=o;window.FlashCanvas=j;j.initElement=j.J;j.unlock=j.P}();
