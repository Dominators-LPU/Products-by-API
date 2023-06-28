

import React, {useState, useEffect} from "react"; 
import axios from "axios";

const Products = () => {

    let [items, setItems] = useState([])

    console.log(items)

    useEffect(() => {
      
        axios.get("https://fakestoreapi.com/products")
        .then(res => setItems(res.data))
        .catch(err => console.log(err))

    },[])


    return(
        <div>
            <h1>Products</h1>
            <div className="product-list">
            { 
               items.length > 0 && 
               (items.map((item, index) => (
                     <div key={index} className="products">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                    </div>
               ))

               )

            }
            </div>
        </div>
    )
}

export default Products;