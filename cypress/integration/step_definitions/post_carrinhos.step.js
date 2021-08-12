/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'


Given(`que o usuário do tipo administrador esteja autenticado`, () => {
    ServeRest.post_login('valid').then(res => {
        cy.wrap(res).as('Response')    
    });
});


When(`realizar o cadastro de um carrinho {string}`, (type) => {
    cy.get('@Response').then(Login_res => {
        let auth = Login_res.body.authorization;
        console.log(Login_res)
        ServeRest.post_carrinhos(type, auth); 
    });
});



