select sum(sizeChart.price+pictures.picprice) from shoppingCart
join pictures on pictures.id=shoppingcart.picID
join sizeChart on sizeChart.id=shoppingCart.sizeID
where shoppingCart.auth0id=$1
