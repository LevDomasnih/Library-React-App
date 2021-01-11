import React, {useEffect} from "react";
import {connect} from "react-redux";
import {deleteBook, editBook, getBooks} from "../../redux/bookReducer";
import TableRow from "./TableRow";

const TableContainer = (props) => {

    useEffect(() => {
        props.getBooks()
    }, [])

    return (
        <>
            {props.books.map((el) => {
                    return <TableRow editBook={props.editBook}
                              deleteBook={props.deleteBook}
                              id={el.id} key={el.id}
                              genre={el.genre} author={el.author}
                              naming={el.naming} years={el.years}/>
                }
            )}
        </>
    );
}

let mapStateToProps = (state) => ({
    books: state.booksStore.books
})

export default connect(mapStateToProps, {
    getBooks,
    deleteBook,
    editBook,
})(TableContainer);