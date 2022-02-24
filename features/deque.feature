Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I open the application url
    Then I verify if navId bar is displayed on the page
    Then I verify the number of radion buttons under Let the Adventure Begin is 5
    Then I verify new passanger details are added when clicked on add traveler
    Then I verify the video header text change when I click on an arrow button

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
