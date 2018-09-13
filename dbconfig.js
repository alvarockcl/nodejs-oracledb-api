module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "usuario",
    password      : process.env.NODE_ORACLEDB_PASSWORD || "password",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "TNSDATABASE",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };