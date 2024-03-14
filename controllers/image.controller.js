const { imageService } = require("../services");

const addImage = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  // const file =req.file
  // const image = await imageService.addImage(file)

  // res.status(200).json({
  //     message:"image uploaded success",
  //     res:image
  // })
};

module.exports = { addImage };
