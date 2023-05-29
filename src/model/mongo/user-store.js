import { User } from "./user.js";

export const userStore = {
    async getAllUsers() {
        const users = await User.find().lean();
        return users;
    },

    async getUserById(id) {
        if (id) {
            const user = await User.findOne({ _id: id }).lean();
            return user;
        }
        return null;
    },
    async getUserByEmail(email) {
        const user = await User.findOne({ email: email }).lean();
        return user;
    },
    async addNewUser(user) {
        const newUser = new User(user);
        const userObj = await newUser.save();
        const u = await this.getUserById(userObj._id);
        return u;
    },

    async deleteUserById(id) {
        try {
            await User.deleteOne({ _id: id });
        } catch (error) {
            console.log("bad id");
        }
    },

    async deleteAllUser() {
        await User.deleteMany({});
    },

    async checkAdminRights(id) {
        const checkedUser = await this.getUserById(id)
        if (checkedUser.hasAdminRights === true){
            return true;
        }
        else{
            return false;
        }
    }
};
