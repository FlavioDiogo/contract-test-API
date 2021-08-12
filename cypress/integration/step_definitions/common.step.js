/// <reference types="cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import {ServeRest} from '../../services/serverest.service'


Then(`deve retornar uma resposta com o schema {string} e status {int}`, (schema, status) => {
    cy.get('@Response').then ( res => {
        cy.contractValidation(res, schema, status).then( valid => {
           expect(valid).to.be.true
           expect (res.status).to.equal(status)
        })

    }) 
    
});