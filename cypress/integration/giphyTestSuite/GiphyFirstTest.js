/// <reference types="cypress" />

import GiphyPage from '../pageObject/GiphyPage'

describe('Giphy app test', () => {
  
    it('Search for Gifs', () => {

      const giphyPage = new GiphyPage()
      giphyPage.visit()
      cy.title().should('be.equal', 'GIPHY - Be Animated') //assert the tittle of Giphy the home page

      giphyPage.enterSearchString('Wagamama{Enter}') //Enter search string
      cy.wait(3000)

      //check results are displayed after a search
      cy.get("div.Container-sc-ju2d4r.iUVSlU > h1").should('be.visible').contains('Wagamama') //asserts Search String is visible
      cy.get('div.Container-sc-ju2d4r.iUVSlU > h1 > span').invoke('attr', 'data-gif-count').then(parseFloat).should('be.gt', 0) //asserts number of search result
      cy.get('div.giphy-grid > div > a').should('be.visible') //asserts the gifs visible after search

    })

    it('Test the trending setion', () => {

      const giphyPage = new GiphyPage()
      giphyPage.visit()
      cy.title().should('be.equal', 'GIPHY - Be Animated') //assert the tittle of Giphy the home page

      giphyPage.getTrendingSection().should('be.visible')//assert if the Trending section is visible.

      giphyPage.clickGifOnTrending() //click on a gif in trending section
      cy.wait(3000)
      cy.title().should('be.contain', 'Find & Share on GIPHY') //assert that goes to a page that shows after the gif is clicked

    })


  })