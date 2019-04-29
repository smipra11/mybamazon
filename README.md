# mybamazon
A Node.js & MySQL digital storefront. This is a command line Node app
BamazonCustomer.js (See example here)

Receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.
BamazonManager.js (See example here)

Mimics the basics of a warehouse management system, providing managers with a list of options to view stock and adjust inventory.
A sample of the menu is below:
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product

MySQL
The JavaScript files mentioned above query a MySQL database called Bamazon which is locally hosted on my laptop.

Please refer to the schema.sql file to see how the database was created using raw SQL queries.

If you wish to run this app on your own machine, then please note the following commands:

If you are new to MySQL, please set up MySQL and MySQL Workbench on your laptop and then open up to your localhost connection.
Run CREATE DATABASE Bamazon; in mySQL Workbench.
Be sure to select the correct database by running the USE Bamazon;
Below is a demo of the BamazonCustomer.js file...

if there are enough inventory in stock order will precess

![Screenshot (23)](https://user-images.githubusercontent.com/45401868/56912983-8ae1fb00-6a7e-11e9-91d1-bfcc0be619e4.png)

if there are not enough item in the stock

![Screenshot (25)](https://user-images.githubusercontent.com/45401868/56913166-e8764780-6a7e-11e9-83a7-23ae6cbda950.png)

Below is a demo of the bamazonmanager.js file...
Running node BamazonManager.js will display a menu and perform the specific requests. 

![Screenshot (29)](https://user-images.githubusercontent.com/45401868/56915159-d34fe780-6a83-11e9-8d71-662872fc8ff1.png)

![Screenshot (31)](https://user-images.githubusercontent.com/45401868/56915207-ee225c00-6a83-11e9-9345-2cd1dad922c9.png)

Show item with low inventory


