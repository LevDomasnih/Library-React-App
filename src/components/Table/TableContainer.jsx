import React from "react";
import {connect} from "react-redux";
import TableEl from "./TableEl";
import {deleteBook, editBook, getBooks} from "../../redux/bookReducer";

class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        return <TableEl state={this.props} />;
    }
}

let mapStateToProps = (state) => ({
    books: state.booksStore.books
})


export default connect(mapStateToProps, {
    getBooks,
    deleteBook,
    editBook,
})(TableContainer);