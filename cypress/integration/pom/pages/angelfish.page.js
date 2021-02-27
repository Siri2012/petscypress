class AngelFishPage {

    get angelLargeFish() {return cy.get(':nth-child(2) > :nth-child(5) > .Button')}

    addToCart(){
        this.angelLargeFish.click()
    }

}
export default new AngelFishPage()