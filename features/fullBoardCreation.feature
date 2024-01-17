Feature: User should be able to create a board with different lists and cards

  Scenario: Log in to application
    Given I am on the login page
    When I fill out the valid email and click the continue button
    And I fill out correct password and click Login button
    Then I should see the home page

  Scenario: Creating new boards in various ways
    Given I am on workspace page
    When I am starting to create new board with main button
    And I am create new board with ToDo title
    Then New board page will open

  Scenario Outline: 
    Given I am on board page
    When I am create <listTitle> list
    And I am adding new <cardTitle> card to this list
    Then New list <listTitle> with a card <cardTitle> has been created

    Examples: 
      | listTitle | cardTitle |
      | Work      | Task n1   |
      | Private   | Bowling   |
