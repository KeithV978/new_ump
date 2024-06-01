// import firebase from "firebase/compat/app";
// import { getAnalytics, logEvent } from "firebase/analytics";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// import { sendEmailVerification } from "firebase/auth";

// import firebaseConfig from "./config";

// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signInWithPopup,
// //   GoogleAuthProvider,
// //   FacebookAuthProvider,
// //   signOut,
// //   sendPasswordResetEmail,
// //   onAuthStateChanged,
// //   setPersistence,
// //   reauthenticateWithCredential,
// // } from "firebase/auth";

// class Firebase {
//   constructor() {
//     // this.app = initializeApp(firebaseConfig);
//     this.app = firebase.initializeApp(firebaseConfig);
//     this.analytics = getAnalytics(this.app);
//     logEvent(this.analytics, "notification_received");
//     this.db = firebase.firestore();
//     this.auth = this.app.auth();
//     this.storage = this.app.storage();

//     this.collections = [
//       "mobile_devices",
//       "foods",
//       "gadgets",
//       "fashion",
//       "fashion_accessories",
//       "real_estate",
//       "furnitures",
//       "books",
//       "home_appliances",
//       "computers",
//       "vehicles",
//       "services",
//     ];
//   }

//   // AUTH ACTIONS ------------

//   createAccount = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   addSeller = (id, user) => this.db.collection("users").doc(id).set(user);

//   getSeller = (id) => this.db.collection("users").doc(id).get();

//   signIn = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   signInWithGoogle = () =>
//     this.auth.signInWithPopup(new this.auth.GoogleAuthProvider());

//   signInWithFacebook = () =>
//     this.auth.signInWithPopup(new this.auth.FacebookAuthProvider());

//   signOut = () => this.auth.signOut();

//   passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

//   confirmEmail = (user) => sendEmailVerification(user);

//   // passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

//   reauthenticate = (currentPassword) => {
//     const user = this.auth.currentUser;
//     const cred = this.auth.EmailAuthProvider.credential(
//       user.email,
//       currentPassword
//     );
//     return this.auth.reauthenticateWithCredential(cred);
//   };

//   changePassword = (currentPassword, newPassword) =>
//     new Promise((resolve, reject) => {
//       this.reauthenticate(currentPassword)
//         .then(() => {
//           const user = this.auth.currentUser;

//           user
//             .updatePassword(newPassword)
//             .then(() => {
//               resolve("Password updated successfully!");
//             })
//             .catch((error) => reject(error));
//         })
//         .catch((error) => reject(error));
//     });

//   updateEmail = (currentPassword, newEmail) =>
//     new Promise((resolve, reject) => {
//       this.reauthenticate(currentPassword)
//         .then(() => {
//           const user = this.auth.currentUser;
//           user
//             .updateEmail(newEmail)
//             .then(() => {
//               resolve("Email Successfully updated");
//             })
//             .catch((error) => reject(error));
//         })
//         .catch((error) => reject(error));
//     });

//   updateProfile = (id, updates) =>
//     this.db.collection("users").doc(id).update(updates);

//   onAuthStateChanged = () => {
//     new Promise((resolve, reject) => {
//       this.auth.onAuthStateChanged((user) => {
//         if (user) {
//           resolve(user);
//         } else {
//           reject(new Error("Authentication State Change Failed"));
//         }
//       });
//     });
//   };

//   setAuthPersistence = () =>
//     this.auth.setPersistence(this.auth.Auth.Persistence.LOCAL);

//   // // PRODUCT ACTIONS --------------
//   getSingleProduct = (id, category) =>
//     this.db
//       .collection(category)
//       .where("id", "==", id)
//       // .doc(id)
//       .get();

//   getSingleAuctionProduct = (id) =>
//     this.db
//       .collection("auctions")
//       .where("id", "==", id)
//       // .doc(id)
//       .get();

//   getSellersProducts = (id) => {
//     let didTimeout = false;

//     return new Promise((resolve, reject) => {
//       (async () => {
//         const timeout = setTimeout(() => {
//           didTimeout = true;
//           reject(new Error("Request timeout, please try again"));
//         }, 15000);

