create table Hospital(
idHosp int primary key identity(1000,10),
nomeHosp varchar(40),
endereçoHosp varchar (50),
emailHosp varchar(50),
telefoneHosp char(11));
select * from hospital;

create table Funcionario(
idFunc int primary key  identity(10,10),
emailFunc varchar(40),
nomeFunc varchar(20),
cpfFunc char(11),
funçãoFunc varchar(30),
alaFunc int,
especializaçãoFunc varchar(30),
fkHosp_origem int,
foreign key (fkHosp_origem) references Hospital (idHosp));
select * from funcionario;

create table Usuario(
idUser int,
nomeUser varchar(40),
emailUser varchar(40),
senhaUser varchar(15),
cpfUser char(11),
fkFunc int,
foreign key (fkFunc) references Funcionario(idFunc),
primary key(idUser,fkFunc) 
)
select* from usuario;

create table Quartos_armz(
idQuarto int primary key identity(1,1),
Qntd_geladeiras int);
select * from Quartos_armz;

create table Geladeiras(
idGeladeira int primary key identity(100,1),
Temperatura_atual int,
Capacidade_armz int,
FkHospital_origem int,
foreign key (fkHospital_origem) references hospital (idHosp),
fkQuarto_origem int,
foreign key (fkQuarto_origem) references Quartos_armz (idQuarto)
)
select * from geladeiras;

create table Remédios(
idRemédio int primary key identity(10,1),
Nome varchar (30),
Especificação varchar(50), 
Temperatura_ideal int,
fkGeladeira_origem int,
foreign key (fkGeladeira_origem) references geladeiras (idGeladeira));
select * from remédios;

