require('dotenv').config()
const puppeteer = require('puppeteer')
const fs = require('fs')
const { getDate } = require('../utils/index')

;(async () => {
  try {
    console.log('start: ' + getDate())

    const browserWSEndpoint = fs.readFileSync(__dirname + '/../ws')

    const browser = await puppeteer.connect({
      browserWSEndpoint
    });
    const page = await browser.newPage();
    await page.goto('http://192.168.1.112:12306', {
      timeout: 0,
      waitUntil: 'domcontentloaded'
    })
    // await page.evaluate(()=>document.documentElement.webkitRequestFullScreen())
  }catch (e) {
    console.log(e)
  }
  console.log('end: ' + getDate())
})()





