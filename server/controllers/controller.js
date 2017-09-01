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
    dbInstance.getCart(req.params.id)
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
  },
  rmCart:(req, res)=>
  {
    const dbInstance = req.app.get('db');
    dbInstance.rmCart(req.params.id)
      .then( (cart) => res.status(200).send(cart) )
      .catch( () => res.status(500).send() );
  },
  clearCart:(req, res)=>
  {
    const dbInstance = req.app.get('db');
    dbInstance.clearCart(req.params.id)
      .then( (cart) => res.status(200).send(cart) )
      .catch( () => res.status(500).send() );
  },
  addCartHistory:(req, res)=>
  {
    const dbInstance=req.app.get('db');
    dbInstance.addCartHistory(req.params.userID, req.params.pictureID, req.params.sizeID)
    .then((users)=>
    {
      res.status(200).send("it worked")
    })
    .catch((err)=>
      res.status(404).send(err));
  },
  getHistory:(req, res)=>
  {
    const dbInstance=req.app.get('db');
    dbInstance.getHistory(req.params.id)
    .then((cart)=>
    {
      res.status(200).send(cart)
    })
    .catch((err)=>
      res.status(404).send(err));
  },
  totalCart:(req, res)=>
  {
    const dbInstance=req.app.get('db');
    dbInstance.totalCart(req.params.id)
    .then((total)=>
    {
      res.status(200).send(total)
    })
    .catch((err)=>
      res.status(404).send(err));
  }
}
