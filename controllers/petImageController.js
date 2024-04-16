const { findOneImage, updateImage,find2OneImage, update2Image} = require('../services/petImageService')


const onGetPetImage = (async (req, res) => {
    const petImageId = req.params['id'];
    //check category id is available as a path param
    if (!petImageId){
        return res.status(400).send('Invalid request, pet image ID required.');  
    }
    
    try{
        //get pet category details (single record)
        const result = await findOneImage(petImageId);
        res.status(200).send(result);  
    } catch (error) {
        res.status(400).send(error.message);  
    }
    return;
})     

// const onGetPetCategories= (async (req, res) => {
//     try{
//         //get details of all the pet categories
//         const result = await findCategories();
//         res.status(200).send(result);  
//     } catch (error) {
//         res.status(400).send(error.message);  
//     }
//     return;
// }) 

const onUpdatePetImages= (async (req, res) => {
    const petImageId = req.params['id'];
    //check category id is available as a path param
    if (!petImageId){
        return res.status(400).send('Invalid request, pet image ID required.');  
    }

    const requestBody = req.body;
    //check description is available in the requesting payload
    if (!requestBody.hasOwnProperty('likes')){
        return res.status(400).send('Invalid request, description required in payload.');  
    }

    try{
        //update description for the relevant category id 
        const result = await updateImage(petImageId,requestBody.likes);
        res.status(result===undefined?404:200).send(result);  
    } catch (error) {
        res.status(400).send(error.message);  
    }
    return;
}) 

// const searchOneImage = (async (req, res) => {
//     const petImageId = req.params['id'];
//     //check category id is available as a path param
//     if (!petImageId){
//         return res.status(400).send('Invalid request, pet image ID required.');  
//     }
    
//     try{
//         //get pet category details (single record)
//         const result = await find2OneImage(petImageId);
//         res.status(200).send(result);  
//     } catch (error) {
//         res.status(400).send(error.message);  
//     }
//     return;
// })    

const searchOneImage = (async (req, res) => {
    const requestBody = req.body;
    //check description is available in the requesting payload
    if (!requestBody.hasOwnProperty('description')){
        return res.status(400).send('Invalid request, description required in payload.');  
    }
    
    try{
        //save pet category
        const result = await createImage(requestBody.description);
        res.status(200).send(result);  
    } catch (error) {
        res.status(400).send(error.message);  
    }
    return;
})     


const likesOneImage= (async (req, res) => {
    const petImageId = req.params['id'];
    //check category id is available as a path param
    if (!petImageId){
        return res.status(400).send('Invalid request, pet image ID required.');  
    }

    const requestBody = req.body;
    //check description is available in the requesting payload
    if (!requestBody.hasOwnProperty('likes')){
        return res.status(400).send('Invalid request, description required in payload.');  
    }

    try{
        //update description for the relevant category id 
        const result = await update2Image(petImageId,requestBody.likes);
        res.status(result===undefined?404:200).send(result);  
    } catch (error) {
        res.status(400).send(error.message);  
    }
    return;
}) 

module.exports = {onGetPetImage, onUpdatePetImages, searchOneImage, likesOneImage};