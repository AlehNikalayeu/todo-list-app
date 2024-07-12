import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useStore from '../store';
import '../styles/TodoList.css';

const TodoList = () => {
    const todos = useStore(state => state.todos);
    const setEditTodo = useStore(state => state.setEditTodo);
    const deleteTodo = useStore(state => state.deleteTodo);
    const toggleCompleted = useStore(state => state.toggleCompleted);

    const handleCompleted = (todo) => {
        toggleCompleted(todo.id);
    };

    const handleEdit = (id) => {
        const findTodo = todos.find(todo => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete = (id) => {
        deleteTodo(id);
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li className="list-item" key={todo.id}>
                        <input
                            className={`List ${todo.completed ? 'completed' : ''}`}
                            type="text"
                            value={todo.title}
                            onChange={(e) => e.preventDefault()}
                        />

                        <button className="button-complete task-button"
                                onClick={() => handleCompleted(todo)}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </button>

                        <button className="button-edit task-button"
                                onClick={() => handleEdit(todo.id)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>

                        <button className="button-delete task-button"
                                onClick={() => handleDelete(todo.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
