describe('My first test', function (){
    it('Gets, types and asserts,submit', function () {
       cy.visit('http://localhost:4100/')
        cy.contains('Sign in').click()
        cy.url()
            .should('include','/login')
        cy.contains('Need an account').click()
        cy.url()
            .should('include','/register')
        cy.get('.form-group:nth-child(1) .form-control-lg')
            .type('guldi')
        cy.get('fieldset.form-group:nth-child(2)')
            .type('geldi@gmail.com')
        cy.get('fieldset.form-group:nth-child(3)')
            .type('Guldi')
        cy.get('.btn-primary.pull-xs-right').click()
        cy.get('.ion-heart').click()


    })
    })