create database protmed;
use protmed;

create table Hospital(
idHosp int primary key auto_increment,
Nome_hosp varchar(40),
Bairro_hosp varchar(40),
Telefone_hosp char(13),
Email_hosp varchar(50)
)auto_increment=1;

create table Funcionário(
idFunc int primary key auto_increment,
Nome_func varchar(40),
CPF_func char(12),
Email_func varchar(50),
Senha_func varchar(12),
fkHosp int,
foreign key (fkHosp) references Hospital(idHosp)
)auto_increment=1010;

create table Quarto(
idQuarto int primary key auto_increment,
Qtd_geladeiras int,
Especificação_ala varchar(40),
fkHosp int,
foreign key (fkHosp) references Hospital(idHosp)
)auto_increment=100;

create table Geladeira(
idGeladeira int primary key auto_increment,
Temp_atual decimal(4,2),
Qtd_remédio int,
fkQuarto int,
foreign key (fkQuarto) references Quarto(idQuarto)
)auto_increment=100;

create table Remédio(
idRemédio int primary key auto_increment,
Nome_remédio varchar(40),
Especificação_remédio varchar(40),
Temp_ideal decimal (4,2),
fkGeladeira int,
foreign key (fkGeladeira) references Geladeira(idGeladeira)
)auto_increment=100;

create table Histórico(
idArduino int primary key auto_increment,
Temp_registro decimal (4,2),
Momento_registro datetime,
fkGeladeira int,
foreign key (fkGeladeira) references Geladeira(idGeladeira)
)auto_increment=1;

select * from hospital;
select * from funcionário;
select * from quarto;
select * from arduino;
select * from geladeira;
select * from remédio;
select * from histórico;


