import { Component, OnInit } from '@angular/core';

import { IProduct} from './product';

@Component({
    selector: 'nat-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit  {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    filtering: string = '';
    message: string = "";
    /*products: any[] = [  ou 
      products: Array<IProduct> ou */ 
    products: IProduct[] = [
        {
            "id": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": ["http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png", "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"]
        },
        {
            "id": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": ["http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"]
        },
        {
            "id": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": ["http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"]
            },
            {
            "id": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": ["http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"]
            },
            {
            "id": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": ["http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"]
            }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(rating: Map<string,number>): void {
        let key: string = rating.keys().next().value;
        let value: number = rating.get(key);
        console.log('toto:' + key  + ', ' + value);
        this.pageTitle = 'Product rating (' +  key +') => ' + value ;
        this.message 
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

    onNotify(message: string): void {
       console.log(message); 
    }
}