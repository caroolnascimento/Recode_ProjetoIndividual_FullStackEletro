<?php
    $servidor = "localhost";
    $usuario = "root";  
    $senha = "";
    $bancodados= "fullstackeletro";

	$conexao = mysqli_connect($servidor, $usuario, $senha, $bancodados);

	if (!$conexao){
		die("A coenxão ao BD falhou:". mysqli_connect_error());
    }
    
    header("Access-Control-Allow-Origin:*");
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        echo json_encode(array("msg" => "Método GET Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome = $_POST['nome'];
        $msg = $_POST['msg'];

        $sql = "INSERT INTO comentarios VALUES (null, '$nome', '$msg')";
        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'PUT'){
        echo json_encode(array("msg" => "Método PUT efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        echo json_encode(array("msg" => "Método DELETE efetuado"));
    } else {
        echo "Falha!";
    }
?>