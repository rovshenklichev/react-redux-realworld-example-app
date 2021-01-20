describe('My third test', function (){
    it('Gets, types and asserts,submit', function () {
        cy.visit('http://localhost:4100/')
        cy.contains('Sign in').click()
        cy.url()
            .should('include','/login')
        cy.get('li.nav-item:nth-child(2)').click()
        cy.get('fieldset.form-group:nth-child(1)')
            .type('geldi@gmail.com')
        cy.get('fieldset.form-group:nth-child(2)')
            .type('Guldi')
        cy.get('.btn-primary.pull-xs-right').click()
        cy.visit('http://localhost:4100/settings')
        cy.url()
            .should('include','/settings')
        cy.get('button.btn:nth-child(4)').click()

        cy.contains('Sign in').click()
        cy.url()
            .should('include','/login')
        cy.get('li.nav-item:nth-child(2)').click()
        cy.get('fieldset.form-group:nth-child(1)')
            .type('kulieyev@gmail.com')
        cy.get('fieldset.form-group:nth-child(2)')
            .type('Gaadik@1991')
        cy.get('.btn-primary.pull-xs-right').click()
     cy.contains('Global Feed').click()
        cy.get('i.ion-heart').click()
    })
})