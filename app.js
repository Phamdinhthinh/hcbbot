const firebaseConfig = {
    apiKey: "    apiKey: "AIzaSyAUQ9ZO0agFyLTQ0FfsL8yB21h9jYkGHPc",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function registerUser() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => alert("Đăng ký thành công"))
        .catch((error) => alert(error.message));
}
