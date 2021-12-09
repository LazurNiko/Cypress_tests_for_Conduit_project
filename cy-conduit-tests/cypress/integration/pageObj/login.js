class LogInObj {
    email(){
        return cy.get('[placeholder="Email"]')
    }
    password(){
        return cy.get('[placeholder="Password"]')
    }
    signInBtn(){
    return cy.get('.btn')
    }
}
export default LogInObj