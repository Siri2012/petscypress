class CartPage{

    get btnCheckout() {return cy.get('[href="/actions/Order.action?newOrderForm="]')}

    proceedCheckout(){
        this.btnCheckout.click()
    }
    
}
export default new CartPage()