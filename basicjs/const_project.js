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

    this.calculateTotal = function(){
        this.totalAmount = this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    };

    this.getOrderSummery = function(){
        return{
            customer: this.customer.name,
            items: this.items.map(item => ({
                product: item.product.name,
                quantity: item.quantity,
                total: item.product.price * item.quantity

            })),
            status: this.status,
            totalAmount: this.totalAmount
            
        };
    };

    this.updateStatus = function(newStatus){
        this.status = newStatus;
    };

}

//make product

const product_One = new Product("Laptop", 10000, "Electronics");
const product_Two = new Product("Ipad", 15000, "Electronics");

//Make Customer

const customer_One = new Customer("Efentov", "efettov@gmail.com");

//Make Order
const order_One = new Order(customer_One);
order_One.addItem(product_One, 1);
order_One.addItem(product_One, 2);

//Order Summery
console.log(order_One.getOrderSummery);

//Order Status
order_One.updateStatus('shipped');
console.log(order_One.status);