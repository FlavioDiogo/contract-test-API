Feature: Contract test with json-schema

Scenario: Resquesting from serverest api and validating contract
    When resquest  all the users from /usuarios
    Then must be responsed the schema "get-user" with status 200

Scenario Outline: Posting users on serverest API and validating Contract
    When post the user of type "<type>"
    Then must be responsed the schema "post-user" with status <status>
    Examples:
            | type    | status |
            | invalid | 400    |
            | valid   | 201    |