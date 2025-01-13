<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "user_auth";

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row['password'])) {
        echo "Login successful!";
    } else {
        echo "Incorrect password!";
    }
} else {
    echo "Username not found!";
}

mysqli_close($conn);
?>
