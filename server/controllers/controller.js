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
  getOne:(req, res)=>
  {
    const dbInstance=req.app.get('db');
    console.log("cont", req.params.id);
    dbInstance.getImage(req.params.id)
      .then((image) => res.status(200).send(image))
      .catch((err) => res.status(404).send(err))
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
