<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
     border: 1px;
}
</style>
</head>
<body>

<?php
$servername = "mysql.hostinger.in";
$username = "u554330149_user";
$password = "password";
$dbname = "u554330149_reg";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM member";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
     echo "<table><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Transaction</th><th>Paper</th><th>Affiliation</th><th>IEEE</th><th>Accomodation</th></tr>";
     // output data of each row
     while($row = $result->fetch_assoc()) {
         echo "<tr><td>" . $row["mem_id"]. "</td><td>" . $row["name"]. "</td><td>" . $row["email"]. "</td><td>" . $row["phone"]. "</td><td>" . $row["transaction"]. "</td><td>" . $row["paper"]. "</td><td>" . $row["affil"]. "</td><td>" . $row["member"]. "</td><td>" . $row["acc"]. "</td></tr>";
     }
     echo "</table>";
} else {
     echo "0 results";
}

$conn->close();
?>  

</body>
</html>