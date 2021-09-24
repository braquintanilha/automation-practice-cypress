const tituloCarrinho = '#cart_title'
const nomeProduto = '//td[@class="cart_description"]/p/a'
const quantidadeProduto = 'input.cart_quantity_input'

class CartPage {
    getTituloCarrinho() {
        return cy.get(tituloCarrinho)
    }

    getNomeProduto() {
        return cy.xpath(nomeProduto)
    }

    getQuantidadeProduto() {
        return cy.get(quantidadeProduto)
    }
}

export default CartPage