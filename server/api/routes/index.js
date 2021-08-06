const { Router } = require("express");
const router = Router();

router.get("/api/items", (req, res) => {
  const page = req.query.q || 1;
  res.json({ page });
});

router.get("/api/items/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id });
});

module.exports = router;
