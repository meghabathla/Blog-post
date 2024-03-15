import { ReducerType } from "@reduxjs/toolkit";
import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query, Account } from "appwrite";

export class Service {
  //create storage for user's blog post
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(`Appwrite service:: createPost::error`, error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log(`Appwrite service:: updatePost::error`, error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(`Appwrite servive:: deletePost::error`, error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service:: getPost::error`, error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    //Query only works if have created indexes in appwrite(artcles)
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(`Appwrite service:: getPosts::error`, error);
      return false;
    }
  }

  //file uploading service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(`Appwrite service:: uploadFile::error`, error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(`Appwrite service:: deleteFile::error`, error);
      return false;
    }
  }

  getFilePreview(fileId) {
    // sendig url of fileId
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}
const service = new Service();
export default service;
