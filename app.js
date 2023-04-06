console.log("code is is cdfsdaling");
let tokenWali = require("jsonwebtoken");
let Express = require("express");
let tokenWali = require("jsonwebtoken");
let cors = require("cors");
let app = Express();

app.use(cors());
app.use(Express.json());
let users = [];
// app.get("/abc", function (request, response) {
//   let users = [
//     {
//       name: "ali",
//     },
//     {
//       name: "Zunaira",
//     },
//     { name: "Hira" },
//   ];
//   response.json(users);
// });
app.post("/login", function (req, res) {
  let userMilgya = users.find(
    (user) => user.name == req.body.name && user.password == req.body.password
  );
  app.post("/session-check", async (req, res) => {
    tokenWali.verify(req.body.token, "apple sweet", function (err, dataObj) {
      if (dataObj) {
        let user = users.find((user) => user.id == dataObj.userKiId);

        res.json(user);
        console.log(true);
      }
    });
  });
  if (userMilgya) {
    tokenWali.sign(
      { userKiId: userMilgya.id },
      "apple sweet",
      { expiresIn: "2d" },
      function (err, myToken) {
        res.json({
          userMilgya,
          myToken,
        });
      }
    );
  }
});
app.get("/abc", function (req, res) {
  res.json(users);

  // res.end("m5 is chaling")
});
app.put("/user-update", function (req, res) {
  let userIndex = users.findIndex((user) => user.id == req.body.id);
  users[userIndex] = req.body;

  res.json({
    success: true,
  });
});
app.get("/user-lao", function (req, res) {
  let userMilgya = users.find((user) => user.id == req.query.id);
  res.json(userMilgya);
});

meriApp.post("/create-user", upload.array("pic", 20), function (req, res) {
  req.body.pic = req.files[0].originalname;

  users.push(req.body);
  console.log(req.body);
  res.end("data chal agya");
});
app.delete("/user-delete", function (req, res) {
  users = users.filter((user1) => user1.id != req.query.anc);

  res.json({ success: true });

  console.log(req.query.anc);
});
app.use(Express.static("/build"));
app.use(Express.static("/my-uploads"));
app.listen(3390, function () {
  console.log("code is is cdfsdaling");
});
