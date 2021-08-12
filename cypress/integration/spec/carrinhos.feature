Feature: Carrinhos

Scenario Outline: POST - carrinhos
    Given que o usuário do tipo administrador esteja autenticado
    When realizar o cadastro de um carrinho "<type>"
    Then deveverá retornar uma resposta com o schema "post-carrinhos" e status <status>
    And deverá retornar a mesnsagem "<mensagem>"
        Examples:
            | type          | status | mensagem             |
            | invalid       | 400    | Algo deu errado      |
            | valid         | 200    | Cadastro com sucesso |
            | invalid_token | 401    | Token ausente        |
