class RegisterPage{

    get txtUsername()
        {
            return cy.get("input[name='username']")
        }

        get txtPassword()
        {
            return cy.get("input[name='password']")
        }

        get txtRetypePassword()
        {
            return cy.get("input[name='repeatedPassword']")
        }


        get txtFirstname()  {return cy.get("input[name='account.firstName']")}
        get txtLastname()  {return cy.get("input[name='account.lastName']")}
        get txtEmail()  {return cy.get("input[name='account.email']")}
        get txtPhone()  {return cy.get("input[name='account.phone']")}
        get txtAddress1()  {return cy.get("input[name='account.address1']")}
        get txtAddress2()  {return cy.get("input[name='account.address2']")}
        get txtCity()  {return cy.get("input[name='account.city']")}
        get txtState() {return cy.get("input[name='account.state']")}
        get txtZipcode() {return cy.get("input[name='account.zip']")}    
        get txtCountry() {return cy.get("input[name='account.country']")}
        get btnSaveAcctInfo() { return cy.get("input[name='newAccount']")}

        register(username,email){
          //  this.txtUsername.type('customer1')
            this.txtUsername.type(username)
            this.txtPassword.type('Password')
            this.txtRetypePassword.type('Password')
            this.txtFirstname.type('first')
            this.txtLastname.type('last')
           // this.txtEmail.type('cust1@mail.com')
            this.txtEmail.type(email)
            this.txtPhone.type('0987878')
            this.txtAddress1.type('add1')
            this.txtAddress2.type('add2')
            this.txtCity.type('city')
            this.txtState.type('state')
            this.txtZipcode.type('988787')
            this.txtCountry.type('country')
            this.btnSaveAcctInfo.click()
        }

    

}
export default new RegisterPage()