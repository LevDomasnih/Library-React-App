import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addBook} from "../../redux/bookReducer";

const AddBookForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Жанр' name={'genre'} component={'input'} />
            </div>
            <div>
                <Field placeholder='Автор' name={'author'} component={'input'} />
            </div>
            <div>
                <Field placeholder='Название' name={'naming'} component={'input'} />
            </div>
            <div>
                <Field name={'years'} component={'input'} type={'date'} />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

const AddBookReduxForm = reduxForm({
    form: 'newBook'
})(AddBookForm)



const AddBook = (props) => {

    const addNewBook = (book) => {
        props.addBook(book)
    }

    return (
        <div>
            <h1>Добавить книгу</h1>
            <AddBookReduxForm onSubmit={addNewBook}/>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {
    addBook,
})(AddBook)