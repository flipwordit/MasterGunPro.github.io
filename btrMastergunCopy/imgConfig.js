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
	
	baseUrl += '://raw.githubusercontent.com/MasterGunPro/MasterGunPro.github.io/master/modelPhotos/';
	
	return url = baseUrl + photoName.replaceAll(' ', '') + '.png';
}
