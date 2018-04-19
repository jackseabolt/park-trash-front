import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http'; 

@Injectable()

export class ItemService {
    constructor(private http: Http) {}

    createNewItem(data) {
        console.log("IT FIRED")
        return this.http.post('http://localhost:8080/item/new', data)
    }

    getAllItems() {
        return this.http.get('http://localhost:8080/item/')
    }

    deleleteItem(id) {
        return this.http.delete(`http://localhost:8080/item/delete/${id}`)            
    }

    getItemByCity(city) {
        return this.http.get(`http://localhost:8080/item/city/${city}`)
    }
}