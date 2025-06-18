// Impor skrip Firebase
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js");

// Konfigurasi Firebase Anda (SAMA DENGAN DI INDEX.HTML)
const firebaseConfig = {
    apiKey: "AIzaSyCJcvMENgl2jqjgQ659R4WJl_NR_vam1z0",
    authDomain: "timeline-vikrantavarna.firebaseapp.com",
    projectId: "timeline-vikrantavarna",
    storageBucket: "timeline-vikrantavarna.firebasestorage.app",
    messagingSenderId: "988549802115",
    appId: "1:988549802115:web:d12bfe84697c269db553b6",
    measurementId: "G-BMEG2N04N5"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.getMessaging(app);

// (Opsional) Menangani notifikasi di latar belakang
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/src/logo.jpg' // Ganti dengan path logo Anda
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});