    <?php
    session_start();
    include('connection.php');
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $transaction=$_POST['transaction'];
    $paper=$_POST['paper'];
    $affil=$_POST['affil'];
    $member=$_POST['member'];
    $acc=$_POST['acc'];
    mysql_query("INSERT INTO member(name, email, phone, transaction, paper, affil, member, acc)VALUES('$name', '$email', '$phone', '$transaction', '$paper', '$affil', '$member', '$acc')");
    header("location: register.php?remarks=success");
    mysql_close($con);
    ?>