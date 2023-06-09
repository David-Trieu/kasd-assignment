import Boom from "@hapi/boom";
import { db } from "../model/db.js";
import {IdSpec, JwtAuth, UserArray, UserCredentialsSpec, UserSpec, UserSpecPlus} from "../model/joi-schemas.js";
import {validationError} from "./logger.js";
import { createToken } from "./jwt-utils.js";

export const userApi = {
    find: {
        auth: {
            strategy: "jwt",
        },

        handler: async function(request, h) {
            try {
                const users = await db.userStore.getAllUsers();
                return users;
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
        tags: ["api"],
        description: "Get all user",
        notes: "Returns details of all user",
        response: { schema: UserArray, failAction: validationError },
    },

    findOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function(request, h) {
            try {
                const user = await db.userStore.getUserById(request.auth.credentials._id);
                if (!user) {
                    return Boom.notFound("No User with this id");
                }
                return user;
            } catch (err) {
                return Boom.serverUnavailable("No User with this id");
            }
        },
        tags: ["api"],
        description: "Get one user",
        notes: "Returns details of one user",
        response: { schema: UserSpecPlus, failAction: validationError },
    },
    create: {
        auth: false,

        handler: async function(request, h) {
            try {
                const user = await db.userStore.addNewUser(request.payload);
                if (user) {
                    return h.response(user).code(201);
                }
                return Boom.badImplementation("error creating user");
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
        tags: ["api"],
        description: "Create a User",
        notes: "Returns details of created user",
        validate: { payload: UserSpec, failAction: validationError },
        response: { schema: UserSpecPlus, failAction: validationError },
    },
    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function(request, h) {
            try {
                await db.userStore.deleteAllUser();
                return h.response().code(204);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
        tags: ["api"],
        description: "Delete all user",
    },
    authenticate: {
        auth: false,
        handler: async function (request, h) {
            try {
                const user = await db.userStore.getUserByEmail(request.payload.email);
                if (!user) {
                    return Boom.unauthorized("User not found");
                }
                if (user.password !== request.payload.password) {
                    return Boom.unauthorized("Invalid password");
                }
                const token = createToken(user);
                return h.response({ success: true, token: token, id: user._id }).code(201);
            } catch (err) {
                return Boom.serverUnavailable("Database Error");
            }
        },
        tags: ["api"],
        description: "Authenticate",
        validate: { payload: UserCredentialsSpec, failAction: validationError },
        response: { schema: JwtAuth, failAction: validationError }
    },
};
