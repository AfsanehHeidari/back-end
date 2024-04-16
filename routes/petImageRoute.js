const BASE_URI = "/api/v1";

const express = require('express');
const router = express.Router();
const {onGetPetImage, onUpdatePetImages, searchOneImage, likesOneImage } = require('../controllers/petImageController');

//Create category record in the pet_category table
//router.post(`${BASE_URI}/pet-category`, onPetCategoryCreate); 

//Find category record from pet_category table (id will be passed as a path param)
router.get(`${BASE_URI}/pet-image/:id`, onGetPetImage); 

//Find all category records from pet_category table
//router.get(`${BASE_URI}/pet-category`, onGetPetCategories); 

//Update category record in pet_category table (id will be passed as a path param)
router.patch(`${BASE_URI}/pet-image/:id`, onUpdatePetImages); 

//Delete category record from pet_category table (id will be passed as a path param)
//router.delete(`${BASE_URI}/pet-category/:id`, onDeletePetCategories)

router.get(`${BASE_URI}/pet-image/:id`, searchOneImage);
router.patch(`${BASE_URI}/pet-image/:id`, likesOneImage);

module.exports = router;

