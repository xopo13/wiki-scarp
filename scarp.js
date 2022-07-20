const puppeteer = require('puppeteer');
const axios = require('axios')
const warszawaUrl = 'https://pl.wikipedia.org/wiki/Warszawa'
const booksUrl = 'https://books.toscrape.com/'
const exampleUrl = 'http://example.com/'
console.log('xd')

async function test (url) {
    const browser = await puppeteer.launch({
        //headless - no browser window
        headless: false,
        slowMo: 200,
        devtool: true

    });
    const page = await browser.newPage();
    await page.goto(url)
    console.log(`Navigating to ${url}...`);
    //puppeteer waiting before next action
    await page.waitForFunction(3000)
    await page.waitForSelector('h1')
    console.log();
    
    await browser.close()
}

    async function screenshot (url, imagePath) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url)
    
        await page.screenshot({
            path: imagePath
        });
    
    // const [el] = await page.$x('https://pl.wikipedia.org/wiki/Sejm_walny_I_Rzeczypospolitej')
    // const src = await el.getProperties('src');
    // const srcTxt = await screen.jsonValue();

    // console.log({srcTxt})
    await browser.close()
}

//screenshot('https://ebay.com', 'ebay.png');
test(exampleUrl)

import axios from 'axios';
axios.get('https://httpbin.org/get').then(
    (response) => console.log(response.data)
)

console.log('done');