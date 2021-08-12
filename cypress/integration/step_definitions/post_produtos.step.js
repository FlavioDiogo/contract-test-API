/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'




Given(`que o usuário do tipo administrador esteja autenticado`, () => {
    ServeRest.post_login('valid').then(res => {
        cy.wrap(res).as('Response')    
    });
});



When(`realizar a criação de produto válido`, () => {
    cy.get('@Response').then(Login_res => {
        let auth = Login_res.body.authorization;
        console.log(Login_res)
        ServeRest.post_produto(auth); 
    });
	
});



/*Then(`deve retornar uma resposta com o schema {string} e status {int}`, (schema, status) => {
    cy.get('@Response').then ( res => {
        cy.contractValidation(res, schema, status).then( valid => {
           expect(valid).to.be.true
           expect (res.status).to.equal(status)
        })

    }) 
    
});*/

