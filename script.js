function myFunction() {                                               
    let text;
    let Price = document.getElementById("tv").value;

    switch (Price) {
        case "32 inch":
            text = "Woo! You have got 10% Discount. Now you have to PAY ONLY &#8377; 15,300 <sub><s>&#8377;17000</s></sub>";
            break;
        case "40 inch":
            text = "Woo! You have got 20% Discount. Now you have to PAY ONLY&#8377; 20,000  <sub><s>&#8377;25000</s></sub> ";
            break;
        case "55 inch":
            text = "Woo! You have got 35% Discount. Now you have to PAY ONLY&#8377; 24,500 <sub><s>&#8377;70,000</s></sub>";
            break;
        default:
            text = "";
    }
    document.getElementById("discount-rate").innerHTML = text;
}
                                                                                                

function paisavasul() {
    let number;
    var Budget = document.getElementById("rate").value;

    if (Budget < 15300) {
        number = "Sorry Sir! We dont have any TV under this Amount.<b> Minimum</b> amount is <b>&#8377;15300</b> "
    } else if (Budget >= 24500) {
        number = " Sir! We  have <b>32 , 40 & 55 INCH</b> TV under this Amount"
    } else if (Budget >= 20000) {
        number = " sir! We  have <b>32 and 40 INCH</b> TV under this Amount"
    } else if (Budget >= 15300) {
        number = " Sir! We  have <b>32 INCH</b> TV under this Amount"
    }

    document.getElementById("budget-tv").innerHTML = number;
}