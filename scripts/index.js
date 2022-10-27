"use strict";

window.onload = function() 
{
    //total button
    const totalBtn = document.getElementById("totalBtn");
    totalBtn.onclick = onTotalBtnClicked;
}


//
function onTotalBtnClicked()
{
    //initialized variables
    let days;
    let tollTagCost = 0;
    let gpsCost = 0;
    let roadsideCost = 0;   
   
    
    //grabs days value from form and puts it into carRental formula
    days = Number(document.getElementById("numberField").value);
    let carRental = days * 29.99;

    document.getElementById("rental").innerHTML = "Car rental: $" + carRental;
    
    //gps checkbox
    let gps = document.getElementById("gpsBtn").checked;
    if (gps) {
        gpsCost = 2.95
    }
    else {
        gpsCost = 0
    }

    //roadside checkbox
    let roadside = document.getElementById("roadsideBtn").checked;
    if (roadside) {
        roadsideCost = 2.95
    }
    else {
        roadsideCost = 0
    }

    //tolltag checkbox
    let tollTag = document.getElementById("tollTagBtn").checked;
    if (tollTag) {
        tollTagCost = 3.95
    }
    else {
        tollTagCost = 0
    }

    // options formula and print statement
    let options = Number((days * (gpsCost + roadsideCost + tollTagCost)).toFixed(2));
    document.getElementById("options").innerHTML = "Options: $" + options.toFixed(2);
    
    // radio buttons
    let yesRadioBtn = document.getElementById("yes").checked; 
    if (yesRadioBtn) {
        let surcharge = carRental * .3
        let total = (carRental) + options + surcharge
        document.getElementById("under").innerHTML = "Under 25 surcharge: $" + (carRental * .3).toFixed(2);
        document.getElementById("total").innerHTML = "Total due: $" + total.toFixed(2);
    }


    else {
        let total = carRental + options
        document.getElementById("under").innerHTML = "Under 25 surcharge: $" + 0;
        document.getElementById("total").innerHTML = "Total due: $" + total.toFixed(2);
    }



    

    return onTotalBtnClicked;

}