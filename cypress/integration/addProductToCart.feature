#language: pt

Funcionalidade: Adicionar um produto ao carrinho
    Sendo um usuário não logado no sistema
    Quero buscar por um produto
    Para que eu possa adicioná-lo ao carrinho

    @AddProdutoCarrinho
    Esquema do Cenário: Adicionar um produto ao carrinho
        Dado que estou na página inicial
        Quando pesquiso por "<produto>"
        E adiciono o primeiro produto comprável ao carrinho
        E procedo para a visualização do carrinho
        Então devo visualizar 1 produto "<produto>" no carrinho

        Exemplos:

        | produto              |
        | Printed Summer Dress | 
        | Faded Short Sleeve   |
        | Blouse               |