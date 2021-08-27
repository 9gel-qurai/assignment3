function formValidation()
{
var name = document.registration.name;
var number = document.registration.number;
var email = document.registration.email;
var enquiries = document.registration.enquiries;


{
if(allLetter(name))
{
if(allnumeric(number))
{
if(ValidateEmail(email))
{
if(validsex(enquiries))
{
}
} 
}
} 
}

return false;
}
