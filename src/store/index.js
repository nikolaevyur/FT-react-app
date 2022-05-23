import {makeAutoObservable, flow } from "mobx";
import { getLogin } from "../api"

class LoginStore {
  loginUser = {};

  constructor () {
    makeAutoObservable(this,{},{
      autoBind: true,
    })

    // onBecomeObserved(this, 'loginUser', this.getLogin);

  }

  get loginData() {
    return this.loginUser
}


  // *getLogin(form) {
  //   const response = yield getLogin(form);
  //   this.loginUser  = response.data;
  // }

  //   async fetchLogin(form) {
  //     const response = await getLogin(form);
  //     this.loginUser = response.data
  // }

  getLogin = flow(function* (form) {
  try {
      const response = yield getLogin(form)
      this.loginUser = response.data
  } catch (error) {
      this.loginUser = "Error"
  }
})
}

export const login = new LoginStore( );