Feature: Produtos

Scenario: POST - produtos
    Given que o usuário do tipo administrador esteja autenticado
    When realizar a criação de produto válido
    Then deve retornar uma resposta com o schema "post_produto" e status 201
  