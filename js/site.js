function getElement(elemid) {

	/* the former for Firefox and crew, the latter for IE */
	return (document.getElementById) ? document.getElementById(elemid) : document.all[elemid];

}

function toogleSearchOptions() {

	var optionsLink = getElement('moreOptionsLink');
	var optionsDiv = getElement('advancedSearch');

	if ( optionsDiv.style.display == 'none' ) {
		optionsDiv.style.display = '';
		optionsLink.innerHTML = 'Less options';
		setCookie('extendedSearchOptions', 'yes', '');
	} else {
		optionsDiv.style.display = 'none';
		optionsLink.innerHTML = 'More options';
		setCookie('extendedSearchOptions', '', -1);
	}

	return true;

}

function loadMoreSearchOptions() {

	var optionsLink = getElement('moreOptionsLink');
	var optionsDiv = getElement('advancedSearch');

	if ( 'yes' == getCookie('extendedSearchOptions') ) {
		optionsDiv.style.display = "";
		optionsLink.innerHTML = "Less options";
	}

	return true;

}

function appendExtendedSearch(formid) {

	var myForm = getElement(formid);
	var q = myForm.q.value;
	var byLicense = getElement('filteByLicense');
	var byFiletype = getElement('filterByFiletype')[getElement('filterByFiletype').selectedIndex].value;

	// start off the queryAppend with an AND so that if the user decides to put
	// some manual search options that conflict with the ones that may be
	// appended, we won't exclude a lot of records
	var queryAppend = ' AND ';

	// this doesn't work yet, it's just a placeholder for the moment
	//if ( byLicense[byLicense.selectedElement].value != '' ) {
	//		queryAppend += byLicense[byLicense.selectedElement].value;
	//}

	if ( byFiletype != '' ) {
		fileTypes = byFiletype.split(',');
		count = fileTypes.length;
		for ( var idx=0; idx < fileTypes.length; idx++ ) {
			if ( idx < (count - 1) ) {
				queryAppend += 'filetype:' + fileTypes[idx] + ' OR ';
			} else {
				queryAppend += 'filetype:' + fileTypes[idx];
			}
		}
	}

	// append our custom query string to the forms q input element.  and just
	// as a nicety for the user, make the text color white for while we submit
	// the form so that they don't see the appended query string flash in the
	// input box
	myForm.q.style.color = '#ffffff';
	myForm.q.value = q + queryAppend;

	// along with the normal form elements, we submit the appendedString as a
	// hidden field so that we can easily remove it later when we need to
	// redisplay the search query to the user
	var appendedString = document.createElement('input');
	appendedString.setAttribute('type','hidden');
	appendedString.setAttribute('name','appendedString');
	appendedString.setAttribute('value', queryAppend);
	myForm.appendChild(appendedString);

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
