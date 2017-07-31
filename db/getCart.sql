select *, shoppingCart.id as scid from shoppingCart
join sizeChart on sizeChart.id=shoppingCart.sizeID
join pictures on pictures.id=shoppingcart.picID
where shoppingCart.auth0id=$1
