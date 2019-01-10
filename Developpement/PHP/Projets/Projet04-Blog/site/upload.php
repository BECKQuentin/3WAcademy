<?php
if(empty($_GET) == false){
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare 
(
	'SELECT * FROM `Post` INNER JOIN `Author` ON Author.author_id=Post.author_id WHERE post_id=?'
);
$query->execute([$_GET['id']]);
$postUpload = $query->fetch(PDO::FETCH_ASSOC);
}

if(empty($_POST) == false){
    $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
    $pdo->exec('SET NAMES UTF8');
    $query = $pdo->prepare 
    (
        'UPDATE `Post`
        SET post_title="?" post_contents="?"
        WHERE post_id?'
    );
    $query->execute([$_POST['title'], $_POST['contents'], $_POST['id']]);
    var_dump($_POST);

    header("Location:admin.php");
    exit();
}

$template = 'upload';
include 'layout.phtml';
?>