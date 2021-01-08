import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

class TableRow extends React.Component {
    state = {
        isEdit: false,
    }

    deleteElem = (id) => {
        this.props.deleteBook(id)
    }

    editElem = (id) => {
        this.setState({
            isEdit: true,
        })
    }

    editBook = (data) => {
        this.props.editBook(data)
        this.setState({
            isEdit: false,
        })
        console.log(data)
    }

    render() {
        return (
            <>
                <table border="1">
                    <tbody>
                    <tr>
                        <th>Жанр</th>
                        <th>Автор</th>
                        <th>Название</th>
                        <th>Года</th>
                        <button onClick={() => this.deleteElem(this.props.id)}>Delete</button>
                    </tr>

                    <tr>
                        {this.state.isEdit ? <EditBookReduxForm id={this.props.id} onSubmit={this.editBook}/>
                            : <>
                                <td>{this.props.genre}</td>
                                <td>{this.props.author}</td>
                                <td>{this.props.naming}</td>
                                <td>{this.props.years}</td>
                                <button onClick={() => this.editElem(this.props.id)}>Edit</button>
                            </>}
                    </tr>
                    </tbody>
                </table>
                <br/>
            </>
        )
    }
}

export default TableRow;

const maxLength10 = maxLengthCreator(10);

const EditBookForm = (props) => {
    return (
        <td colSpan={5}>
            <form onSubmit={props.handleSubmit((vales) => props.onSubmit({...vales, id: props.id}))}>
                <td>
                    <Field placeholder='Жанр' id={props.id} name={'genre'} component={Input} validate={[required, maxLength10]}/>
                </td>
                <td>
                    <Field placeholder='Автор' name={'author'} component={Input} validate={[required, maxLength10]} />
                </td>
                <td>
                    <Field placeholder='Название' name={'naming'} component={Input} validate={[required, maxLength10]} />
                </td>
                <td>
                    <Field name={'years'} type={'date'} max={new Date().toJSON().slice(0,10)} component={Input} validate={[required, maxLength10]} />
                </td>
                <td>
                    <button>Create Edit</button>
                </td>
            </form>
        </td>
    )
}

const EditBookReduxForm = reduxForm({
    form: 'editBook'
})(EditBookForm)