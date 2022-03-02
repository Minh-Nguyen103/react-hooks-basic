import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from "react";

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value);

        if (!onSubmit) return;

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: e.target.value,
            }
            onSubmit(formValue);
        }, 300);

    }


    return (
        <form>
            <input
                value={searchTerm}
                onChange={handleSearchTermChange}
                type="text" />
        </form>
    );
}

export default PostFilterForm;