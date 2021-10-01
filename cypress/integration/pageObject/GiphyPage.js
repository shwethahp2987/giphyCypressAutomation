/// <reference types="cypress" />


class GiphyPage
{

  visit()
  {
    cy.visit('http://giphy.com/')
  }

  getTrendingSection(){
    return cy.get(":nth-child(2) > .Container-sc-swtq0n > .Title-sc-kvmtvl > .Icon-sc-a9hbyb") 
     
  }

  enterSearchString(value){
    const searchField = cy.get("input[class='Input-sc-w75cdz tdeeo']")
    searchField.should('be.visible').should('be.enabled')
    searchField.type(value)
    return this
  }

  clickGifOnTrending(){
    const firstGifOnTrendingSection = cy.get("div.ListWrapper-sc-1mxkd1t.djoQGB > ul > li:nth-child(1) > div")
    firstGifOnTrendingSection.should('be.visible').click()
    return this
  }

}

export default GiphyPage