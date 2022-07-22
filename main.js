
class Mkulima{
constructor(){
this.farms = [];
this.groceryVendor = [];
this.product = [];
this.addFarm = (farmId, farmName, farmer, phone, address) => {
this.farms.push({farmId,farmName,farmer,phone,address})
}
this.removeFarm = (farmId) => {
let specific = this.farms.find(item => item.farmId ===farmId);
let farmIndex = this.farms.indexOf(specific);
this.farms.splice(farmIndex, 1);
}
this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
let specificFarm = this.farms.find(item => item.farmId ===farmId)
specificFarm.farmId =newFarmId;
specificFarm.farmName =newFarmName;
specificFarm.farmer =newFarmerName;
specificFarm.phone =newPhone;
specificFarm.address =newAddress;
}
this.getFarm = (Id)=>{
console.log(this.farms.find(object=>object.farmId===Id))
}
this.addProduct = (productId, productName, price) => {
this.product.push({productId,productName,price})

}
this.removeProduct = (productId) => {
let specific = this.product.find(item => item.productId ===productId);
let productIndex = this.product.indexOf(specific);
this.product.splice(productIndex, 1);
}
this.updateProduct = function(productId,newProductId,newProductName,newPrice){
let specificProduct = this.product.find(item => item.productId ===productId)
specificProduct.productId =newProductId;
specificProduct.productName = newProductName;
specificProduct.price = newPrice;
}
this.getProduct = (Id)=>{
console.log(this.product.find(object=>object.productId===Id))
}
this.printProducts = ()=>{
console.log(this.product)
}
this.calculateOrderCost = (productId,quantity)=>{
let specificProduct = this.product.find(object=>object.productId===productId);
console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
}
}
}

let farm1 = new Mkulima();
farm1.addFarm("001","Cynthia","Beatrice","0756649874", "AAOO1");
farm1.addFarm("002","Muhoozi","Nancy","0787589857", "AA002");
farm1.addFarm("003","Birungi","Catherine","078900234", "AA003");
console.log(farm1.farms);

farm1.removeFarm("001");
console.log();