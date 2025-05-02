function addToFav (idd){
    let R = (idd.charAt(1) - 1);
    let C = (idd.charAt(3) - 1);
    if(window.localStorage.getItem(idd+"Fav") == "T"){
        window.localStorage.removeItem(idd+"Fav");
        document.getElementById(idd+"FavBtn").src = "image-alaa/EmptyHeart.png";
    } else {
        window.localStorage.setItem(idd+"Fav","T");
        document.getElementById(idd+"FavBtn").src = "image-alaa/redHeart.png";
    }
}


for (let R = 0; R < 3; R++) {
    for(let C = 0; C < 6; C++){
        if (window.localStorage.getItem("R"+(R+1)+"C"+(C+1)+"Fav") == "T"){
            document.getElementById("R"+(R+1)+"C"+(C+1)+"FavBtn").src = "image-alaa/redHeart.png";
        }
    }
}