module.exports=
{
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
  },
  getUsers:(req, res)=>
  {
    const dbInstance=req.app.get('db');

    dbInstance.user()
      .then((users)=>
      {
        res.status(200).send(users)
      })
      .catch((err)=>
        res.status(404).send(err));
  },
}
