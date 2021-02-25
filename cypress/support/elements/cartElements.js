class CartElements {

    // CSS Selector - Título do carrinho "Shopping-Cart Summary"
    tituloCarrinho = () => { return '#cart_title' }

    // XPath - Atributo que contem o nome do produto adicionado ao carrinho
    nomeProduto = () => { return '//td[@class="cart_description"]/p/a' }

    // CSS Selector - Quantidade do produto adicionado ao carrinho
    quantidadeProduto = () => { return 'input.cart_quantity_input' }
}

export default CartElements