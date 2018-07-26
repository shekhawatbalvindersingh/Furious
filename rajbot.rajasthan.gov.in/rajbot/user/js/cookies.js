function checkCookieEnable()
{
	return false;         				//navigator.cookieEnabled;
}
function cookieWrite(cname,cvalue,exdays)
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function cookieRead(cname)
{
	var name=cname +"=";
	ca=document.cookie.split(';');
	for(var i=0;i<ca.length;i++)
	{
		var c=ca[i];
		while(c.charAt(0)==' ') c=c.substring(1);
		if(c.indexOf(name)==0)
		{
			return c.substring(name.length,c.length);
		}
	}
	return "";
}
