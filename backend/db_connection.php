<?php
ini_set("display_errors", "1");
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");

class DatabaseAdmin {
    private static $dbHost = "localhost";
    private static $dbName = "zelda_wiki";
    private static $dbUser = "zeldaData";
    private static $dbUserPassword = "@f9m@592LWwe6W";
    private static $connection = null;


    public static function connect() {
        try{
            self::$connection = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName,self::$dbUser,self::$dbUserPassword);
        }
        catch(PDOException $e){
            die($e->getMessage());
        }

        return self::$connection;
    }

    public static function disconnect(){
        self::$connection = null;
    }

}
?>
