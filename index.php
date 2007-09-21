<?php

/*
 * Copyright (c) 2007, Nathan Kinkade, Creative Commons
 * This software is licened under an MIT-style license.
 * For the full text of the license see the file LICENSE which should
 * have been provided with this software.  For more information:
 * http://www.opensource.org/licenses/mit-license.php
 */

# include the main site config where various global variables
# and libraries are included
include("config.php");

# an array of the possible file types that a user can filter by
$fileTypes = array (
	"ogg,mp3,wav" => "Audio",
	"html" => "HTML",
	"pdf" => "PDF",
	"ods,xls" => "Spreadsheet",
	"txt" => "Text",
	"avi,mpg" => "Video",
	"odt,doc" => "Word Processor"
);
$smarty->assign("fileTypes", $fileTypes);

# an array of the possbile license types that a user can filter by
$licenseTypes = array (
	"(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)" => "free to use or share",
	"(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)" => "free to use or share, even commercially",
	"(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)" => "free to use share or modify",
	"(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)" => "free to use, share or modify, even commercially"
);
$smarty->assign("licenseTypes", $licenseTypes);

# we may need to clean up the query string and possible pre-select certain
# values from the advanced drop downs, but only do this if the use slected some 
# options from the extended search
if ( isset($_GET['q']) ) {
	if ( ! empty($_GET['appendedString']) ) {
		$origQuery = substr($_GET['q'], 0, strpos($_GET['q'], $_GET['appendedString']));
		$smarty->assign("q", $origQuery);
	} else {
		$smarty->assign("q", $_GET['q']);
	}
}

# grab the various parts.  these sections are not printed to the screen
# but rather dumped into smarty variables that will simply be printed
# in the template, so the order doesn't matter here at the moment
include("header.php");
include("footer.php");

$smarty->display("index.tpl");

?>
