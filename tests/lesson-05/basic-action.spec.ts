import{test} from '@playwright/test';

test('Basic action',async({page})=> {
    await test.step("Step 1: Navigate to msterial website", async()=>{
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click Bài học 1", async()=>{
        await page.locator("//a[text() ='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Step 3: Input", async()=>{
        await page.locator("//input[@id='username']").fill("Thuy Nguyen");
        await page.locator("//input[@id='email']").pressSequentially("nguyenntt1710@gmail.com")
    });

    await test.step("Step 4: Check Radio button", async()=>{
        let isCheckMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckMale);

        await page.locator("//input[@id='male']").check();
        isCheckMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckMale);
    });

    await test.step("Step 5: Select option", async()=>{
        await page.locator("//select[@id='country']").selectOption("canada");
    });

    await test.step("Step 6: Upload flie", async()=>{
        await page.locator("//input[@type='file']").setInputFiles("tests/data-test/data-test.txt");
    });
});