//         try {
//           const quaries = this.collections.map((collection) =>
//             this.db
//               .collection(collection)
//               .where("sellersId", "==", id)
//               .orderBy(this.app.firebase.FieldPath.documentId())
//               // .startAfter(lastKeyRef)
//               .limit(20)
//               .get()
//           );

//           clearTimeout(timeout);

//           if (!didTimeout) {
//             const results = await Promise.all(quaries);

//             const mergedResults = results.reduce((merged, querySnapshot) => {
//               querySnapshot.forEach((doc) => {
//                 merged.push(doc.data());
//               });
//               return merged;
//             }, []);

//             resolve({ products: mergedResults });
//           }
//         } catch (error) {
//           reject(error?.message || ":( Faild to fetch products");
//         }
//       })();
//     });
//   };

//   getProducts = (lastRefKey) => {
//     let didTimeout = false;

//     return new Promise((resolve, reject) => {
//       (async () => {
//         if (lastRefKey) {
//           try {
//             const query = this.db
//               .collection("products")
//               .orderBy(app.firebase.FieldPath.documentId())
//               .startAfter(lastRefKey)
//               .limit(20);

//             const snapshot = await query.get();
//             const products = [];
//             snapshot.forEach((doc) =>
//               products.push({ id: doc.id, ...doc.data() })
//             );

//             const lastKey = snapshot.docs[snapshot.docs.length - 1];

//             resolve({ products, lastKey });
//           } catch (error) {
//             reject(error?.message || ":( Failed to fetch products");
//           }
//         } else {
//           const timeout = setTimeout(() => {
//             didTimeout = true;
//             reject(new Error("Request timeout, please try again"));
//           }, 15000);

//           try {
//             const totalQuery = await this.db.collection("products").get();
//             const total = totalQuery.docs.length;
//             const query = this.db
//               .collection("products")
//               .orderBy(app.firestore.FieldPath.documentId())
//               .limit(20);
//             const snapshot = await query.get();

//             clearTimeout(timeout);
//             if (!didTimeout) {
//               const products = [];
//               snapshot.forEach((doc) =>
//                 products.push({ id: doc.id, ...doc.data() })
//               );
//               const lastKey = snapshot.docs[snapshot.docs.length - 1];

//               resolve({ products, lastKey, total });
//             }
//           } catch (error) {
//             if (didTimeout) return;
//             reject(error?.message || ":( Failed to fetch products");
//           }
//         }
//       })();
//     });
//   };

//   searchProducts = (searchKey, category = "") => {
//     let didTimeout = false;

//     return new Promise((resolve, reject) => {
//       (async () => {
//         if (category === "") {
//           this.collections.map((collection, index) => {
//             return {
//               //  const collectionRef = this.db.collection(collection)
//             };
//           });
//         }
//         const productsRef = this.db.collection(category);

//         const timeout = setTimeout(() => {
//           didTimeout = true;
//           reject(new Error("Request, timed out, please try again"));
//         }, 15000);

//         try {
//           const searchedNameRef = productsRef
//             .orderBy("name_lower")
//             .where("headline", "in", searchKey)
//             // .where("name_lower", "<=", `${searchKey}\uf8ff`)
//             .limit(20);

//           const searchedKeywordRef = productsRef
//             .orderBy("dateAdded", "desc")
//             .where("tags", "array-contains-any", searchKey.split(" "))
//             .limit(20);

//           const nameSnaps = await searchedNameRef.get();
//           const keywordsSnaps = await searchedKeywordRef.get();

//           clearTimeout(timeout);
//           if (!didTimeout) {
//             const searchedNameProducts = [];
//             const searchedKeywordsProducts = [];
//             let lastKey = null;

//             if (!nameSnaps.empty) {
//               nameSnaps.forEach((doc) => {
//                 searchedNameProducts.push({ id: doc.id, ...doc.data() });
//               });
//               lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
//             }

//             if (!keywordsSnaps.empty) {
//               keywordsSnaps.forEach((doc) => {
//                 searchedKeywordsProducts.push({ id: doc.id, ...doc.data() });
//               });
//             }

//             // MERGE PRODUCTS
//             const mergedProducts = [
//               ...searchedNameProducts,
//               ...searchedKeywordsProducts,
//             ];
//             const hash = {};

