const { imageSchema } = require("../models")

const addImage = (file)=>{

    const data = file.originalname
   

    const image = new imageSchema({
        imageName:data
    })

    return image.save(file)


}


module.exports = {addImage}