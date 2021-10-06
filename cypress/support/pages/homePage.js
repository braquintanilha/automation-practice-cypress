const inputSearch = '#search_query_top'
const btnSearch = 'button[name=submit_search]'
const btnAddToCart = 'div.product-container .ajax_add_to_cart_button'
const btnProceedCheckout = 'Proceed to checkout'

class HomePage {
    visit() {
        cy.visit('/')
    }

    searchProduct(produto) {
        cy.get(inputSearch)
            .should('be.visible')
            .type(produto)
        cy.get(btnSearch)
            .should('be.visible')
            .click()
    }

    addFirstProductToCart() {
        cy.intercept({
            method: 'POST',
            pathname: '**/index.php',
        }).as('postIndex')

        cy.get(btnAddToCart)
            .first()
            .should('be.visible')
            .click()        
        
        cy.wait('@postIndex')
    }

    proceedToCheckout() {
        cy.contains(btnProceedCheckout)
            .should('be.visible')
            .click()
    }
}

export default HomePage