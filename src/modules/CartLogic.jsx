import { getCookie, setCookieForCart } from "./Cookies";

export default async function addToCartById(id){
    let map = {};
    map["productId"] = id;
    map["quantity"] = 1;
    if(getCookie("cartItems")){
        var cartItems = getCookie("cartItems");
        var cart = JSON.parse(cartItems);
        var itemInCart = false;
        cart.forEach(order => {
            if(order.productId == id){
                order.quantity++;
                setCookieForCart("cartItems", JSON.stringify(cart));
                itemInCart = true;
            }

        })
        if(!itemInCart){
            cart.push(map);
            setCookieForCart("cartItems", JSON.stringify(cart))
        }
    }else{
        var cart = cart ? JSON.parse(cart) : [];
        cart.push(map);
        setCookieForCart("cartItems", JSON.stringify(cart));
    }
}