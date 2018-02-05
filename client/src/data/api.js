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

class User{
    static me(){
        return axios.get(`${API_URL}/user/me`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static joinTeam(id){
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        return axios.post(`${API_URL}/user/${user.id}/teams/${id}`,{}, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static leaveTeam(id){
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        return axios.delete(`${API_URL}/user/${user.id}/teams/${id}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
}

export {
    Team,
    Sport,
    Auth,
    User
}