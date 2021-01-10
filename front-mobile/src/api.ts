import axios from "axios";

const API_URL = 'https://pes-app-delivery.herokuapp.com' //  'http://localhost:8080';  exp://192.168.0.102:19000 

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}