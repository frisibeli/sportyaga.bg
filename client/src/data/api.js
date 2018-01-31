import axios from 'axios'
import {API_URL} from '../constants/config'

class Team{
    static getAll(){
        return axios.get(`${API_URL}/team`)
    }
}

export {
    Team
}