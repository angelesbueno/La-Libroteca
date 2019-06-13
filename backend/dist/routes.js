"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const ItemsController_1 = require("./controllers/ItemsController");
const models = {};
const validationService = new tsoa_1.ValidationService(models);
function RegisterRoutes(app) {
    app.get('/api/v1/items/searchUser/:user', function (request, response, next) {
        const args = {
            user: { "in": "path", "name": "user", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.searchUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/searchEmail/:email', function (request, response, next) {
        const args = {
            email: { "in": "path", "name": "email", "required": true, "dataType": "string" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.searchEmail.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/newUser', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.newUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/checkUser', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.checkUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/getUser', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.getUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/checkToken', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.checkToken.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/checkReadedBook', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.checkReadedBook.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/addLeido', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.addLeido.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/takeAllReadedBooks', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.takeAllReadedBooks.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/takeAllFavsBooks', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.takeAllFavsBooks.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/borrarLeido/:idLibro', function (request, response, next) {
        const args = {
            idLibro: { "in": "path", "name": "idLibro", "required": true, "dataType": "double" },
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.deleteReadedBook.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/modificarNotaLibroLeido', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.modificarNotaLibroLeido.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/modificarComentariosLibroLeido', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.modificarComentariosLibroLeido.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/addFavorito/:id', function (request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.addFavorito.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/borrarFavorito/:idLeido', function (request, response, next) {
        const args = {
            idLeido: { "in": "path", "name": "idLeido", "required": true, "dataType": "double" },
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.borrarFavorito.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post('/api/v1/items/updateUser', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.updateUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/api/v1/items/allUsers', function (request, response, next) {
        const args = {
            req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new ItemsController_1.ItemsController();
        const promise = controller.allUsers.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode;
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.set(name, headers[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            if (data || data === false) {
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch((error) => next(error));
    }
    function getValidatedArgs(args, request) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.');
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.');
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=routes.js.map