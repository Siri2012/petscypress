/// <reference types = 'cypress' />

import HomePage from "../pom/pages/home.page";
import BirdslistPage from "../pom/pages/birdslist.page";
import AngelFishPage from "../pom/pages/angelfish.page";
import CartPage from "../pom/pages/cart.page";
import LoginPage from "../pom/pages/login.page";
import RegisterPage from "../pom/pages/register.page";
import PaymentPage from "../pom/pages/payment.page";
import ConfirmPage from "../pom/pages/confirm.page";
import OrderPage from "../pom/pages/order.page";

describe("sample testing", () => {
  it("endtoend test", () => {
    //to create dynamic values

    let random = Math.random() * 10000;
    let username = "customer" + random;
    let email = `cust${random}@mail.com`;

    HomePage.openUrl();
    HomePage.selectBirds();
    BirdslistPage.selectAmazonParrot();
    BirdslistPage.addToCartBird();
    CartPage.proceedCheckout();
    //LoginPage.selectRegister();
    // RegisterPage.register(username, email);
    // HomePage.selectSignIn();
    LoginPage.signin(username); // To login with saved(hardcoded) username and password
    HomePage.selectCart();
    CartPage.proceedCheckout();
    PaymentPage.makePayment();
    ConfirmPage.confirmOrder();
    OrderPage.lblMessage.should("contain", "Thank you");
    OrderPage.lnkReturn.click();
  });
});
