const router = require("express").Router();
const { Category, Product } = require("../../models");
const { sequelize } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const allData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(allData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const idData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!idData) {
      res.status(404).json({ message: "No Category Found With That Id" });
      return;
    }

    res.status(200).json(idData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);

    return res.json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.json(categoryData);
  }catch(err){
    res.json(err)
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    include:[{model: Product}],
    where: {
      id: req.params.id,
    },
  });
  return res.json(categoryData);
});

module.exports = router;
