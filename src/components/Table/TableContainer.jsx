import React from "react";
import {connect} from "react-redux";
import TableEl from "./TableEl";
import {deleteBook, getBooks} from "../../redux/bookReducer";

class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        return <TableEl deleteBook={this.props.deleteBook} books={this.props.books} />;
    }
}

let mapStateToProps = (state) => ({
    books: state.booksStore.books
})


export default connect(mapStateToProps, {
    getBooks,
    deleteBook,
})(TableContainer);