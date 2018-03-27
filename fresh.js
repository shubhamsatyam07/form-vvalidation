function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.name;
var uadd = document.registration.add;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;

} function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{

document.getElementById("id1").innerHTML="inavalid username";

return false;
}
document.getElementById("id1").innerHTML="&#10004";
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{

document.getElementById("id2").innerHTML="inavalid PASSWORD";

return false;
}
document.getElementById("id2").innerHTML="&#10004";
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
document.getElementById("id3").innerHTML="&#10004";
return true;
}
else
{


document.getElementById("id3").innerHTML="inavalid name";
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
document.getElementById("id4").innerHTML="&#10004";
return true;
}
else
{

document.getElementById("id4").innerHTML="inavalid ADDRESS";
return false;
}
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{

document.getElementById("id5").innerHTML="invalid ";
return false;
}
else
{
document.getElementById("id5").innerHTML="&#10004";
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
document.getElementById("id6").innerHTML="&#10004";
return true;
}
else
{


return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
document.getElementById("id7").innerHTML="&#10004;";
return true;
}
else
{

document.getElementById("id7").innerHTML="invalid EMAIL";
return false;
}
} 
function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{

document.getElementById("id8").innerHTML="inavLID";
return false;
}
else
{

document.getElementById("id8").innerHTML="FORM SUBMITTED";
window.location.reload()
return true;
}
}

