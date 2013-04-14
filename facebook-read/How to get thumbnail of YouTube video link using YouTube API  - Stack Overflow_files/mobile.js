'use strict';StackExchange.mobile=function(){var o,t=function(){$(".submit-on-change").change(function(){$(this).closest("form").submit()})},u=function(){$(".searchbox").focus(function(){"search"==$(this).val()&&$(this).val("")})},r=!1,w=function(){r||(r=!0,o=0,$.ajax({url:"/notices/genuwine",success:function(a){StackExchange.mobile.removeSpinner(".site-menu");v(a)},dataType:"json",error:function(){StackExchange.mobile.removeSpinner(".site-menu")}}))},y=function(a){var b=$(".unreadCount"),g=$(".site-menu-wrap");
g.hide().removeClass("dno");$("#user-dropdown").toggle(function(){g.show();a&&!b.hasClass("newNotices")&&x();b.hasClass("newNotices")&&w();$(this).text("\u25b2");$(this).addClass("menu-arrow-on");b.hide()},function(){g.hide();$(this).text("\u25bc");$(this).removeClass("menu-arrow-on");o?b.addClass("newNotices").text(o+"").show():b.remove()});b.click(function(){$("#user-dropdown").click()});$(".close-link").click(function(){$("#user-dropdown").click()})},s=!1,x=function(){s||(s=!0,StackExchange.mobile.addSpinner(".site-menu"),
$.ajax({url:"/inbox/genuwine",success:function(a){StackExchange.mobile.removeSpinner(".site-menu");z(a)},dataType:"json",error:function(){StackExchange.mobile.removeSpinner(".site-menu")}}))},v=function(a){for(var b=$(".site-menu"),g=!1,e=!1,f='<span class="notifications-header">Notifications</span><br><table class="inbox" cellspacing="0">',c=0;c<a.length&&10>c;c++){var d='<tr class="inbox-item '+(a[c].is_unread?"inbox-item-new":"")+'">',d=d+'<td class="site-icon">',d=d+('<img src="'+a[c].icon+'"/>'),
d=d+"</td>",d=d+('<td class="inbox-msg-wrap '+(a[c].is_unread?"inbox-msg-new":"")+'">'),d=d+'<span class="inbox-link">',d=d+a[c].text,d=d+"</span>",d=d+"</td>",d=d+"</tr>",f=f+d;a[c].is_unread?e=!0:g=!0}var h=$(f+"</table>");$(".site-menu-links").before(h);h.find(".inbox-item").hide();e?h.find(".inbox-item-new").show():h.find(".inbox-item:lt(2)").show();g&&(a=$('<span style="float:left" class="show-more-link"><a>show more notifications</a>&nbsp;</span>'),a.click(function(){h.find(".inbox-item").show();
$(this).remove()}),$(".site-menu-links").prepend(a));b.show()},z=function(a){for(var b=$(".site-menu"),g=!1,e=!1,f='<table class="inbox" cellspacing="0">',c=0;c<a.length&&10>c;c++){var d='href="'+a[c].Url+'"',h='<tr class="inbox-item '+(a[c].IsNew?"inbox-item-new":"")+'">',h=h+'<td class="site-icon">',h=h+('<img src="'+a[c].FaviconUrl+'"/>'),h=h+"</td>",h=h+('<td class="inbox-msg-wrap '+(a[c].IsNew?"inbox-msg-new":"")+'">'),h=h+'<span class="inbox-link">';if("careers message"==a[c].Type)h+="<a "+
d+' style="font-weight:normal"><b>'+a[c].Title+"</b> wants to contact you on <b>Stack Overflow Careers</b></a>";else if("invitation"==a[c].Type)var i=a[c].Count,h=h+("<a "+d+' style="font-weight:normal"><b>'+i+"</b> "+("invitation"+(1<i?"s":""))+" awarded on <b>Stack Overflow Careers</b></a>");else i=a[c].Count,h+=(1<i?i+" ":"")+a[c].Type+" on <a "+d+">"+a[c].Title+"</a>";h+="</span>";h+="<br>";h+='<span class="inbox-msg">'+a[c].Summary+"</span>";h+="</td>";h+="</tr>";f+=h;a[c].IsNew?e=!0:g=!0}b=
$(f+"</table>");$(".site-menu-links").before(b);b.find(".inbox-item").hide();e?b.find(".inbox-item-new").show():b.find(".inbox-item:lt(2)").show();g&&(a=$('<span style="float:left"><a>show more inbox messages</a>&nbsp;</span>'),a.click(function(){b.find(".inbox-item").show();$(this).detach()}),$(".site-menu-links").prepend(a));b.show()},n=null,A=function(){null==n&&(n=setInterval(function(){var a=$(".dot1"),b=$(".dot2"),g=$(".dot3"),e=$(".dot4");!p(a,".dot2")&&!p(b,".dot3")&&!p(g,".dot4")&&!p(e)&&
$.each(a,function(a,c){var d=$(c).closest(".mobile-spinner").attr("spinnerPadding");$(c).css({paddingLeft:d+"px"})})},20))},p=function(a,b){var g=!1;$.each(a,function(a,f){var c=$(f),d=c.css("padding-left");null==d||"0px"==d||(d=+d.substring(0,d.length-2),d--,c.css({paddingLeft:d+"px"}),b&&(c=c.siblings(b),d=c.css("padding-left"),d=+d.substring(0,d.length-2),d++,c.css({paddingLeft:d+"px"})),g=!0)});return g},B=function(){$(".spoiler").each(function(a,b){var g=$(b);g.removeClass("spoiler").addClass("spoiler-overlay");
var e=g.children();e.remove();g.append('<div class="spoiler-click-to-show">Click to show spoiler</div>');g.one("click",function(){g.empty();g.append(e);g.removeClass("spoiler-overlay").addClass("spoiler")})})},q={},D=function(a,b,g,e,f){var c=q[a];if(c)if(c.clear)b();else{for(var c=c.tags,d=0;d<c.length;d++)if(c[d]==a&&3<c[d].length){b();return}g(c,e,f)}else $.get("/filter/tags",{q:a},function(c){if($.trim(c)){for(var c=c.split("\n"),d=[],k=0;k<c.length;k++){var C=c[k].split("|");d[d.length]=C[0]}q[a]=
{tags:d};for(k=0;k<d.length;k++)if(d[k]==a&&3<d[k].length){b();return}g(d,e,f)}else q[a]={clear:!0},b()})},E=function(a){var b=a.siblings(".mobile-tag-autocomplete"),g=function(){b.hide()},e=function(f,c,d){b.empty();for(var e=0;e<f.length&&5>e;e++){var i=$('<a class="post-tag"></a>');i.text(f[e]);i.one("click",function(c,d,f){return function(){g();var b=a.val(),e=b.lastIndexOf(" ",d),h=b.indexOf(" ",f);-1==e?e=0:e++;-1==h&&(h=b.length+1);b=b.substring(0,e)+c+b.substring(h);a.val($.trim(b));e=e+c.length+
1;e>b.length&&a.val(a.val()+" ");a.focus()[0].setSelectionRange(e,e)}}(f[e],c,d));b.append(i);b.append($("<span>&nbsp;</span>"))}b.show()};return function(){var b=a.val();if(!b||!$.trim(b))g();else{var c=a[0].selectionStart;if(" "==b[c-1])g();else{c=b.lastIndexOf(" ",c-1);-1==c&&(c=0);var d=b.indexOf(" ",c+1);-1==d&&(d=b.length);b=$.trim(b.substring(c,d));D(b,g,e,c,d)}}}},F=function(){$.browser.msie||$(".mobile-tag-field").each(function(a,b){var g=$(b),e=E(g),f=setInterval(e,500);g.keyup(function(a){f&&
clearInterval(f);(32==a.which||13==a.which)&&e();f=setInterval(e,500)})})},G=function(a,b,g){return function(){$.get("/posts/popup/close/"+b,null,function(b){b=$(b);b.find(".edit-field-overlay").remove();a.empty();a.append(b);a.show();var f=g.offset();scrollTo(0,f.top);StackExchange.vote_closingAndFlagging.close_initPopup(b,g,$("#does-not-exist"));b.find(".popup-close > a").unbind("click").click(function(){$(".util-link-active").removeClass("util-link-active");g.parent().removeClass("clear-bottom-padding");
a.hide()});$(".popup-actions-cancel").hide();b.find(".edit-field-overlay, .popup-actions-cancel, .actual-edit-overlay").remove();b.find(".edit-field-overlayed").removeClass("edit-field-overlayed").attr("style","")})}},H=function(){var a={};$("a.flag-link[id^='mobile-flag-post-']").each(function(b,g){var e=$(g),f=+e.attr("id").substring(17),c=$("#mod-menu-"+f),d=function(a){var b;e.loadPopup({url:"/posts/popup/flag/"+f,loaded:function(a){b=a;a.detach();c.empty();c.append(a);c.show();var d=e.offset();
scrollTo(0,d.top);StackExchange.vote_closingAndFlagging.flag_loaded(a);StackExchange.vote_closingAndFlagging.on_close_click(G(c,f,e));e.addClass("util-link-active");e.parent().addClass("clear-bottom-padding");a.find(".popup-close > a").unbind("click").click(function(){$(".util-link-active").removeClass("util-link-active");e.parent().removeClass("clear-bottom-padding");c.hide()})},hideDescriptions:!0,actionSelected:StackExchange.vote_closingAndFlagging.flag_actionSelected,subformShow:function(c){StackExchange.vote_closingAndFlagging.flag_subformShow(c);
b.attr("style","");b.find(".edit-field-overlay, .popup-actions-cancel, .actual-edit-overlay").remove();b.find(".edit-field-overlayed").removeClass("edit-field-overlayed").attr("style","");a&&$.isFunction(a)&&a(b)}})};a[f]=d;e.click(d)});return a},I=function(a){$("a.post-close-link[id^='mobile-close-post-']").each(function(b,g){var e=$(g),f=+e.attr("id").substring(18),c=a[f];e.click(function(){c(function(a){a.hide();a.find("#flag-load-close").click();$("#mobile-flag-post-"+f).removeClass("util-link-active");
$("#mobile-close-post-"+f).addClass("util-link-active")})})})},J=function(){$(".delete-post").each(function(a,b){var g=$(b),e=+g.attr("id").substring(17);g.click(function(){confirm("Vote to delete this post?")&&StackExchange.vote.submit(g,e,StackExchange.vote.voteTypeIds.deletion,function(){window.location.reload()})})});$(".restore-post").each(function(a,b){var g=$(b),e=+g.attr("id").substring(17);g.click(function(){confirm("Vote to undelete this post?")&&StackExchange.vote.submit(g,e,StackExchange.vote.voteTypeIds.undeletion,
function(){window.location.reload()})})})},K=function(){$(".post-reopen-link").each(function(a,b){var g=$(b),e=+g.attr("id").substring(18);g.click(function(){confirm("Nominate this question for reopening?")&&StackExchange.vote.submit(g,e,StackExchange.vote.voteTypeIds.reopen,function(){window.location.reload()})})})},L=function(){$(".post-moderator-link").each(function(a,b){var g=$(b),e=+g.attr("id").substring(27),f=$("#mod-menu-"+e);g.click(function(){g.loadPopup({url:"/admin/posts/"+e+"/moderator-menu",
loaded:function(a){a.detach();f.empty();f.append(a);StackExchange.moderator.initMenu(a);a.find("div.subheader, div.popup-tab-content[id^=tab-dev-actions-], div.popup-tab-content[id^=tab-dev-info-], .actual-edit-overlay").hide();a.find(".action-subform").hide();a.find("#master-question-id").attr("style","");f.show();var b=g.offset();scrollTo(0,b.top);g.addClass("util-link-active");g.parent().addClass("clear-bottom-padding");a.find(".popup-close > a").unbind("click").click(function(){$(".util-link-active").removeClass("util-link-active");
g.parent().removeClass("clear-bottom-padding");f.hide()})},hideDescriptions:!0,dontCenter:!0})})})};return{setUnreadNotificationsCount:function(a){o=a},initDraft:function(a,b,g,e){if(window.localStorage){var b=$(b),f=$(b.find(".wmd-input")[0]),c=b.find(".tagnames"),d=b.find(".title");0<c.length&&(c=$(c[0]));0<d.length&&(d=$(d[0]));var h="mobile-draft-"+a;if(a=window.localStorage[h])a=JSON.parse(a),f.val(a.body),d.val(a.title),c.val(a.tags);a=function(){f.val()||d.val()||c.val()?window.localStorage[h]=
JSON.stringify({body:f.val(),title:d.val(),tags:c.val()}):window.localStorage.removeItem(h)};e&&a();var i=setInterval(a,5E3);$(g).click(function(){clearInterval(i);window.localStorage.removeItem(h)});f.blur(a);c.blur(a);d.blur(a)}},applyTagPrefs:function(a,b,g,e){var f=[],c=[];if(e){var d=[],h=[];if(a){for(var i=0;i<a.length;i++)-1==e.indexOf(a[i])&&(/\*/.test(a[i])?c.push(RegExp(a[i].replace(/([.+])/g,"\\$1").replace(/\*/g,".*"))):d.push(a[i]));a=d}if(b){for(i=0;i<b.length;i++)-1==e.indexOf(b[i])&&
(/\*/.test(b[i])?f.push(RegExp(b[i].replace(/([.+])/g,"\\$1").replace(/\*/g,".*"))):h.push(b[i]));b=h}}$(".post-tag").each(function(d,h){var i=$(h),m=i.text();if(b){for(var l=!1,j=0;j<b.length;j++)if(m==b[j]){l=!0;break}for(j=0;j<f.length;j++)if(f[j].test(m)&&-1==e.indexOf(m)){l=!0;break}l&&(j=i.parents(".question-summary").addClass("tagged-ignored"),g&&j.hide())}if(a){l=!1;for(j=0;j<a.length;j++)if(m==a[j]){l=!0;break}for(j=0;j<c.length;j++)if(c[j].test(m)&&-1==e.indexOf(m)){l=!0;break}l&&i.parents(".question-summary").addClass("tagged-interesting")}})},
shrinkAndShowMore:function(a,b){$(a).each(function(a,e){var f=$(e);if(!(f.height()<=b)){var c={overflowY:f.css("overflow-y"),maxHeight:f.css("max-height")};f.css({overflowY:"hidden",maxHeight:b+"px"});var d=$('<div class="generic-show-more"><a>show more</a></div>');f.after(d);d.click(function(){d.remove();f.css(c)});d.css({backgroundColor:f.css("background-color"),fontSize:"12px"})}})},addSpinner:function(a,b){$(a).each(function(a,e){b||(b="loading");var f=$('<span class="mobile-spinner"><span class="spinner-message"></span><span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span><span class="dot4">.</span></span>');
$(e).append(f);$(f).find(".spinner-message").text(b);var c=$(f).find(".dot1").width()+$(f).find(".dot2").width()+$(f).find(".dot3").width(),d=$(f).find(".spinner-message").width()+c;$(f).css({width:d+"px",overflow:"hidden",display:"block"});$(f).find(".dot1").css({paddingLeft:2*c+"px"});$(f).find(".dot2").css({paddingLeft:"0px"});$(f).find(".dot3").css({paddingLeft:"0px"});$(f).find(".dot4").css({paddingLeft:"0px"});$(f).attr("spinnerPadding",2*c)});A()},removeSpinner:function(a){$(a).find(".mobile-spinner").remove();
null!=n&&0==$(".mobile-spinner").length&&(clearInterval(n),n=null)},init:function(a){$(function(){t();u();y(a);F();B();I(H());J();K();L()})}}}();
