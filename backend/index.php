<?php 
	// connect to the database
class Database {

  protected $db;
  public function __construct() {
        try {
        $this->db = new PDO('mysql:host=localhost;port=8889;dbname=zelda_wiki', 'zeldaData', '@f9m@592LWwe6W');
        } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
        }
	}
	
  public function __destruct() {
    $this->db = NULL;
  }
}
