{$header}

<div id='searchBox'>
	<form id="cref_iframe" action=".">
		<div id='searchControl'>
			<!-- Google CSE Search Box  -->
			<input type="hidden" name="cref" value="http://oercloud.creativecommons.org/api/posts/coop_context" />
			<input type="hidden" name="cof" value="FORID:9" />
			<input type="hidden" name="filetype" value="doc" />
			<input type="text" name="q" size="50" value="{$smarty.get.q}" />
			<input type="submit" name="sa" value="Search" />
			<script type="text/javascript" src="http://google.com/coop/cse/brand?form=cref_iframe"></script>
		</div>
		<div id='advancedSearch'>
			Filter by license type:
			<select disabled='disabled' name='license'>
				<option value=''>not filtered by license</option>
				<option value='(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)'>
					free to use or share
				</option>
				<option value='(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)'>
					free to use or share, even commercially
				</option>
				<option value='(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)'>
					free to use share or modify
				</option>
				<option value='(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)'>
					free to use, share or modify, even commercially
				</option>
			</select>
		</div>
	</form>
</div>

<div id='searchResults'>
	<!-- Google Search Result Snippet Begins -->
	<div id='results_cref'></div>
	<script type="text/javascript">
		var googleSearchIframeName = "results_cref";
		var googleSearchFormName = "searchbox_cref";
		var googleSearchFrameWidth = 600;
		var googleSearchFrameborder = 0;
		var googleSearchDomain = "google.com";
		var googleSearchPath = "/cse";
	</script>
	<script type="text/javascript" src="http://www.google.com/afsonline/show_afs_search.js"></script>
	<!-- Google Search Result Snippet Ends -->
</div>

{$footer}
