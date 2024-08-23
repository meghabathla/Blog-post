import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    console.log(this.client);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    //sign up
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error during account creation:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    //login-in
    try {
      console.log(this.account);
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    // checking whether the user is already login while navigating among nav bar like home, about
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(`Appwrite servive:: logout ::error`, error);
    }
  }
}

const authService = new AuthService();

export default authService;
