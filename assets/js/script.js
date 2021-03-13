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
    
    //set total
    let total = parseInt(document.getElementById("total").value);
    total += priceWithCommision;
    document.getElementById("total").value = total;

    //add upgrades
    let upgrades = document.getElementById("upgrades").value;
    upgrades+=event.target.name+", ";
    document.getElementById("upgrades").value = upgrades;
}

function submitMEOS(){
    let meos = document.getElementById("meosString").value;
    console.log(meos);
    let arr = meos.split("\n");
    console.log(arr);
    var result ="Name =" + arr[2].split(":")[1] +"\n";
    result += "Gadi no. =" + arr[0].split(":")[1]+"\n";
    result += "Upgrades =" + document.getElementById("upgrades").value+"\n";
    result += "Total Costing=" + document.getElementById("total").value+"\n";
    result += "My Cut ="+ parseInt(document.getElementById("total").value)*100/(100+parseInt(document.getElementById("commission").value));
    console.log(result);
    document.getElementById("mechanicLog").value = result;
}