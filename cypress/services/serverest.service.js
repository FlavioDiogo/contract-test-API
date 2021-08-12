import Rest from './common/_rest.service'
import {Factory} from '../fixtures/factory'


const URL_USERS = '/usuarios'
const URL_LOGIN = '/login'
const URL_PRODUCT = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export class ServeRest extends Rest {


    static get_all_users(){
        return super.httpRequestWithoutBody('GET', URL_USERS)
    }

    static post_user_by_type(type){
        let body = Factory.getUser(type)
        return super.httpRequestWithBody('POST', URL_USERS, body)
    }

    static post_login(type){
        let body = Factory.bodyLogin(type)
        return super.httpRequestWithBody('POST', URL_LOGIN, body)
    }

    static post_produto(type, auth){
        let body = Factory.bodyProduto(type)
        return super.httpRequestWithBody('POST', URL_PRODUCT, body, {authorization: auth})

        }

    static post_carrinhos(type, auth){
        let body = Factory.bodyCarrinho(type)
        return super.httpRequestWithBody('POST', URL_CARRINHOS, body, {authorization: auth})
    }

    static get_all_products(){
        return super.httpRequestWithoutBody('GET', URL_PRODUCT)
    }
} 