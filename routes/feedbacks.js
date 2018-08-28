
module.exports = app => {
    const Feedbacks = app.db.models.Feedbacks;
    app.route("/feedbacks")
    .all(app.auth.authenticate())
      .get((req, res) => {
        Feedbacks.findAll({})
       .then(result => res.json(result))
       .catch(error => {
        res.status(412).json({msg: error.message});
        });
     })
     .post((req, res) => {
        Feedbacks.create(req.body)
         .then(result => res.json(result))
         .catch(error => {
         res.status(412).json({msg: error.message});
        });
     });
    app.route("/feedbacks/:id")
    .all(app.auth.authenticate())
     .get((req, res) => {
     // "/tasks/1": Find a task
     Feedbacks.findOne({where: req.params})
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
     Feedbacks.update(req.body, {where: req.params})
     .then(result => res.sendStatus(204))
     .catch(error => {
        res.status(412).json({msg: error.message});
     });
     }).delete((req, res) => {
     // "/tasks/1": Delete a task
     Feedbacks.destroy({where: req.params})
     .then(result => res.sendStatus(204))
     .catch(error => {
     res.status(412).json({msg: error.message});
     });
     });
     };