//             mergedProducts.forEach((product) => {
//               hash[product.id] = product;
//             });

//             resolve({ products: Object.values(hash), lastKey });
//           }
//         } catch (error) {
//           if (didTimeout) return;
//           reject(error);
//         }
//       })();
//     });
//   };

//   getRelatedProducts = () => {};

//   getRecentlyAddedProducts = (itemsCount = 10) => {
//     let didTimeout = false;
//     return new Promise((resolve, reject) => {
//       (async () => {
//         const timeout = setTimeout(() => {
//           didTimeout = true;
//           reject(new Error("Request timeout, please try again"));
//         }, 15000);
//         try {
//           const quaries = this.collections.map((collection) =>
//             this.db
//               .collection(collection)
//               // .where(`dateAdded ${new Date.now()}`, "==", 2)
//               .orderBy("timestamp", "desc")
//               .limit(itemsCount)
//               .get()
//           );

//           clearTimeout(timeout);

//           if (!didTimeout) {
//             const results = await Promise.all(quaries);

//             const mergedResults = results.reduce((merged, querySnapshot) => {
//               querySnapshot.forEach((doc) => {
//                 merged.push(doc.data());
//               });
//               return merged;
//             }, []);

//             resolve({ products: mergedResults });
//           }
//         } catch (error) {
//           reject(error?.message || ":( Faild to fetch products");
//         }
//       })();
//     });
//   };

//   // getRecommendedProducts = (itemsCount = 12) =>
//   //   this.db
//   //     .collection("products")
//   //     .where(itemsCount)
//   //     .get();

//   addProduct = (id, category, product) =>
//     this.db.collection(category).doc(id).set(product);

//   getRequests = (lastRefKey) => {
//     let didTimeout = false;

//     return new Promise((resolve, reject) => {
//       (async () => {
//         if (lastRefKey) {
//           try {
//             const query = this.db
//               .collection("requests")
//               .orderBy(this.app.firebase.FieldPath.documentId())
//               .startAfter(lastRefKey)
//               .limit(20);

//             const snapshot = await query.get();
//             const products = [];
//             snapshot.forEach((doc) =>
//               products.push({ id: doc.id, ...doc.data() })
//             );

//             const lastKey = snapshot.docs[snapshot.docs.length - 1];

//             resolve({ products, lastKey });
//           } catch (error) {
//             reject(error?.message || ":( Failed to fetch products");
//           }
//         } else {
//           const timeout = setTimeout(() => {
//             didTimeout = true;
//             reject(new Error("Request timeout, please try again"));
//           }, 15000);

//           try {
//             const totalQuery = await this.db.collection("requests").get();
//             const total = totalQuery.docs.length;
//             const query = this.db
//               .collection("requests")
//               .orderBy(this.app.firestore.FieldPath.documentId())
//               .limit(20);
//             const snapshot = await query.get();

//             clearTimeout(timeout);
//             if (!didTimeout) {
//               const requests = [];
//               snapshot.forEach((doc) =>
//                 requests.push({ id: doc.id, ...doc.data() })
//               );
//               const lastKey = snapshot.docs[snapshot.docs.length - 1];

//               resolve({ requests, lastKey, total });
//             }
//           } catch (error) {
//             if (didTimeout) return;
//             reject(error?.message || ":( Failed to fetch requests");
//           }
//         }
//       })();
//     });
//   };

//   searchRequests = (searchKey) =>
//     this.db
//       .collection("requests")
//       .where("keywords", "array-contains-any", searchKey.split(" "))
//       .get();

//   // deleteRequest = (id) => this.db.collection("requests").doc(id).delete();

//   generateKey = () => this.db.collection("productsImages").doc().id;

//   storeImage = async (id, folder, imageFile) => {
//     const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
//     const downloadURL = await snapshot.ref.getDownloadURL();

//     return downloadURL;
//   };

//   deleteImage = (id) => this.storage.ref("productsImages").child(id).delete();

//   editProduct = (id, category, updates) =>
//     this.db.collection(category).doc(id).update(updates);

//   removeProduct = (id, category) =>
//     this.db.collection(category).doc(id).delete();
// }

// const firebaseInstance = new Firebase();

// export default firebaseInstance;
