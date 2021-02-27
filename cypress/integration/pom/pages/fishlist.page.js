class FishListPage{

    get angelFish() {return cy.get("tbody > :nth-child(2) > :nth-child(1)")}

    selectAngleFish(){
        this.angelFish.click()
    }
    
}
export default new FishListPage()