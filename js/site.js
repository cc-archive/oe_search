function getElement(elemid) {

	/* the former for Firefox and crew, the latter for IE */
	return (document.getElementById) ? document.getElementById(elemid) : document.all[elemid];

}

function toogleSearchOptions() {

	optionsLink = getElement('moreOptionsLink');
	optionsDiv = getElement('advancedSearch');

	if ( optionsDiv.style.display == 'none' ) {
		optionsDiv.style.display = '';
		optionsLink.innerHTML = 'Less options';
		setCookie('extendedSearchOptions','yes','');
	} else {
		optionsDiv.style.display = 'none';
		optionsLink.innerHTML = 'More options';
		setCookie('extendedSearchOptions', '', -1);
	}

	return true;

}

function loadMoreSearchOptions() {

	optionsLink = getElement('moreOptionsLink');
	optionsDiv = getElement('advancedSearch');

	alert(getCookie('extendedSearchOptions'));
	if ( 'yes' == getCookie('extendedSearchOptions') ) {
		optionsDiv.style.display = "";
		optionsLink.innerHTML = "Less options";
	}
}
	
function setCookie(name,value,days) {

	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = 'expires=' + date.toGMTString();
	} else {
		var expires = '';
	}
	document.cookie = name + '=' + value + '; ' + expires + '; path=/';

	return true;

}

function getCookie(name) {

	var cookieName = name + '=';
	var cookies = document.cookie.split(';');

	for ( var idx=0; idx < cookies.length; idx++ ) {
		var cookie = cookies[idx];
		cookie = trim(cookie);
		if ( cookie.indexOf(cookieName) == 0 ) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return false;

}

function trim(string) {

	string = string.replace(/^\s+/, '');
	string = string.replace(/\s+$/, '');
	return string;

}
