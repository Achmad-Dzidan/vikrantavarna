// Mengimpor modul yang diperlukan
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Inisialisasi aplikasi admin Firebase
admin.initializeApp();

/**
 * Cloud Function ini akan terpicu setiap kali ada DOKUMEN BARU
 * dibuat di dalam koleksi 'divisionTasks'.
 */
exports.sendNewTaskNotification = functions.firestore
    .document('divisionTasks/{taskId}')
    .onCreate(async (snapshot, context) => {
        
        // 1. Ambil data dari tugas yang baru saja dibuat
        const newTask = snapshot.data();
        const divisionId = newTask.divisionId || 'Divisi';
        const description = newTask.description || 'Tugas Baru';
        const taskDate = new Date(newTask.taskDate).toLocaleDateString('id-ID', {
            weekday: 'long', day: 'numeric', month: 'long'
        });

        console.log(`Tugas baru terdeteksi untuk divisi ${divisionId}: ${description}`);

        // 2. Siapkan isi notifikasi yang akan dikirim
        const payload = {
            notification: {
                title: `Tugas Baru: ${divisionId.replace('-', ' ')}`,
                body: `${description} pada ${taskDate}`,
                icon: 'https://achmad-dzidan.github.io/vikrantavarna/src/logo.jpg' // Ganti dengan URL lengkap logo Anda
            }
        };

        // 3. Ambil semua token langganan notifikasi dari database
        const tokensSnapshot = await admin.firestore().collection('fcmTokens').get();
        const tokens = tokensSnapshot.docs.map(doc => doc.data().token);

        if (tokens.length > 0) {
            console.log(`Mengirim notifikasi ke ${tokens.length} perangkat.`);
            // 4. Kirim notifikasi ke semua token yang terdaftar
            return admin.messaging().sendToDevice(tokens, payload);
        } else {
            console.log("Tidak ada pengguna yang berlangganan notifikasi.");
            return null;
        }
    });
