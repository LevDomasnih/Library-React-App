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
    editBook() {

    },
    deleteBook(id) {
        return instance.post('delete.php', { id })
            .then(response => response.data)
    },
};

export const ProfileAPI = {
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => response.data);
    },
};