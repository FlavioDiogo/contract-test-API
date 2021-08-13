/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'



When(`resquest all the users`, () => {
    ServeRest.get_all_users().then(users => {
        cy.wrap(users).as('Response')

    }) 
}); 


When(`post the user of type {string}`, (user_type) => {
    ServeRest.post_user_by_type(user_type).then(post_response => {
        cy.wrap(post_response).as('Response')

    })
}); 
  

Then(`must be responsed the schema {string} with status {int}`, (schema, status) => {
    cy.get('@Response').then ( res => {
         cy.contractValidation(res, schema, status).then( valid => {
            expect(valid).to.be.true
            expect (res.status).to.equal(status)
        })

    }) 
    
});





When(`solicitar usuario do tipo {string}` , (id) => {
    ServeRest.get_user_id(id).then(user_id => {
        cy.wrap(user_id).as('Response')

    }) 
});

Then(`deverá retornar uma resposta com o schema {string} with status {int}`, (schema, status, type) => {
	cy.get('@Response').then ( res => {
        cy.contractValidation(res, schema, status).then( valid => {
           expect(valid).to.be.true
           expect (res.status).to.equal(status)
           ServeRest.get_user_id(type).then(res => {
            cy.wrap(res).as('Response')
           })   
       })
   }) 
});

Then(`deverá retornar com uma mensagem {string}`, (msg) => {
    ServeRest.get_user_id().then(res => {
        cy.wrap(res).as('Response')
        expect(res.userBody).to.equal(msg)
    }) 
});

