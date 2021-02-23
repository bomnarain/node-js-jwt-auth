// DB 접속 정보
module.exports = {
    HOST: "localhost",
    USER: "dev",
    PASSWORD: "dev1234",
    DB: "study",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };