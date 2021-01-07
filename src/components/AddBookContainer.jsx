import React from "react";

const AddBookContainer = () => {
    return (
        <div className="addBook">
            ЖАНР: <input type="text" name="genre" className="genre"/> <br/>
            АВТОР: <input type="text" name="author" className="author"/> <br/>
            НАЗВАНИЕ: <input type="text" name="naming" className="naming"/> <br/>
            ГОД ВЫПУСКА: <input type="date" name="years" className="years" id="datePickerId"/> <br/>
            <button className="sendBook">submit</button>
        </div>
    )
}

export default AddBookContainer;