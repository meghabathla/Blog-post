const conf = {
  appwriteUrl: String(import.meta.env.VITE_AAPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_AAPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_AAPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_AAPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_AAPWRITE_BUCKET_ID),
};

export default conf;
