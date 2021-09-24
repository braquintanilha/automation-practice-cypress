/* global Given, When, Then */

import HomePage from '../pages/homePage'
import CartPage from '../pages/cartPage'
const homePage = new HomePage()
const cartPage = new CartPage()

Given('que estou na página inicial', () => {
	homePage.acessarSite()
});

When('pesquiso pelo produto {string}', produto => {
	homePage.pesquisarProduto(produto)
});

When('adiciono o primeiro produto comprável ao carrinho', () => {
	homePage.adicionarPrimeiroProdutoAoCarrinho()
});

When('procedo para o checkout do pedido', () => {
	homePage.acessarCarrinho()
});

Then('devo visualizar um produto {string} no carrinho', produto => {
	cartPage.getNomeProduto()
		.should('contain', produto)
		
	cartPage.getQuantidadeProduto()
		.should('have.value', 1)
		
	cartPage.getTituloCarrinho()
		.should('contain', 'Shopping-cart summary')
});