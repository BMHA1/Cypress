



describe('example to-do app', () => {

    beforeEach(() => { cy.visit('/') })

    it('Probando Número li', () => {
        cy.get('input').type('hola mundo{enter} hola mundo2{enter}  hola mundo3{enter} hola mundo4{enter}')
        cy.get('.todo-list>li').should('have.length', 4)
    }),
        it('Probando Orden li', () => {
            cy.get('input').type('hola mundo1{enter} hola mundo2{enter} ')
            cy.get('.todo-list>li').eq(0).should('have.text', 'hola mundo1')
            cy.get('.todo-list>li').eq(1).should('have.text', 'hola mundo2')

        }),
        it('Probando Espacio', () => {
            cy.get('input').type('  tarea1 {enter}')
            cy.get('.todo-list>li').eq(0).should('have.text', 'tarea1')
        }),
        it('Probando Check', () => {
            cy.get('input').type('hola mundo{enter} hola mundo2{enter}  hola mundo3{enter}')
            cy.get('.todo-list li .toggle').check()
        }),
        it('Probando unCheck', () => {
            cy.get('input').type('hola mundo{enter} hola mundo2{enter}  hola mundo3{enter}')
            cy.get('.todo-list li .toggle').check()
            cy.get('.todo-list li .toggle').uncheck()
        }),
        it('Probando Check vi', () => {
            cy.get('input').type('hola mundo{enter} hola mundo2{enter}  hola mundo3{enter}')
            cy.get('.todo-list li .toggle').eq(1).check()
            cy.get('.filters>li> a').eq(1).click()
            cy.get('.todo-list>li').should('have.length', 2)
        }),
        it.only('Probando Check vii', () => {
            cy.get('input').type('hola mundo{enter} hola mundo2{enter}  hola mundo3{enter}')
            cy.get('.todo-list li .toggle').eq(1).check()
            cy.get('.filters>li> a').eq(2).click()
            cy.get('.todo-list>li').should('have.length',1)
        }),
        it('Probando Check viii', () => {
            cy.get('input').type('hola mundo{enter} hola mundo2{enter}  hola mundo3{enter}')
            cy.get('.todo-list li .toggle').eq(1).check()
            cy.get('.clear-completed').click()
            cy.get('.todo-list>li').should('have.length',2)

        })
})
