<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>/*去掉 Banner 图*/
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";}
/* 页脚养鱼*/
var xiaokang = new xkTool();
xiaokang.footFish();

function adjustIframe(id){
	    var h= document.getElementsByClassName("card-content");
		var w= document.getElementById("article-container");
        var ifm= document.getElementById(id);  
        ifm.width=w.offsetWidth; 
        ifm.height=(w.offsetWidth)*0.75;		
				
}
