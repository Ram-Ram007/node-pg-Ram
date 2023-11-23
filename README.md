# node-pg

# postman-collection:

- Fav-part

http://localhost:5000/fav?user_id=1 --> to display the favorate done by user

based on id


http://localhost:5000/fav?user_id=1&search=al --> to search based on the typed 

letter

http://localhost:5000/fav?user_id=2&priceRange=0-25 --> used to filter rating by 

the user

http://localhost:5000/fav?user_id=1&search=a&priceRange=0-250 --> to filter id 

price and search


http://localhost:5000/fav?user_id=1&sortOrder=desc --> to sort using price by 

using desc and asc


- Rating -part:

http://localhost:5000/rating --> to display overall rating for all items

- display-canceled-one:

http://localhost:5000/cancel?user_id=4 --> to display cancel by using user_id


http://localhost:5000/cancel?user_id=4&priceRange=1-15 --> to display cancelled using price range


http://localhost:5000/cancel?user_id=4&priceRange=1-15&search=cook --> search in canceled by using 

name of iteams