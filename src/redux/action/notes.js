import axios from 'axios';

export const getNotes = url => ({
    type: 'GET_NOTES',
    payload : axios.get(url)
})