
module.exports = app => {
    const Contacts = app.db.models.Contacts;
    app.route("/contacts")
      .all(app.auth.authenticate())
      .get((req, res) => {
        Contacts.findAll({
            where: { user_id: req.user.id }
        })
       .then(result => res.json(result))
       .catch(error => {
        res.status(412).json({msg: error.message});
        });
     })
     .post((req, res) => {
        req.body.user_id = req.user.id;
        Contacts.create(req.body)
         .then(result => res.json(result))
         .catch(error => {
         res.status(412).json({msg: error.message});
        });
     });
    app.route("/contacts/:id")
     .all(app.auth.authenticate())
     .get((req, res) => {
     // "/tasks/1": Find a task
     Contacts.findOne({
        where: {
             id: req.params.id,
             user_id: req.user.id
     }})
      .then(result => {
      if (result) {
       res.json(result);
     } else {
      res.sendStatus(404);
     }
     })
     .catch(error => {
     res.status(412).json({msg: error.message});
     });
     })
     .put((req, res) => {
     // "/tasks/1": Update a task
     Contacts.update(req.body, {
        where: {
             id: req.params.id,
             user_id: req.user.id
     }})
     .then(result => res.sendStatus(204))
     .catch(error => {
        res.status(412).json({msg: error.message});
     });
     }).delete((req, res) => {
     // "/tasks/1": Delete a task
     Contacts.destroy({
        where: {
            id: req.params.id,
            user_id: req.user.id
     }})
     .then(result => res.sendStatus(204))
     .catch(error => {
     res.status(412).json({msg: error.message});
     });
     });
     };