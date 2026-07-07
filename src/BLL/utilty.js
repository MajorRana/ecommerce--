export function getPriceAfterDiscount(p,d){
var pad=p-(p*d/100)
return pad.toFixed(2);
}
export function getTotalCartValue(arrCart){
    let total=0;
    for(let e of arrCart){
       total+= getPriceAfterDiscount(e.product.price,e.product.discountPercentage)*e.quantity
    }
    return total.toFixed(2)
}
export function getPriceRangeArray(allP){
    var allPrice=allP.map(e=>e.price);
    allPrice.sort((e1,e2)=>{
        if(parseFloat(e1).parseFloat(e2))
            return 1
        else
        return -1
    })
    var maxPrice=allPrice[allPrice.length-1];
    var rangePrice=parseInt(maxPrice/5)+50;
    var arrRange=[]
    var startPrice=0
    for(let i=1;i<=5;i++){
        var obj
    }
}