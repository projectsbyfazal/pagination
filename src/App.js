import { useEffect, useState } from 'react';
import './App.css';
import Product from './Product';

function App() {

  const [page, setPage] = useState(2);
  const [products, setProducts] = useState([]);

  async function getProducts(){
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json();
    setProducts(data.products);
  }

  useEffect(()=> {
    getProducts();
  }, [])

  return (
    <div className='my-4 container'>
      <h2 className='mb-4 text-center '>Our Products</h2>
      
      <div className="row justify-content-center">
        {
          products.slice(page * 6 - 6, page* 6).map((product)=>{
            return <Product product={product} key={product.id}/>
          })
        }
      </div>
      
      <div className="pagination text-center align-items-center justify-content-center">
        {
          page !== 1 ? <span className="text-primary" onClick={ () => setPage(page-1) } >Prev..</span> : <span className="text-secondary">Prev..</span>
        }
        {
          [...Array(products.length / 6)].map((_, i)=> <span onClick={() => setPage(i+1)} key={i} className={i+1 === page ? "bg-secondary text-white" : ""} >{i+1}</span> )
        }
        
        {
          page !== 5 ? <span className="text-primary" onClick={() => setPage(page+1) }>Nex..</span> : <span className="text-secondary">Nex..</span>
        }
      </div>  
    </div>
  );
}

export default App;