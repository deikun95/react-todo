import { observable, action, makeObservable, reaction } from "mobx";

class Todos {
  constructor(rootStore) {
    this.rootStore = rootStore;
	makeObservable(this);
	
	reaction(
		() => this.serverData,
		() => console.log("reaction", this.rootStore)
	)
  }

  @observable todos = [];
  @observable nameInput = "";
  @observable serverData = {};
  
  @action addTodos = (value) => {
    this.todos.push(value);
  };

  @action setNameInput = (value) => {
    this.nameInput = value;
  };

  @action setServerData = (value) => {
	  this.serverData = value;
  }

  @action onEnter = (event) => {
    if (event.key === "Enter") {
      const todo = {
        value: this.nameInput,
        id: +new Date(),
      };
      this.addTodos(todo);
	  this.setNameInput("");
	  this.onRequest()
    }
  };



  @action onRequest = () => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(json => {
		this.setServerData(json)
	})
  }
}

export default Todos;
