CREATE DATABASE Bamazon;
USE Bamazon;
 
 CREATE Table Products(
 item_id integer not null auto_increment,
 product_name varchar(30) not null,
 department_name varchar(50) not null,
 price decimal(10,4) not null,
 stock_quantity integer(20) not null,
 unique(item_id)
 );
 
 INSERT INTO Products(product_name,department_name,price,stock_quantity) VALUES("Dove Soap","beauty",5.50,20),
 ("Hass Avacado","produce",1.19,30),
 ("fuji Apple", "produce",1.50,50),
 ("charmin toiletpaper","grocery",1.55,100),
 ("del monte bananna","produce",1.10,100),
 ("Tide Detergent","Laundry",11.50,4),
 ("sara lee bread","grocery",2.20,20),
 ("Mortin salt","grocery",1.70,30),
 ("yoga mat","sport",17.50,50),
 ("kraft cheese","grocery",3.50,40),
 ("Nike sport","clothing",22.50,40);
 
 SELECT * from Products;
 
 
 
 