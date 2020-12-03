if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}

var xiaokang = new xkTool();
xiaokang.footFish();

function adjustIframe(id){
	    var h= document.getElementsByClassName("card-content");
		var w= document.getElementById("article-container");
        var ifm= document.getElementById(id);  
        ifm.width=w.offsetWidth; 
        ifm.height=(w.offsetWidth)*0.75;		
				
}
