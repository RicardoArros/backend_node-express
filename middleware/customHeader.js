const customHeader = (req, res, next) => {
  console.log(req.body);
  console.log(req.headers);

  try {
    const apikey = req.headers.api_key;
    
    if(apikey === 'ricardo') {

      next();
      
    } else {
      res.status(403);
      res.send({ error: 'api key no es correcta' });  
    }


  } catch (e) {
    res.status(403);
    res.send({ error: 'Ocurrió un error en el custom header' });
  }

};

module.exports = customHeader;
