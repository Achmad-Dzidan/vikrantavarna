// Impor skrip Firebase
self.importScripts('firebase-libs/firebase-app.js');
self.importScripts('firebase-libs/firebase-messaging.js');

// Konfigurasi Firebase Anda (SAMA DENGAN DI INDEX.HTML)
const firebaseConfig = {
    apiKey: "AIzaSyBW_s50tO6zvNl-Jvkm6iQcbRMLebeLRgw",
    authDomain: "vikrantavarna-ee40e.firebaseapp.com",
    projectId: "vikrantavarna-ee40e",
    storageBucket: "vikrantavarna-ee40e.firebasestorage.app",
    messagingSenderId: "880669712876",
    appId: "1:880669712876:web:7c873784fde86d4679a0c9",
    measurementId: "G-SD61TKCVQ3"
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
