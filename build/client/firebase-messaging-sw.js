

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",
authDomain: "dentists-iq.firebaseapp.com",

projectId: "dentists-iq",


messagingSenderId: "574460671157",

appId: "1:574460671157:web:b1b6ca308aa9d8e9b8fafc",

measurementId: "G-7FWHC474JJ"});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log("HAHHAHAHAHAHAH");
// [END initialize_firebase_in_sw]

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
console.log(messaging);

// messaging.onBackgroundMessage(function(payload) {
//   console.log(payload);
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
//   // Customize notification here
//   const notificationTitle = 'no title at all';
//   const notificationOptions = {
//     body: 'funny talk'
//   };

//   return self.registration.showNotification(notificationTitle,
//       notificationOptions);
// });
// [END background_handler]

// Retrieve the FCM token after registration
self.addEventListener('pushsubscriptionchange', (event) => {
  event.waitUntil(
    self.registration.pushManager.subscribe(event.newSubscription)
      .then((subscription) => {
        // `subscription.endpoint` should contain the FCM token
        const fcmToken = subscription.endpoint.split('send/')[1];
        console.log('FCM Token:', fcmToken);
      })
      .catch((error) => {
        console.error('Error subscribing to push:', error);
      })
  );
});