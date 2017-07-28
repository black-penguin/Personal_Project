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
    dbInstance.getImage(req.params.id)
      .then((image) => res.status(200).send(image))
      .catch((err) => res.send(err));
  },
  getSize:(req, res)=>
  {
    const dbInstance=req.app.get('db');
    dbInstance.getSize(req.params.id)
      .then((size)=>res.status(200).send(size))
      .catch((err)=>res.send(err));
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
  getCart:(req, res)=>
  {
    const dbInstance=req.app.get('db');

    dbInstance.getCart()
    .then((cart)=>
    {
      res.status(200).send(cart)
    })
    .catch((err)=>
      res.status(404).send(err));
  },
  addToCart:(req, res)=>
  {
    const dbInstance=req.app.get('db');

    dbInstance.addCart(req.params.userID, req.params.pictureID, req.params.SizeID)
    .then((users)=>
    {
      res.status(200).send("it worked")
    })
    .catch((err)=>
      res.status(404).send(err));
  }
}
