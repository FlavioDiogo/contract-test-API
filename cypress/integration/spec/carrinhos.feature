Feature: Carrinhos

Scenario Outline: POST - carrinhos
    Given que o usuário do tipo administrador esteja autenticado
    When realizar o cadastro de um carrinho "<type>"
    Then deverá retornar uma resposta com o schema "post-carrinhos" e status <status>
    And deverá retornar a mensagem "<mensagem>"
        Examples:
            | type          | status | mensagem                         |
            | valid         | 201    | Cadastro realizado com sucesso   |
           #| invalid       | 400    | Produto não encontrado |
           # | invalid_token | 401    | Token ausente          |
