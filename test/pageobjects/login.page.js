const { $ , expect} = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnLogin() {
    return $("#login-button");
  }

  get errorLockedOutUser() {
    return $(
      'h3[text()="Epic sadface: Sorry, this user has been locked out.Epic sadface: Sorry, this user has been locked out."]'
    );
  }

  async login() {
    console.log("USERNAME: ${process.env.USERNAME_STANDARD_USER}");
    console.log("PASSWORD: ${process.env.PASSWORD_SAUCEDEMO}");
    await this.inputUsername.setValue("process.env.USERNAME_STANDARD_USER");
    await this.inputPassword.setValue("process.env.PASSWORD_SAUCEDEMO");
    await this.btnLogin.click();
  }
  async validateLockedOutUserError() {
    expect(this.errorLockedOutUser).toBeDisplayed();
  }

  async validateProblemUser() {
    await this.inputUsername.setValue("process.env.USERNAME_STANDARD_USER");
    await this.inputPassword.setValue("process.env.PASSWORD_SAUCEDEMO");
    await this.btnLogin.click();
  }

  async validateGlitchUser() {
    await this.inputUsername.setValue("process.env.USERNAME_STANDARD_USER");
    await this.inputPassword.setValue("process.env.PASSWORD_SAUCEDEMO");
    await this.btnLogin.click();
  }

  async validateErrorUser() {
    await this.inputUsername.setValue("process.env.USERNAME_STANDARD_USER");
    await this.inputPassword.setValue("process.env.PASSWORD_SAUCEDEMO");
    await this.btnLogin.click();
  }

  async validateVisualUser() {
    await this.inputUsername.setValue("process.env.USERNAME_STANDARD_USER");
    await this.inputPassword.setValue("process.env.PASSWORD_SAUCEDEMO");
    await this.btnLogin.click();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
