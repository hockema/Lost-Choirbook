(function(){var ba=encodeURIComponent,ca=window,da=setTimeout,m=Math,aa=decodeURIComponent;function ha(a,b){return a.name=b}function Bd(a,b){return a.href=b}
var n="push",g="hash",p="test",q="slice",Cd="replace",r="data",ia="cookie",ma="charAt",s="indexOf",h="match",ja="defaultValue",jd="send",ka="port",la="createElement",ce="setAttribute",na="name",oa="getTime",u="host",w="length",x="prototype",pa="clientWidth",y="split",z="location",Qd="hasOwnProperty",qa="hostname",fa="search",de="target",A="call",B="protocol",ra="clientHeight",Sb="href",C="substring",ee="action",D="apply",sa="navigator",sc="parentNode",E="join",ta="unshift",ua="toLowerCase";var wa=new function(){var a=[];this.set=function(b){a[b]=!0};this.O=function(){for(var b=[],c=0;c<a[w];c++)a[c]&&(b[m.floor(c/6)]=b[m.floor(c/6)]^1<<c%6);for(c=0;c<b[w];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[ma](b[c]||0);return b[E]("")+"~"}};function F(a){wa.set(a)};function G(a){return"function"==typeof a}function xa(a){return"[object Array]"==Object[x].toString[A](Object(a))}function H(a){return void 0!=a&&-1<(a.constructor+"")[s]("String")}function ga(a,b){return 0==a[s](b)}function P(a){return a?a[Cd](/^[\s\xa0]+|[\s\xa0]+$/g,""):""}function ac(a){var b=I[la]("img");b.width=1;b.height=1;b.src=a;return b}function za(){}function Aa(a){if(ba instanceof Function)return ba(a);F(28);return a}function Wd(a){return Aa(a)[Cd](/\(/g,"%28")[Cd](/\)/g,"%29")}
function tc(a){a=a[y]("+")[E](" ");if(aa instanceof Function)try{return aa(a)}catch(b){F(18)}F(28);return a}var Ba=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){F(27)}},Ca=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)};
function fd(a,b){if(a){N("Loading script: %s",a);var c=I[la]("script");c.type="text/javascript";c.async=!0;c.src=a;c.id=b;var d=I.getElementsByTagName("script")[0];d[sc].insertBefore(c,d)}}function t(){return $b||"https:"==I[z][B]?"https:":"http:"}function Dc(){var a=""+I[z][qa];return 0==a[s]("www.")?a[C](4):a}function Da(a){var b=I.referrer;if(/^https?:\/\//i[p](b)){if(a)return b;a="//"+I[z][qa];var c=b[s](a);if(5==c||6==c)if(a=b[ma](c+a[w]),"/"==a||"?"==a||""==a||":"==a)return;return b}}
function Ea(a,b){if(1==b[w]&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=m.min(a[w]+1,b[w]),e=0;e<d;e++)if("object"===typeof b[e]){for(var f in b[e])b[e][Qd](f)&&(c[f]=b[e][f]);break}else e<a[w]?c[a[e]]=b[e]:J("Unrecognized positional argument: "+b[e]);return c}function fe(a,b){for(var c=0;c<a[w];c++)if(b==a[c])return!0;return!1};var K=function(){this.keys=[];this.B={};this.u={};this.debug=!1};K[x].set=function(a,b,c){this.debug&&L("  "+a+"="+Fa(b)+(c?" (temp)":""));this.keys[n](a);c?this.u[":"+a]=b:this.B[":"+a]=b};K[x].get=function(a){return this.u[Qd](":"+a)?this.u[":"+a]:this.B[":"+a]};K[x].map=function(a){for(var b=0;b<this.keys[w];b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var Rd=[{V:"pa",W:"ec:action"},{V:"ti",W:"ec:id"},{V:"ta",W:"ec:affiliation"},{V:"tr",W:"ec:revenue"},{V:"tt",W:"ec:tax"},{V:"ts",W:"ec:shipping"},{V:"tcc",W:"ec:coupon"},{V:"cos",W:"ec:step"},{V:"col",W:"ec:label"},{V:"pal",W:"ec:product action list"},{V:"promoa",W:"ec:promo action"},{V:/^pr(\d+)id$/,W:"ec:product %s id"},{V:/^pr(\d+)nm$/,W:"ec:product %s name"},{V:/^pr(\d+)br$/,W:"ec:product %s brand"},{V:/^pr(\d+)ca$/,W:"ec:product %s category"},{V:/^pr(\d+)va$/,W:"ec:product %s variant"},{V:/^pr(\d+)ps$/,
W:"ec:product %s position"},{V:/^pr(\d+)pr$/,W:"ec:product %s price"},{V:/^pr(\d+)qt$/,W:"ec:product %s quantity"},{V:/^pr(\d+)cc$/,W:"ec:product %s coupon"},{V:/^pr(\d+)cd(\d+)$/,W:"ec:product %s dimension %s"},{V:/^pr(\d+)cm(\d+)$/,W:"ec:product %s metric %s"},{V:/^promo(\d+)id$/,W:"ec:promo %s id"},{V:/^promo(\d+)nm$/,W:"ec:promo %s name"},{V:/^promo(\d+)cr$/,W:"ec:promo %s creative"},{V:/^promo(\d+)ps$/,W:"ec:promo %s position"},{V:/^il(\d+)nm$/,W:"ec:impression list %s name"},{V:/^il(\d+)pi(\d+)id$/,
W:"ec:impression list %s product %s id"},{V:/^il(\d+)pi(\d+)nm$/,W:"ec:impression list %s product %s name"},{V:/^il(\d+)pi(\d+)br$/,W:"ec:impression list %s product %s brand"},{V:/^il(\d+)pi(\d+)ca$/,W:"ec:impression list %s product %s category"},{V:/^il(\d+)pi(\d+)va$/,W:"ec:impression list %s product %s variant"},{V:/^il(\d+)pi(\d+)ps$/,W:"ec:impression list %s product %s position"},{V:/^il(\d+)pi(\d+)pr$/,W:"ec:impression list %s product %s price"},{V:/^il(\d+)pi(\d+)cd(\d+)$/,W:"ec:impression list %s product %s dimension %s"},
{V:/^il(\d+)pi(\d+)cm(\d+)$/,W:"ec:impression list %s product %s metric %s"},{V:"linkid",W:"linkid:linkId"},{V:"ic",W:"ec:item code"},{V:"in",W:"ec:item name"},{V:"iv",W:"ec:item variation"},{V:"ip",W:"ec:item price"},{V:"iq",W:"ec:item qunatity"},{V:"cu",W:"ec:item currency"}],Sd=function(a){"&"==a[ma](0)&&(a=a[C](1));for(var b=0;b<Rd[w];b++){var c=Rd[b].V,d=Rd[b].W;if(H(c)){if(c==a)return d}else if(c=a[h](c))return c[0]=d,Ha[D](void 0,c)}return""};function Ga(a,b){var c=[][q][A](arguments);c[ta]("log");M.log[D](M,c)}function N(a,b){var c=[][q][A](arguments);c[ta]("info");M.log[D](M,c)}function J(a,b){var c=[][q][A](arguments);c[ta]("warn");M.log[D](M,c)}function O(a,b){var c=[][q][A](arguments);c[ta]("error");M.log[D](M,c)}function L(a,b){var c=Q.ga_debug;c&&c.trace&&(c=[][q][A](arguments),c[ta]("log"),M.log[D](M,c))}function dd(a,b){var c=[][q][A](arguments);c[ta]("group");M.log[D](M,c)}function ge(){M.log[D](M,["groupEnd"])}
var M=new function(){var a=ca.console,b=a&&"Firebug Lite"==a.provider;this.log=function(c,d,e){if(a){var f=Ha[D](ca,[][q][A](arguments,1));if(b)for(var f=f[y]("\n"),ea=0;ea<f[w];ea++)a[c](f[ea]);else if(a[c])a[c](f);else"group"==c&&a.log(f)}}};
function Ia(a){N("\nSent beacon:\n"+a+"\n\n");var b=[];a=a[y]("&");for(var c=0;c<a[w];c++){var d=a[c][y]("="),e=d[0],d=d[1];if("_"!=e[ma](0)){var f=kd(e);f&&0==f[s]("&")&&(f=Sd(f)||f);f&&("&"+e==f&&(f="<unknown>"),b[n]([f,"(&"+e+")",tc(d)]))}}b.sort();Xd(b)}
function Xd(a){for(var b=[],c=0;c<a[w];c++)for(var d=0;d<a[c][w]-1;d++)a[c][d]&&(b[d]=b[d]||0,b[d]=a[c][d][w]>b[d]?a[c][d][w]:b[d]);for(c=0;c<a[w];c++){for(var e=[],d=0;d<a[c][w];d++){var f=he(0)+a[c][d];e[n](f+he((b[d]||0)-f[w]))}N(e[E](" "))}}function Ja(a){var b=[];Ka.map(function(c,d){var ea=a.get(c);void 0!=ea&&"_"!=c[0]&&b[n](c+(d.i?" ("+d.i+")":"")+" = "+Fa(ea))});for(var c=b.sort(),d=0;d<c[w];d++)N("  "+c[d])}
function Td(a,b){for(var c in b)b[Qd](c)&&(fe([S,vb],c)||0!=c[s]("&")&&a.get(c)==b[c]||J('This field cannot be set in a create method. Please use ga("set", %s, %s);',c,b[c]))}function Fa(a){return a?H(a)?'"'+a+'"':xa(a)?"["+a+"]":G(a)?"[function]":a.constructor==K?"{"+a+"}":""+a:""+a}function Ha(a,b){if(!H(a))return"";for(var c=a[y]("%s"),d=1;d<arguments[w];d++)c.splice(2*d-1,0,Fa(arguments[d]));return c[E]("")}function he(a){return 0<a?Array(a+1)[E](" "):""}
function La(a,b){if(void 0==b)switch(a){case U:case Ma:case Gc:J("Expected a value for required field: %s",a)}else{switch(a){case Ma:case Na:case Oa:case Pa:case Qa:case Ra:case Sa:case Ta:case Ua:case Va:case Wa:case Xa:case Ya:case Za:case R:case $a:case ab:case bb:case cb:case db:case eb:case fb:case gb:case hb:case ib:case jb:case kb:case lb:case mb:case nb:case pb:case qb:case rb:case sb:case tb:case ub:case S:case vb:case wb:case xb:case Pd:H(b)||J("Expected a string value for field: %s. but found: %s.",
a,typeof b);break;case yb:case zb:case Ab:case Bb:case Cb:case Db:case Eb:!isNaN(parseFloat(b))&&isFinite(b)||J("Expected a number value for the field: %s. but found: %s.",a,typeof b);break;case Fb:case Gb:case Hb:case Ib:case Jb:case "forceSSL":case Kb:case Lb:case Mb:!0!==b&&!1!==b&&J("Expected a boolean value for the field: %s. but found: %s.",a,typeof b);break;case Nb:case Ob:case Pb:case Qb:case Rb:case Tb:case Ub:case Vb:G(b)||J("Expected a function for the field value: %s. but found: %s.",
a,typeof b);break;case T:/^[a-zA-Z0-9_]+$/[p](b)||O("Tracker name should only consist of alphanumeric characters.");break;case U:va[p](b)||J("The tracking Id should only be of the format UA-NNNNNN-N.")}!/^contentGroup[0-9]+$/[p](a)&&!/^dimension[0-9]+$/[p](a)||H(b)||J("Expected a string value for field: %s. but found: %s.",a,typeof b);!/^metric[0-9]+$/[p](a)||!isNaN(parseFloat(b))&&isFinite(b)||J("Expected a number value for field: %s. but found: %s.",a,typeof b)}}
function Ec(a){function b(b){H(a.get(b))||O("Missing required field '%s' for hit of type '%s'",b,c)}var c=V(a,Ma);switch(c){case "pageview":b(Pa);break;case "event":b(fb);b(gb);break;case "social":b(ib);b(jb);b(kb);break;case "exception":b(tb);break;case "timing":b(lb);b(mb);break;case "appview":b(pb)}}function od(a,b){N("\nSent beacon:\n"+b+"\n\n");var c=[];a.map(function(a,b){if("_"!=a[ma](0)){var f=[],ea=kd(a);ea&&(f[n](ea),f[n]("(&"+a+")"),f[n](b),c[n](f))}});Xd(c)};var Q=ca,I=document,Wb=function(a){var b=Q._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Q["ga-disable-"+a])return!0;try{var c=Q.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(d){}return!1},$c=function(a){da(a,100)},Xb=function(a){var b=[],c=I[ia][y](";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c[w];d++){var e=c[d][h](a);e&&b[n](e[1])}return b},ld=function(a,b,c,d,e,f){Wb(e)?(N("Aborting cookie write: User has opted out of tracking."),e=!1):Zb[p](I[z][qa])||"/"==c&&
Yb[p](d)?(N("Aborting cookie write: Prohibited domain."),e=!1):e=!0;if(!e)return!1;b&&1200<b[w]&&(b=b[C](0,1200),F(24));c=a+"="+b+"; path="+c+"; ";f&&(c+="expires="+(new Date((new Date)[oa]()+f)).toGMTString()+"; ");d&&"none"!=d&&(c+="domain="+d+";");d=I[ia];I.cookie=c;return d!=I[ia]||fe(Xb(a),b)},Yb=new RegExp(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/),Zb=new RegExp(/(^|\.)doubleclick\.net$/i),yd=function(){for(var a=Q[sa],a=a.appName+a.version+a.platform+a.userAgent+(I[ia]?I[ia]:"")+(I.referrer?
I.referrer:""),b=a[w],c=Q.history[w];0<c;)a+=c--^b++;return ic(a)};var hd=function(){return t()+"//www.google-analytics.com"},bc=function(a){ha(this,"len");this.message=a+"-8192"},cc=function(a){ha(this,"ff2post");this.message=a+"-2036"},ec=function(a,b){b=b||za;if(2036>=a[w])id(a,b),Ia(a);else if(8192>=a[w]){var c=b;if(0<=Q[sa].userAgent[s]("Firefox")&&![].reduce)throw new cc(a[w]);te(a,c)||ue(a,c)||dc(a,c)||c();Ia(a)}else throw new bc(a[w]);},id=function(a,b){var c=ac(hd()+"/collect?"+a);c.onload=c.onerror=function(){c.onload=null;c.onerror=null;b()}},ue=function(a,
b){var c;c=Q.XDomainRequest;if(!c)return!1;c=new c;c.open("POST",hd()+"/collect");c.onerror=function(){b()};c.onload=b;c[jd](a);return!0},te=function(a,b){var c=Q.XMLHttpRequest;if(!c)return!1;var d=new c;if(!("withCredentials"in d))return!1;d.open("POST",hd()+"/collect",!0);d.withCredentials=!0;d.setRequestHeader("Content-Type","text/plain");d.onreadystatechange=function(){4==d.readyState&&(b(),d=null)};d[jd](a);return!0},dc=function(a,b){if(!I.body)return $c(function(){dc(a,b)}),!0;a=ba(a);try{var c=
I[la]('<iframe name="'+a+'"></iframe>')}catch(d){c=I[la]("iframe"),ha(c,a)}c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var e=I[z],e=hd()+"/analytics_iframe.html#"+ba(e[B]+"//"+e[u]+"/favicon.ico"),f=function(){c.src="";c[sc]&&c[sc].removeChild(c)};Ba(Q,"beforeunload",f);var ea=!1,l=0,k=function(){if(!ea){try{if(9<l||c.contentWindow[z][u]==I[z][u]){ea=!0;f();Ca(Q,"beforeunload",f);b();return}}catch(a){}l++;da(k,200)}};Ba(c,"load",k);I.body.appendChild(c);c.src=e;return!0},
fc=function(a,b,c){O("Error: type=%s method=%s message=%s account=%s",arguments);if(!(1<=100*m.random()||Wb("?"))){var d=["t=error","_e="+a,"_v=j23d","sr=1"];b&&d[n]("_f="+b);c&&d[n]("_m="+Aa(c[C](0,100)));d[n]("aip=1");d[n]("z="+Yd());ec(d[E]("&"))}};var gc=function(){this.m=[]};gc[x].add=function(a){this.m[n](a)};gc[x].H=function(a){L("\nExecuting "+this.m[w]+" filters:");try{for(var b=0;b<this.m[w];b++){L("  filter["+b+"]: "+this.m[b]);var c=a.get(this.m[b]);c&&G(c)?c[A](Q,a):L("  Skipping (no function found.)")}}catch(d){L("Aborted execution due to exception: "+d)}b=a.get(Nb);b!=za&&G(b)&&(L("Manually firing callback"),a.set(Nb,za,!0),da(b,10))};
function hc(a){if(100!=a.get(Db)&&ic(V(a,R))%1E4>=100*jc(a,Db))throw N("User has been sampled out. Aborting hit."),"abort";}function kc(a){if(Wb(V(a,U)))throw N("User has opted out of tracking. Aborting hit."),"abort";}function lc(){var a=I[z][B];if("http:"!=a&&"https:"!=a)throw N("Unallowed document protocol. Aborting hit."),"abort";}
function mc(a){try{Q.XMLHttpRequest&&"withCredentials"in new Q.XMLHttpRequest?F(40):Q.XDomainRequest&&F(41),Q[sa].sendBeacon&&F(42)}catch(b){}a.set(md,jc(a,md)+1);var c=[];Ka.map(function(b,e){if(e.i){var f=a.get(b);void 0!=f&&f!=e[ja]&&("boolean"==typeof f&&(f*=1),c[n](e.i+"="+Aa(""+f)))}});c[n]("z="+be());a.set(Na,c[E]("&"),!0)}function pc(a){ec(V(a,Na),a.get(Nb));a.set(Nb,za,!0)}function td(a){var b=Q.gaData;b&&(b.expId&&a.set(zd,b.expId),b.expVar&&a.set(Ad,b.expVar))}function nc(a){Ec(a)}
function Ud(){if(Q[sa]&&"preview"==Q[sa].loadPurpose)throw N("Navigator in preview mode. Aborting hit."),"abort";}function ve(a){var b=Q.gaDevIds;xa(b)&&0!=b[w]&&a.set("&did",b[E](","),!0)}function ya(a){if(!a.get(U))throw O("Tracking ID not set. Aborting hit."),"abort";};var ae=function(){return m.round(2147483647*m.random())},be=function(){try{var a=new Uint32Array(1);Q.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return ae()}},Yd=ae;function qc(a){var b=jc(a,rc);500<=b&&(F(15),N("Exceeded maximum number of hits for this page. Try reducing the number of hits being sent."));var c=V(a,Ma);if("transaction"!=c&&"item"!=c){var c=jc(a,uc),d=(new Date)[oa](),e=jc(a,vc);0==e&&a.set(vc,d);e=m.round(2*(d-e)/1E3);0<e&&(c=m.min(c+e,20),a.set(vc,d));if(0>=c)throw N("Exceeded rate limit for sending hits. Aborting hit."),"abort";a.set(uc,--c)}a.set(rc,++b)};var wc=function(){this.data=new K;this[r].debug=!0},Ka=new K,xc=[];wc[x].get=function(a){var b=yc(a),c=this[r].get(a);b&&void 0==c&&(c=G(b[ja])?b[ja]():b[ja]);return b&&b.v?b.v(this,a,c):c};var V=function(a,b){var c=a.get(b);return void 0==c?"":""+c},jc=function(a,b){var c=a.get(b);return void 0==c||""===c?0:1*c};wc[x].set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a[Qd](d)&&zc(this,d,a[d],c);else zc(this,a,b,c)};
var zc=function(a,b,c,d){La(b,c);var e=yc(b);e&&e.w?e.w(a,b,c,d):a[r].set(b,c,d);e||N("Set called on unknown field: %s.",b)},Ac=function(a,b,c,d,e){ha(this,a);this.i=b;this.v=d;this.w=e;this.defaultValue=c},yc=function(a){var b=Ka.get(a);if(!b)for(var c=0;c<xc[w];c++){var d=xc[c],e=d[0].exec(a);if(e){L("Generating new model field for name: "+a);b=d[1](e);Ka.set(b[na],b);break}}return b},kd=function(a){var b;Ka.map(function(c,d){d.i==a&&(b=d)});return b&&b[na]},W=function(a,b,c,d,e){a=new Ac(a,b,c,
d,e);Ka.set(a[na],a);return a[na]},Bc=function(a,b){xc[n]([new RegExp("^"+a+"$"),b])},X=function(a,b,c){return W(a,b,c,void 0,Cc)},Cc=function(a,b){O("Ignored attempt to update read-only property: "+b)};var Fc=H(ca.GoogleAnalyticsObject)&&P(ca.GoogleAnalyticsObject)||"ga",$b=!1,Gc=X("apiVersion","v"),Hc=X("clientVersion","_v"),Fb=W("anonymizeIp","aip"),yb=W("adSenseId","a"),Ma=W("hitType","t"),Nb=W("hitCallback"),Na=W("hitPayload"),Gb=W("nonInteraction","ni"),Pd=W("currencyCode","cu"),Hb=W("sessionControl","sc",""),zb=W("queueTime","qt"),md=W("_s","_s"),Oa=W("screenName","cd"),Pa=W("location","dl",""),Qa=W("referrer","dr"),Ra=W("page","dp",""),Sa=W("hostname","dh"),Ta=W("language","ul"),Ua=W("encoding",
"de"),Va=W("title","dt",function(){return I.title||void 0});Bc("contentGroup([0-9]+)",function(a){return new Ac(a[0],"cg"+a[1])});
var Wa=W("screenColors","sd"),Xa=W("screenResolution","sr"),Ya=W("viewportSize","vp"),Ib=W("javaEnabled","je"),Za=W("flashVersion","fl"),$a=W("campaignId","ci"),ab=W("campaignName","cn"),bb=W("campaignSource","cs"),cb=W("campaignMedium","cm"),db=W("campaignKeyword","ck"),eb=W("campaignContent","cc"),fb=W("eventCategory","ec"),gb=W("eventAction","ea"),hb=W("eventLabel","el"),Ab=W("eventValue","ev"),ib=W("socialNetwork","sn"),jb=W("socialAction","sa"),kb=W("socialTarget","st"),Ic=W("l1","plt"),Jc=W("l2",
"pdt"),Kc=W("l3","dns"),Lc=W("l4","rrt"),Mc=W("l5","srt"),Nc=W("l6","tcp"),Oc=W("l7","dit"),Pc=W("l8","clt"),lb=W("timingCategory","utc"),mb=W("timingVar","utv"),nb=W("timingLabel","utl"),Bb=W("timingValue","utt"),pb=W("appName","an"),qb=W("appVersion","av",""),rb=W("appId","aid",""),sb=W("appInstallerId","aiid",""),tb=W("exDescription","exd"),Jb=W("exFatal","exf"),zd=W("expId","xid"),Ad=W("expVar","xvar"),Dd=W("_utma","_utma"),Ed=W("_utmz","_utmz"),Fd=W("_utmht","_utmht"),rc=W("_hc",void 0,0),vc=
W("_ti",void 0,0),uc=W("_to",void 0,20);Bc("dimension([0-9]+)",function(a){return new Ac(a[0],"cd"+a[1])});Bc("metric([0-9]+)",function(a){return new Ac(a[0],"cm"+a[1])});W("linkerParam",void 0,void 0,nd,Cc);var oc=W("usage","_u",void 0,function(){return wa.O()},Cc);W("forceSSL",void 0,void 0,function(){return $b},function(a,b,c){F(34);$b=!!c});var Zd=W("_j1","jid");W("_j2","gjid");
Bc("\\&(.*)",function(a){var b=new Ac(a[0],a[1]),c=kd(a[0][C](1));c&&(L("Alias created: "+a[0]+" -> "+c),b.v=function(a){return a.get(c)},b.w=function(a,b,f,ea){a.set(c,f,ea)},b.i=void 0);return b});
var Ob=X("_oot"),Vd=W("previewTask"),Pb=W("checkProtocolTask"),xd=W("validationTask"),Qb=W("checkStorageTask"),Gd=W("historyImportTask"),Rb=W("samplerTask"),Tb=X("_rlt"),Ub=W("buildHitTask"),Vb=W("sendHitTask"),Hd=W("ceTask"),we=W("devIdTask"),oe=W("timingTask"),T=X("name"),R=X("clientId","cid"),xe=W("userId","uid"),U=X("trackingId","tid"),ub=X("cookieName",void 0,"_ga"),S=X("cookieDomain"),vb=X("cookiePath",void 0,"/"),Cb=X("cookieExpires",void 0,63072E3),wb=X("legacyCookieDomain"),Id=X("legacyHistoryImport",
void 0,!0),xb=X("storage",void 0,"cookie"),Kb=X("allowLinker",void 0,!1),Lb=X("allowAnchor",void 0,!0),Db=X("sampleRate","sf",100),Eb=X("siteSpeedSampleRate",void 0,1),Mb=X("alwaysSendReferrer",void 0,!1);function Y(a,b,c,d){b[a]=function(){try{return d&&F(d),c[D](this,arguments)}catch(b){throw fc("exc",a,b&&b[na]),b;}}};var ye=function(a){var b=pe;if(b.ja&&b.fa)return 0;b.fa=!0;if(0==b.Z)return 0;void 0===a&&(a=be());return 0==a%b.Z?m.floor(a/b.Z)%b.ia+1:0};function Qc(){var a,b,c;if((c=(c=Q[sa])?c.plugins:null)&&c[w])for(var d=0;d<c[w]&&!b;d++){var e=c[d];-1<e[na][s]("Shockwave Flash")&&(b=e.description)}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),b=a.GetVariable("$version")}catch(f){}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),b="WIN 6,0,21,0",a.AllowScriptAccess="always",b=a.GetVariable("$version")}catch(ea){}if(!b)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),b=a.GetVariable("$version")}catch(l){}b&&
(a=b[h](/[\d]+/g))&&3<=a[w]&&(b=a[0]+"."+a[1]+" r"+a[2]);return b||void 0};var Sc=function(a,b){var c=m.min(jc(a,Eb),100);if(ic(V(a,R))%100>=c)L("Site speed data not sent - visitor sampled out");else if(c={},qd(c)||rd(c)){var d=c[Ic];void 0==d||Infinity==d||isNaN(d)?L("Site speed data not sent - unsupported browser"):0<d?(Rc(c,Kc),Rc(c,Nc),Rc(c,Mc),Rc(c,Jc),Rc(c,Lc),Rc(c,Oc),Rc(c,Pc),b(c)):(L("Site speed data not available - waiting for onload"),Ba(Q,"load",function(){Sc(a,b)},!1))}else L("Site speed data not sent - unsupported browser")},qd=function(a){var b=Q.performance||
Q.webkitPerformance,b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Ic]=b.loadEventStart-c;a[Kc]=b.domainLookupEnd-b.domainLookupStart;a[Nc]=b.connectEnd-b.connectStart;a[Mc]=b.responseStart-b.requestStart;a[Jc]=b.responseEnd-b.responseStart;a[Lc]=b.fetchStart-c;a[Oc]=b.domInteractive-c;a[Pc]=b.domContentLoadedEventStart-c;return!0},rd=function(a){if(Q.top!=Q)return!1;var b=Q.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();
if(void 0==c)return!1;a[Ic]=c;return!0},Rc=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},ze=function(a){return function(b){"pageview"!=b.get(Ma)||a.L||(a.L=!0,Sc(b,function(b){a[jd]("timing",b)}))}};var Tc=!1,Yc=function(a){if("cookie"==V(a,xb)){var b=V(a,ub),c=ie(a),d=Wc(V(a,vb)),e=Xc(V(a,S)),f=1E3*jc(a,Cb),ea=V(a,U);if("auto"!=e)ld(b,c,d,e,ea,f)&&(Tc=!0);else{F(32);var l;i:{c=[];e=Dc()[y](".");if(4==e[w]&&(l=e[e[w]-1],parseInt(l,10)==l)){l=["none"];break i}for(l=e[w]-2;0<=l;l--)c[n](e[q](l)[E]("."));c[n]("none");l=c}for(var k=0;k<l[w];k++)if(e=l[k],a[r].set(S,e),c=ie(a),ld(b,c,d,e,ea,f)){N("Auto cookieDomain found: %s",e);1==Uc(e)&&F(36);"none"==e&&F(37);Tc=!0;return}O("Cookie write failed.");
a[r].set(S,"auto")}}},Zc=function(a){if("cookie"==V(a,xb)&&!Tc&&(Yc(a),!Tc))throw N("Storage not available. Aborting hit."),"abort";},Kd=function(a){if(a.get(Id)){var b=V(a,S),c=V(a,wb)||Dc(),d=Jd("__utma",c,b);d&&(F(19),a.set(Fd,(new Date)[oa](),!0),a.set(Dd,d.T),(b=Jd("__utmz",c,b))&&d[g]==b[g]&&a.set(Ed,b.T))}},ie=function(a){var b=Wd(V(a,R)),c=Uc(V(a,S));a=Vc(V(a,vb));1<a&&(c+="-"+a);return["GA1",c,b][E](".")},sd=function(a,b,c){for(var d=[],e=[],f,ea=0;ea<a[w];ea++){var l=a[ea];if(l.k[c]==b)d[n](l);
else void 0==f||l.k[c]<f?(e=[l],f=l.k[c]):l.k[c]==f&&e[n](l)}return 0<d[w]?d:e},Xc=function(a){return 0==a[s](".")?a.substr(1):a},Uc=function(a){return Xc(a)[y](".")[w]},Wc=function(a){if(!a)return"/";1<a[w]&&a.lastIndexOf("/")==a[w]-1&&(a=a.substr(0,a[w]-1));0!=a[s]("/")&&(a="/"+a);return a},Vc=function(a){a=Wc(a);return"/"==a?1:a[y]("/")[w]};function Jd(a,b,c){"none"==b&&(b="");var d=[],e=Xb(a);a="__utma"==a?6:2;for(var f=0;f<e[w];f++){var ea=(""+e[f])[y](".");ea[w]>=a&&d[n]({hash:ea[0],T:e[f],Q:ea})}return 0==d[w]?void 0:1==d[w]?d[0]:Ld(b,d)||Ld(c,d)||Ld(null,d)||d[0]}function Ld(a,b){var c,d;null==a?c=d=1:(c=ic(a),d=ic(ga(a,".")?a[C](1):"."+a));for(var e=0;e<b[w];e++)if(b[e][g]==c||b[e][g]==d)return b[e]};var je=new RegExp(/^https?:\/\/([^\/:]+)/),ke=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function nd(a){a=a.get(R);var b=ud(a,0);return"_ga=1."+Aa(b+"."+a)}function ud(a,b){for(var c=new Date,d=Q[sa],e=d.plugins||[],c=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b],d=0;d<e[w];++d)c[n](e[d].description);return ic(c[E]("."))}var pd=function(a){F(48);this.target=a;this.X=!1};
pd[x].S=function(a,b){if(a.tagName){if("a"==a.tagName[ua]()){a[Sb]&&Bd(a,le(this,a[Sb],b));return}if("form"==a.tagName[ua]())return me(this,a)}if("string"==typeof a)return le(this,a,b);O("Unknown Object passed to linker:decorate %s",a)};
var le=function(a,b,c){var d=ke.exec(b);d&&3<=d[w]&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a[de].get("linkerParam");var e=b[s]("?"),d=b[s]("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b[C](0,d)+c+a+b[C](d));return b},me=function(a,b){if(b)if(b[ee]){N("Linker decorating form: %s",b);var c=a[de].get("linkerParam")[y]("=")[1];if("get"==b.method[ua]()){for(var d=b.childNodes||[],e=0;e<d[w];e++)if("_ga"==d[e][na]){d[e][ce]("value",c);return}d=I[la]("input");d[ce]("type","hidden");d[ce]("name",
"_ga");d[ce]("value",c);b.appendChild(d)}else"post"==b.method[ua]()?b.action=le(a,b[ee]):O("Unknown form method %s on %s",b.method,b)}else O("An action is required for the linker to work.")};
pd[x].U=function(a,b,c){function d(c){try{c=c||Q.event;var d;i:{var f=c[de]||c.srcElement;for(c=100;f&&0<c;){if(f[Sb]&&f.nodeName[h](/^a(?:rea)?$/i)){d=f;break i}f=f[sc];c--}d={}}"http:"!=d[B]&&"https:"!=d[B]||!ne(a,d[qa]||"")||(d[Sb]&&Bd(d,le(e,d[Sb],b)),N("Link decorated: "+d[Sb]))}catch(v){F(26)}}var e=this;this.X||(this.X=!0,Ba(I,"mousedown",d,!1),Ba(I,"touchstart",d,!1),Ba(I,"keyup",d,!1));if(c){c=function(b){b=b||Q.event;if((b=b[de]||b.srcElement)&&b[ee]){var c=b[ee][h](je);c&&ne(a,c[1])&&me(e,
b)}};for(var f=0;f<I.forms[w];f++)Ba(I.forms[f],"submit",c)}};function ne(a,b){if(b==I[z][qa])return!1;for(var c=0;c<a[w];c++)if(a[c]instanceof RegExp){if(a[c][p](b))return!0}else if(0<=b[s](a[c]))return!0;return!1};var Fe=function(a,b,c){var d=this;this.Y=Zd;this.ca=b;this.aa=c||De(a);var e=a.get(Ub);a.set(Ub,function(a){a.get(d.Y)?J("Join id already set"):"1"==Xb(d.aa)[0]?a.set(d.Y,"",!0):a.set(d.Y,""+Yd(),!0);var b=e(a);a.get(d.Y)&&(N("Setting throttling cookie: %s",d.aa),ld(d.aa,"1",a.get(vb),a.get(S),a.get(U),6E5));return b});var f=a.get(Vb);a.set(Vb,function(a){var b=f(a);Ee(d,a);return b})},Ee=function(a,b){if(b.get(a.Y)){var c=new K,d=function(a){c.set(yc(a).i,b.get(a))};d(Gc);d(Hc);d(U);d(R);d(a.Y);
d(oc);var e=a.ca;"/"===e[ma](0)&&(e=t()+e);c.map(function(a,b){e+=Aa(a)+"="+Aa(""+b)+"&"});e+="z="+Yd();od(c,e);ac(e);b.set(a.Y,"",!0)}},De=function(a){return a.get(T)&&"t0"!=a.get(T)?"_dc_"+Wd(a.get(T)):"_dc"};var pe,Ae;pe=new function(){this.Z=10;this.ja=void 0;this.fa=!1;this.ia=1};Ae=!1;var $d=function(a,b){var c=a.a;if(!c.get("dcLoaded")){F(29);b=b||{};var d;b[ub]&&(d=Wd(b[ub]));var e="//stats.g.doubleclick.net/collect?t=dc&aip=1&";if("https:"!=I[z][B]&&!$b){var f=ic(c.get(R));if(Ae||ye(f))e="https:"+e,F(33),Ae=!0}new Fe(c,e,d);c.set("dcLoaded",!0)}};var Ge=function(){F(38)};function Md(){var a=Q.gaGlobal=Q.gaGlobal||{};return a.hid=a.hid||Yd()};var Nd,Od=function(a,b,c){if(!Nd){var d;d=I[z][g];var e=Q[na],f=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d[h](f)||e&&e[h](f))?d[1]:Xb("GASO")[0]||"")&&d[h](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))ld("GASO",""+d,c,b,a,0),ca._udo||(ca._udo=b),ca._utcp||(ca._utcp=c),a=e[1],fd("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+Yd(),"_gasojs");Nd=!0}};var va=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,ad=function(a){function b(a,b){d.a[r].set(a,b)}function c(a,c){b(a,c);d.filters.add(a)}var d=this;this.a=new wc;this.filters=new gc;L("Initializing tracker");La(U,a[U]);b(T,a[T]);b(U,P(a[U]));b(ub,a[ub]);b(S,a[S]||Dc());b(vb,a[vb]);b(Cb,a[Cb]);b(wb,a[wb]);b(Id,a[Id]);b(Kb,a[Kb]);b(Lb,a[Lb]);b(Db,a[Db]);b(Eb,a[Eb]);b(Mb,a[Mb]);b(xb,a[xb]);b(xe,a[xe]);b(Gc,1);b(Hc,"j23d");c(Ob,kc);c(Vd,Ud);c(Pb,lc);c(xd,ya);c(Qb,Zc);c(Gd,Kd);c(Rb,hc);c(Tb,qc);c(Hd,td);c(we,ve);c(Ub,
mc);c("_dt",nc);c(Vb,pc);c(oe,ze(this));vd(this.a,a[R]);wd(this.a);this.a.set(yb,Md());Od(this.a.get(U),this.a.get(S),this.a.get(vb));Td(d,a);L("Initialization complete\n\n")},vd=function(a,b){if("cookie"==V(a,xb)){Tc=!1;var c;e:{var d=Xb(V(a,ub));if(d&&!(1>d[w])){c=[];for(var e=0;e<d[w];e++){var f;f=d[e][y](".");var ea=f.shift();("GA1"==ea||"1"==ea)&&1<f[w]?(ea=f.shift()[y]("-"),1==ea[w]&&(ea[1]="1"),ea[0]*=1,ea[1]*=1,f={k:ea,n:f[E](".")}):(J("Unknown cookie version: "+ea),f=void 0);f&&c[n](f)}if(1==
c[w]){F(13);c=c[0].n;break e}if(0==c[w])F(12);else{F(14);d=Uc(V(a,S));c=sd(c,d,0);if(1==c[w]){c=c[0].n;break e}d=Vc(V(a,vb));c=sd(c,d,1);c=c[0]&&c[0].n;break e}}c=void 0}!c&&(c=V(a,S),d=V(a,wb)||Dc(),c=Jd("__utma",d,c),c=void 0==c?void 0:c.Q[1]+"."+c.Q[2])&&(Ga("Using legacy visitor id"),F(10));c&&(a[r].set(R,c),Tc=!0)}c=a.get(Lb);if(c=(c=I[z][c?"href":"search"][h]("(?:&|#|\\?)"+Aa("_ga")[Cd](/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==c[w]?c[1]:"")a.get(Kb)?(e=c[s]("."),-1==e?(J("Invalid linker parameter format: "+
c),F(22)):(f=c[C](e+1),"1"!=c[C](0,e)?(J("Unrecognized linker parameter version: "+c),F(22)):(e=f[s]("."),-1==e?(J("Invalid linker parameter v1 payload: "+c),F(22)):(d=f[C](0,e),e=f[C](e+1),d!=ud(e,0)&&d!=ud(e,-1)&&d!=ud(e,-2)?(J("Bad or expired linker parameter hash: "+c),F(23)):(Ga("Loaded linker parameter: "+c),F(11),a[r].set(R,e)))))):(J("Linker disabled. Ignoring linker parameter: "+c),F(21));b&&(Ga("Used client Id from constructor."),F(9),a[r].set(R,Aa(b)));a.get(R)||((c=(c=Q.gaGlobal&&Q.gaGlobal.vid)&&
-1!=c[fa](/^(?:utma\.)?\d+\.\d+$/)?c:void 0)?(Ga("New visitor. Copying new clientId"),F(17),a[r].set(R,c)):(Ga("New visitor. Generating new clientId"),F(8),a[r].set(R,[Yd()^yd()&2147483647,m.round((new Date)[oa]()/1E3)][E]("."))));Yc(a)},wd=function(a){var b=Q[sa],c=Q.screen,d=I[z];a.set(Qa,Da(a.get(Mb)));if(d){var e=d.pathname||"";"/"!=e[ma](0)&&(F(31),e="/"+e);a.set(Pa,d[B]+"//"+d[qa]+e+d[fa])}c&&a.set(Xa,c.width+"x"+c.height);c&&a.set(Wa,c.colorDepth+"-bit");var c=I.documentElement,f=(e=I.body)&&
e[pa]&&e[ra],ea=[];c&&c[pa]&&c[ra]&&("CSS1Compat"===I.compatMode||!f)?ea=[c[pa],c[ra]]:f&&(ea=[e[pa],e[ra]]);c=0>=ea[0]||0>=ea[1]?"":ea[E]("x");a.set(Ya,c);a.set(Za,Qc());a.set(Ua,I.characterSet||I.charset);a.set(Ib,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(Ta,(b&&(b.language||b.browserLanguage)||"")[ua]());if(d&&a.get(Lb)&&(b=I[z][g])){b=b[y](/[?&#]+/);d=[];for(c=0;c<b[w];++c)(ga(b[c],"utm_id")||ga(b[c],"utm_campaign")||ga(b[c],"utm_source")||ga(b[c],"utm_medium")||ga(b[c],
"utm_term")||ga(b[c],"utm_content")||ga(b[c],"gclid")||ga(b[c],"dclid")||ga(b[c],"gclsrc"))&&d[n](b[c]);0<d[w]&&(b="#"+d[E]("&"),a.set(Pa,a.get(Pa)+b))}};ad[x].get=function(a){H(a)||O("Please specify a field name to get it's value.");return this.a.get(a)};ad[x].set=function(a,b){this.a.set(a,b)};var bd={pageview:[Ra],event:[fb,gb,hb,Ab],social:[ib,jb,kb],timing:[lb,mb,Bb,nb]};
ad[x].send=function(a){L("Send start: "+(0==Z.h?-1:(new Date)[oa]()-Z.h));if(1>arguments[w])O("No hit type specified. Aborting hit.");else{var b,c;"string"===typeof arguments[0]?(b=arguments[0],c=[][q][A](arguments,1)):(b=arguments[0]&&arguments[0][Ma],c=arguments);b?(c=Ea(bd[b]||[],c),c[Ma]=b,this.a.set(c,void 0,!0),this.filters.H(this.a),L("Send finished: "+(0==Z.h?-1:(new Date)[oa]()-Z.h)),this.a[r].u={}):O("No hit type specified. Aborting hit.")}};var cd=function(a){if("prerender"==I.visibilityState)return!1;a();return!0};var qe=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,se=function(a){this.r=a;if(G(a[0]))this.s=a[0];else{var b=qe.exec(a[0]);null!=b&&4==b[w]&&(this.c=b[1]||"t0",this.e=b[2]||"",this.d=b[3],this.b=[][q][A](a,1),this.e||(this.D="create"==this.d,this.g="require"==this.d,this.f="provide"==this.d,this.$="remove"==this.d),this.g&&(3<=this.b[w]?(this.da=this.b[1],this.ba=this.b[2]):this.b[1]&&(H(this.b[1])?this.da=this.b[1]:this.ba=this.b[1])));var b=a[1],c=a[2];if(!this.d)throw O("Invalid command: "+a),"abort";if(this.g&&
(!H(b)||""==b))throw O("Invalid require command.",a),"abort";if(this.f&&(!H(b)||""==b||!G(c)))throw O("Invalid provide command.",a),"abort";if(re(this.c)||re(this.e))throw O('Target name and plugin names should not contain "." or ":"'),"abort";if(this.f&&"t0"!=this.c)throw O("Provide command should not be preceeded by a tracker name."),"abort";}};function re(a){return 0<=a[s](".")||0<=a[s](":")};var $={I:"/plugins/ua/",K:"plugins_",ka:function(){$.j=[];$.t=new K;$.ea=new K;$.ha={ec:45,ecommerce:46,linkid:47}}};$.ka();$.F=function(a,b,c){if(b==Z){F(35);var d=Fc}else d=b.get(T);var e=$.t.get(a);if(!G(e))return N("Waiting on require of %s to be fulfilled.",a),!1;b[$.K]=b[$.K]||new K;if(b[$.K].get(a))return O("Command ignored. Plugin %s has already been required on tracker %s.",a,d),!0;b[$.K].set(a,new e(b,c||{}));N("Plugin %s intialized on tracker %s.",a,d);return!0};
$.ga=function(a){var b=a.b[0];if(!G($.t.get(b))&&!$.ea.get(b))if($.ha[Qd](b)&&F($.ha[b]),a=a.da,!a&&$.ha[Qd](b)?(F(39),a=b+".js"):F(43),a){a&&0<=a[s]("/")||(a=t()+"//www.google-analytics.com"+$.I+a);a=ed(a);var c=a[B],d=I[z][B];if(c="https:"==c||c==d?!0:"http:"!=c?!1:"http:"==d)c=ed(I[z][Sb]),a.J||0<=a.url[s]("?")||0<=a.path[s]("://")?c=!1:a[u]==c[u]&&a[ka]==c[ka]?c=!0:(c="http:"==a[B]?80:443,c="www.google-analytics.com"==a[u]&&(a[ka]||c)==c&&ga(a.path,"/plugins/")?!0:!1);c?(N("Loading resource for plugin: "+
b),fd(a.url),$.ea.set(b,!0)):O("Error loading resource for plugin %s: Refusing to load url: %s",b,a.url)}else N("No plugin url set for %s.",b)};$.G=function(a,b){$.t.set(a,b)};$.H=function(a){var b=$.N[D]($,arguments),b=$.j.concat(b);for($.j=[];0<b[w];){var c;c=b[0];c=c.s?"ga(Function)":"ga("+Array[x][q][A](c.r,0)[E](", ")+")";dd("Running command: "+c);c=$.R(b[0]);ge();if(c)break;b.shift();if(0<$.j[w])break}$.j=$.j.concat(b)};
$.N=function(a){for(var b=[],c=0;c<arguments[w];c++)try{var d=new se(arguments[c]);d.f?($.G(d.b[0],d.b[1]),N("Registered new plugin: ga(provide, %s, Function)",d.b[0])):(d.g&&$.ga(d),b[n](d))}catch(e){var f=arguments[c],ea=d,l=e;xa(f)||G(f)?xa(f)&&!H(f[0])?O("First element of command array is not a string: %s",f):ea&&ea.g?O("Invalid require command: %s",f):O("Command failure: %s",l):O("Command is not an array or function: %s",l)}return b};
$.R=function(a){try{if(a.s)a.s[A](Q,Z.p("t0"));else{var b=a.c==Fc?Z:Z.p(a.c);if(a.D)"t0"!=a.c?J('Command ignored. Use "create" instead of "%s.create"',a.c):Z.create[D](Z,a.b);else if(a.$)Z.remove(a.c);else if(b)if(a.g){if(!$.F(a.b[0],b,a.ba))return!0}else a.e&&(b=b[$.K].get(a.e)),b[a.d][D](b,a.b);else N("Command ignored. Unknown target: "+b)}}catch(c){a.s?O("Exception thrown from pushed function: %s",c):a.g?O("Error creating a plugin instance: %s",a.r):a.f?O("Error registering a plugin: %s",a.r):
a.$?O("Error removing tracker: %s",a.r):a.e?O("Error calling a plugin method: %s",a.r):O('Called method "%s" threw exception: %s',a.d,c)}};
function ed(a){function b(a){var b=(a[qa]||"")[y](":")[0][ua](),c=(a[B]||"")[ua](),c=1*a[ka]||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";ga(a,"/")||(a="/"+a);return[b,""+c,a]}var c=I[la]("a");Bd(c,I[z][Sb]);var d=(c[B]||"")[ua](),e=b(c),f=c[fa]||"",ea=d+"//"+e[0]+(e[1]?":"+e[1]:"");ga(a,"//")?a=d+a:ga(a,"/")?a=ea+a:!a||ga(a,"?")?a=ea+e[2]+(a||f):0>a[y]("/")[0][s](":")&&(a=ea+e[2][C](0,e[2].lastIndexOf("/"))+"/"+a);Bd(c,a);d=b(c);return{protocol:(c[B]||"")[ua](),host:d[0],port:d[1],path:d[2],
J:c[fa]||"",url:a||""}};var Z=function(a){dd("Executing Google Analytics commands.");F(1);$.H[D]($,[arguments]);ge()};Z.o={};Z.C=[];Z.h=0;Z.answer=42;var gd=[U,S,T];Z.create=function(a){var b=Ea(gd,[][q][A](arguments));b[T]||(b[T]="t0");var c=""+b[T];if(Z.o[c])return J("Ignoring create request for duplicate tracking name."),Z.o[c];N("Creating new tracker: "+c);b=new ad(b);Z.o[c]=b;Z.C[n](b);return b};
Z.remove=function(a){for(var b=0;b<Z.C[w];b++)if(Z.C[b].get(T)==a){N("Removing tracker: "+a);Z.C.splice(b,1);Z.o[a]=null;return}O("Tracker does not exist.")};Z.p=function(a){return Z.o[a]};Z.A=function(){return Z.C[q](0)};
Z.P=function(){dd("Initializing Google Analytics.");"ga"!=Fc&&F(49);var a=Q[Fc];if(a&&42==a.answer)J("Tracking script already loaded. Abandoning initialization.");else{Z.h=a&&a.l;Z.loaded=!0;var b=Q[Fc]=Z;Y("create",b,b.create,3);Y("remove",b,b.remove);Y("getByName",b,b.p,5);Y("getAll",b,b.A,6);Y("dump",b,b.M);b=ad[x];Y("get",b,b.get,7);Y("set",b,b.set,4);Y("send",b,b[jd],2);b=wc[x];Y("get",b,b.get);Y("set",b,b.set);(Q.gaplugins=Q.gaplugins||{}).Linker=pd;b=pd[x];$.G("linker",pd);Y("decorate",b,b.S,
20);Y("autoLink",b,b.U,25);$.G("displayfeatures",$d);$.G("adfeatures",Ge);a=a&&a.q;xa(a)?$.H[D](Z,a):F(50)}ge()};Z.M=function(){for(var a=Z.A(),b=0;b<a[w];b++)N("Tracker: "+a[b].get(T)),Ja(a[b].a),N("\n")};(function(){var a=Z.P;if(!cd(a)){F(16);var b=!1,c=function(){!b&&cd(a)&&(b=!0,Ca(I,"visibilitychange",c))};Ba(I,"visibilitychange",c)}})();function ic(a){var b=1,c=0,d;if(a)for(b=0,d=a[w]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};})(window);