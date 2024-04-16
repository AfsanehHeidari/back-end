const { queryDb } = require('../repository/queryDatabase');



//Find category record from pet_category table
const findOneImage = (async (id) => {
    try{
        const dbResult = await queryDb('select id_pet_image from "pet" p inner join "pet_image" pi on p.id_pet = pi.id_pet_image where id_pet_category=$1', [id]) 
        const resultRows =dbResult.rows ? dbResult.rows : []
        return !resultRows? {}: resultRows[0];
    } catch (error) {
        throw new Error(error.message);
    }
})


//Update category record in pet_category table
const updateImage = (async (id, likes) => {
    try{
        const dbResult = await queryDb('update "pet" set likes=$1 where id_pet=$2 returning id_pet, likes', [likes, id]) 
        const resultRows =dbResult.rows ? dbResult.rows : []
        return !resultRows? {}: resultRows[0];
    } catch (error) {
        throw new Error(error.message);
    }
})


const find2OneImage = (async (id) => {
    try{
        const dbResult = await queryDb('select id_pet_image from "pet" p inner join "pet_image" pi on p.id_pet = pi.id_pet_image where id_pet_category=$1', [id]) 
        const resultRows =dbResult.rows ? dbResult.rows : []
        return !resultRows? {}: resultRows[0];
    } catch (error) {
        throw new Error(error.message);
    }
}) 

const update2Image = (async (id, likes) => {
    try{
        const dbResult = await queryDb('update "pet" set likes=$1 where id_pet=$2 returning id_pet, likes', [likes, id]) 
        const resultRows =dbResult.rows ? dbResult.rows : []
        return !resultRows? {}: resultRows[0];
    } catch (error) {
        throw new Error(error.message);
    }
})

module.exports = {findOneImage,updateImage, find2OneImage, update2Image};