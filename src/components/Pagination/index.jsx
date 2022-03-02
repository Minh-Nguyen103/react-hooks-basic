import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPgaeChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPgaeChange: null,
}

function Pagination(props) {
    const { pagination, onPgaeChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPage = Math.ceil(_totalRows / _limit);


    function handlePageChange(newPage) {
        if (onPgaeChange) {
            onPgaeChange(newPage)
        }
    }
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>

            <button
                disabled={_page >= totalPage}
                onClick={() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;