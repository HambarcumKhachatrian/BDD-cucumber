# Feature: Board creation functionality
#         User must have ability to create and delete new borads

#   Scenario: Log in to application
#     Given I am on the login page
#     When I fill out the valid email and click the continue button
#     And I fill out correct password and click Login button
#     Then I should see the home page

#   Scenario Outline: Creating new boards in various ways
#     Given I am on workspace page
#     When I am starting to create new board with <button> button
#     And I am create new board with <title> title
#     Then New board page will open

#     Examples: 
#       | button | title   |
#       | main   | work    |
#       | side   | private |

#   Scenario Outline: Delete boards 
#     Given I am on workspace page
#     When I open <name> board
#     And I delete this board
#     Then This <name> board successfully deleted

#     Examples: 
#       | name    |
#       | work    |
#       | private |
