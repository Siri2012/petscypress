class BirdslistPage{

    get amazonParrot(){return cy.get('tbody > :nth-child(2) > :nth-child(1) > a')}
    get addBird(){return cy.get("a[class='Button']")}
    selectAmazonParrot(){
        this.amazonParrot.click()
    }
    addToCartBird(){
        this.addBird.click()
    }
}
export default new BirdslistPage()