var oracledb = require('oracledb');
var dbConfig = require('../dbconfig');


function doRelease(connection) {
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}


exports.todos = function(req, res) {
    oracledb.getConnection(
        {
          user          : dbConfig.user,
          password      : dbConfig.password,
          connectString : dbConfig.connectString
        },
        function(err, connection) {
          if (err) {
            console.error(err.message);
            return;
          }
          connection.execute(
            `SELECT * FROM employees`,
            [],
            { 
                outFormat: oracledb.OBJECT
            },
            function(err, result) {
              if (err) {
                res.status(200).send({
                    "codigo": 200,
                    "mensaje": err.message
                });
                doRelease(connection);
                return;
              }
              json = JSON.stringify(result.rows);
              res.status(200).send(json);
              doRelease(connection);
            });
        });    
}