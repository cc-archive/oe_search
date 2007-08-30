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

# grab the various parts.  these sections are not printed to the screen
# but rather dumped into smarty variables that will simply be printed
# in the template, so the order doesn't matter here at the moment
include("header.php");
include("footer.php");

$smarty->display("sponsors.tpl");

?>
