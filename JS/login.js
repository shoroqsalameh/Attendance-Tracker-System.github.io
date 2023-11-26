const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function onclick_function() {
    event.preventDefault(); //preven the form to work in the defalut way
    // Get the entered email and password from the input fields
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();


    // Define the admin admin and password
    var adminEmail = "abood@admin.com";
    var adminPassword = "123456";

    var calert=document.getElementById('alret');
    var cont="";
    flag=false;

    if (email === '' && password === '')
    {   //empty email and password
        cont="Empty eamil and password";
        flag=true;
    }
    else if(email.length>0 && password==='')
    {
        //epmty password just
        cont="Empty password";
        flag=true;
    }
    else if(email==='' && password.length>0)
    {
        //Empty email just
        cont="Empty email";
        flag=true;
    }
    else 
    {
        //not empty
        //checking..
        if(email===adminEmail && password===adminPassword)
        {
            //admin
            window.location.assign('Add-Traineers.html');
          
            window.sessionStorage.setItem(adminEmail,adminPassword);
        }
        else 
        {
            //not an admin->user,someOne else 
            // window.location.assign('');
            //check if the email exist
            if(isKeyExist(email))
            {
                //email is found
                //check the pass
                if(correctPassword(email,password))
                {
                    //user
                    window.sessionStorage.setItem(email,password);
                    window.location.assign('news.html');
                }
                else
                {
                    flag=true;
                    cont="Wrong Password";
                }

            }
            else
            {
                //email is not found
                flag=true;
                cont="Wrong Email";
            }

        }
    }

    if(flag)
    {
        calert.innerHTML=cont;
    }
}

//check if email exist
function isKeyExist(key)
{
    return window.localStorage.getItem(key) !==null;
}

//check if password is correct
function correctPassword(key,value)
{
    if(window.localStorage.getItem(key)==value)
    return true;
    return false;
}

