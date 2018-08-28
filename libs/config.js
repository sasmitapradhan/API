
module.exports = {
  // server: 'HMECL001445\\SASMITASQL',
   database: "Greenhance",
   username: "sa",
   password: "India@1234",
   port:1433,
   params: {
   dialect: "mssql",
   host: "HMECL001445",
   dialectOptions: {
    instanceName: 'SASMITASQL'
    }
  },
  jwtSecret: "Nta$K-AP1",
  jwtSession: {session: false}
};