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

    await test.step("Step 5: Select Hobbies:", async()=>{
        await page.locator("//input[@id='reading']").check();
    });

     await test.step("Step 6: Select Interests", async()=>{
        await page.locator("//select[@id='interests']").selectOption("music");
    });

    await test.step("Step 7: Select Country", async()=>{
        await page.locator("//select[@id='country']").selectOption("canada");
    });

    await test.step("Step 8: Select Date of Birth:", async()=>{
        await page.locator("//input[@id='dob']").fill("2000-10-17");
    });

    await test.step("Step 9: Upload flie", async()=>{
        await page.locator("//input[@type='file']").setInputFiles("tests/data-test/data-test.txt");
    });

    await test.step("Step 9: input Biography", async()=>{
        await page.locator("//textarea[@id='bio']").fill("this is bio");
    }); 

    await test.step("Step 10: Click on register", async()=>{
        await page.locator("//button[@type='submit']").click();
    }); 
});