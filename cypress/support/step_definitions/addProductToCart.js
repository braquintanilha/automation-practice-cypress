/* global Given, When, Then */

import HomePage from '../pages/homePage'
import CartPage from '../pages/cartPage'
const homePage = new HomePage()
const cartPage = new CartPage()

Given('que estou na página inicial', () => {
	homePage.visit()
});

When('pesquiso por {string}', produto => {
	homePage.searchProduct(produto)
});

When('adiciono o primeiro produto comprável ao carrinho', () => {
	homePage.addFirstProductToCart()
});

When('procedo para a visualização do carrinho', () => {
	homePage.proceedToCheckout()
});

Then('devo visualizar 1 produto {string} no carrinho', produto => {
	cartPage.getCartTitle()
		.should('be.visible')
		.should('contain', 'Shopping-cart summary')

	cartPage.getProductName()
		.should('be.visible')
		.should('contain', produto)
		
	cartPage.getQuantity()
		.should('be.visible')
		.should('have.value', 1)
});
