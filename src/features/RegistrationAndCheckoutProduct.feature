Feature: Register and Checkout product
        As  an online customer
        I   want to Register user using email address
        And  I can signIn with correct credentials

    Background:
        Given I open the url "http://automationpractice.com/index.php"


    Scenario: Register and checkout product
        When   I click on the element "a.login"
        And   I set "ajihmt4@gmail.com" to the inputfield "#email_create"
        When  I click on the button "#SubmitCreate"
        And    I wait on element "#account-creation_form" for 5000ms to be displayed
        Then  I expect that element "#noSlide > h1" contains the text "CREATE AN ACCOUNT"
        Then  I expect that element "#account-creation_form > div:nth-child(1) > h3" contains the text "YOUR PERSONAL INFORMATION"
        When  I click on the button "#id_gender1"
        And   I set "Ajith" to the inputfield "#customer_firstname"
        And   I set "Kumar" to the inputfield "#customer_lastname"
        And   I set "abcde12" to the inputfield "#passwd"
        And   I select the option with the value "1" for element "#days"
         And   I select the 1st option for element "#months"
         And   I select the 3rd option for element "#years"
        And   I set "AK General" to the inputfield "#company"
        And   I set "#123,1st Main" to the inputfield "#address1"
        And   I set "New complex apartment" to the inputfield "#address2"
        And   I set "Bangalore" to the inputfield "#city"
        And   I select the 1st option for element "#id_state"
        And   I set "45564" to the inputfield "#postcode"
        And   I select the 1st option for element "#id_country"
        And   I set "Near KB busstop" to the inputfield "#other"
        And   I set "9900563356" to the inputfield "#phone_mobile"
        And   I set "AK General Company, Bangalore" to the inputfield "#alias"
        And   I click on the button "#submitAccount"
        And   I wait on element "#center_column > h1" for 5000ms to be displayed
        Then  I expect that element "#center_column > h1" contains the text "MY ACCOUNT"
        Then  I expect that element "#header > div.nav > div > div > nav > div:nth-child(1) > a > span" contains the text "Ajith Kumar"
        When  I click on the button "#block_top_menu > ul > li:nth-child(1) > a"
        And   I wait on element "#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img" for 5000ms to be displayed
        And   I click on the element "#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img"
        When  I click on the button "#add_to_cart"
        Then  I expect that element "div.layer_cart_product" contains the text "Product successfully added to your shopping cart"
        Then  I expect that element "//h1[@itemprop='name']" contains the text "Faded Short Sleeve T-shirts"
        And   I expect that element "#add_to_cart" contains the text "Add to cart"
        When  I click on the button "#layer_cart > div.clearfix  div.button-container > a"
        Then  I expect that element "#order_step > li.step_current.first > span" contains the text " Summary"
        Then  I expect that element "[class*='cart_description'] a" contains the text "Faded Short Sleeve T-shirts"
        When  I click on the button "#center_column > p.cart_navigation.clearfix > .button-medium"
        Then  I expect that element "#address_delivery > li.address_title > h3" contains the text "YOUR DELIVERY ADDRESS"
        When  I click on the button "#center_column > form > p > button > span"
        Then  I expect that element "#order_step > li.step_current.four > span" contains the text "04. Shipping"
        When  I click on the button "#form > p > button > span"
        Then  I expect that element "#form > div > p.carrier_title" contains the text "Terms of service"
        When  I click on the element "#cgv"
        Then  I expect that element "#form > div > p.checkbox > label" contains the text "I agree to the terms of service and will adhere to them unconditionally. (Read the Terms of Service)"
        Then  I expect that element "#product_1_1_0_472848 > td.cart_description > p > a" contains the text "Faded Short Sleeve T-shirts"
        Then  I expect that element "#order_step > li.step_current.first > span" contains the text " Summary"
        Then  I expect that element "#total_price" contains the text "$18.51"


