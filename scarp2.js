const puppeteer = require('puppeteer')
const random_useragent = require('random-useragent')
const fs = require('fs')
const {url} = require('./config')

;(async () => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 0 
    })
    const page = await browser.newPage()
    //random user agent
    await page.setUserAgent(random_useragent.getRandom())

    //getData
    const nameSelector = '.product_main > h1'
    const priceSelector = '.price_color'
    await page.goto(url)
    await page.waitForSelector(nameSelector)
    await page.waitForSelector(priceSelector)
    const name = await page.$eval(nameSelector, e => e.innerHTML)
    const price = await page.$eval(priceSelector, e => e.innerHTML)
    const nameTrim = name.trim()
    const priceTrim = price.trim()
    // trim function deletes whitespaces from both ends of a string

    //get current date and time
    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const fullDate =  `${day}/${month}/${year}`

    console.log(fullDate + " " + nameTrim + " " + priceTrim)

    //saving data to a text file
    const logger = fs.createWriteStream('log.txt', {flags: 'a'})
    logger.write(`${fullDate} - ${nameTrim} - ${priceTrim}`)
    logger.close()

    await browser.close()
})().catch(error => {
    console.log(error)
    process.exit(1)
})