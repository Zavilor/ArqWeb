const fs = require('fs');

const path = require('path');
const fileData = path.join(__dirname, '../public/data/users.json');

let userData = {

    findAll : function () {

        // verificamos si el archivo existe
        if (!fs.existsSync(fileData)){
            fs.writeFileSync(fileData, '');
        }
        // leemos el archivo
        let jsonFile = fs.readFileSync(fileData, 'utf8');

        //convertimos el json a un array, mientras validamos que existan datos

        let users = jsonFile.length === 0 ? [] : JSON.parse(jsonFile);
        return users;
    },

    findByEmail : function(email) {

        return this.findAll().find(function(user) {

            return user.email == email;
            
        });
    },

    create : function (user) {

        let userList = this.findAll();

        // agregamos el usuario al listado
        userList.push(user);

        // lo transformamos a JSON
        jsonUserList = JSON.stringify(userList, null, " ");

        // por ultimo escribimos el archivo
        fs.writeFileSync(fileData, jsonUserList);

    },
}

module.exports = userData;