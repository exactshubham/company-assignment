const fruitsAndVegetables = [  { name: "Apple", rate: 1.5 },  { name: "Banana", rate: 2 },  { name: "Carrot", rate: 0.75 }];

const getAllFruitsAndVegetables = (req, res) => {
  res.send(fruitsAndVegetables);
};

const getRate = (req, res) => {
  const fruitOrVegetable = fruitsAndVegetables.find(
    fv => fv.name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!fruitOrVegetable) {
    return res.status(404).send({ error: "Fruit or vegetable not found" });
  }

  res.send({ name: fruitOrVegetable.name, rate: fruitOrVegetable.rate });
};

const calculateRate = (req, res) => {
  const fruitOrVegetable = fruitsAndVegetables.find(
    fv => fv.name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!fruitOrVegetable) {
    return res.status(404).send({ error: "Fruit or vegetable not found" });
  }

  res.send({ totalRate: fruitOrVegetable.rate * req.body.weight });
};

module.exports = {
  getAllFruitsAndVegetables,
  getRate,
  calculateRate
};
