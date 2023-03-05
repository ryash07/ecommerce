

import Card from '../Card/Card'
import "./FeaturedProducts.scss"

import useFetch from "../../hooks/useFetch"


const FeaturedProducts = ({type}) => {
 
  const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Nowadays, social media platforms make it easy for new trends to appear and become popular
              With flourishing opportunities to fulfill various health and wellness needs,
              this {type} product category will stay profitable in the years to come.
            </p>
        </div>
        <div className="bottom">
            {error ? "Something Went Wrong!" :
              loading ? "loading"
               : data.map((item)=>
                <Card item={item} key={item.id}/>
                )
            }
        </div>
    </div>
  )
}

export default FeaturedProducts

