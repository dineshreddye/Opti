const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.database();
const auth = admin.auth();

// Create a new user and store them in Realtime Database
exports.createUser = functions.https.onCall(async (data, context) => {
  const { email, password, name, party, isAdmin } = data?.data || {}; // Expecting name, email, and password

  console.log({ email, password, name, party, isAdmin });
  // Check for required fields
  if (!email || !password || !name) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Email, password, and name are required.",
    );
  }

  try {
    // Create the user in Firebase Authentication
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name, // Store the name in the displayName field
    });

    // Store user data in Firebase Realtime Database
    const userData = {
      email: userRecord.email,
      name: userRecord.displayName,
      uid: userRecord.uid,
      party,
      createdAt: admin.database.ServerValue.TIMESTAMP, // Optional: To track when user was created
      isAdmin: isAdmin || false,
    };

    // Save user data with the UID as the key in Realtime Database
    await db.ref("users/" + userRecord.uid).set(userData);

    // Return a success message or any relevant data
    return { message: `User created successfully with UID: ${userRecord.uid}` };
  } catch (error) {
    console.error("Error creating user:", error);
    throw new functions.https.HttpsError("internal", "Failed to create user");
  }
});

// Cloud Function to add or append payment data to the Realtime Database
exports.addPayment = functions.https.onRequest(async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  // Extract data from the request body
  const { key, month, year, amount } = req.body;

  // Check if the required fields are provided
  if (!key || !month || !year || !amount) {
    return res
      .status(400)
      .send("Missing required fields: key, month, year, amount");
  }

  // Define the payment data to be stored
  const paymentData = {
    month: month,
    year: year,
    amount: amount,
    createdAt: admin.database.ServerValue.TIMESTAMP,
  };

  // Construct a unique child key from month and year (e.g., "February_2025")
  const monthYearKey = `${month}_${year}`;

  try {
    // Get a reference to the payment key in the database
    const paymentRef = admin.database().ref(`payments/${key}`);

    // Check if the payment key exists
    const snapshot = await paymentRef.once("value");

    if (snapshot.exists()) {
      // If the key exists, we append the new payment data under the month-year combination
      await paymentRef.child(monthYearKey).set(paymentData);
      return res
        .status(200)
        .send(`Payment data added for key: ${key} under ${monthYearKey}`);
    } else {
      // If the key does not exist, create a new payment entry with the month-year key
      await paymentRef.set({
        [monthYearKey]: paymentData,
      });
      return res
        .status(200)
        .send(`Payment data added for key: ${key} under ${monthYearKey}`);
    }
  } catch (error) {
    console.error("Error adding payment:", error);
    return res.status(500).send("Internal Server Error");
  }
});
