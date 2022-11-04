console.log("it is working")
function Product(name,price,discount,code)
{
    this.ItemName = name;
    this.ItemPrice = price;
    this.Discount = discount;
    this.ItemCode = code;
    this.DiscountValue = function ()
    {
        return (price * discount / 100);
        }
}

let p1 = new Product('Titan', 1500, 2, 'T10');