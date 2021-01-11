import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addBook} from "../../redux/bookReducer";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


const AddBookForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Жанр' name={'genre'} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder='Автор' name={'author'} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder='Название' name={'naming'} component={Input} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field name={'years'} type={'date'} max={new Date().toJSON().slice(0, 10)} component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button disabled={props.invalid || props.pristine || props.submitting}>Добавить</button>
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

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {
    addBook,
})(AddBook)