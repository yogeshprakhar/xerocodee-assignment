import { Client, Account, OAuthProvider, Databases, ID } from "appwrite";
import { useRouter } from "next/navigation";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("665b3ce4002ff0758df0");

const databaseId = "665f2f5d003dcc3d09a4";
const userCollectionId = "665f3025001a43204a8b";
const account = new Account(client);
const databases = new Databases(client);

export const createUser = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  try {
    const newAccount = await account.create(
      firstname,
      lastname,
      email,
      password
    );

    if (!newAccount) throw Error;
    await signIn(email, password);
    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        password,
        firstname,
        lastname,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
  }
};

export const handleLoginGoogle = async () => {
  try {
    account.createOAuth2Session(OAuthProvider.Google, "http://localhost:3000/");
  } catch (error) {
    console.log(error);
  }
};

export const handleLoginGithub = async () => {
  try {
    account.createOAuth2Session(OAuthProvider.Github, "http://localhost:3000/");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = async () => {
  try {
    const router = useRouter();
    account.deleteSession("current");
    router.replace("/");
  } catch (error) {
    console.log(error);
  }
};

export const currentUser = async () => {
  try {
    const user = await account.get();
    const username = user.name;
    return { username };
  } catch (error) {
    console.log(error);
  }
};
