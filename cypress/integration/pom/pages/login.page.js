class LoginPage{

    get lnkRegister() {return cy.get('#Catalog > a')}
    get txtUsername() {return cy.get('[name="username"]')}
    get txtPassword() {return cy.get('[name="password"]')}
    get btnSignIn() { return cy.get('[name="signon"]')}

    selectRegister(){
        this.lnkRegister.click()
    }

    login(){
        this.txtPassword.clear().type('Password')
        this.btnSignIn.click()
    }

    signin(){
        this.txtUsername.type('siri1')
        this.txtPassword.clear().type('siri1')
        this.btnSignIn.click()
         }
}
export default new LoginPage()