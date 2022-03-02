import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onTodoList: PropTypes.func.isRequired,
};

function TodoList({ todoList, onTodoList }) {

    return (
        <ul>
            {todoList.map((todo, index) =>
                <li key={todo.id} onClick={() => onTodoList(todo)}>
                    {todo.title}
                </li>
            )}
        </ul>
    );
}

export default TodoList;