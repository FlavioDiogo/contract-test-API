/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'




Given(`que o usuário do tipo administrador esteja autenticado`, () => {
    ServeRest.post_login('valid').then(res => {
        cy.wrap(res).as('Response')    
    });
});



When(`realizar a criação de produto válido`, (type) => {
    cy.get('@Response').then(Login_res => {
        let auth = Login_res.body.authorization;
        console.log(Login_res)
        ServeRest.post_produto(type, auth).then (res => {
            cy.wrap(res).as('Response')
        })
            
    });
	
});



When(`quando solicitar a lista de produtos`, () => {
    ServeRest.get_all_products().then(prod => {
        cy.wrap(prod).as('Response')

    });
}); 
	








