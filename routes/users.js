module.exports = app => {
     const Users = app.db.models.Users;  
     app.route("/user")
     .all(app.auth.authenticate())
     /**
 * @api {get} /user Return the authenticated user's data
 * @apiGroup User
 * @apiHeader {String} Authorization Token of authenticated user
 * @apiHeaderExample {json} Header
 * {"Authorization": "JWT xyz.abc.123.hgf"}
 * @apiSuccess {Number} id User id
 * @apiSuccess {String} name User name
 * @apiSuccess {String} email User email
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 * "id": 1,
 * "name": "John Connor",
 * "email": "john@connor.net"
 * }
 * @apiErrorExample {json} Find error
 * HTTP/1.1 412 Precondition Failed
 */
     .get((req, res) => {
      Users.findById(req.user.id, {
       attributes: ["id", "name", "email"]
     })
       .then(result => res.json(result))
       .catch(error => {
       res.status(412).json({msg: error.message});
       });
     })

     /**
 * @api {delete} /user Deletes an authenticated user
 * @apiGroup User
 * @apiHeader {String} Authorization Token of authenticated user
 * @apiHeaderExample {json} Header
 * {"Authorization": "JWT xyz.abc.123.hgf"}
 * @apiSuccessExample {json} Success
 * HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 * HTTP/1.1 412 Precondition Failed
     .delete((req, res) => {
       Users.destroy({where: {id: req.user.id} })
       .then(result => res.sendStatus(204))
       .catch(error => {
        res.status(412).json({msg: error.message});
     });
 });
 */
 app.post("/users", (req, res) => {
   Users.create(req.body)
   .then(result => res.json(result))
   .catch(error => {
   res.status(412).json({msg: error.message});
   });
   });
 
     app.get("/users/:id", (req, res) => {
     Users.findById(req.params.id, {
     attributes: ["id", "name", "email"]
     })
     .then(result => res.json(result))
     .catch(error => {
    res.status(412).json({msg: error.message});
    });
    });  
    app.delete("/users/:id", (req, res) => {
    Users.destroy({where: {id: req.params.id} })
    .then(result => res.sendStatus(204))
   .catch(error => {
    res.status(412).json({msg: error.message});
    });
   });
   app.post("/users", (req, res) => {
    Users.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
    res.status(412).json({msg: error.message});
   });
 });
 };
