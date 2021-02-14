exports.productList=`select * from productInfo`;
exports.updatecart=`update userInfo set ? where IP=?`;
exports.addtocartFirst=`insert into userInfo set ? `;
exports.getCart=`select cartProduct from userInfo where IP=?`;
exports.read=`select * from getCartData where IP=?`;
exports.totalDiscount=`select * from totalCartDiscount`;
let productListCart=`select * from productInfo where productName in (`;

exports.productListCart=(strinfList)=>{
    let listofProd=`"${strinfList}"`;
    console.log(listofProd);
    return productListCart+listofProd+')';
    // return productListCart;
}

