const db=require('../server/config').pool;
const queryList=require('../server/query');
var ip = require("ip");
console.log ( ip.address() );

module.exports = {
    read:async (res)=>{
        let result=await callMysql(queryList.productList);
        // console.log(result);
        res.json(result);
    },
    addtocart:async (data,res)=>{
        let userInfoCart={};
        userInfoCart.IP=ip.address();
        let getcartData=await callMysql(queryList.getCart,[ip.address()]);
        let finalProductList='';
        let result;
        if(getcartData.length>0){
            userInfoCart.cartProduct=getcartData[0].cartProduct+','+data.productName;
            // console.log(userInfoCart);
            result=await callMysql(queryList.updatecart,[userInfoCart,userInfoCart.IP]);
        }else{
            finalProductList=data;
            userInfoCart.cartProduct=data.productName;
            result=await callMysql(queryList.addtocartFirst,[userInfoCart]);
        }
        // console.log(result);
        res.json(result);
    },
    getCartData:async (res)=>{
        let productinCart=await callMysql(queryList.getCart,[ip.address()]);
        console.log(productinCart);
        // console.log('productinCart');
        let cartDataList=productinCart[0]['cartProduct'].replace(/,/g,'","');
        let result=await callMysql(queryList.productListCart(cartDataList))
        // console.log(cartDataList);
        // console.log(result);
        let finalResult=countProduct(result,productinCart[0]['cartProduct']);
        // console.log(finalResult);
        res.json(finalResult);
    },
    totalDiscount:async (res)=>{
        let result=await callMysql(queryList.totalDiscount);
        // console.log(result);
        res.json(result);
    }
}
function countProduct(productCart,strinCart){
    productCart.forEach(ele=>{
        let tmp=new RegExp(ele.productName, 'g');
        ele['cartUnit']=strinCart.match(tmp).length;
        ele['priceWithUnit']=calclatePriceafterDisc(strinCart.match(tmp).length,ele);
        ele['actualPriceWithUnit']=totalActualPrice(strinCart.match(tmp).length,ele);
    });
    return productCart;
}
function calclatePriceafterDisc(cartUnit,productList){
    if(productList.discountforUnit>0 && productList.discountforUnit<=cartUnit){
        let discountAmout=Math.floor(cartUnit/productList.discountforUnit)*productList.discountAmount;
        return ((cartUnit-((Math.floor(cartUnit/productList.discountforUnit)*productList.discountforUnit)))*productList.price)+discountAmout;
    }else{
        return cartUnit*productList.price;
    }
}
function totalActualPrice(cartUnit,productList){
    return cartUnit*productList.price;
}
function callMysql(query,parameters){
    return new Promise((resolve,rejects)=>{
        db.getConnection(function(err, conn){
            if(err){
                // console.log(err);
                rejects(err);
            }
            console.log(conn.state);
            conn.query(query,parameters, function(err, rows) {
                if(err){
                    // console.log(err);
                    rejects(err);
                }
                // console.log(rows);
                resolve(rows);
            })
        })
    });

}
