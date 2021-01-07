import React from 'react';

const TableRow = (props) => {
    return (
        <>
            <table border="1">
                <tr>
                    <th>id</th>
                    <th>Жанр</th>
                    <th>Автор</th>
                    <th>Название</th>
                    <th>Года</th>
                </tr>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.genre}</td>
                    <td>{props.author}</td>
                    <td>{props.naming}</td>
                    <td>{props.years}</td>
                </tr>
            </table>
            <br/>
        </>
    )
}

export default TableRow;