import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}


function TodoForm({ onSubmit }) {
    const [value, setValue] = useState('');

    const handleValueChange = (e) => {
        setValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return

        const formValues = {
            title: value,
        }



        onSubmit(formValues);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;