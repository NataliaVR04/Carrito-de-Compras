import { useContext, useState, useEffect  } from "react";
import { dataContext } from "../Context/DataContext";

import axios from "axios";
import './Products.css';

const Products = () => {
  const [data, setData] = useState([]);
  const {buyProducts} = useContext(dataContext);

  useEffect(() => {axios ("data.json").then((res) => setData(res.data))}, []);

  return data.map ((product)=>{
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"/>
            <h3>{product.name}</h3>
            <h4>Línea: {product.series}</h4>
            <h5>${product.price}</h5>
            <button onClick={()=> buyProducts(product)}>ʚ Buy ɞ</button>
        </div>
    )
  })

}

export default Products