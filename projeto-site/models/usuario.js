'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {  
    let Usuario = sequelize.define('Usuario',{
		
		idUser: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: false
		},		
		
		nomeUser: {
			field: 'nomeUser',
			type: DataTypes.STRING,
			allowNull: false
		},

		emailUser: {
			field: 'emailUser',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		senhaUser: {
			field: 'senhaUser',
			type: DataTypes.STRING,
			allowNull: false
		}	
	}, 
	
	{

		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,

	});

    return Usuario;
};
