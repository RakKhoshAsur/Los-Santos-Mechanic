function validateInput(){
    // console.log(event.target.name);
    let price= parseInt(event.target.value);
    event.target.value = price;

    //set price with commission
    let ns = event.target.nextSibling.nextSibling;
    let commission = parseInt(document.getElementById("commission").value);
    let priceWithCommision = parseInt(price)+(price * commission / 100);
    console.log("Price with Commision ="+priceWithCommision);
    ns.value = priceWithCommision;
    
    //set toal
    let total = parseInt(document.getElementById("total").value);
    total += priceWithCommision;
    document.getElementById("total").value = total;
}