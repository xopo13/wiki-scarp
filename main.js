const puppeteer = require('puppeteer')

const selectors = ['.product_main > h1', '.price_color']
let imported = []
const {url} = require('./config')


async function main (url) {
    const browser = await puppeteer.launch({
        headless: true
    })
    const page = await browser.newPage()
    await page.goto(url)
    
    //getting data for choosen selectors
    for(const selector of selectors){
        await page.waitForSelector(selector)
        var importedElement =  await page.$eval(selector, e => e.innerHTML)
        imported.push(importedElement)
    }

    await browser.close();
    console.log(imported)
}

//it works. Now lest mak eit more convinient and clean (using forEach etc)
 
main(url)
