!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(H){"use strict";var l="styler",i={idSuffix:"-styler",filePlaceholder:"Drop files here or",fileBrowse:"SELECT FILE",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"1",selectSmartPositioning:!1,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};function o(e,t){this.element=e,this.options=H.extend({},i,t);var s=this.options.locale;void 0!==this.options.locales[s]&&H.extend(this.options,this.options.locales[s]),this.init()}function z(e){var t,s,i;H(e.target).parents().hasClass("jq-selectbox")||"OPTION"==e.target.nodeName||H("div.jq-selectbox.opened").length&&(t=H("div.jq-selectbox.opened"),s=H("div.jq-selectbox__search input",t),i=H("div.jq-selectbox__dropdown",t),t.find("select").data("_"+l).options.onSelectClosed.call(t),s.length&&s.val("").keyup(),i.hide().find("li.sel").addClass("selected"),t.removeClass("focused opened dropup dropdown"))}o.prototype={init:function(){var e,t,s,i,l,A=H(this.element),D=this.options,o=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),a=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));function I(){void 0!==A.attr("id")&&""!==A.attr("id")&&(this.id=A.attr("id")+D.idSuffix),this.title=A.attr("title"),this.classes=A.attr("class"),this.data=A.data()}A.is(":checkbox")?((e=function(){var e=new I,t=H('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(t).prependTo(t),t.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),A.is(":checked")&&t.addClass("checked"),A.is(":disabled")&&t.addClass("disabled"),t.click(function(e){e.preventDefault(),t.is(".disabled")||(A.is(":checked")?(A.prop("checked",!1),t.removeClass("checked")):(A.prop("checked",!0),t.addClass("checked")),A.focus().change())}),A.closest("label").add('label[for="'+A.attr("id")+'"]').on("click.styler",function(e){H(e.target).is("a")||H(e.target).closest(t).length||(t.triggerHandler("click"),e.preventDefault())}),A.on("change.styler",function(){A.is(":checked")?t.addClass("checked"):t.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&t.click()}).on("focus.styler",function(){t.is(".disabled")||t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")})})(),A.on("refresh",function(){A.closest("label").add('label[for="'+A.attr("id")+'"]').off(".styler"),A.off(".styler").parent().before(A).remove(),e()})):A.is(":radio")?((t=function(){var e=new I,s=H('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(s).prependTo(s),s.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),A.is(":checked")&&s.addClass("checked"),A.is(":disabled")&&s.addClass("disabled"),H.fn.commonParents=function(){var e=this;return e.first().parents().filter(function(){return H(this).find(e).length===e.length})},H.fn.commonParent=function(){return H(this).commonParents().first()},s.click(function(e){var t;e.preventDefault(),s.is(".disabled")||((t=H('input[name="'+A.attr("name")+'"]')).commonParent().find(t).prop("checked",!1).parent().removeClass("checked"),A.prop("checked",!0).parent().addClass("checked"),A.focus().change())}),A.closest("label").add('label[for="'+A.attr("id")+'"]').on("click.styler",function(e){H(e.target).is("a")||H(e.target).closest(s).length||(s.triggerHandler("click"),e.preventDefault())}),A.on("change.styler",function(){A.parent().addClass("checked")}).on("focus.styler",function(){s.is(".disabled")||s.addClass("focused")}).on("blur.styler",function(){s.removeClass("focused")})})(),A.on("refresh",function(){A.closest("label").add('label[for="'+A.attr("id")+'"]').off(".styler"),A.off(".styler").parent().before(A).remove(),t()})):A.is(":file")?(A.css({position:"absolute",top:0,right:0,margin:0,padding:0,opacity:0,fontSize:"100px"}),(s=function(){var e=new I,l=A.data("placeholder");void 0===l&&(l=D.filePlaceholder);var t=A.data("browse");void 0!==t&&""!==t||(t=D.fileBrowse);var o=H('<div class="jq-file"><div class="jq-file__name">'+l+'</div><div class="jq-file__browse">'+t+"</div></div>").css({display:"inline-block",position:"relative",overflow:"hidden"}).attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(o).appendTo(o),A.is(":disabled")&&o.addClass("disabled"),A.on("change.styler",function(){var e,t,s=A.val(),i=H("div.jq-file__name",o);A.is("[multiple]")&&(s="",0<(e=A[0].files.length)&&(void 0===(t=A.data("number"))&&(t=D.fileNumber),s=t=t.replace("%s",e))),i.text(s.replace(/.+[\\\/]/,"")),""===s?(i.text(l),o.removeClass("changed")):o.addClass("changed")}).on("focus.styler",function(){o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")}).on("click.styler",function(){o.removeClass("focused")})})(),A.on("refresh",function(){A.off(".styler").parent().before(A).remove(),s()})):A.is('input[type="number"]')?((i=function(){var e=new I,t=H('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'),A.is(":disabled")&&t.addClass("disabled");var o,a,d,s=null,i=null;void 0!==A.attr("min")&&(o=A.attr("min")),void 0!==A.attr("max")&&(a=A.attr("max")),d=void 0!==A.attr("step")&&H.isNumeric(A.attr("step"))?Number(A.attr("step")):Number(1);function l(e){var t,s=A.val();H.isNumeric(s)||(s=0,A.val("0")),e.is(".minus")?t=Number(s)-d:e.is(".plus")&&(t=Number(s)+d);var i=(d.toString().split(".")[1]||[]).length;if(0<i){for(var l="1";l.length<=i;)l+="0";t=Math.round(t*l)/l}H.isNumeric(o)&&H.isNumeric(a)?o<=t&&t<=a&&A.val(t):H.isNumeric(o)&&!H.isNumeric(a)?o<=t&&A.val(t):(H.isNumeric(o)||!H.isNumeric(a)||t<=a)&&A.val(t)}t.is(".disabled")||(t.on("mousedown","div.jq-number__spin",function(){var e=H(this);l(e),s=setTimeout(function(){i=setInterval(function(){l(e)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(s),clearInterval(i)}).on("mouseup","div.jq-number__spin",function(){A.change()}),A.on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}))})(),A.on("refresh",function(){A.off(".styler").closest(".jq-number").before(A).remove(),i()})):A.is("select")?((l=function(){function S(e){e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(e){var t=null;"mousewheel"==e.type?t=-1*e.originalEvent.wheelDelta:"DOMMouseScroll"==e.type&&(t=40*e.originalEvent.detail),t&&(e.stopPropagation(),e.preventDefault(),H(this).scrollTop(t+H(this).scrollTop()))})}var T=H("option",A),N="";function P(){for(var e=0;e<T.length;e++){var t=T.eq(e),s="",i="",l="",o="",a="",d="",n="",r="",c="";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i="disabled"),t.is(":selected:disabled")&&(i="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(o=' id="'+t.attr("id")+D.idSuffix+'"'),void 0!==t.attr("title")&&""!==T.attr("title")&&(a=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(n=" "+t.attr("class"),c=' data-jqfs-class="'+t.attr("class")+'"');var h=t.data();for(var f in h)""!==h[f]&&(d+=" data-"+f+'="'+h[f]+'"');i+n!==""&&(l=' class="'+i+n+'"'),s="<li"+c+d+l+a+o+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(r=" "+t.parent().attr("class")),s="<li"+c+d+' class="'+i+n+" option"+r+'"'+a+o+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+r+'">'+t.parent().attr("label")+"</li>"+s)),N+=s}}if(A.is("[multiple]")){if(a||o)return;!function(){var e=new I,t=H('<div class="jq-select-multiple jqselect"></div>').css({display:"inline-block",position:"relative"}).attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.css({margin:0,padding:0}).after(t),P(),t.append("<ul>"+N+"</ul>");var s=H("ul",t).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),l=H("li",t).attr("unselectable","on"),i=A.attr("size"),o=s.outerHeight(),a=l.outerHeight();void 0!==i&&0<i?s.css({height:a*i}):s.css({height:4*a}),o>t.height()&&(s.css("overflowY","scroll"),S(s),l.filter(".selected").length&&s.scrollTop(s.scrollTop()+l.filter(".selected").position().top)),A.prependTo(t).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),A.is(":disabled")?(t.addClass("disabled"),T.each(function(){H(this).is(":selected")&&l.eq(H(this).index()).addClass("selected")})):(l.filter(":not(.disabled):not(.optgroup)").click(function(e){A.focus();var t,s,i=H(this);e.ctrlKey||e.metaKey||i.addClass("selected"),e.shiftKey||i.addClass("first"),e.ctrlKey||e.metaKey||e.shiftKey||i.siblings().removeClass("selected first"),(e.ctrlKey||e.metaKey)&&(i.is(".selected")?i.removeClass("selected first"):i.addClass("selected first"),i.siblings().removeClass("first")),e.shiftKey&&(s=t=!1,i.siblings().removeClass("selected").siblings(".first").addClass("selected"),i.prevAll().each(function(){H(this).is(".first")&&(t=!0)}),i.nextAll().each(function(){H(this).is(".first")&&(s=!0)}),t&&i.prevAll().each(function(){return!H(this).is(".selected")&&void H(this).not(".disabled, .optgroup").addClass("selected")}),s&&i.nextAll().each(function(){return!H(this).is(".selected")&&void H(this).not(".disabled, .optgroup").addClass("selected")}),1==l.filter(".selected").length&&i.addClass("first")),T.prop("selected",!1),l.filter(".selected").each(function(){var e=H(this),t=e.index();e.is(".option")&&(t-=e.prevAll(".optgroup").length),T.eq(t).prop("selected",!0)}),A.change()}),T.each(function(e){H(this).data("optionIndex",e)}),A.on("change.styler",function(){l.removeClass("selected");var t=[];T.filter(":selected").each(function(){t.push(H(this).data("optionIndex"))}),l.not(".optgroup").filter(function(e){return-1<H.inArray(e,t)}).addClass("selected")}).on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}),o>t.height()&&A.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||s.scrollTop(s.scrollTop()+l.filter(".selected").position().top-a),40!=e.which&&39!=e.which&&34!=e.which||s.scrollTop(s.scrollTop()+l.filter(".selected:last").position().top-s.innerHeight()+2*a)}))}()}else!function(){var e=new I,t="",s=A.data("placeholder"),i=A.data("search"),l=A.data("search-limit"),o=A.data("search-not-found"),a=A.data("search-placeholder"),n=A.data("z-index"),r=A.data("smart-positioning");void 0===s&&(s=D.selectPlaceholder),void 0!==i&&""!==i||(i=D.selectSearch),void 0!==l&&""!==l||(l=D.selectSearchLimit),void 0!==o&&""!==o||(o=D.selectSearchNotFound),void 0===a&&(a=D.selectSearchPlaceholder),void 0!==n&&""!==n||(n=D.singleSelectzIndex),void 0!==r&&""!==r||(r=D.selectSmartPositioning);var c=H('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({display:"inline-block",position:"relative",zIndex:n}).attr({id:e.id,title:e.title}).addClass(e.classes).data(e.data);A.css({margin:0,padding:0}).after(c).prependTo(c);var d=H("div.jq-selectbox__select",c),h=H("div.jq-selectbox__select-text",c),f=T.filter(":selected");P(),i&&(t='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+a+'"></div><div class="jq-selectbox__not-found">'+o+"</div>");var u=H('<div class="jq-selectbox__dropdown" style="position: absolute">'+t+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+N+"</ul></div>");c.append(u);var p=H("ul",u),v=H("li",u),m=H("input",u),g=H("div.jq-selectbox__not-found",u).hide();v.length<l&&m.parent().hide(),""===T.first().text()&&T.first().is(":selected")&&!1!==s?h.text(s).addClass("placeholder"):h.text(f.text());var b,y,C=0,x=0;v.css({display:"inline-block"}),v.each(function(){var e=H(this);e.innerWidth()>C&&(C=e.innerWidth(),x=e.width())}),v.css({display:""}),h.is(".placeholder")&&h.width()>C?h.width(h.width()):(y=(b=c.clone().appendTo("body").width("auto")).outerWidth(),b.remove(),y==c.outerWidth()&&h.width(x)),C>c.width()&&u.width(C),""===T.first().text()&&""!==A.data("placeholder")&&v.first().hide(),A.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var w=c.outerHeight(!0),q=m.parent().outerHeight(!0)||0,_=p.css("max-height"),j=v.filter(".selected");j.length<1&&v.first().addClass("selected sel"),void 0===v.data("li-height")&&v.data("li-height",v.outerHeight());var k=u.css("top");"auto"==u.css("left")&&u.css({left:0}),"auto"==u.css("top")&&(u.css({top:w}),k=w),u.hide(),j.length&&(T.first().text()!=f.text()&&c.addClass("changed"),c.data("jqfs-class",j.data("jqfs-class")),c.addClass(j.data("jqfs-class"))),A.is(":disabled")?c.addClass("disabled"):(d.click(function(){H("div.jq-selectbox").filter(".opened").length&&D.onSelectClosed.call(H("div.jq-selectbox").filter(".opened")),A.focus();var t=H(window),s=v.data("li-height"),i=c.offset().top,l=t.height()-w-(i-t.scrollTop()),e=A.data("visible-options");void 0!==e&&""!==e||(e=D.selectVisibleOptions);var o=5*s,a=s*e;0<e&&e<6&&(o=a),0===e&&(a="auto");function d(){function e(){p.css("max-height",Math.floor((l-20-q)/s)*s)}u.height("auto").css({bottom:"auto",top:k}),e(),p.css("max-height",a),"none"!=_&&p.css("max-height",_),l<u.outerHeight()+20&&e()}!0===r||1===r?o+q+20<l?(d(),c.removeClass("dropup").addClass("dropdown")):(function(){u.height("auto").css({top:"auto",bottom:k});function e(){p.css("max-height",Math.floor((i-t.scrollTop()-20-q)/s)*s)}e(),p.css("max-height",a),"none"!=_&&p.css("max-height",_),i-t.scrollTop()-20<u.outerHeight()+20&&e()}(),c.removeClass("dropdown").addClass("dropup")):!1!==r&&0!==r||o+q+20<l&&(d(),c.removeClass("dropup").addClass("dropdown")),c.offset().left+u.outerWidth()>t.width()&&u.css({left:"auto",right:0}),H("div.jqselect").css({zIndex:n-1}).removeClass("opened"),c.css({zIndex:n}),u.is(":hidden")?(H("div.jq-selectbox__dropdown:visible").hide(),u.show(),c.addClass("opened focused"),D.onSelectOpened.call(c)):(u.hide(),c.removeClass("opened dropup dropdown"),H("div.jq-selectbox").filter(".opened").length&&D.onSelectClosed.call(c)),m.length&&(m.val("").keyup(),g.hide(),m.keyup(function(){var e=H(this).val();v.each(function(){H(this).html().match(new RegExp(".*?"+e+".*?","i"))?H(this).show():H(this).hide()}),""===T.first().text()&&""!==A.data("placeholder")&&v.first().hide(),v.filter(":visible").length<1?g.show():g.hide()})),v.filter(".selected").length&&(""===A.val()?p.scrollTop(0):(p.innerHeight()/s%2!=0&&(s/=2),p.scrollTop(p.scrollTop()+v.filter(".selected").position().top-p.innerHeight()/2+s))),S(p)}),v.hover(function(){H(this).siblings().removeClass("selected")}),v.filter(".selected").text(),v.filter(":not(.disabled):not(.optgroup)").click(function(){A.focus();var e,t=H(this),s=t.text();t.is(".selected")||(e=t.index(),e-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),T.prop("selected",!1).eq(e).prop("selected",!0),h.text(s),c.data("jqfs-class")&&c.removeClass(c.data("jqfs-class")),c.data("jqfs-class",t.data("jqfs-class")),c.addClass(t.data("jqfs-class")),A.change()),u.hide(),c.removeClass("opened dropup dropdown"),D.onSelectClosed.call(c)}),u.mouseout(function(){H("li.sel",u).addClass("selected")}),A.on("change.styler",function(){h.text(T.filter(":selected").text()).removeClass("placeholder"),v.removeClass("selected sel").not(".optgroup").eq(A[0].selectedIndex).addClass("selected sel"),T.first().text()!=v.filter(".selected").text()?c.addClass("changed"):c.removeClass("changed")}).on("focus.styler",function(){c.addClass("focused"),H("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){c.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=v.data("li-height");""===A.val()?h.text(s).addClass("placeholder"):h.text(T.filter(":selected").text()),v.removeClass("selected sel").not(".optgroup").eq(A[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===A.val()?p.scrollTop(0):p.scrollTop(p.scrollTop()+v.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||p.scrollTop(p.scrollTop()+v.filter(".selected").position().top-p.innerHeight()+t),13==e.which&&(e.preventDefault(),u.hide(),c.removeClass("opened dropup dropdown"),D.onSelectClosed.call(c))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),d.click())}),z.registered||(H(document).on("click",z),z.registered=!0))}()})(),A.on("refresh",function(){A.off(".styler").parent().before(A).remove(),l()})):A.is(":reset")&&A.on("click",function(){setTimeout(function(){A.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var e=H(this.element);e.is(":checkbox")||e.is(":radio")?(e.removeData("_"+l).off(".styler refresh").removeAttr("style").parent().before(e).remove(),e.closest("label").add('label[for="'+e.attr("id")+'"]').off(".styler")):e.is('input[type="number"]')?e.removeData("_"+l).off(".styler refresh").closest(".jq-number").before(e).remove():(e.is(":file")||e.is("select"))&&e.removeData("_"+l).off(".styler refresh").removeAttr("style").parent().before(e).remove()}},H.fn[l]=function(t){var s,i=arguments;return void 0===t||"object"==typeof t?(this.each(function(){H.data(this,"_"+l)||H.data(this,"_"+l,new o(this,t))}).promise().done(function(){var e=H(this[0]).data("_"+l);e&&e.options.onFormStyled.call()}),this):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var e=H.data(this,"_"+l);e instanceof o&&"function"==typeof e[t]&&(s=e[t].apply(e,Array.prototype.slice.call(i,1)))}),void 0!==s?s:this):void 0},z.registered=!1});