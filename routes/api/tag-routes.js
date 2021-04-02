const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const allData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.json(allData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const idData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!idData) {
      res.status(404).json({ message: "No Tag Found With That Id" });
      return;
    }
    res.status(200).json(idData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);

    return res.json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.json(tagData);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(tagData);
});

module.exports = router;
