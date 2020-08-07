// admin 
function shareIssue (){
    var name = document.getElementById("names").value;
    var lastOne = document.getElementById("lastName").value;
    var carModel = document.getElementById("carselect").value;
    var issues = document.getElementById("issue").value;
    var resolve = document.getElementById("fix").value;

    if(name==""||lastOne==""||carModel==""||issues==""||resolve=="") {
        alert("input data")
    } else {
        alert("Thank you for sharing "+name+",and helping others.")
    };
    

        
};
