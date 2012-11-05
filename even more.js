function getUrlVars() {
//===============================================================================
//grab query string data
//===============================================================================	
	var vars = {};

	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	
	return vars;

}

//===============================================================================

function pcSafariDetected() {
	var isS = (navigator.userAgent.indexOf("Safari") != -1) ? true : false;
	var isW = (navigator.userAgent.indexOf("Windows") != -1) ? true : false;
	var de = false;
	
	if (isS && isW) {
		de = true;
	}
	
	return de;
}

//===============================================================================


log(window.getComputedStyle(document.getElementById("myobj")); 

//===============================================================================

$('<img/>').attr('src', 'http://picture.de/image.png').load(function() {
   $('body').css('background-image', 'url(http://picture.de/image.png)');
});

//
////===============================================================================


var person={fname:"John",lname:"Doe",age:25}; 

for (x in person)
{
document.write(person[x] + " ");
}


//===============================================================================

try {
	your code
	
} catch(ee) {
	
	alert(ee);
	//windows = ee.getMessage();

}

//===============================================================================

function bookmarksite(title,url)
    {

      if (window.sidebar) // firefox
      window.sidebar.addPanel(title, url, "");
      else if(window.opera && window.print){ // If browser is opera
      var elem = document.createElement('a');
      elem.setAttribute('href',url);

      elem.setAttribute('title',title);
      elem.setAttribute('rel','sidebar');
      elem.click();
    }


    else if(document.all)//  If browser is ie

     window.external.AddFavorite(url, title);

    }


//===============================================================================