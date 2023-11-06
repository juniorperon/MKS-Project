import axios from 'axios';

const baseURL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/';

const Api = axios.create({ baseURL });

export async function getProducts() {
    try {
      const response = await Api.get('products?page=1&rows=8&sortBy=name&orderBy=DESC');
      console.log(response);
      return response.data.products;
    } catch (error) {
      throw error;
    }
  }