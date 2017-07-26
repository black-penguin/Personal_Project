module.exports=
{
  getOne:(req, res, next)=>
  {
    const dbInstance = req.app.get('db');

    dbInstance.get_user(req.params)
  },
  getAll:(req, res)=>
  {
    const dbInstance = req.app.get('db');

    dbInstance.getImages()
      .then( (images) =>
      {
        res.status(200).send(images)
      })
      .catch((err) =>
        res.status(500).send(err));
  }
}
