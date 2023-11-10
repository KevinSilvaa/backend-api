const knex = require('../database/knex');

class TagsController {
    
    // *Listar todas as tags de um determinado usuário
    async index(request, response) {
        const user_id = request.user.id;

        const tags = await knex("tags")
        .where({ user_id })
        .groupBy("name");
        
        return response.json(tags);
    }
}

module.exports = TagsController;
