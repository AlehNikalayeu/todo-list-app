import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useStore = create(set => ({
    input: '',
    todos: [],
    editTodo: null,
    setInput: (input) => set({ input }),
    addTodo: (title) => set(state => ({
        todos: [...state.todos, { id: uuidv4(), title, completed: false }]
    })),
    updateTodo: (title, id, completed) => set(state => ({
        todos: state.todos.map(todo => todo.id === id ? { title, id, completed } : todo),
        editTodo: null
    })),
    deleteTodo: (id) => set(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    setEditTodo: (todo) => set({ editTodo: todo }),
    toggleCompleted: (id) => set(state => ({
        todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }))
}));

export default useStore;
