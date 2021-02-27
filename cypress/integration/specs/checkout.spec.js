import HomePage from '../pom/pages/home.page'
import FishListPage from '../pom/pages/fishlist.page'
import AngelFishPage from '../pom/pages/angelfish.page'
import CartPage from '../pom/pages/cart.page'
import LoginPage from '../pom/pages/login.page'
import RegisterPage from '../pom/pages/register.page'
import PaymentPage from '../pom/pages/payment.page'
import ConfirmPage from '../pom/pages/confirm.page'
import OrderPage from '../pom/pages/order.page'

describe('Pet store check out', ()=> {
    it('Buying fish from pet store', ()=> {
        let random = Math.floor(Math.random()*10000)
        let username  = 'TestUser'+random
        let email = `First.Last${random}@demo.com`

        HomePage.openUrl()
        HomePage.selectFish()
        FishListPage.selectAngleFish()
        AngelFishPage.addToCart()
        CartPage.proceedCheckout()
        LoginPage.selectRegister()
        RegisterPage.register(username, email)
        HomePage.selectSignIn()
        LoginPage.login()
        HomePage.selectCart()
        CartPage.proceedCheckout()
        PaymentPage.makePayment()
        ConfirmPage.confirmOrder()
        OrderPage.lblMessage.should('contain', 'Thank you')
        OrderPage.lnkReturn.click()

    })
})