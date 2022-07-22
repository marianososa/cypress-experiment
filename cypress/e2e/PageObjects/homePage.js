const logOutLnk = '.shop-menu > .nav > :nth-child(4) > a'

class homePage{
    static clickLogOut() {
        cy.get(logOutLnk).click()
    }
}

export default homePage