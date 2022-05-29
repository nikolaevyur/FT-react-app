import { makeAutoObservable, flow, onBecomeObserved } from "mobx";
import { changeStatus, deleteTask, getLogin, getTasksPag, getUsersPag } from "../api";

class LoginStore {
  loginUser = {};

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
    })

    // onBecomeObserved(this, 'loginUser', this.getLogin);

  }

  get loginData() {
    return this.loginUser
  }

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
  tasksData = [];
  preFilter = {};
  pagination = {
    limit: 10,
    page: 0,
    total: 0
  };

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
    })
    onBecomeObserved(this, "tasksData", this.fetch);
  }

  fetch = flow(function* () {
    try {
      const response = yield getTasksPag(this.preFilter, this.pagination.page)
      this.tasksData = response.data;
      this.pagination.total = response.total;
    } catch (error) {
      this.loginUser = "Error"
    }
  })


  async changeTaskStatus(id, status) {
    await changeStatus(id, status);
  }

  async deleteTask(id) {
    await deleteTask(id);
  }
}

class UsersFilter {
  data = [];
  pagination = { 
                limit: 10, 
                page: 0, 
                total: 0 
              };

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
    })

    onBecomeObserved(this, 'data', this.fetch);
  }

  fetch = flow(function* () {
    try {
      const response = yield getUsersPag(this.pagination.page)
      this.data = response.data;
      this.pagination.total = response.total;
    } catch (error) {
      this.data = "Error"
    }
  })
}

export const usersFilter = new UsersFilter();
export const tasksFilter = new TasksFilter();