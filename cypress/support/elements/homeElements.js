class HomeElements {

    // CSS Selector - Input "Pesquisar"
    inputPesquisa = () => { return '#search_query_top' }

    // CSS Selector - Botão "Pesquisar"
    botaoPesquisa = () => { return 'button[name=submit_search]' }

    // XPath - Botão "Add to Cart" do primeiro produto comprável de uma pesquisa
    botaoAddProdutoCarrinho = () => { return '//ul[@class="product_list grid row"]/li[1]//a[@title="Add to cart"]' }

    // CSS Selector - Botão "Proceed to checkout"
    botaoProceedCheckout = () => { return 'a[title="Proceed to checkout"]' }
}

export default HomeElements