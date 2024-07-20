<?php
	$method = $_SERVER['REQUEST_METHOD'];
  $path = './links.json';
	
	switch ($method) {
		case 'GET':
			getSettings($path);
			break;
		case 'PUT':
            saveSettings($path);
			break;
		default:
            header('HTTP/1.0 404 Method Not Allowed');
	}
  
  function getSettings($path) {
    if (file_exists($path)) {
      $contents = file_get_contents($path);
      header('Content-Type:application/json');
      echo $contents;
    }
    
  }
  
  function saveSettings($path) {
    $contents = file_get_contents('php://input');
    file_put_contents($path, $contents);
  }
?>