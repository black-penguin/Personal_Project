insert into cart(Name, pictureID, CustomerID, SizeID, Quantity)
values ($1, $2, $3, $4, $5) returning id
