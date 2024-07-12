import React, { useEffect } from 'react';
import useStore from '../store';
import '../styles/Form.css';

const Form = () => {
    const input = useStore(state => state.input);
    const setInput = useStore(state => state.setInput);
    const addTodo = useStore(state => state.addTodo);
    const updateTodo = useStore(state => state.updateTodo);
    const editTodo = useStore(state => state.editTodo);

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            addTodo(input);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput('');
        }
    }, [editTodo, setInput]);

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Enter a todo..."
                value={input}
                onChange={onInputChange}
                required
            />
            <button type="submit" className="button-add">
                {editTodo ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default Form;
