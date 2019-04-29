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
