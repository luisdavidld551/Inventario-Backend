const express = require("express");
const mysql = require("../db/db-connection");

const routes = express.Router();

// GET all User
routes.get("/", (req, res) => {
    mysql.query("SELECT * FROM usuario", (err, results, fields) => {
        if (!err) {
            if(results=="")
                res.json({ status: "No hay datos" })
            else
                res.json(results);
        } else {
            console.log(err);
        }
        console.log(results);
    });
});

// GET An User
routes.get("/:nit", (req, res) => {
    const { nit } = req.params;
    mysql.query("SELECT * FROM usuario WHERE nit = ?", [nit], (err, results, fields) => {
        if (!err) {
            if(results=="")
                res.json({ status: "No hay datos" })
            else
                res.json(results[0]);
        } else {
            console.log(err);
        }
    });
});

// DELETE An User
routes.delete("/:nit", (req, res) => {
    const { nit } = req.params;
    mysql.query("DELETE FROM usuario WHERE nit = ?", [nit], (err, results, fields) => {
        if (!err) {
            res.json({ status: "User Deleted" });
            console.log(results);
        } else {
            console.log(err);
        }
    });
});

// INSERT An User
routes.post("/", (req, res) => {
    mysql.query('INSERT INTO usuario set ?', [req.body], (err, results, fields) => {
        if (!err) {
            res.json({ status: "User Saved" });
            console.log(results);
        } else {
            console.log(err);
        }
    });
});

// UPDATE An User
routes.put("/:nit", (req, res) => {
  mysql.query('UPDATE usuario set ? WHERE nit = ?', [req.body, req.params.nit], (err, results, fields) => {
    if (!err) {
      res.json({ status: "User Updated" });
      console.log(results);
    } else {
      console.log(err);
    }
  });
});

module.exports = routes;
