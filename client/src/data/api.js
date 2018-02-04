import axios from 'axios'
import { API_URL } from '../constants/config'

class Team {
    static getAll() {
        return axios.get(`${API_URL}/team`)
    }
    static get(id) {
        return axios.get(`${API_URL}/team/${id}`)
    }
    static createTeam(name, sport, maxPlayers, description, lat, lng, address) {
        return axios.post(`${API_URL}/team`, { name, sport, maxPlayers, description, lat, lng, address});
    }
}

class Sport {
    static getAllSports() {
        return axios.get(`${API_URL}/sport`)
    }
}

class Auth {
    static login(email, password){
        return axios.post(`${API_URL}/login`, { email, password });
    }


    static register(email, name, password) {
        return axios.post(`${API_URL}/register`, { email, name, password });
    }
}

export {
    Team,
    Sport,
    Auth
}