var dinamicUrl = function(photoName){
	
	var baseUrl='';
	
	if(location.href.indexOf('https')==0)
	{
		baseUrl='https';
	}
	else
	{
		baseUrl='http';
	}
	
	baseUrl += '://MasterGunPro.github.io/modelPhotos/';
	
	return url = baseUrl + photoName + '.png';
}
