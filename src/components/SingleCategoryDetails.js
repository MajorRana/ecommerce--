import { categoryAction } from '@/redux/category/categorySlice';
import React from 'react'
import { useDispatch } from 'react-redux';

function SingleCategoryDetails(props) {
  const dispatch=useDispatch();
  
if(props.categoryDetails.count==0)
    return ;
  return (
    <>
     <div onClick={()=>{
      dispatch(categoryAction.selectCategory(props.categoryDetails.name))
     }} className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div className="text-decoration-none" >
            <div className="cat-item d-flex align-items-center mb-4">
              <div
                className="overflow-hidden"
                style={{ width: 100, height: 100 }}
              >
                <img className="img-fluid" src={props.categoryDetails.categoryImage} alt="" />
              </div>
              <div className="flex-fill pl-3">
                <h6>{props.categoryDetails.name.toUpperCase()}</h6>
                <small className="text-body">{props.categoryDetails.count} Products</small>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default SingleCategoryDetails