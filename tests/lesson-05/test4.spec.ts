import{test} from '@playwright/test';

test('Basic action',async({page})=> {
    await test.step("Step 1: Navigate to msterial website", async()=>{
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click Bài học 4", async()=>{
        await page.locator("//a[text() ='Bài học 4: Personal notes']").click();
    });

    /*Thêm mới 10 note với nội dung sau ở bảng dưới đây.
    Field “Title”: điền nội dung ở cột “Tên action”
    Field “Content”: điền nội dung ở cột “Mô tả”*/
    await test.step("Step 3:Thêm mới 10 note với nội dung sau ở bảng dưới đây", async()=>{
        for(let i=0; i<10; i++){
            await page.locator("//input[@id='note-title']").fill(`Task ${i}`);
            await page.locator("//textarea[@id='note-content']").fill(`Verify requirement for task ${i}, Use AI to generate test case, review TC `);

            await page.locator("//button[@id='add-note']").click();
        }
    });


    //Xoá các todo có số lẻ
     await test.step("Step 4: Thực hiện search với keyword “một hoặc nhiều", async()=>{
        await page.locator("//input[@id='search']").fill(`task 1`);

    });
});