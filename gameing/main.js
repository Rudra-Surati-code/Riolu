// Firebase App

var firebaseConfig = {
    apiKey: "AIzaSyCdJx-Xqftyp3iZGdltFvSVCamA3LR2ijI",
    authDomain: "riolu-316306.firebaseapp.com",
    databaseURL: "https://riolu-316306-default-rtdb.firebaseio.com",
    projectId: "riolu-316306",
    storageBucket: "riolu-316306.appspot.com",
    messagingSenderId: "85403481145",
    appId: "1:85403481145:web:b852e2dbf6c9b1ceae89e8",
    measurementId: "G-97NXPHEDCD"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function checkStuff() {
    firebase.database().ref("Game Access"+"/").child("/").on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            $(".right").html(`${$(".right").html()}${childData.code}`);
            $(".bs-modal").html(`${$(".bs-modal").html()}${childData.code1}`);
        })
    })
}