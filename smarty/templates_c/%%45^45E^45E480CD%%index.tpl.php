<?php /* Smarty version 2.6.14, created on 2007-08-02 14:16:57
         compiled from index.tpl */ ?>
<?php echo $this->_tpl_vars['header']; ?>


<div id='searchBox'>
	<div id='googleSearchControl'></div>
	<div>
		Filter results by type of license:
		<select disabled='disabled' name='license'>
			<option value=''>not filtered by license</option>
			<option value='(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)'>free to use or share</option>
			<option value='(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)'>free to use or share, even commercially</option>
			<option value='(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)'>free to use share or modify</option>
			<option value='(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)'>free to use, share or modify, even commercially</option>
		</select>
	</div>
</div>

<div id='searchResults'></div>

<?php echo $this->_tpl_vars['footer']; ?>
