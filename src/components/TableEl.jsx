import React from 'react';
import TableRow from "./TableRow";

const TableEl = (props) => {
    const tableEl = props.books.map((el) => {
        return <TableRow id={el.id} genre={el.genre} author={el.author} naming={el.naming} years={el.years} />
    });

    return (
        <>
            {tableEl}
        </>
    )
}

export default TableEl;