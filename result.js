let Rarr = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];

Rarr[0][0] = "Java2 Programs";
Rarr[0][1] = "C++ Programs";
Rarr[0][2] = "C++ Programs";
Rarr[0][3] = "discrete math";
Rarr[0][4] = "FluidMechanics";
Rarr[0][5] = "Linear ALgebra";

Rarr[1][0] = "العادات الذرية";
Rarr[1][1] = "Rich Dad Poor Dad";
Rarr[1][2] = "قوة عقلك الباطن";
Rarr[1][3] = "Management of Principles";
Rarr[1][4] = "Law Topices In English";
Rarr[1][5] = "The History of English Law";

Rarr[2][0] = "Great Expectations";
Rarr[2][1] = "David Copperfield";
Rarr[2][2] = "Great Expectations";
Rarr[2][3] = "The Pickwick Papers";
Rarr[2][4] = "Oliver Twist";
Rarr[2][5] = "Little Dorrit";

let searchNo;
let NoFound = 0;

function searchh(event) {
    event.preventDefault();
    if (searchNo != 0){
        document.getElementById("notfind").style.display="none";
        searchNo = 0;
        NoFound = 0;
        resetView();
    }
    searchNo++;
    let isFound = false;
    let idd = "";
    let input = document.searchForm.searchInput.value.toLowerCase().trim();
    for (let R = 0; R < 3; R++) {
        for(let x = 0; x < 6; x++){
            if ((((Rarr[R][x]).toLowerCase()).includes(input))){
                NoFound++;
                console.log("Found in "+Rarr[R][x]);
                idd = "R"+(R+1)+"C"+(x+1);
                document.getElementById(idd).style.display = "inline-block";
                found = true;
            }
        }
    }
    if(NoFound == 0){
        document.getElementById("notfind").style.display="block";
        document.getElementById("notfind").innerHTML="No results for \" <b>"+document.searchForm.searchInput.value.trim()+"</b> \"";
    }
}

function resetView(){
    for (let R = 0; R < 3; R++) {
        for(let x = 0; x < 6; x++){
            idd = "R"+(R+1)+"C"+(x+1);
            document.getElementById(idd).style.display = "none";
        }
    }
}