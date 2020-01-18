const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        // Buscar todos os devs num raio de 10km e um filtro das suas tecnologias
        const { latitude, longitude, techs } = request.query;
        console.log(request.query);

        const techsArray = techs.split(',').map(tech => tech.trim());

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json(devs);
    }
}