//object
const properties = [
    {itemid:"2467", name:"Milk", price:"2.99", description:"fairlife"},
    {itemid:"5437", name:"Water", price:"4.99", description:"fiji"},
    {itemid:"1427", name:"Peanut Butter", price:"3.75", description:"Skippy"}, 
    {itemid:"2367", name:"Oatmeal", price:"3.99", description:"Quakers"}, 
    {itemid:"3451", name:"Chips", price:"1.99", description:"Doritos"},
    ]

// console.log(properties) testing my array

// class
class NewProducts{
    constructor(properties){
        this.properties = properties
        this.afterAddingProperties = this.getNames(this.properties)
        this.salesItems = this.getSalesItems(this.afterAddingProperties)
        this.orderItems = this.getorderItems(this.afterAddingProperties)

        
    }
    // getnames function
    getNames(properties){
        return properties.map(function(properties){
        })
        properties.sort();
    }
    // sales item function
     getSalesItems(properties){
         return properties.filter(function(items){
             return (properties< 6.00) ? true:false
         })
     }

      getorderItems (properties){
         let count = 0
         let stopper = properties.length
          return properties.reduce(function(acc, curr){
         count++
          return (count === stopper) ? (acc + cur)/stopper : (acc + cur)
          },0)
      }
    
  }

let final = new NewProducts(properties)
console.log(final.properties)
