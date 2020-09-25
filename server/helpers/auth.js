const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: "https://gqlreactnode-665f4.firebaseio.com"
});

exports.authCheck = async (req) => {
  console.log('req=======>>>>>',req.headers);
  try {
    const currentUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    console.log("CURRENT USER", currentUser);
    return currentUser;
  } catch (error) {
    console.log("AUTH CHECK ERROR", error);
    throw new Error("Invalid or expired token", error);
  }
};
