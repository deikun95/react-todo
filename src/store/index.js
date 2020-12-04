import React from 'react'
import TodosStore from './Todos';

class Store {
    constructor() {
        this.todosModule = new TodosStore(this);
    }
}

export const storeContext = React.createContext(new Store())
export const useStore = () => React.useContext(storeContext)