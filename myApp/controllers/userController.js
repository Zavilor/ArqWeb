const bcrypt = require('bcrypt');
const userData = require('../models/users');

module.exports = {
    
    list: function (req, res) {
        
        let users = [];
        
        users = userData.findAll();
        
        res.render ('user/index', {users})
    },
    
    formRegister: function (req, res) {
        
        res.render ('user/register')
    },
    
    register: function (req, res) {
        
        let user = {
            
            name: req.body.name,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 5),
            
        }
        
        userData.create(user);
        
        console.log("Usuario creado")
        return res.redirect('/');
    },
    
    detail : (req, res) => {
        
        let users = userData.findByEmail(req.params.email);
    
        res.render('user/detail', {
        users : users
        });
    },

    update : (req, res) => {

        console.log(req.params);
        
        console.log("llego aca?");
        // Inicializamos la lista de usuarios con todo lo que contiene el users.json
        let userList = this.findAll();
        
        // Dejamos en el array todos los elementos que sean distintos al que vamos a actualizar para reemplazarlo posteriormente
        userList = userList.filter(function(user) {
            return user.email != userUpdate.email ;
        });

        // Agregamos al listado de productos el producto modificado que llega por parámetro
        userList.push(userUpdate);
        
        // Convertimos nuevamente a json el listado
        jsonData = JSON.stringify(puserList, null, " ");
        // Y por ultimo, escribimos el archivo
        fs.writeFileSync(fileData, jsonData);

        return res.redirect('/');
    },

    delete : (req, res) => {
        
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });
        
        return res.redirect('/product');
    },
    
    
}