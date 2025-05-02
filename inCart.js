for (let R = 0; R < 3; R++) {
    for (let C = 0; C < 6; C++) {
        if (window.localStorage.getItem("R" + (R + 1) + "C" + (C + 1) + "cart") == "T") {
            console.log("R" + (R + 1) + "C" + (C + 1) + " is in");
            document.getElementById("R" + (R + 1) + "C" + (C + 1)).style.display = "block";
        }
    }
}

function clearAll() {
    let itemsIn = 0;
    for (let R = 0; R < 3; R++) {
        for (let C = 0; C < 6; C++) {
            if (window.localStorage.getItem("R" + (R + 1) + "C" + (C + 1) + "cart") == "T") {
                itemsIn++;
            }
        }
    }
    if (itemsIn != 0) {
        let conf = window.confirm("Are you want to clear all items in your cart?");
        if (conf) {
            for (let R = 0; R < 3; R++) {
                for (let C = 0; C < 6; C++) {
                    window.localStorage.removeItem("R" + (R + 1) + "C" + (C + 1) + "cart");
                    document.getElementById("R" + (R + 1) + "C" + (C + 1)).style.display = "none";
                }
            }
        }
    } else {
        window.alert("Your cart is empty");
    }
}

function removeFromCart (idd){
    let conf = window.confirm("Are you want to remove one book from your cart?");
    if (conf) {
        window.localStorage.removeItem(idd+"cart");
        document.getElementById(idd).style.display = "none";
    }
    
}