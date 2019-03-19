function toggleElement(elementId, displayStyle)
{
    var element = document.getElementById(elementId);
    var current = element.currentStyle
                ? element.currentStyle['display']
                : document.defaultView.getComputedStyle(element, null).getPropertyValue('display');
    element.style.display = (current == 'none' ? displayStyle : 'none');
}

function toggle(toggleId)
{
    var toggle = document.getElementById ? document.getElementById(toggleId) : document.all[toggleId];
    toggle.textContent = toggle.innerHTML == '\u25b6' ? '\u25bc' : '\u25b6';
}

function toggleElements(elementName,displayStyle)
{
	var elements = document.getElementsByName(elementName);
	for(var i in elements){
		var current = elements[i].currentStyle
		            ? elements[i].currentStyle['display']
		            : document.defaultView.getComputedStyle(elements[i],null).getPropertyValue('display');

		elements[i].style.display = (current == 'table-cell' ? displayStyle : 'table-cell');

	}
}

function checkImage(str,idImage,e)
{
    //var elements = document.getElementsByName("Action");
    var elementArray = "";
    //for(var i in elements){
        //alert(typeof(elements[i].src?elements[i].src:null));
    //    if(elements[i].src){
    //     	elementArray+="'"+elements[i].src+"',";
    //    }
     //}
     //alert($(e).attr('src'));
     $(e).parent().children('img').each(function () {
             elementArray +="'"+ $(this).attr("src")+"',";
     })
	var thisImage=$(e).attr('src');
         var titleImage = thisImage.split('-')[thisImage.split('-').length-1].replace('.png','');
    	var newWin = window.open();
    	//9.4 $methodName  = imgSrc.src 正则
    	var innerHtml = "<table><tbody><tr><td><button name='left' id='"+idImage+"' onclick='getPreImage()'><p><</p></button></td><td><img id='img' src="+str+" height=500/></td><td><button name='right' id='"+idImage+
        	"' onclick='getNextImage()'><p>></p></button></td> </tr><tr><td></td><td><span>下一步 : "+titleImage+"</span></td><td></td></tr></tbody></table> "
        	+"<script> var ids="+idImage+"; var imgSrc=document.getElementById('img');  function getNextImage(){ var spantitle = document.getElementsByTagName('span'); var eles=["+elementArray+"];  if(ids>=eles.length-1){alert('dont have');}else{ids++; var title = imgSrc.src=eles[ids]; spantitle[0].innerHTML = '下一步 : '+title.split('-')[title.split('-').length-1].replace('.png','');}} "
        	+"function getPreImage(){var spantitle = document.getElementsByTagName('span'); var eles=["+elementArray+"]; if(ids<=0){alert('dont have');}else{ids--; var title =imgSrc.src=eles[ids]; spantitle[0].innerHTML = '下一步 : '+title.split('-')[title.split('-').length-1].replace('.png','');}}</script>";
       newWin.document.write(innerHtml);

}


function backHome(){
    top.location.href="http://172.25.48.15:5000/testReport";

}

function getActionLog(){
    //if($(".general").css('display')=='none'){
    //    $(".general").css('display','block');
    //}
    //else{
    //    $(".general").css('display','none');
    //}
}
