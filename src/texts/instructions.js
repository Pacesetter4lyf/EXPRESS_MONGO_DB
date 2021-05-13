module.exports = 

    `
    post('/persons'): This route is used to create a new person document. It takes the request body, parses it and adds it to the database
    
    get('/persons') : this route is used to display all of the persons in the collection.

    get('/persons/:id'): This route fetches a single document from the database. The Id of the fetched person is specified in the params

    put('/persons/:id'): This route is used to edit a single document whose ID is specified from the collection. The changes to be edited are passed as json from the request body

    delete('/persons/:id'): This route deletes a single document from the collection. 

    get('*'): this is the default route that shows an error page when all other route are not hit


    https://morning-island-69253.herokuapp.com
    https://github.com/Pacesetter4lyf/EXPRESS_MONGO_DB`
