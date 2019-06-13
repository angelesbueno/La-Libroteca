"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
var config = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "libroteca",
    port: "8889"
};
const secret = "api-seed";
function altaUser(user) {
    let connection = mysql.createConnection(config);
    connection.connect();
    return new Promise((resolve, reject) => {
        var strQuery = `INSERT INTO usuario (username, password, nombre, apellidos, email) VALUES ('${user.usuario}', '${md5(user.contrasena)}', '${user.nombre}', '${user.apellidos}', '${user.email}')`;
        connection.query(strQuery, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
        connection.end();
    });
}
exports.altaUser = altaUser;
function searchUser(user) {
    let connection = mysql.createConnection(config);
    connection.connect();
    return new Promise((resolve, reject) => {
        var strQuery = `SELECT * FROM usuario WHERE username='${user}'`;
        connection.query(strQuery, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
        connection.end();
    });
}
exports.searchUser = searchUser;
function searchEmail(email) {
    let connection = mysql.createConnection(config);
    connection.connect();
    return new Promise((resolve, reject) => {
        var strQuery = `SELECT * FROM usuario WHERE email='${email}'`;
        connection.query(strQuery, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
        connection.end();
    });
}
exports.searchEmail = searchEmail;
function checkUser(user) {
    let pwd = md5(user.pwd);
    let connection = mysql.createConnection(config);
    connection.connect();
    return new Promise((resolve, reject) => {
        var strQuery = `SELECT * FROM usuario WHERE username='${user.usr}' AND password='${pwd}'`;
        connection.query(strQuery, function (error, result) {
            if (error) {
                reject(error);
            }
            if (result) {
                if (result.length > 0) {
                    let usuario = result[0];
                    delete usuario.password;
                    delete usuario.apellidos;
                    delete usuario.email;
                    delete usuario.rol;
                    delete usuario.nombre;
                    let token = jwt.sign({
                        usuario
                    }, secret);
                    let respuesta = {
                        ok: true,
                        usuario: result[0],
                        token
                    };
                    resolve(respuesta);
                }
                else {
                    let auth = false;
                    resolve(auth);
                }
            }
        });
        connection.end();
    });
}
exports.checkUser = checkUser;
function checkToken(tokenFront) {
    let token = tokenFront;
    if (token && token.toUpperCase().startsWith('BEARER ')) {
        token = token.substr(7);
    }
    let tokensIguales = false;
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            tokensIguales = false;
        }
        else {
            tokensIguales = true;
        }
    });
    return tokensIguales;
}
exports.checkToken = checkToken;
function checkReadedBook(data) {
    return new Promise((resolve, reject) => {
        searchIdUser(data.username, idUsuario => {
            let connection = mysql.createConnection(config);
            connection.connect();
            var strQuery = `SELECT * FROM leido WHERE idLibro='${data.idLibro}' AND idUsuario = '${idUsuario}'`;
            connection.query(strQuery, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
            connection.end();
        });
    });
}
exports.checkReadedBook = checkReadedBook;
function getUser(token) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let idUsuario = decoded.usuario.idUsuario;
                let connection = mysql.createConnection(config, { multipleStatements: true });
                connection.connect();
                var strQuery = `SELECT * FROM usuario WHERE idUsuario='${idUsuario}'`;
                console.log(strQuery);
                connection.query(strQuery, function (error, result) {
                    if (error) {
                        throw (error);
                    }
                    else {
                        resolve(result);
                    }
                });
                connection.end();
            }
        });
    });
}
exports.getUser = getUser;
function searchIdUser(username, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `SELECT idUsuario FROM usuario WHERE username='${username}'`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        let idUsuario = result[0].idUsuario;
        callback(idUsuario);
    });
    connection.end();
}
function insertAutor(autor, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `INSERT INTO autor (autor) VALUES ('${autor}')`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        callback();
    });
    connection.end();
}
function searchIdAutor(autor, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `SELECT idAutor FROM autor WHERE autor='${autor}'`;
    var idAutor;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        if (result.length > 0) {
            idAutor = result[0].idAutor;
        }
        else {
            idAutor = "0";
        }
        callback(idAutor);
    });
    connection.end();
}
function insertEditorial(editorial, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `INSERT INTO editorial (editorial) VALUES ('${editorial}')`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        callback();
    });
    connection.end();
}
function searchIdEditorial(editorial, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `SELECT idEditorial FROM editorial WHERE editorial='${editorial}'`;
    var idEditorial;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        if (result.length > 0) {
            idEditorial = result[0].idEditorial;
        }
        else {
            idEditorial = "0";
        }
        callback(idEditorial);
    });
    connection.end();
}
function insertLibro(titulo, idAutor, idEditorial, sinopsis, portada, idGB, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `INSERT INTO libro (titulo, idAutor, idEditorial, sinopsis, portada, idGB) VALUES ('${titulo}', '${idAutor}', '${idEditorial}', '${sinopsis}', '${portada}', '${idGB}')`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        callback();
    });
    connection.end();
}
function searchIdLibro(idGB, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `SELECT idLibro FROM libro WHERE idGB='${idGB}'`;
    var idLibro;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        if (result.length > 0) {
            idLibro = result[0].idLibro;
        }
        else {
            idLibro = "0";
        }
        callback(idLibro);
    });
    connection.end();
}
function searchIdLeido(idLibro, idUsuario, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `SELECT id FROM leido WHERE idLibro='${idLibro}' AND idUsuario='${idUsuario}'`;
    var idLeido;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        if (result.length > 0) {
            idLeido = result[0].id;
        }
        else {
            idLeido = "0";
        }
        callback(idLeido);
    });
    connection.end();
}
function insertLeido(idLibro, idUsuario, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `INSERT INTO leido (idLibro, idUsuario) VALUES ('${idLibro}', '${idUsuario}')`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        callback();
    });
    connection.end();
}
function addLeido(token, data) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                Promise.all([
                    new Promise((resolve, reject) => {
                        searchIdAutor(data.autor, idAutor => {
                            if (idAutor === "0") {
                                insertAutor(data.autor, () => {
                                    searchIdAutor(data.autor, idAutor => {
                                        resolve(idAutor);
                                    });
                                });
                            }
                            else {
                                resolve(idAutor);
                            }
                        });
                    }),
                    new Promise((resolve, reject) => {
                        searchIdEditorial(data.editorial, idEditorial => {
                            if (idEditorial === "0") {
                                insertEditorial(data.editorial, () => {
                                    searchIdEditorial(data.editorial, idEditorial => {
                                        resolve(idEditorial);
                                    });
                                });
                            }
                            else {
                                resolve(idEditorial);
                            }
                        });
                    })
                ]).then(([idAutor, idEditorial]) => {
                    Promise.all([
                        new Promise((resolve, reject) => {
                            searchIdLibro(data.idGB, idLibro => {
                                if (idLibro === "0") {
                                    insertLibro(data.titulo, idAutor, idEditorial, data.sinopsis, data.portada, data.idGB, () => {
                                        searchIdLibro(data.idGB, idLibro => {
                                            resolve(idLibro);
                                        });
                                    });
                                }
                                else {
                                    resolve(idLibro);
                                }
                            });
                        })
                    ]).then(([idLibro]) => {
                        searchIdUser(username, idUsuario => {
                            searchIdLeido(idLibro, idUsuario, idLeido => {
                                if (idLeido === "0") {
                                    insertLeido(idLibro, idUsuario, () => {
                                        searchIdLeido(idLibro, idUsuario, idLeido => {
                                            searchReadedBookbyId(idLeido, idUsuario, libro => {
                                                let respuesta = {
                                                    added: true,
                                                    libro
                                                };
                                                resolve(respuesta);
                                            });
                                        });
                                    });
                                }
                                else {
                                    resolve(false);
                                }
                            });
                        });
                    });
                });
            }
        });
    });
}
exports.addLeido = addLeido;
function takeAllReadedBooks(token) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                searchIdUser(username, idUsuario => {
                    let connection = mysql.createConnection(config);
                    connection.connect();
                    var strQuery = `SELECT libro.idLibro, libro.titulo, libro.sinopsis, libro.portada, libro.idGB, editorial.editorial, autor.autor, leido.id, leido.observaciones, leido.nota FROM libro INNER JOIN editorial ON libro.idEditorial=editorial.idEditorial INNER JOIN autor ON libro.idAutor=autor.idAutor INNER JOIN leido ON libro.idLibro=leido.idLibro WHERE leido.idUsuario='${idUsuario}'`;
                    connection.query(strQuery, function (error, result) {
                        if (error)
                            throw (error);
                        resolve(result);
                    });
                    connection.end();
                });
            }
        });
    });
}
exports.takeAllReadedBooks = takeAllReadedBooks;
function takeAllFavsBooks(token) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                searchIdUser(username, idUsuario => {
                    let connection = mysql.createConnection(config);
                    connection.connect();
                    var strQuery = `SELECT libro.idLibro, libro.titulo, libro.sinopsis, libro.portada, libro.idGB, editorial.editorial, autor.autor, leido.id, leido.observaciones, leido.nota, favorito.idFavorito FROM libro INNER JOIN editorial ON libro.idEditorial=editorial.idEditorial INNER JOIN autor ON libro.idAutor=autor.idAutor INNER JOIN leido ON libro.idLibro=leido.idLibro INNER JOIN favorito ON leido.id=favorito.id WHERE leido.idUsuario='${idUsuario}'`;
                    connection.query(strQuery, function (error, result) {
                        if (error)
                            reject(error);
                        resolve(result);
                    });
                    connection.end();
                });
            }
        });
    });
}
exports.takeAllFavsBooks = takeAllFavsBooks;
function searchReadedBookbyId(idLeido, idUsuario, callback) {
    let connection = mysql.createConnection(config);
    connection.connect();
    var strQuery = `SELECT libro.titulo, libro.sinopsis, libro.portada, libro.idGB, editorial.editorial, autor.autor, leido.observaciones, leido.nota FROM libro INNER JOIN editorial ON libro.idEditorial=editorial.idEditorial INNER JOIN autor ON libro.idAutor=autor.idAutor INNER JOIN leido ON libro.idLibro=leido.idLibro WHERE leido.idUsuario='${idUsuario}' AND leido.id='${idLeido}'`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        callback(result);
    });
    connection.end();
}
function searchFavBookbyId(idFavorito, callback) {
    let connection = mysql.createConnection(config);
    connection.connect();
    var strQuery = `SELECT libro.idLibro, libro.titulo, libro.sinopsis, libro.portada, libro.idGB, editorial.editorial, autor.autor, leido.id, leido.observaciones, leido.nota, favorito.idFavorito FROM libro INNER JOIN editorial ON libro.idEditorial=editorial.idEditorial INNER JOIN autor ON libro.idAutor=autor.idAutor INNER JOIN leido ON libro.idLibro=leido.idLibro INNER JOIN favorito ON leido.id=favorito.id WHERE favorito.idFavorito='${idFavorito}'`;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        callback(result);
    });
    connection.end();
}
function deleteReadedBook(token, idLibro) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                searchIdUser(username, idUsuario => {
                    let connection = mysql.createConnection(config);
                    connection.connect();
                    var strQuery = `DELETE FROM leido WHERE idUsuario='${idUsuario}' AND idLibro='${idLibro}'`;
                    connection.query(strQuery, function (error, result) {
                        if (error)
                            reject(error);
                        resolve(result);
                    });
                    connection.end();
                });
            }
        });
    });
}
exports.deleteReadedBook = deleteReadedBook;
function modificarNotaLibroLeido(token, data) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                searchIdUser(username, idUsuario => {
                    let connection = mysql.createConnection(config);
                    connection.connect();
                    var strQuery = `UPDATE leido SET nota='${data.nota}' WHERE idUsuario='${idUsuario}' AND idLibro='${data.idLibro}'`;
                    connection.query(strQuery, function (error, result) {
                        if (error)
                            reject(error);
                        resolve(result);
                    });
                    connection.end();
                });
            }
        });
    });
}
exports.modificarNotaLibroLeido = modificarNotaLibroLeido;
function modificarComentariosLibroLeido(token, data) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                searchIdUser(username, idUsuario => {
                    let connection = mysql.createConnection(config);
                    connection.connect();
                    var strQuery = `UPDATE leido SET observaciones='${data.observaciones}' WHERE idUsuario='${idUsuario}' AND idLibro='${data.idLibro}'`;
                    connection.query(strQuery, function (error, result) {
                        if (error)
                            reject(error);
                        resolve(result);
                    });
                    connection.end();
                });
            }
        });
    });
}
exports.modificarComentariosLibroLeido = modificarComentariosLibroLeido;
function searchIdFavorito(id, callback) {
    let connection = mysql.createConnection(config, { multipleStatements: true });
    connection.connect();
    var strQuery = `SELECT idFavorito FROM favorito WHERE id='${id}'`;
    var idFavorito;
    connection.query(strQuery, function (error, result) {
        if (error)
            throw error;
        if (result.length > 0) {
            idFavorito = result[0].idFavorito;
        }
        else {
            idFavorito = "0";
        }
        callback(idFavorito);
    });
    connection.end();
}
function insertFavorito(id, callback) {
    let connection = mysql.createConnection(config);
    connection.connect();
    var strQuery = `INSERT INTO favorito (id) VALUES ('${id}')`;
    connection.query(strQuery, function (error, result) {
        if (error)
            reject(error);
        callback();
    });
    connection.end();
}
function addFavorito(token, id) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let username = decoded.usuario.username;
                searchIdUser(username, idUsuario => {
                    searchIdFavorito(id, idFavorito => {
                        if (idFavorito === "0") {
                            insertFavorito(id, () => {
                                searchIdFavorito(id, idFavorito => {
                                    searchFavBookbyId(idFavorito, libro => {
                                        let respuesta = {
                                            added: true,
                                            libro
                                        };
                                        resolve(respuesta);
                                    });
                                });
                            });
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        });
    });
}
exports.addFavorito = addFavorito;
function borrarFavorito(token, idLeido) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let connection = mysql.createConnection(config);
                connection.connect();
                var strQuery = `DELETE FROM favorito WHERE id='${idLeido}'`;
                connection.query(strQuery, function (error, result) {
                    if (error) {
                        throw (error);
                    }
                    else {
                        resolve(result);
                    }
                });
                connection.end();
            }
        });
    });
}
exports.borrarFavorito = borrarFavorito;
function updateUser(token, user) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let connection = mysql.createConnection(config);
                connection.connect();
                var strQuery = `UPDATE usuario SET username='${user.username}', password='${md5(user.password)}', nombre='${user.nombre}', apellidos='${user.apellidos}', email='${user.email}' WHERE idUsuario='${user.idUsuario}'`;
                connection.query(strQuery, function (error, result) {
                    if (error) {
                        throw (error);
                    }
                    else {
                        resolve(result);
                    }
                });
                connection.end();
            }
        });
    });
}
exports.updateUser = updateUser;
function allUsers(token) {
    return new Promise((resolve, reject) => {
        if (token && token.toUpperCase().startsWith('BEARER ')) {
            token = token.substr(7);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(false);
            }
            else {
                let connection = mysql.createConnection(config);
                connection.connect();
                var strQuery = `SELECT * FROM usuario`;
                connection.query(strQuery, function (error, result) {
                    if (error) {
                        throw (error);
                    }
                    else {
                        resolve(result);
                    }
                });
                connection.end();
            }
        });
    });
}
exports.allUsers = allUsers;
//# sourceMappingURL=sqlHelperNew.js.map