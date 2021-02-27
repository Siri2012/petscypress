class OrderPage{
    get lblMessage() { return cy.get('li')}

    get lnkReturn() { return cy.get('#BackLink > a')}
    
}
export default new OrderPage()