import { observable, action  } from 'mobx';

class Todos {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable todos = [];

    @action addTodos = (value) => {
        this.todos.push(value);
    }


}

export default Todos;