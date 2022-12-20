$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktoptest.feature");
formatter.feature({
  "line": 1,
  "name": "Desktops Test",
  "description": "As user I want to arrange listing in alphabetical order and verify product added to shopping cart",
  "id": "desktops-test",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#@smoke"
    }
  ],
  "line": 6,
  "name": "User can verify Product Arrange In Alphabetical Order",
  "description": "",
  "id": "desktops-test;user-can-verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can Select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 234351500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 104812200,
  "error_message": "java.lang.IllegalArgumentException: Driver must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:59)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:60)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:240)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnDesktopsLinkAndClick(HomePage.java:65)\r\n\tat com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick(TopMenuTestSteps.java:21)\r\n\tat ✽.When I Mouse hover on “Desktops” Tab and click(desktoptest.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopTestSteps.iCanSelectSortByPositionNameZToA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "User can verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktops-test;user-can-verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I change currency to Pound Sterling",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select product “HP LP3065”",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Qty \"1” using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on “Add to Cart” button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the Message “Success: You have added HP LP3065 to your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Model \"Product21\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Total \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iChangeCurrencyToPoundSterling()"
});
formatter.result({
  "duration": 3611900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.pages.HomePage.selectCurrency(HomePage.java:77)\r\n\tat com.tutorialsninja.steps.DesktopTestSteps.iChangeCurrencyToPoundSterling(DesktopTestSteps.java:116)\r\n\tat ✽.When I change currency to Pound Sterling(desktoptest.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 25
    }
  ],
  "location": "DesktopTestSteps.selectSortByPosition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 21
    }
  ],
  "location": "DesktopTestSteps.selectProductHPLP(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 17
    }
  ],
  "location": "DesktopTestSteps.verifyTheText()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 22
    }
  ],
  "location": "DesktopTestSteps.selectDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "DesktopTestSteps.enterQtyUsingSelectClass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 49
    }
  ],
  "location": "DesktopTestSteps.verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "DesktopTestSteps.verifyTheTextInShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopTestSteps.verifyTheProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 26
    }
  ],
  "location": "DesktopTestSteps.verifyTheDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product21",
      "offset": 18
    }
  ],
  "location": "DesktopTestSteps.verifyTheModel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 18
    }
  ],
  "location": "DesktopTestSteps.verifyTheTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("laptopsandnotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and Notebooks Test",
  "description": "As user I want to arrange listing in High To Low order and verify product added to shopping cart",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "verify Products Price Display High To Low Successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on “Show All Laptops \u0026 Notebooks”",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the Product price will arrange in High to Low order.",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 90100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 4592700,
  "error_message": "java.lang.IllegalArgumentException: Driver must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:59)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:60)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:240)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnLaptopsAndNotebooksLinkAndClick(HomePage.java:69)\r\n\tat com.tutorialsninja.steps.LaptopsAndNoteBooksTestSteps.mouseHoverOnLaptopsNotebooksTabAndClick(LaptopsAndNoteBooksTestSteps.java:15)\r\n\tat ✽.When Mouse hover on Laptops \u0026 Notebooks Tab and click(laptopsandnotebooks.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 16
    }
  ],
  "location": "LaptopsAndNoteBooksTestSteps.selectSortBy()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheProductPriceWillArrangeInHighToLowOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "verify Products Price Display High To Low Successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I change currency to Pound Sterling",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on “Show All Laptops \u0026 Notebooks”",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Product “MacBook”",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the text “MacBook”",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on ‘Add To Cart’ button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message “Success: You have added MacBook to your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the text Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the Product name MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Change Quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on “Update” Tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the message “Success: You have modified your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Total £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on “Checkout” button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text “Checkout”",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Text “New Customer”",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on “Guest Checkout” radio button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click on “Continue” tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Fill the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on “Continue” Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Add Comments About your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click on “Continue” button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the message “Warning: Payment method required!”",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iChangeCurrencyToPoundSterling()"
});
formatter.result({
  "duration": 3894300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.pages.HomePage.selectCurrency(HomePage.java:77)\r\n\tat com.tutorialsninja.steps.DesktopTestSteps.iChangeCurrencyToPoundSterling(DesktopTestSteps.java:116)\r\n\tat ✽.When I change currency to Pound Sterling(laptopsandnotebooks.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 16
    }
  ],
  "location": "LaptopsAndNoteBooksTestSteps.selectSortBy()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.selectProductMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheTextMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheTextShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheProductNameMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNoteBooksTestSteps.changeQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnUpdateTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheMessageSuccessYouHaveModifiedYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "737",
      "offset": 18
    },
    {
      "val": "45",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheTotal£()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheTextCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheTextNewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnContinueTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.fillTheMandatoryFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnContinueButton1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.addCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.checkTheTermsConditionsCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNoteBooksTestSteps.verifyTheMessageWarningPaymentMethodRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("myaccountslogin.feature");
formatter.feature({
  "line": 1,
  "name": "My Accounts Test for Login function",
  "description": "As user I want to navigate to Login page and verify user can login and logout successfully",
  "id": "my-accounts-test-for-login-function",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Login Page Successfully",
  "description": "",
  "id": "my-accounts-test-for-login-function;verify-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter “Login”",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the text “Returning Customer”",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnMyAccountLink1()"
});
formatter.result({
  "duration": 5609900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyQAccountTab(HomePage.java:88)\r\n\tat com.tutorialsninja.steps.MyAccountRegisterTestSteps.clickOnMyAccountLink1(MyAccountRegisterTestSteps.java:16)\r\n\tat ✽.When Click on My Account Link(myaccountslogin.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.verifyTheTextReturningCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "verify That User Should Login AndLogout Successfully",
  "description": "",
  "id": "my-accounts-test-for-login-function;verify-that-user-should-login-andlogout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter “Login”",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter Email address",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter Password on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on My Account Link.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter “Logout”",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the text “Account Logout”",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnMyAccountLink1()"
});
formatter.result({
  "duration": 3024400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyQAccountTab(HomePage.java:88)\r\n\tat com.tutorialsninja.steps.MyAccountRegisterTestSteps.clickOnMyAccountLink1(MyAccountRegisterTestSteps.java:16)\r\n\tat ✽.When Click on My Account Link(myaccountslogin.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountLoginTestSteps.enterEmailAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountLoginTestSteps.enterPasswordOnLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountLoginTestSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.verifyTheTextAccountLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("myaccountsregister.feature");
formatter.feature({
  "line": 1,
  "name": "My Accounts Test for Register function",
  "description": "As user I want to navigate to register page and verify user can register",
  "id": "my-accounts-test-for-register-function",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "my-accounts-test-for-register-function;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter “Register”",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the text “Register Account”",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnMyAccountLink1()"
});
formatter.result({
  "duration": 3897700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyQAccountTab(HomePage.java:88)\r\n\tat com.tutorialsninja.steps.MyAccountRegisterTestSteps.clickOnMyAccountLink1(MyAccountRegisterTestSteps.java:16)\r\n\tat ✽.When Click on My Account Link(myaccountsregister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.verifyTheTextRegisterAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "verify That User Register Account Successfully",
  "description": "",
  "id": "my-accounts-test-for-register-function;verify-that-user-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter “Register”",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter First Name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Email",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Telephone",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Password Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Subscribe Yes radio button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the message “Your Account Has Been Created!”",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on Continue button1",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on My Account Link.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter “Logout”",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text “Account Logout”",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on Continue button after Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnMyAccountLink1()"
});
formatter.result({
  "duration": 6456000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.pages.HomePage.clickOnMyQAccountTab(HomePage.java:88)\r\n\tat com.tutorialsninja.steps.MyAccountRegisterTestSteps.clickOnMyAccountLink1(MyAccountRegisterTestSteps.java:16)\r\n\tat ✽.When Click on My Account Link(myaccountsregister.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.enterFirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.enterLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.enterEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.enterTelephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.enterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.enterPasswordConfirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.selectSubscribeYesRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.verifyTheMessageYourAccountHasBeenCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "MyAccountRegisterTestSteps.clickOnContinueButtonOnRegisterPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.verifyTheTextAccountLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountRegisterTestSteps.clickOnContinueButtonAfterLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 2,
  "name": "TopMenu Test",
  "description": "As user I want to navigate through top menu of the page",
  "id": "topmenu-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@smoke"
    }
  ],
  "line": 7,
  "name": "User can verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Desktops”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the text ‘Desktops’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 4297700,
  "error_message": "java.lang.IllegalArgumentException: Driver must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:59)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:60)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:240)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnDesktopsLinkAndClick(HomePage.java:65)\r\n\tat com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick(TopMenuTestSteps.java:21)\r\n\tat ✽.And I Mouse hover on “Desktops” Tab and click(topmenu.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuTestSteps.iCallSelectMenuMethodAndPassTheMenuShowAllDesktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TopMenuTestSteps.verifyTheTextDesktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "User can verify User Should Navigate To Laptops And Notebooks Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I Mouse hover on “Laptops \u0026 Notebooks” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Laptops \u0026 Notebooks”",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can Verify the text ‘Laptops \u0026 Notebooks’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 47600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 4321500,
  "error_message": "java.lang.IllegalArgumentException: Driver must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:59)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:60)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:240)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnLaptopsAndNotebooksLinkAndClick(HomePage.java:69)\r\n\tat com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnLaptopsNotebooksTabAndClick(TopMenuTestSteps.java:39)\r\n\tat ✽.When I Mouse hover on “Laptops \u0026 Notebooks” Tab and click(topmenu.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuTestSteps.iCallSelectMenuMethodAndPassTheMenuShowAllLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TopMenuTestSteps.iCanVerifyTheTextLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "User can verify User Should Navigate To Components Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I Mouse hover on “Components” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Components”",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can verify the text ‘Components’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnComponentsTabAndClick()"
});
formatter.result({
  "duration": 3408100,
  "error_message": "java.lang.IllegalArgumentException: Driver must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:59)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:60)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:240)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnComponentLinkAndClick(HomePage.java:73)\r\n\tat com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnComponentsTabAndClick(TopMenuTestSteps.java:57)\r\n\tat ✽.When I Mouse hover on “Components” Tab and click(topmenu.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuTestSteps.iCallSelectMenuMethodAndPassTheMenuShowAllComponents()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TopMenuTestSteps.iCanVerifyTheTextComponents()"
});
formatter.result({
  "status": "skipped"
});
});