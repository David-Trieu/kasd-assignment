import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { testuser, testuserCredentials } from "../fixtures.js";

suite("Authentication API tests", async () => {
    setup(async () => {
        await placemarkService.clearAuth();
        await placemarkService.createUser(testuser);
        await placemarkService.authenticate(testuserCredentials);
        await placemarkService.deleteAllUsers();
    });

    test("authenticate", async () => {
        const returnedUser = await placemarkService.createUser(testuser);
        const response = await placemarkService.authenticate(testuserCredentials);
        assert(response.success);
        assert.isDefined(response.token);
    });

    test("verify Token", async () => {
        const returnedUser = await placemarkService.createUser(testuser);
        const response = await placemarkService.authenticate(testuser);

        const userInfo = decodeToken(response.token);
        assert.equal(userInfo.email, returnedUser.email);
        assert.equal(userInfo.userId, returnedUser._id);
    });
    test("check Unauthorized", async () => {
        placemarkService.clearAuth();
        try {
            await placemarkService.deleteAllUsers();
            assert.fail("Route not protected");
        } catch (error) {
            assert.equal(error.response.data.statusCode, 401);
        }
    });
});
