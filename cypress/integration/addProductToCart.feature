#language: pt

Funcionalidade: Adicionar um produto ao carrinho
    Sendo um usuário não logado no sistema
    Quero buscar por um produto
    Para que eu possa adicioná-lo ao carrinho

    @AddProdutoCarrinho
    Cenario: Adicionar um produto ao carrinho
        Dado que estou na página inicial
        Quando pesquiso pelo produto "Faded Short Sleeve"
        E adiciono o primeiro produto comprável ao carrinho
        E procedo para o checkout do pedido
        Então devo visualizar um produto "Faded Short Sleeve" no carrinho