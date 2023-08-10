const { Selector } = require("testcafe")

fixture`Login`.page("https://beta.deepthought.education/")

test("Valid Login",async(t)=>{
    const usernameInput = Selector('#username')
    const passwordInput = Selector('#password')

    await t
    .typeText(usernameInput,"easydesk1996@gmail.com")
    .typeText(passwordInput,"radheradhe")
    .click("#login")
    const dashboardTitle = Selector('.logo-deep');
    await t.expect(dashboardTitle.exists).ok();
   
})


test("Invalid Login",async(t)=>{
    const usernameInput = Selector('#username')
    const passwordInput = Selector('#password')

    await t
    .typeText(usernameInput,"easy1996@gmail.com")
    .typeText(passwordInput,"radheradheradhe")
    .click("#login")
    .expect(Selector('button[data-dismiss="alert"]').innerText)
    .eql("×")

})

