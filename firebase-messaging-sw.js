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

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Menangani notifikasi saat aplikasi berada di latar belakang
onBackgroundMessage(messaging, (payload) => {
    console.log('Pesan diterima di latar belakang: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/vikrantavarna/src/logo.jpg' // Pastikan path ke logo benar
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
