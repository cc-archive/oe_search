{$header}

<div id='searchBox'>
	<form id="cref_iframe" action="." onsubmit='return appendExtendedSearch("cref_iframe");'>
		<div id='searchControl'>
			<!-- Google CSE Search Box  -->
			<input type="hidden" name="cref" value="http://oercloud.creativecommons.org/api/posts/coop_context" />
			<input type="hidden" name="cof" value="FORID:9" />
			<input type="hidden" name="filetype" value="doc" />
			<input type="text" name="q" size="50" value="{$q}" />
			<input type="submit" name="sa" value="Search" />
			<a href='{$smarty.server.PHP_SELF}' onclick='toogleSearchOptions(); return false;' id='moreOptionsLink' class='moreSearchOptions'>More options</a>
			<script type="text/javascript" src="http://google.com/coop/cse/brand?form=cref_iframe"></script>
		</div>
		<div id='advancedSearch' style='display: none;'>
			<div style='margin-bottom: 1em;'>
				Filter by file type:
				<select name='filetype' id='filterByFiletype'>
					<option value=''>All file types</option>
{foreach from=$fileTypes key=key item=fileType}
	{if $key == $smarty.get.filetype}
					<option value='{$key}' selected='selected'>{$fileType}</option>
	{else}
					<option value='{$key}'>{$fileType}</option>
	{/if}
{/foreach}
				</select>
			</div>
			<div>
				Filter by license type:
				<select disabled='disabled' id='filterByLicense' name='licensetype'>
					<option value=''>not filtered by license</option>
{foreach from=$licenseTypes key=key item=licenseType}
	{if $key == $smarty.get.licensetype}
					<option value='{$key}' selected='selected'>{$licenseType}</option>
	{else}
					<option value='{$key}'>{$licenseType}</option>
	{/if}
{/foreach}
				</select>
			</div>
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
