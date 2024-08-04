//Product Constructor
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

//Customer constructor
function Customer(name,email,id){
    this.name = name;
    this.email = email;
    this.id = id;

}

//Order Item Constructor
function orderItem(product, quantity){
    this.product = product;
    this.quantity = quantity;

}

//Order
function Order(customer){
    this.customer = customer;
    this.items = [];
    this.status = 'pending';
    this.totalAmount = 0;

    this.addItem = function(product, quantity){
        const item = new orderItem(product,quantity);
        this.items.push(item);
        this.calculateTotal();
    };

}