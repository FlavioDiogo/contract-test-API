Feature: Produtos

Scenario: POST - produtos
    Given que o usuário do tipo administrador esteja autenticado
    When realizar a criação de produto válido
    Then deverá retornar uma resposta com o schema "post-produto" e status 201

    Scenario: GET - produtos
    When quando solicitar a lista de produtos
    Then deverá retornar uma resposta com o schema "get-produto" e status 200
  