import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://project',
    headers: {
        'Content-Type': "text/html; charset=UTF-8"
    },
});

export const booksAPI = {
    getBooks() {
        return instance.get('get.php')
            .then(response => response.data)
    },
    addBook({ genre, author, naming, years }) {
        return instance.post('post.php', {
            genre, 'author': author, 'naming': naming, 'years': years
        })
            .then(response => response.data)
    },
    editBook({ genre, author, naming, years, id }) {
        return instance.post('update.php', {
            genre, author, naming, years, id
        })
            .then(response => response.data)
    },
    deleteBook(id) {
        return instance.post('delete.php', { id })
            .then(response => response.data)
    },
};