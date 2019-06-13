"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const tsoa_1 = require("tsoa");
const sqlHelperNew = require("../sqlHelperNew");
let ItemsController = class ItemsController extends tsoa_1.Controller {
    searchUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.searchUser(user);
        });
    }
    searchEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.searchEmail(email);
        });
    }
    newUser(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.altaUser(req.body);
        });
    }
    checkUser(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.checkUser(req.body);
        });
    }
    getUser(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.getUser(req.headers.authorization);
        });
    }
    checkToken(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.checkToken(req.headers.authorization);
        });
    }
    checkReadedBook(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.checkReadedBook(req.body);
        });
    }
    addLeido(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.addLeido(req.headers.authorization, req.body);
        });
    }
    takeAllReadedBooks(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.takeAllReadedBooks(req.headers.authorization);
        });
    }
    takeAllFavsBooks(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.takeAllFavsBooks(req.headers.authorization);
        });
    }
    deleteReadedBook(idLibro, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.deleteReadedBook(req.headers.authorization, idLibro);
        });
    }
    modificarNotaLibroLeido(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.modificarNotaLibroLeido(req.headers.authorization, req.body);
        });
    }
    modificarComentariosLibroLeido(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.modificarComentariosLibroLeido(req.headers.authorization, req.body);
        });
    }
    addFavorito(id, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.addFavorito(req.headers.authorization, id);
        });
    }
    borrarFavorito(idLeido, req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.borrarFavorito(req.headers.authorization, idLeido);
        });
    }
    updateUser(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.updateUser(req.headers.authorization, req.body);
        });
    }
    allUsers(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sqlHelperNew.allUsers(req.headers.authorization);
        });
    }
};
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("searchUser/{user}"),
    tslib_1.__param(0, tsoa_1.Path("user")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "searchUser", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("searchEmail/{email}"),
    tslib_1.__param(0, tsoa_1.Path("email")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "searchEmail", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("newUser"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "newUser", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("checkUser"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "checkUser", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("getUser"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "getUser", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("checkToken"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "checkToken", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("checkReadedBook"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "checkReadedBook", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("addLeido"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "addLeido", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("takeAllReadedBooks"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "takeAllReadedBooks", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("takeAllFavsBooks"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "takeAllFavsBooks", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("borrarLeido/{idLibro}"),
    tslib_1.__param(0, tsoa_1.Path("idLibro")), tslib_1.__param(1, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "deleteReadedBook", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("modificarNotaLibroLeido"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "modificarNotaLibroLeido", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("modificarComentariosLibroLeido"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "modificarComentariosLibroLeido", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("addFavorito/{id}"),
    tslib_1.__param(0, tsoa_1.Path("id")), tslib_1.__param(1, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "addFavorito", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("borrarFavorito/{idLeido}"),
    tslib_1.__param(0, tsoa_1.Path("idLeido")), tslib_1.__param(1, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "borrarFavorito", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Post("updateUser"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "updateUser", null);
tslib_1.__decorate([
    tsoa_1.SuccessResponse(200),
    tsoa_1.Get("allUsers"),
    tslib_1.__param(0, tsoa_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemsController.prototype, "allUsers", null);
ItemsController = tslib_1.__decorate([
    tsoa_1.Route("items"),
    tsoa_1.Tags("Items")
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=ItemsController.js.map