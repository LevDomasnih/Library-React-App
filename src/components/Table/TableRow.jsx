import React from 'react';

const TableRow = (props) => {
    const deleteElem = (id) => {
        props.deleteBook(id)
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
                        <td>{props.genre}</td>
                        <td>{props.author}</td>
                        <td>{props.naming}</td>
                        <td>{props.years}</td>
                        <button>Edit</button>
                    </tr>
                </tbody>
            </table>
            <br/>
        </>
    )
}

export default TableRow;