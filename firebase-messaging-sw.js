// Impor skrip Firebase
self.importScripts('firebase-libs/firebase-app.js');
self.importScripts('firebase-libs/firebase-messaging.js');

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

// (MODIFIKASI) Inisialisasi Firebase menggunakan namespace 'firebase'
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app); // Gunakan firebase.messaging()

// (MODIFIKASI) Menangani notifikasi saat aplikasi berada di latar belakang
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/vikrantavarna/src/logo.jpg' // Pastikan path ke logo benar
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
