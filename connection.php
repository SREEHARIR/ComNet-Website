    <?php

error_reporting(E_ALL ^ E_DEPRECATED);
$mysql_hostname = "mysql.hostinger.in";
    $mysql_user = "u554330149_user";
    $mysql_password = "password";
    $mysql_database = "u554330149_reg";
    $prefix = "";
    $bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Could not connect database");
    mysql_select_db($mysql_database, $bd) or die("Could not select database");
    ?>