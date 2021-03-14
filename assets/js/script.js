function validateInput(input){
    // console.log("new value = "+input.value);
    // console.log("old value = "+input.oldvalue);

    // console.log(event.target.name);
    let price= parseInt(input.value);
    input.value = price;
    let oldprice = parseInt(input.oldvalue);

    //set price with commission
    let ns = event.target.nextSibling.nextSibling;
    let commission = parseInt(document.getElementById("commission").value);
    let priceWithCommision = price+(price * commission / 100);
    //console.log("Price with Commision ="+priceWithCommision);
    ns.value = priceWithCommision;
    
    //set total
    let total = parseInt(document.getElementById("total").value);
    total += priceWithCommision;
    total -= (oldprice+(oldprice*commission/100));
    document.getElementById("total").value = total;

    //add upgrades
    let upgrades = document.getElementById("upgrades").value;
    upgrades+=event.target.name+", ";
    document.getElementById("upgrades").value = upgrades;
}

function submitMEOS(){
    let meos = document.getElementById("meosString").value;
    //console.log(meos);
    let arr = meos.split("\n");
    //console.log(arr);
    let total = parseInt(document.getElementById("total").value);
    let commission = parseInt(document.getElementById("commission").value);
    let profit = (total*commission)/(100+commission);
    let upgradeSet = new Set(document.getElementById("upgrades").value.split(", "));
    let upgrades = Array.from(upgradeSet).join(", ");
    //console.log(upgrades);
    
    // generate mechanic log
    var result ="Name =" + arr[2].split(":")[1] +"\n";
    result += "Gadi no. =" + arr[0].split(":")[1]+"\n";
    result += "Upgrades =" + upgrades+"\n";
    result += "Total Costing=" + total+"\n";
    result += "My Cut ="+ profit;
    //console.log(result);
    document.getElementById("mechanicLog").value = result;
}

function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("mechanicLog");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Mechanic Log copied to clipboard");
  }