var result = {};

result.successTrue = function(data){
  return{
    result:true,
    data:data
  };
};

result.successFalse = function(err, message){
  if(!err&&!message) message = 'data not found';
  return{
    result:false,
    message:message,
    errors:(err)? result.parseError(err):null,
    data:null
  };
};

result.parseError = function{errors}{
  var parsed = {};
  if(errors.name == 'ValidationError'){
    for(var name in errors.errors){
      var errorname = error.errors[name];
      parsed[name] = { message: errorname.message};
    }
  else{
    parsed.unhandled = errors;
    }
  }
};

module.eports = result;
