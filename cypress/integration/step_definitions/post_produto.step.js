/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'




Given(`que o usuário do tipo administrador esteja autenticado`, () => {
    ServeRest.post_login('valid').then(res => {
        cy.wrap(res).as('Login_response')    
    });
})



When(`realizar a criação de produto válido`, () => {
    cy.get('@Login_response').then(Login_res => {
        let auth = Login_res.body.authorization;
        console.log(Login_res)
        ServeRest.post_produto(auth); 
    })
	
})



Then(`deve retornar uma resposta com o schema {string} e status {int}`, (schema, status) => {
	console.log(schema, status);
	return true;
})

