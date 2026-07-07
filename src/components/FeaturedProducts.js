'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import SingleFeaturedProduct from './SingleFeaturedProduct'

export default function FeaturedProducts(){
  const categoryState =useSelector(state=>state.category)
    const productState=useSelector(state=>state.product)
    debugger;
if(productState.data.length==0)
  return ''
else
return (
 
<>
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Featured Products</span>
    </h2>
    <div className="row px-xl-5">
     {
     
      productState.data.filter(e=>e.category.toUpperCase()==categoryState.selectedCategory.toUpperCase()).map((e1,i)=>(<SingleFeaturedProduct key={i} product={e1}/>))
      }
    </div>
  </div>
  {/* Products End */}
</>
)

}