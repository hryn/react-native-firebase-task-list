import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBbWMVug5-YUkbLays1Bp6FCy4JzoY6UUw",
  databaseURL: "https://react-native-firebase-7d32d.firebaseio.com"
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child("tasks");
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
