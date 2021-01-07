import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://project',
});

export const booksAPI = {
    getBooks() {
        return instance.get('get.php')
            .then(response => response.data)
    },
    addBook() {

    },
    editBook() {

    },
    deleteBook() {

    },
};

export const ProfileAPI = {
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => response.data);
    },
};