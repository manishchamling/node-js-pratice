const router = require("express").Router();

router.get("/", (req, res,) => {
  res.json({ data: "Hello World" });
});

router.post("/", (req, res, next) => {
  console.log(req?.body);
  res.json({ data: `${JSON.stringify(req.body)} ` });
});

router.put("/", (req, res, next) => {
  res.json({ data: "Hello World put" });
});

router.patch("/", (req, res, next) => {
  res.json({ data: "Hello World patch" });
});

router.delete("/", (req, res, next) => {
  res.json({ data: "Hello World delete" });
});

module.exports = router;
