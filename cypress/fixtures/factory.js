import faker from 'faker'
 
export class Factory {
    static getUser(type, admin = true) {
        switch(type) {
            case 'valid':
                return {
                    "nome": faker.name.findName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": admin.toString()
                }
            case 'invalid': 
                return {
                    "nome": "Fulano da Silva",
                    "email": "beltranoqa@qa.com.br",
                    "password":  "teste",
                    "administrador": "true"
                }
 
            case 'empty':
                return {
                    "nome": "",
                    "email": "",
                    "password": "",
                    "administrador": admin.toString() 
                }
 
            default:
                return {notfound: "The user type was not found, please verify!"}
        }
    }

    static bodyLogin(type) {
        switch(type) {
            case 'valid':
                return {
                    "email": "fulano@qa.com",
                    "password": "teste",
                    
                }
            case 'invalid': 
                return {
                    "email": faker.internet.email(),
                    "password": faker.internet.password()
                }
 
            case 'empty_email':
                return {
                    "email": "",
                    "password": "abcde"  
                }
            case 'empty_password':
                return {
                        "email": faker.internet.email(),
                        "password": ""  
                    }  
 
            default:
                return {notfound: "error"}
        }
        
    }


    static bodyCarrinho(type) {
        switch(type) {
            case 'valid':
                return {
                    "produtos": [
                        {
                    "idProduto": "BeeJh5lz3k6kSIzA",
                    "quantidade": "1"
                    
                }
                    ]
                }
                case 'invalid':
                return {
                    "idProduto": "BeeJh5lz3k6kSIzA",
                    "quantidade": "1"
                    
                }
                case 'invalid_token':
                    return {
                        "idProduto": "BeeJh5lz3k6kSIzA",
                        "quantidade": "1"
                        
                    }
            default:
                return {notfound: "error"}
        }
    }

   

    static bodyProduto() {
                   return {
                    "nome": "Logitech MX Vert",
                    "preco": 470,
                    "descricao": "Mouse",
                    "quantidade": 381
                  
                   }

                   
    }

    static userID(type) {
        switch(type) {
                
            case 'valid':
                return "0uxuPY0cbmQhpEz1"
        }    
     
    }   

    static userBody(type) {
             return {
                "nome": "Fulano da Silva",
                "email": "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true",
                "_id": "0uxuPY0cbmQhpEz1", 

             
             }
               

    }
}    
    

       