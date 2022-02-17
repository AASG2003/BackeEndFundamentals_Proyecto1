var userName = 0;

function eliminarUsuario(id){
    console.log('hola')
    fetch("/api/users/" +id,{
        method:"DELETE"
    }).then((res) =>{
        return res.json()
    }).then((data) =>{
        console.log(data)
        filterUser(data)
    })
}

function filterUser(id){
    let newUsers = []

    for(let u of users){
        if(u.id !== id){
            newUsers.push(u)
        }
    }
    return newUsers
}

fetch("/api/users")
    .then(function(respuesta){
        console.log(respuesta)
        return respuesta.json()
    })
    .then(function(data){
        var users = document.getElementById("users")
        users.innerHTML = ""
        for(var user of data){
            var fecha = new Date(user.birthday)
            fecha = fecha.toLocaleDateString()
            users.innerHTML = users.innerHTML + `
            <div class = "card">
                
                <img src="icon.png" alt="">  
                <div class = "text>
                    <p class = "text">${user.name}</p>
                    <p class = "text">${user.email}</p>
                    <p class = "text">${fecha}</p>
                    <p></p
                </div>
			    <div class="botones">
			        <a href="" onclick="eliminarUsuario(${user.id});" class="boton primario">Borrar</a>
			        <a onclick = "actualizarUsuario(${user.name});" href = "/updateUsers"  class="boton secundario">Editar</a>
			    </div>
		    </div>
            `
        }
    })

function actualizarUser(name){
    userName = name;
}

function enviarUser(){
    return userName
}

