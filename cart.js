let cart = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];

cart[0][0] = "Java2 Programs";
cart[0][1] = "C++ Programs";
cart[0][2] = "C++ Programs";
cart[0][3] = "discrete math";
cart[0][4] = "FluidMechanics";
cart[0][5] = "Linear ALgebra";

cart[1][0] = "العادات الذرية";
cart[1][1] = "Rich Dad Poor Dad";
cart[1][2] = "قوة عقلك الباطن";
cart[1][3] = "Management of Principles";
cart[1][4] = "Law Topices In English";
cart[1][5] = "The History of English Law";

cart[2][0] = "Great Expectations";
cart[2][1] = "David Copperfield";
cart[2][2] = "Great Expectations";
cart[2][3] = "The Pickwick Papers";
cart[2][4] = "Oliver Twist";
cart[2][5] = "Little Dorrit";

function addToCart (idd){
    let R = (idd.charAt(1) - 1);
    let C = (idd.charAt(3) - 1);
    if(window.localStorage.getItem(idd+"cart") == "T"){
        window.alert(cart[R][C]+" is already added to your cart, to remove it from your cart open cart page");
    } else {
        window.localStorage.setItem(idd+"cart","T");
        window.alert(cart[R][C]+" add to cart");
        console.log(cart[R][C]+" add to cart");
        document.getElementById(idd+"CartBtn").src = "image-alaa/addedToCart.png";
    }
}


for (let R = 0; R < 3; R++) {
    for(let C = 0; C < 6; C++){
        if (window.localStorage.getItem("R"+(R+1)+"C"+(C+1)+"cart") == "T"){
            document.getElementById("R"+(R+1)+"C"+(C+1)+"CartBtn").src = "image-alaa/addedToCart.png";
        }
    }
}