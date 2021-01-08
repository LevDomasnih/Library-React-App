import React from 'react';
import TableRow from "./TableRow";

const TableEl = (props) => {
    const tableEl = props.state.books.map((el) => {
        return <TableRow editBook={props.state.editBook} deleteBook={props.state.deleteBook} id={el.id} key={el.id} genre={el.genre} author={el.author} naming={el.naming} years={el.years} />
    });

    return (
        <>
            {tableEl}
        </>
    )
}

export default TableEl;