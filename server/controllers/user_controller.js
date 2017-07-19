module.exports=
{
  getOne:(req, res, next)=>
  {
    const dbInstance = req.app.get('db');

    dbInstance.get_user(req.params)
  }
}
