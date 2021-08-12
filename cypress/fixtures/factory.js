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
                    "idProduto": "phmpgF9CPXgxe4kH",
                    "quantidade": "1"
                    
                }
                case 'invalid':
                return {
                    "idProduto": "phmpgF9CPXgxe4kH",
                    "quantidade": "1"
                    
                }
                case 'invalid_token':
                    return {
                        "idProduto": "phmpgF9CPXgxe4kH",
                        "quantidade": "1"
                        
                    }
            default:
                return {notfound: "error"}
        }
    }

    static bodyProduto(type) {
        switch(type) {
            case 'valid':
                return {
                    "nome": "caneta roxa",
                    "preco": 300,
                    "descricao": "caneta",
                    "quantidade": 556
                    
                }
            default:
                return {notfound: "error"}
        }
    }
} 