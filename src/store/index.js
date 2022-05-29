import {makeAutoObservable, flow, onBecomeObserved } from "mobx";
import { changeStatus, deleteTask, getLogin, getTasks, getTasksPag, getUsersPag } from "../api"

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

export const login = new LoginStore();

class TasksFilter {

  data = [];
  preFiltredData = {};
  filtredData = [];
  currentTask = {};
  currentComments = [];
  pagination = {limit:10, page:0, total:0};
  testTasks = [];
  constructor () {
    makeAutoObservable(this,{},{
      autoBind: true,
    })
    onBecomeObserved(this, 'filtredData', this.fetch);
  }

  async fetch(){
    const response = await getTasksPag(this.preFiltredData,this.pagination.page);
    this.filtredData = response.data;
    this.pagination.total = response.total;
    this.currentTask = {};
  }

  async changeTaskStatus(id, status){
		await changeStatus(id, status);
	}

  async deleteTask(id){
		await deleteTask(id);
	}
  // data = [];
  // preFiltredData = {};
  // // filtredData = [];
  // pagination = {limit:8, page:0, total:0};

  // constructor () {
  //   makeAutoObservable(this,{},{
  //     autoBind: true,
  //   })}
  //   onBecomeObserved(this, 'filtredData', this.fetch);
  // }


  // fetch = flow(function* (filters, page) {
  //   try {
  //       const response = yield getTasksPag(filters, page)
  //       this.data = response.data
  //   } catch (error) {
  //       this.data = "Error"
  //   }
  // })
  

  // async fetch(){
  //   const response = await getTasksPag(this.preFiltredData,this.pagination.page);
  //   this.data = response.data;
  //   // this.pagination.total = response.total;
  // }

  // filterOn(form){
  //   this.preFiltredData = form;
  //   this.pagination.page = 0;
  //   //this.fetch();
  // }


}

class UsersFilter {

    data = [];
    allUsers = [];
    usersList = {};
    profileData = {};
    currentUserData = {};
    pagination = {limit:10, page:0, total:0};
    constructor () {
      makeAutoObservable(this,{},{
        autoBind: true,
      })
      onBecomeObserved(this, 'data', this.fetch);
      //onBecomeObserved(this, 'allUsers', this.allUsersFetch);
    }
  
    async fetch(){
      const response = await getUsersPag(this.pagination.page);
      this.data  = response.data;
      this.pagination.total = response.total;
  

    }
    // async fetch(){
    //   const response = await getUsersPag(this.pagination.page);
    //   this.data = response.data;
    //   this.pagination.total = response.total;
    //   this.currentTask = {};
  
    // }
  }

export const usersFilter = new UsersFilter();
export const tasksFilter = new TasksFilter();