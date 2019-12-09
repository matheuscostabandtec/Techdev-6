module.exports = { 
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  // a conexão com o banco de dados
  production: {
    username: 'usertechdev', // usuário do azure
    password: '#Gfgrupo3', // senha do usuário do banco
    database: 'bdtechdev6',
    host: 'srvtechdev.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },

    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
