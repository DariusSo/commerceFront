import setCookie from "./Cookies";

export default async function registration(email, password, setIsRegistered){
    try{
        (async () => {
          const rawResponse = await fetch('http://localhost:8080/users', {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email : email,
              password: password,
              })
              
          });
          if(rawResponse.status == 200){
            setIsRegistered(true);
            
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            
            }
        })();
        
      }catch(err){
          console.error(err);
      }
}
export async function login(email, password) {
    try{
        (async () => {
          const rawResponse = await fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email : email,
              password: password,
              })
              
          });
          if(rawResponse.status == 200){
            const response = await rawResponse.text();
            console.log(response)
            setCookie("loggedIn", response, 1);
            window.location.reload();
            
            
            
            }
        })();
        
      }catch(err){
          console.error(err);
      }
}