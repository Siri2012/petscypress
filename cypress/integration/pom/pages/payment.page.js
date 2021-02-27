class PaymentPage{

    get btnContinue() { return cy.get('[name="newOrder"]')}

    makePayment(){
        this.btnContinue.click()
    }
}
export default new PaymentPage()