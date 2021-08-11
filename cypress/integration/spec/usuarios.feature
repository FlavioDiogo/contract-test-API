Feature: Users

Scenario: GET - Get all users from serverest api
    When resquest all the users 
    Then must be responsed the schema "get-user" with status 200

Scenario Outline: POST - Posting user on serverest api
    When post the user of type "<type>"
    Then must be responsed the schema "post-user" with status <status>
    Examples:
            | type    | status |
            | invalid | 400    |
            | valid   | 201    |