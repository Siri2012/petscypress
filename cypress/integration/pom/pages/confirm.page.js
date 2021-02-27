class ConfirmPage{

    get btnConfirm() {return cy.get('.Button')}

    confirmOrder(){
        this.btnConfirm.click()
    }
}
export default new ConfirmPage()