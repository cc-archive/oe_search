<?xml version='1.0' ?>
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
	
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en' lang='en'>

<head>{$myHeaders}</head>

<body onload='loadMoreSearchOptions();'>

<div id='header'>
	<div id='headerLogo'>
		<a href='{$config->_rootUri}/'><img id='headerLogo' src='{$config->_imgUri}/cc-logo.png' alt='ccLearn' /></a>
	</div>
</div>
<div id='headerInfoBar'>
	<div id='headerLinks'>
		<a href='{$config->_rootUri}/about.php'>About</a>&nbsp;&nbsp;
		<a href='{$config->_rootUri}/sponsors.php'>Sponsors</a>&nbsp;&nbsp;
		<a href='http://learn.creativecommons.org'>ccLearn</a>
	</div>
	<div id='headerLang'>
		<form action='{$config->_rootUri}' method='get'>
			<select name='lang' disabled='disabled'>
				<option value=''>Select a language</option>
			</select>
		</form>
	</div>
</div>
