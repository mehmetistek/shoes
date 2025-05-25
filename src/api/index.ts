import axios from "axios";
import formatParams from "../utils/formatParams";


const api = axios.create ({
    baseURL: "http://localhost:3050",
});


//urlden gelen parametre nesnesi bu şekildej
const urlParams = {
    color: "blue,light-gray",
    gender: "men",
    size: "40,41",
    price: "371",
}


//api'a gönderilecek parametre stringi bu şekilde
const url = "?color_like=blue&color_like=light-gray&size_like=40&size_like=41&gender=men&price_lte=371";

// bütün ayakkabı verilerini al
export const getShoes = (params:string) => 
    api.get(`/shoes${params}`).then((res) => res.data);

//Tek bir ayakkabıyı al
export const getShoe = (id:string) => 
    api.get(`/shoes/${id}`).then(res => res.data);
