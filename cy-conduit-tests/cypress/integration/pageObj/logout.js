class LogOut {
    settings(){
        return cy.get('[href="#settings"]')
    }
    url(){
        return cy.url()
    }
    message(){
        return cy.contains('.btn', 'Or click here to logout.')
    }
}   
export default LogOut;