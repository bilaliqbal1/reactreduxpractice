import axios from 'axios';
const kEY = 'AIzaSyDJSMU9RM_QB6yxEHFeG2H7mTNq5qQ8cmU'

//then go to google and search youtube api search and read the documentation

export default axios.create({
    baseURL = 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
