<?php
    $servidor = "localhost";
    $usuario = "root";  
    $senha = "";
    $bancodados= "fullstackeletro";

	$conexao = mysqli_connect($servidor, $usuario, $senha, $bancodados);

	if (!$conexao){
		die("A coenxão ao BD falhou:". mysqli_connect_error());
	}
	setlocale(LC_MONETARY, 'pt_BR');
	
	$sql = "select categoria, descricao, imagem, precoantigo, precofinal from produto";
	$result = $conexao->query($sql);

	//echo $result->fetch_all();

	print_r( json_encode ($result->fetch_all(MYSQLI_ASSOC)) );
	header("Access-Control-Allow-Origin:*");

?>
