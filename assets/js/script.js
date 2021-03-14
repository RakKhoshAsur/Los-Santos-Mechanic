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
    let total = parseInt(document.getElementById("total").value);
    let commission = parseInt(document.getElementById("commission").value);
    let profit = (total*commission)/(100+commission);

    // generate mechanic log
    var result ="Name =" + arr[2].split(":")[1] +"\n";
    result += "Gadi no. =" + arr[0].split(":")[1]+"\n";
    result += "Upgrades =" + document.getElementById("upgrades").value+"\n";
    result += "Total Costing=" + total+"\n";
    result += "My Cut ="+ profit;
    console.log(result);
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