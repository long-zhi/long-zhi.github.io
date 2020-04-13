// build time:Mon Apr 13 2020 19:20:25 GMT+0800 (GMT+08:00)
$.fn.extend({clock:function(){var t={};t.$el=$(this),t.ZHCNArr=["零","一","二","三","四","五","六","七","八","九","十"],t.changeZHCN=function(t){if(t<10)return this.ZHCNArr[t];var e=t.toString(),n="";return 0==e.charAt(1)?(1!=e.charAt(0)&&(n=this.ZHCNArr[parseInt(e.charAt(0),10)]),n+=this.ZHCNArr[10]):n=t<20?this.ZHCNArr[10]+this.ZHCNArr[parseInt(e.charAt(1),10)]:this.ZHCNArr[parseInt(e.charAt(0),10)]+this.ZHCNArr[10]+this.ZHCNArr[parseInt(e.charAt(1),10)]},t.setDate=function(){for(var t="",e="",n="",s=this.dateInfo.year.toString(),o=0;o<s.length;o++)t+=this.changeZHCN(parseInt(s.charAt(o),10));e=this.changeZHCN(this.dateInfo.month),n=this.changeZHCN(this.dateInfo.day),this.els?this.els.date.html(t+"年"+e+"月"+n+"日"):this.$el.append('<li class="date">'+(t+"年"+e+"月"+n+"日")+"</li>")},t.setHour=function(){for(var e="",n=[],s=1;s<=24;s++)n.push(r=15*(s-1)*-1),e+="<div><div>"+this.changeZHCN(s)+"时</div></div>";this.$el.append('<li class="hour on-hour">'+e+"</li>"),setTimeout(function(){t.$el.find(".on-hour>div").each(function(t,e){$(e).css({transform:"rotate("+n[t]+"deg)"})}),setTimeout(function(){t.setMinute()},300)},100)},t.setMinute=function(){for(var e="",n=[],s=1;s<=60;s++)n.push(6*(s-1)*-1),e+="<div><div>"+this.changeZHCN(s)+"分</div></div>";this.$el.append('<li class="hour minute on-minute">'+e+"</li>"),setTimeout(function(){t.$el.find(".on-minute>div").each(function(t,e){$(e).css({transform:"rotate("+n[t]+"deg)"})}),setTimeout(function(){t.setSec()},300)},100)},t.setSec=function(){for(var e="",n=[],s=1;s<=60;s++)n.push(6*(s-1)*-1),e+="<div><div>"+this.changeZHCN(s)+"秒</div></div>";this.$el.append('<li class="hour sec on-sec">'+e+"</li>"),setTimeout(function(){t.$el.find(".on-sec>div").each(function(t,e){$(e).css({transform:"rotate("+n[t]+"deg)"})}),setTimeout(function(){t.initRotate()},1300)},100)},t.initRotate=function(){this.rotateInfo={h:15*(this.dateInfo.hour-1),m:6*(this.dateInfo.minute-1),s:6*(this.dateInfo.sec-1)},this.els={date:this.$el.find(".date"),hour:this.$el.find(".on-hour"),minute:this.$el.find(".on-minute"),sec:this.$el.find(".on-sec")},this.els.hour.css({transform:"rotate("+this.rotateInfo.h+"deg)"}),this.els.minute.css({transform:"rotate("+this.rotateInfo.m+"deg)"}),this.els.sec.css({transform:"rotate("+this.rotateInfo.s+"deg)"}),setTimeout(function(){t.$el.find("hr").addClass("active").css({width:"49%"}),t.start()},300)},t.start=function(){setTimeout(function(){if(t.dateInfo.sec<=60){t.dateInfo.sec++;var e=6*(t.dateInfo.sec-1);t.els.sec.css({transform:"rotate("+e+"deg)"}),t.minuteAdd(),t.start()}else console.log(t.dateInfo.sec)},1e3)},t.minuteAdd=function(){61==t.dateInfo.sec&&setTimeout(function(){t.els.sec.css({transform:"rotate(0deg)","transition-duration":"0s"}),t.dateInfo.sec=1,setTimeout(function(){t.els.sec.attr("style","transform:rotate(0deg)")},100),t.dateInfo.minute++;var e=6*(t.dateInfo.minute-1);t.els.minute.css({transform:"rotate("+e+"deg)"}),t.hourAdd()},300)},t.hourAdd=function(){61==t.dateInfo.minute&&setTimeout(function(){t.els.minute.css({transform:"rotate(0deg)","transition-duration":"0s"}),t.dateInfo.minute=1,setTimeout(function(){t.els.minute.attr("style","transform:rotate(0deg)")},100),t.dateInfo.hour++;var e=15*(t.dateInfo.hour-1);t.els.hour.css({transform:"rotate("+e+"deg)"}),t.dayAdd()},300)},t.dayAdd=function(){25==t.dateInfo.hour&&setTimeout(function(){t.els.hour.css({transform:"rotate(0deg)","transition-duration":"0s"}),t.dateInfo.hour=1,setTimeout(function(){t.els.hour.attr("style","transform:rotate(0deg)")},100);var e=new Date;t.dateInfo.year=e.getFullYear(),t.dateInfo.month=e.getMonth()+1,t.dateInfo.day=e.getDate(),t.setDate()},300)},t.init=function(){var t=new Date;this.dateInfo={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),sec:t.getSeconds()},console.log(this.dateInfo),this.setDate(),this.setHour()},t.init()}});
//rebuild by neat 