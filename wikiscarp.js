
const puppeteer = require ('puppeteer')
var url = 'https://pl.wikipedia.org/wiki/Warszawa';

(async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 100})
    const page = await browser.newPage()
    await page.goto(url)
    
    const pageUrls = await page.evaluate(() => {
        const urlArray = Array.from(document.links).map((link) => link.href);
        const uniqueUrlArray = [...new Set(urlArray)];
        return uniqueUrlArray;
      });

      for(let c = 1; c != 0; c++){
        console.log(c)
        //url list - temporary
        url = await newUrl(url, browser)

        if(url = undefined){
            c = 0
        }
      }

    await browser.close()
})().catch(error => {
    console.log(error)
    process.exit(1)
})

async function getUrls (url, browser) {
    const page = await browser.newPage()
    await page.goto(url)

    const pageUrls = await page.evaluate(() => {
        const urlArray = Array.from(document.links).map((link) => link.href);
        const uniqueUrlArray = [...new Set(urlArray)];
        return uniqueUrlArray;
      });

     return pageUrls[1]
}

