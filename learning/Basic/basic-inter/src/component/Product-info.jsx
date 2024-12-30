function Product(){
    const product=["Laptop","$1200","in stock"]
    return <div>
   <h1>{product[0]} is {product[2]} at the price of {product[1]}</h1>
    
    </div>
}
export default Product