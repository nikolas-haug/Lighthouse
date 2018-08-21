


export default {

HandleLoginError: (errorMessage) => {
    if(errorMessage==='Unauthorized'){
        return {loginError:{error:"Wrong username and or password!"}}
      }else if(errorMessage === 'Bad Request'){
        return {loginError:{error:"Missing credentials!"}}
      }else{
        return {loginError:{error:"Something went wrong! Check your credentials and try again."}}
      }
},



HandleSignupError: (errorMessage) => {
  if(errorMessage==='Unauthorized'){
      return {loginError:{error:"Wrong username and or password!"}}
    }else if(errorMessage === 'Bad Request'){
      return {loginError:{error:"Missing credentials!"}}
    }else{
      return {loginError:{error:"Something went wrong! Check your credentials and try again."}}
    }
}
 
};