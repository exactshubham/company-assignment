exports.isValidEmail =  (value) =>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/.test(value)
};

exports.isValidString =(value) =>{
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

exports.isValidName = (name) =>{
 return /^[a-zA-Z ]+$/.test(name)  
}

exports.isValidMobile =  (mobile) =>{
return /^[0]?[6789]\d{9}$/.test(mobile)
}

exports.isValidDate= (date)=>{
   return /^([0-9]{4}[-][0-9]{2}[-][0-9]{2})$/.test(date)
}
