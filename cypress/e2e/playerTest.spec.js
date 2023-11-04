// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Player Test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Player Test', async function() {
    // Test name: Player Test
    // Step # | name | target | value
    // 1 | open | http://localhost:8000/ | 
    await driver.get("http://localhost:8000/")
    // 2 | setWindowSize | 1096x816 | 
    await driver.manage().window().setRect({ width: 1096, height: 816 })
    // 3 | click | css=.fa-plus-circle | 
    await driver.findElement(By.css(".fa-plus-circle")).click()
    // 4 | click | linkText=Player | 
    await driver.findElement(By.linkText("Player")).click()
    // 5 | click | css=.tracking-wide | 
    await driver.findElement(By.css(".tracking-wide")).click()
    // 6 | click | name=team_id | 
    await driver.findElement(By.name("team_id")).click()
    // 7 | select | name=team_id | label=AlimentosTeam
    {
      const dropdown = await driver.findElement(By.name("team_id"))
      await dropdown.findElement(By.xpath("//option[. = 'AlimentosTeam']")).click()
    }
    // 8 | click | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 9 | type | css=.flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300 | David
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("David")
    // 10 | type | css=.flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300 | Mamani
    await driver.findElement(By.css(".flex:nth-child(2) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("Mamani")
    // 11 | click | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 12 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0001-02-01
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0001-02-01")
    // 13 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0019-02-01
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0019-02-01")
    // 14 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 0199-02-01
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("0199-02-01")
    // 15 | type | css=.flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300 | 1999-02-01
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(1) > .border-gray-300")).sendKeys("1999-02-01")
    // 16 | click | css=.flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 17 | type | css=.flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300 | 41516552
    await driver.findElement(By.css(".flex:nth-child(3) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("41516552")
    // 18 | click | css=.flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300")).click()
    // 19 | select | css=.flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300 | label=Varon
    {
      const dropdown = await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(1) > .border-gray-300"))
      await dropdown.findElement(By.xpath("//option[. = 'Varon']")).click()
    }
    // 20 | click | css=.flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300")).click()
    // 21 | type | css=.flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300 | 2
    await driver.findElement(By.css(".flex:nth-child(4) > .mb-2:nth-child(2) > .border-gray-300")).sendKeys("2")
    // 22 | click | css=.flex:nth-child(5) .border-gray-300 | 
    await driver.findElement(By.css(".flex:nth-child(5) .border-gray-300")).click()
    // 23 | type | css=.flex:nth-child(5) .border-gray-300 | Ninguna
    await driver.findElement(By.css(".flex:nth-child(5) .border-gray-300")).sendKeys("Ninguna")
    // 24 | click | css=.bg-gray-800:nth-child(2) | 
    await driver.findElement(By.css(".bg-gray-800:nth-child(2)")).click()
    // 25 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
    // 26 | click | css=.text-sm:nth-child(9) > .px-6:nth-child(8) > .inline-flex:nth-child(1) | 
    await driver.findElement(By.css(".text-sm:nth-child(9) > .px-6:nth-child(8) > .inline-flex:nth-child(1)")).click()
    // 27 | click | id=livewire-error | 
    await driver.findElement(By.id("livewire-error")).click()
    // 28 | click | css=.text-sm:nth-child(9) .inline-flex:nth-child(2) > .fas | 
    await driver.findElement(By.css(".text-sm:nth-child(9) .inline-flex:nth-child(2) > .fas")).click()
    // 29 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
    // 30 | click | css=.swal2-confirm | 
    await driver.findElement(By.css(".swal2-confirm")).click()
  })
})