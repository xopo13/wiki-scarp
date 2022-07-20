const puppeteer = require ('puppeteer')
let urls = []
urls[0] = 'https://pl.wikipedia.org/wiki/Warszawa';
const multiplayer = 5;

(async () => {
    const browser = await puppeteer.launch({headless: true, slowMo: 0})

      for(let c = 1; c < multiplayer; c++){
        for(const url of urls){
            urls = await getUrls(url, browser)
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

    var urls_m = []
    for(var c = 0; c < multiplayer; c++){
        urls_m[c] = pageUrls[c]
    }

     console.log(urls_m)
     return urls_m
}
