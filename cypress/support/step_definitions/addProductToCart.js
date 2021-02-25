/* global Given, When, Then */

import HomePage from '../page_objects/homePage'
import CartPage from '../page_objects/cartPage'
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

When('procedo para a conferência do pedido', () => {
	homePage.acessarCarrinho()
});

Then('devo visualizar um produto {string} no carrinho', produto => {
    cartPage.validaProdutoCarrinho(produto)
});