import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const TableRow = (props) => {

    let [editMode, setEditMode] = useState(false)

    const deleteElem = (id) => props.deleteBook(id);

    const changeEditMode = () => setEditMode(!editMode);

    const editBook = (data) => {
        props.editBook(data)
        setEditMode(false)
    }

    return (
        <>
            <table border="1">
                <tbody>
                <tr>
                    <th>Жанр</th>
                    <th>Автор</th>
                    <th>Название</th>
                    <th>Года</th>
                    <button onClick={() => deleteElem(props.id)}>Delete</button>
                </tr>

                <tr>
                    {editMode ? <EditBookReduxForm state={props} changeEditMode={changeEditMode}
                                                   onSubmit={editBook}
                        />
                        : <>
                            <td>{props.genre}</td>
                            <td>{props.author}</td>
                            <td>{props.naming}</td>
                            <td>{props.years}</td>
                            <button onClick={() => changeEditMode()}>Edit</button>
                        </>}
                </tr>
                </tbody>
            </table>
            <br/>
        </>
    )

}

export default TableRow;

const maxLength10 = maxLengthCreator(10);

const EditBookForm = (props) => {

    const date = new Date().toJSON().slice(0, 10);
    const { id, genre, author, naming } = props.state;

    return (
        <td colSpan={5}>
            <form onSubmit={props.handleSubmit((vales) => props.onSubmit({ ...vales, id }))}>
                <td>
                    <Field placeholder={genre} id={id} name={'genre'} component={Input}
                           validate={[required, maxLength10]}/>
                </td>
                <td>
                    <Field placeholder={author} name={'author'} component={Input}
                           validate={[required, maxLength10]}/>
                </td>
                <td>
                    <Field placeholder={naming} name={'naming'} component={Input}
                           validate={[required, maxLength10]}/>
                </td>
                <td>
                    <Field name={'years'} type={'date'} max={date} component={Input}
                           validate={[required, maxLength10]}/>
                </td>
                <td>
                    <button disabled={props.invalid || props.pristine || props.submitting}>Create Edit</button>
                </td>
            </form>
            <button onClick={() => props.changeEditMode()}>Cancel Edit</button>
        </td>
    )
}

const EditBookReduxForm = reduxForm({
    form: 'editBook'
})(EditBookForm)