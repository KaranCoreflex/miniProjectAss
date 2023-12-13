import axios from 'axios';

export class HttpService{
    constructor(){
        this.categoriesUrl = "https://catprdapi.azurewebsites.net/api/category";
        this.productsUrl = "https://catprdapi.azurewebsites.net/api/product";
    }
    getCategories(){
        let response = axios.get(this.categoriesUrl)   
        return response;
    }
    getCategoryById(id){
        let response = axios.get(`${this.categoriesUrl}/${id}`)  
        return response;
    }
    postCategory(cat){
        let response = axios.post(this.categoriesUrl,cat,{
            headers:{
                'Content-Type':'application/json', 
            }
        })  
        return response;
    }
    putCategories(id,cat){
        let response = axios.put(`${this.categoriesUrl}/${id}`,cat,{
            headers:{
                'Content-Type':'application/json', 
            }
        })  
        return response;
    }
    deleteCategory(id){
        let response = axios.delete(`${this.categoriesUrl}/${id}`);
        return response
    }

    getProducts(){
        console.log("HTTP SERVICE",this.productsUrl)
        let response = axios.get(this.productsUrl)
        // console.log("response in HTTP",response) 
        return response;
    }

    postProduct(cat){
        console.log(this.productsUrl)
        let response = axios.post(this.productsUrl,cat,{
            headers:{
                'Content-Type':'application/json', 
            }
        })  
        return response;
    }
    putProduct(id,prod){
        let response = axios.put(`${this.productsUrl}/${id}`,prod,{
            headers:{
                'Content-Type':'application/json', 
            }
        })  
        return response;
    }
    deleteProduct(id){
        let response = axios.delete(`${this.productsUrl}/${id}`);
        return response
    }
}