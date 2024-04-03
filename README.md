# medicineDelivery

### Frontend

In the command line (terminal) go to the folder client:

```
    cd client
    npm install
    npm run dev
```


### Backend

In the command line (terminal) go to the folder api:

```
    cd api
    npm install
    npm run nodemon
```

## Medicine Delivery app

### Overview:
There are three complexity levels: base, middle and advanced.
The base level is sufficient to pass the test task stage. Still, accomplished tasks with a harder
level of complexity will highly increase your chance of getting to the school.

### Description:
The Medicine Delivery app should consist of two pages:
- the shops page and
- the shopping cart page

### Requirements:
- Important: Add instructions in the readme.md file on how to run the application.
- Upload source code to GitHub/BitBucket/GitLab and share a link.
- Host an application in any suitable way and share the URL to access it.
- The front-end part can be done in JavaScript (with or without any framework), with any
preferred design style.
- The back-end part can be done on NodeJS with or without any framework.
- Use any relational or non-relational database.

### Base level:

#### Drug stores page:

![image](https://github.com/VasylynaKolodiy/medicineDelivery/assets/106997950/833e450a-c702-42a2-975b-a52f8860833c)

The page where users can choose a drug store, then add medicines to the cart (get data from the database)

#### Shopping cart page:

![image](https://github.com/VasylynaKolodiy/medicineDelivery/assets/106997950/48aac16d-9a22-4a91-9cb0-a78e418263c4)

- The page where the user can check all added products, remove some of them
or change the count. And add an email, a phone number, and an address (in
inputs)
- The order should be saved in the database after the user clicks the “submit”
button

### Middle level:

#### Drug stores page:
- Everything from the base level
- Add the ability to sort medicines by price and/or date added
- Add the ability to mark medicines as favorites. The following drugs should be displayed first when sorting

#### Shopping cart page:
- Everything from the base level
- The cart should be saved in local storage.

### Advanced level:

#### Drug stores page:
- Everything from the middle level

#### Shopping cart page:

![image](https://github.com/VasylynaKolodiy/medicineDelivery/assets/106997950/9e18b312-9b27-4dc5-8d41-fb07222609a8)

- Everything from the middle level
- Add google maps
- users can choose their address using a pin on the map or just enter an
address and show it will be shown on the map
- show a shop where the user ordered medicines from on the map
- *(extra) show route from shop to user’s address and approximately time
- *(extra) ask to enter a captcha after clicking on the “Create order” button

### Additional ideas for your inspiration:

#### Orders history page:

![image](https://github.com/VasylynaKolodiy/medicineDelivery/assets/106997950/9cd8b98d-37da-48ce-8604-a9ca1d39096a)

users can find their orders on this page using their email and phone number, ororder id

#### Coupons page:

![image](https://github.com/VasylynaKolodiy/medicineDelivery/assets/106997950/66dfd7cd-6106-4889-a304-a5c1786b9925)

create a page where users can see all coupons (coupons will be used for discounts, users can apply them on the shopping cart page)

