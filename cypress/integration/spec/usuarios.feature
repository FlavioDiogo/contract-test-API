Feature: Usuarios

Scenario: GET - Get all users from serverest api
    When resquest all the users 
    Then must be responsed the schema "get-user" with status 200

Scenario Outline: POST - Posting user on serverest api
    When post the user of type "<type>"
    Then must be responsed the schema "post-user" with status <status>
    Examples:
            | type    | status |
            | valid   | 201    |
            | invalid | 400    |


Scenario Outline: GET - usuarios por id
    When solicitar usuario do tipo "<type>"
    Then deverá retornar uma resposta com o schema "get-user-id" with status <status>
    And deverá retornar com uma mensagem "<msg>"
    Examples:
            | type    | status | msg  |
            | valid   | 200    | ok   |