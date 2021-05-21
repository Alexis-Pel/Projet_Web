<?php

require_once 'db_connection.php';

$db = DatabaseAdmin::connect();
$statement = $db->prepare('SELECT * FROM armor');
$statement->execute();
$tab = $statement->fetchAll();
echo json_encode($tab);
$db = DatabaseAdmin::disconnect();
// echo json_encode(array(
//   		'code' => 404,
//   		'info' => 'Nom non trouvée',
//   	));

?>


