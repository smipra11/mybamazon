var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table")


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon"

});

connection.connect(function (err) {
  if (err) throw err;
  Bamazon();
  //connection.end();
});



function Bamazon() {
  connection.query("SELECT * from Products", function (err, res) {

    var table = new Table({
      head: ['Item_ID', 'Product Name', 'Department Name', 'Price', 'Quantity']
      , colWidths: [10, 25, 25, 30, 20]
    });
    for (var i = 0; i < res.length; i++) {


      table.push(
        [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]

      )
    };
      console.log(table.toString())
      
    inquirer
      .prompt([{
        name: "id",
        type: "input",
        message: " Provide the ID of the product they would like to buy",

      },
      {
        name: "quantity",
        type: "input",
        message: "how much quanty you would like to buy?",

      }

      ])
      .then(function (answer) {
        // based on their answer, either call the bid or the post functions
        // var idneeded = answer.id;
        // var quantityneeded = answer.quantity;

        var query = "SELECT * from Products WHERE ?"
        var item = answer.id;
        var Quantity = answer.quantity;

        connection.query(query, { item_id: item }, function (err, res) {


          if (Quantity < res[0].stock_quantity) {
            console.log(" The item you order is in stock and we are placing order for you")

            var newquantity = res[0].stock_quantity - Quantity
            var purchaseid = item;
            var totalPrice = parseFloat((res[0].price * Quantity).toFixed(2));
            console.log("total price of your purchase is  " + totalPrice)
            connection.query("UPDATE products SET ? WHERE ?",
              [
                {
                },
                {
                  item_id: purchaseid
                }
              ],

              function (err, res) {
                console.log(res.affectedRows + " products updated!\n");
              })



          }
          else {
            console.log(" Sorry,We have not enough item in the stockat this time ,your order will be cancel")
            connection.end();
          }
        });
      });



  })
  //connection.end();
}

//Bamazon();


