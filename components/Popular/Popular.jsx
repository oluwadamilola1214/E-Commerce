import data_product from '../data'
import './Popular.css'
import Item from '../item/Item'

const Popular = () => {
  return (
    <div className="Popular ">
        <h1>POPULAR IN MEN</h1>
        <hr />
     
        <div className='popular-item'>
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} 
            ></Item>})}
        </div>
    </div>

    
  )
}

export default Popular