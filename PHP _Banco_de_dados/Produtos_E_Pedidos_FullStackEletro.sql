create database fullstackeletro;
use fullstackeletro;

create table if not exists produto(
	id_produto INTEGER PRIMARY KEY AUTO_INCREMENT,
    categoria varchar(45) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    imagem VARCHAR(200) UNIQUE,
    precoantigo varchar(40),
    precofinal VARCHAR (40)
);

insert into produto (categoria, descricao, imagem, precoantigo, precofinal) values 
 ('geladeira', 'Geladeira Fost Free Electrolux 540 litros', 'geladeira.electrolux.jpg', 'R$ 3.999,00', 'R$ 2.019,.00'),
 ('geladeira', 'Geladeira Brastemp Frost Free Evox - Inverse 540,6L Ative!', 'geladeira.brastemp.jpg', 'R$ 5.999,00', 'R$ 4.999,00'),
 ('geladeira', 'Geladeira Fost Free Consul 400 litros', 'geladeira.consul.jpg', 'R$ 899,00', 'R$ 799,00'),
 ('fogao', 'Fogão de Piso Electrolux 4 Bocas com Mesa de Vidro Temperado- BIVOLT ', 'fogão.eletrolux.jpg', 'R$ 1.200,00', 'R$ 999,00'),
 ('fogao', 'Fogão Consul 4 Bocas com Acendimento Automático - Branco', 'fogão.consul.jpg', 'R$ 999,00', 'R$ 899,00'),
 ('microondas', 'Micro-ondas Consul Espelhado - 20L', 'microondas.consul.jpg', 'R$ 499,00', 'R$ 399,00'),
 ('microondas', 'Microondas Electrolux 20 litros', 'microondas.electrolux.jpg', 'R$ 549,00', 'R$ 399,00'),
 ('microondas', 'Microondas Philco Espelhado', 'microondas.philco.jpg', 'R$ 614,00', 'R$ 482,00'),
 ('Lavadora de Roupas', 'Lavadora de Roupas Electrolux 11Kg LES11 Essencial Care – Branca', 'maquinaroupa.electrolux.jpg', 'R$ 1.500,00', 'R$ 1.399,00'),
 ('Lavadora de Roupas', 'Lava e Seca Samsung WD4000 com Ecobubble™ e Lavagem a Seco', 'lavadorasamsung.jpg', 'R$ 4.899,00', 'R$ 3.833,00'),
 ('Lavadora de Louças', 'Lavadora de louças Brastemp Compacta', 'maquinalouça.brastemp.jpg', 'R$ 3.100,00', 'R$ 2.000,00'),
 ('Lavadoura de Louças', 'Lava-Louças Electrolux 8 Serviços Cinza', 'maquinalouça.electrolux.jpg', 'R$ 5.399,00', 'R$ 4.020,00');
 
 
 create table if not exists pedidos(
	id_pedidos INTEGER,
    nome_cliente varchar(90) NOT NULL,
    rua VARCHAR(200) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    estado VARCHAR(20) NOT NULL,
	cep VARCHAR(20) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL UNIQUE,
	nome_do_produto VARCHAR(200),
    valor_unitario DECIMAL(8,2),
    quantidade DECIMAL(30) NOT NULL,
    valortotal DECIMAL(8,2),
    id_produto INTEGER 
    );

    ALTER TABLE `fullstackeletro`.`pedidos` 
ADD CONSTRAINT `id_produto` 
  FOREIGN KEY (`id_pedidos`)
  REFERENCES `fullstackeletro`.`produto` (`id_produto`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

select *
from produto
inner join pedidos
on produto.id_produto = pedidos.id_produto

  


CREATE TABLE `fullstackeletro`.`comentarios` (
  `idcomentarios` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `msg` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcomentarios`));