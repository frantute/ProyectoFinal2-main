const aioKey = ""; 
const url = 'https://io.adafruit.com/api/v2/LaraGenovese/feeds/servo1/data';
const formData = new FormData();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(process.env.DATABASE_URL='mysql://bin277chfej56i46ldld:pscale_pw_6jL4G8ksNW3cTp96A8ZuILz2U9yqmT8Q6vPZSBQSh8@aws.connect.psdb.cloud/proyecto?ssl={"rejectUnauthorized":true}');
connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});


const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get("/status", (req, res) => {
  connection.query('SELECT * FROM boton_prendiendo LIMIT 1', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({
        error: err
      })
    }
    res.json(results[0].name);
  });
});

app.post("/registrarse", (req, res) => {
  const { nombre, mail, password } = req.body;
  console.log(req.body);
  const updateQuery = `INSERT INTO usuario SET nombre = ?, mail = ?, contrasenia = ?`;
  const values = [nombre, mail, password];
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
    }
  })
  console.log("se corrio el insert")
});


app.post("/InicioSesion", (req, res) => {
  const { mailfront, passwordfront } = req.body;
  const sql = 'SELECT * FROM usuario WHERE mail = ? AND contrasenia = ?';
  console.log(mailfront, passwordfront);
  connection.query(sql, [mailfront, passwordfront], (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      // Manejar el error
    } else {
      if (results.length > 0) {
        console.log("los resultados coinciden");
        res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
      }
      else {
        console.log("los resultados no coinciden");
        res.status(401).json({ success: false, message: 'Inicio de sesión fallido' });
      }
    }
  })
  console.log("se corrio el insert")
});


app.get("/compartimento1", (req, res) => {
  const updateQuery = 'INSERT INTO pastilla SET envase = ?';
  const values = ['1'];
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      res.status(403).send({error})
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
      res.status(200).send({ message: "Ok" })
    }
  })
});
app.get("/compartimento2", (req, res) => {
  const updateQuery = 'INSERT INTO pastilla SET envase = ?';
  const values = ['2'];
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      res.status(403).send({error})
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
      res.status(200).send({ message: "Ok" })
    }
  })
});
app.get("/compartimento3", (req, res) => {
  const updateQuery = 'INSERT INTO pastilla SET envase = ?';
  const values = ['3'];
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      res.status(403).send({error})
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
      res.status(200).send({ message: "Ok" })
    }
  })
});
app.get("/compartimento4", (req, res) => {
  const updateQuery = 'INSERT INTO pastilla SET envase = ?';
  const values = ['4'];
  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);
      res.status(403).send({error})
      // Manejar el error
    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
      // Hacer algo con los resultados
      res.status(200).send({ message: "Ok" })
    }
  })
});

app.post("/compartimento1informacion", (req, res) => {
  console.log(req.body)
  const { nombre, horario, fechainicio, } = req.body;
  const updateQuery = 'UPDATE pastilla SET nombre = ?, hora = ?, fecha = ? WHERE envase = 1';
  connection.query(updateQuery, [nombre, horario, fechainicio], (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta de actualización:', error);

    } else {
      console.log('Actualización exitosa. Filas afectadas:', results.affectedRows);
    
    
      
      var fechaActual = new Date();
      motor1 = 0
      const sql = 'SELECT * FROM pastilla WHERE envase = 1 AND fecha = ? AND hora = ?';
      connection.query(sql,[fecha,hora],(error, results) =>{
        if(error){
          console.error('Error al ejecutar la consulta de actualización:', error);
        }
        else{
          console.log("se agarraron los datos");
          if (fecha.Date == fechaActual.Date) {
            if ((hora == fechaActual.getHours &&  hora.getMinutes == fechaActual.getMinutes)) {
              motor1 = 'ON';
              console.log("se movio el motor")
            }
            else{
              motor1 = 'OFF';
            }
          }
        }
      })
    }
  })
});

/*
var fechaActual = new Date();
const sql = 'SELECT * FROM pastilla WHERE envase = 1 AND fecha = ? AND hora = ?';
connection.query(sql,[fecha,hora], (error, results) => {
    if (error) {
    console.error('Error al ejecutar la consulta de actualización:', error);
    // Manejar el error
  } else {
    console.log("se agarraron los datos");
    if (fecha.Date == fechaActual.Date) {
      if ((hora == fechaActual.getHours &&  hora.getMinutes == fechaActual.getMinutes)) {
        motor1 = 'ON';
        console.log("se movio el motor")
      }
      else {
        motor1 = 'OFF';
      }
    }
  }
});
*/


formData.append('value', motor1);

fetch(url, {
  method: 'POST',
  headers: {
    "X-AIO-Key": aioKey
  },
  body: formData
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

console.log('Se ejecuto SERVO 1');

////////////////////////////////////////////////////////

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});