'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import SingleCategoryDetails from './SingleCategoryDetails'
function getProductCountOfcategory(categoryName,arrProducts){
    let count=arrProducts.filter(e=>e.category==categoryName).length
    return count;
}
function getCategoryImageLink(categoryName,arrProducts){
    let arrP=arrProducts.filter(e=>e.category==categoryName)
    if(arrP.length!=0){
        return arrP[0].thumbnail
    }
}

function CategoryListing() {
    const categoryState =useSelector(state=>state.category)
    const productState=useSelector(state=>state.product)
  return (
    <>
    {/* Categories Start */}
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {
           categoryState.data.map((e,i)=>(<SingleCategoryDetails  key={i} categoryDetails={{name:e,count:getProductCountOfcategory(e,productState.data),categoryImage:getCategoryImageLink(e,productState.data)}} />)) 
        }
        
      </div>
    </div>
    {/* Categories End */}
  </>
  
  )
}

export default CategoryListing