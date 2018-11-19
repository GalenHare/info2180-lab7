window.addEventListener('load',start);
function start(){
    let button = document.getElementById("lookup");
    button.addEventListener("click",lookup);
}

function lookup(){
    let xmlhttp = new XMLHttpRequest();
    let url = "https://info2180-lab7-galenhare.c9users.io/world.php?country="+countryVal()+"&all=" + checkboxVal();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let result = this.responseText;
            document.getElementById("result").innerHTML=result;
            let alertResult = result.replace(/<ul>/g, "").replace(/<li>/g, "").replace(/<ul>/g, "").replace(/<\/ul>/g, "").replace(/<\/li>/g, "\n");
            alert(alertResult);
        }
    };
    xmlhttp.open('GET', url);
    xmlhttp.send();
}

function checkboxVal(){
    let checkbox = document.getElementById("all");
    return checkbox.checked;
}
function countryVal(){
    let country=document.getElementById("country");
    return country.value;
}

