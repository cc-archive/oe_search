GSearch.setOnLoadCallback(OnLoad);

var search;
function OnLoad() {
	search = new oeSearch();
}
	
function oeSearch() {
	// create the search control
	var searchControl = new GSearchControl();

	// set searcher options
	options = new GsearcherOptions();
	options.setExpandMode(GSearchControl.EXPAND_MODE_OPEN);
	options.setRoot(document.getElementById("searchResults"));
	options.setNoResultsString("You're search did not return any results.");

	// return 8 results per page instead of 4
	searchControl.setResultSetSize(GSearch.LARGE_RESULTSET);

	// set options that will affect how the search control behaves on the screen
	var drawOptions = new GdrawOptions();
	drawOptions.setDrawMode(GSearchControl.DRAW_MODE_TABBED);

	// instantiate a site searcher object
	var siteSearch = new GwebSearch();
	siteSearch.setSiteRestriction("014820550253768786988:we9jedjkeci");

	// add the Web searcher to the control
	searchControl.addSearcher(siteSearch, options);

	// enable this to implement some function that could parse each returned result
	// searchControl.setSearchCompleteCallback(this, oeSearch.prototype.OnSearchComplete);

	// draw the search box 
	searchControl.draw(document.getElementById("googleSearchControl"), drawOptions);

}

// a function that may be used to parse each returned result in order
oeSearch.prototype.OnSearchComplete = function (sc, searcher) {
	if ( searcher.results && searcher.results.length > 0 ) {
		for ( var i = 0; i < searcher.results.length; i++ ) {
			// perform some action here on the result
		}
	}
}
