Feature: Carrinhos

Scenario: POST - carrinhos
    Given que o usuário do tipo administrador esteja autenticado
    When realizar o cadastro de um carrinho "valid"
    Then deve retornar uma resposta com o schema "post_carrinhos" e status 201
  