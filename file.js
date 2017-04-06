///////////////////////////////////////////////////
///// Funzioni per il form di iscrizione
//////////////////////////////////////////////////

function selectName(formField,fieldLabel)
{
	var result = true;
	
	if ((formField.value == "") || (formField.value == "undefined"))
	{
		alert('Il campo "' + fieldLabel +'" è obbligatorio.');
		formField.focus();
		result = false;
	}
	
	return result;
}

function selectSurname(formField, fieldLabel)
{
    var result = true;
    if ((formField.value == "") || (formField.value == "undefined")) 
    {
        alert('Il campo "' + fieldLabel +'" è obbligatorio.');
        formField.focus();
        result = false;
    }
    return result;
}

function selectEmail(formField)
{
    var result = true;
    var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;

    if (!email_reg_exp.test(formField.value) || (formField.value == "") || (formField.value == "undefined")) 
    {
        alert("Inserire un indirizzo email corretto: nome@dominio.nnn");
        formField.select();
        return false;
    }
    return result;
}


function passwordIns(formField, fieldLabel)
{
    var result = true;
    if(formField.value == "")
        {
            alert('Il campo "'+ fieldLabel +'" è obbligatorio.')
            formField.focus();
            result = false;
        }
     return result;
}

function controlPsw(formField)
{
    var result = true;
    var password = document.form1.password.value;
    
    if(formField.value == "")
    {
        alert("Il campo deve contenere la conferma della password inserita.")
        formField.focus();
        result = false;
    }
    
    else if (formField.value != password) 
    {
        alert("La password confermata è diversa da quella scelta, controllare.");
        formField.value = "";
        formField.focus();
        result = false;
    }
    return result;
}

function birthDate(formField)
{
    var result = true;
    
    if (formField.value.substring(2,3) != "/" || formField.value.substring(5,6) != "/" || isNaN(formField.value.substring(0,2)) || isNaN(formField.value.substring(3,5)) || isNaN(formField.value.substring(6,10))) 
    {
        alert("Inserire nascita in formato GG/MM/AAAA");
        formField.value = "";
        formField.focus();
        return false;
    } 
    else if (formField.value.substring(0,2) > 31)
    { 
        alert("Impossibile utilizzare un valore superiore a 31 per i giorni");
        formField.value = "";
        formField.select();
        return false;
    } 
    else if (formField.value.substring(3,5) > 12) 
    {
        alert("Impossibile utilizzare un valore superiore a 12 per i mesi");
        formField.value = "";
        formField.focus();
        return false;    
    }
    else if (formField.value.substring(6,10) < 1900) 
    {
        alert("Impossibile utilizzare un valore inferiore a 1900 per l'anno");
        formField.value = "";
        formField.focus();
        return false;
    }
    return result;
}

function selectCity(formField, fieldLabel)
{
    var result = true;
    
    if ((formField.value == "") || (formField.value == "undefined"))
    {
        alert("Il campo '"+ fieldLabel +"' è obbligatorio.");
        formField.focus();
        result = false;
    }
    return result;
}


function validateForm(x)
{
	if (!selectName(x.name,"Nome"))
		return false;
    
    if (!selectSurname(x.surname,"Cognome"))
        return false;
    
    if (!birthDate(x.date))
        return false;
    
	if (!selectEmail(x.email))
		return false;
    
    if (!passwordIns(x.password, "Password"))
        return false;
    
    if (!controlPsw(x.conferma))
        return false;

    if (!selectCity(x.citta, "Città"))
        return false;
	
	return true;
}

////////////////////////////////////////////////////////////
// Funzioni per il form di login
/////////////////////////////////////////////////////////////
function loginEmail(formField)
{
    var result = true;
    var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;

    if (!email_reg_exp.test(formField.value) || (formField.value == "") || (formField.value == "undefined")) 
    {
        alert("Inserire email: nome@dominio.nnn");
        formField.value = "";
        formField.focus();
        return false;
    }
    return result;
}

function loginPassword(formField)
{
    var result = true;
    if(formField.value == "")
        {
            alert('Inserire password.')
            formField.focus();
            result = false;
        }
     return result;
} 

function insertLogin(z)
{
    if (!loginEmail(z.emaillog))
        return false;
    
    if(!loginPassword(z.passwordlog))
        return false;
    
    return true;
}


////////////////////////////////////////////////////////////
// Funzioni che si attivano nel campo di login sulla barra di navigazione
/////////////////////////////////////////////////////////////
function inputEmail(formField)
{
    var result = true;
    var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;

    if (!email_reg_exp.test(formField.value) || (formField.value == "") || (formField.value == "undefined")) 
    {
        alert("Inserire email: nome@dominio.nnn");
        formField.value = "";
        formField.focus();
        return false;
    }
    return result;
}
 
function inputPassword(formField)
{
    var result = true;
    if(formField.value == "")
        {
            alert('Inserire password.')
            formField.focus();
            result = false;
        }
     return result;
}  

function validateLogin(y)
{
    if (!inputEmail(y.inpemail))
        return false;
    
    if(!inputPassword(y.inppassword))
        return false;
    
    return true;
}