require('dotenv').config()
const puppeteer = require('puppeteer')
const fs = require('fs')
const { getDate } = require('../utils/index')
const { userDataDir } = process.env

;(async () => {
  try {
    console.log('start: ' + getDate())

    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        width: 1900,
        height: 1400
      },
      userDataDir
    })
    
    const wsEPAddress = browser.wsEndpoint()
    fs.writeFileSync(__dirname + '/../ws', wsEPAddress)
    console.log(wsEPAddress)
    
  }catch (e) {
    console.log(e)
  }
  console.log('end: ' + getDate())
})()





