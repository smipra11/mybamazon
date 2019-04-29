var mysql = require("mysql");
var inquirer = require("inquirer");

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
    //console.log("hello")
    if (err) throw err;
    runSearch();
});


function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View Products for Sale":
                    displayProduct();
                    break;

                case "View Low Inventory":
                    lowInventory();
                    break;

                case "Add to Inventory":
                    addInventory();
                    break;

                case "Add New Product":
                    addProduct();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

function displayProduct() {
    connection.query("SELECT * FROM Products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item_ID" +
                res[i].item_id +
                " || Product Name " +
                res[i].product_name +
                " || Department Name " +
                res[i].department_name +
                " ||  Price  " +
                res[i].price +
                "  ||  Quantity " +
                res[i].stock_quantity
            );
        }
        runSearch();
    })

}


function lowInventory() {
    connection.query("SELECT * from Products where stock_quantity < 5", function (err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log("Below is the item which is low on inventory")
            console.log("--------------------------------------------------------")
            console.log(
                "Item_ID" +
                res[i].item_id +
                " || Product Name " +
                res[i].product_name +
                " || Department Name " +
                res[i].department_name +
                " ||  Price  " +
                res[i].price +
                "  ||  Quantity " +
                res[i].stock_quantity
            );
        }

        //runSearch()
    })
}

function addInventory() {
    connection.query("SELECT * FROM Products",function(err,res) {
for(i=0;i<res.length;i++){
    var currentquantity = res[i].stock_quantity
}
inquirer
        .prompt([{
            name: "id",
            type: "input",
            message: "please provide id of the product you like to add?"
        },

        {
            name: "quantity",
            type: "input",
            message: "How many quantities  you would like to add?",

        }
        ])
        .then(function (addmore) {
            connection.query("UPDATE Products SET? WHERE?",
                [
                    {
                        stock_quantity: currentquantity + parseInt(addmore.quantity),
                    },
                    {
                        item_id: addmore.id
                    }
                ],
            
            function(err,res){
                console.log(" more quantity  has been added to the inventory!!") 
            });


        })

    })
    
}









function addProduct() {
    inquirer
        .prompt([{
            name: "product",
            type: "input",
            message: "which product you like to add?"
        },

        {
            name: "catogery",
            type: "input",
            message: "In which catogery you like to add this product?",

        },

        {
            name: "price",
            type: "input",
            message: "what is the price of the item?",

        },

        {
            name: "quantity",
            type: "input",
            message: "how many quantity you like to add?",

        }
        ]).then(function (manager) {
            connection.query("INSERT INTO Products SET ?",
                {
                    product_name: manager.product,
                    department_name: manager.catogery,
                    price: manager.price,
                    stock_quantity: manager.quantity
                }, function (err, res) {
                    console.log(res.affectedRows + " product has been added!!")
                }
            )
        });
    //runSearch();
}
