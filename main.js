function loader() {
    $(".loading").css("display", "none");
    $(".save-changes").attr("disabled", "true");
    if(localStorage.getItem("Location") == null == false) {
        $(".select-location").addClass('d-none')
        $(".get-location").removeClass('d-none');
        $(".get-location").html(`<i class="fas fa-street-view"></i> Deliver to ${localStorage.getItem('Location')}`);
    }

    if(localStorage.getItem('Email') == null == false) {
        $("#signin-btn").addClass("d-none");
        $(".user-name").removeClass("d-none");
        $(".user-name").text(`Hello, ${localStorage.getItem("Name")}`);
        $(".select-location").removeAttr("disabled");
        $(".cart").removeClass("d-none");
        $(".sell-stuff  ").removeClass("d-none");
        $(".order-return").removeClass("d-none");
        $(".logout").removeClass("d-none");
    } else {
        $(".select-location").attr("disabled", "true");
    }
}

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


// Check Country Name

function checkCountryName() {
    const x = $('.selectCountryLocation').val().length;

    if(x >= 3) {
        $(".save-changes").removeAttr("disabled");
    } else {
        $(".save-changes").attr("disabled", "true");
    }

}

const selectCountryLocation = () => {
    localStorage.setItem('Location', $(".selectCountryLocation").val());
    $(".select-location").addClass('d-none');
    $(".get-location").removeClass('d-none');
    $(".get-location").html(`<i class="fas fa-street-view"></i> Deliver to ${localStorage.getItem('Location')}`);
    firebase.database().ref(localStorage.getItem('Location')).child(localStorage.getItem('Name')).set({
        name: localStorage.getItem('Name'),
        email: localStorage.getItem('Email'),
        location: localStorage.getItem("Location")
    })
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    localStorage.setItem('Name' , profile.getName());
    localStorage.setItem('Image URL' , profile.getImageUrl());
    localStorage.setItem('Email' , profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signInWithEmailAndPassword() {
    localStorage.setItem('Email', $(".email-signin").val())
    localStorage.setItem('Name', $(".name-signin").val())

    location.reload();
}

$(".sell-stuff").click(function(){
    location.replace("/sell stuff/index.html")
})

$(".logout").click(function() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    localStorage.clear();
    location.reload();
})

$(".ha").click(function() {
    $("iframe").removeAttr("class");
    $("iframe").attr("src", "Riolu/home/index.html");
    $("#carousel").addClass("d-none");
})

$(".ba").click(function() {
    $("iframe").removeAttr("class");
    $("iframe").attr("src", "Riolu/beauty/index.html");
    $("#carousel").addClass("d-none");
})

$(".ga").click(function() {
    $("iframe").removeAttr("class");
    $("iframe").attr("src", "Riolu/gameing/index.html");
    $("#carousel").addClass("d-none");
})

$(".ca").click(function() {
    $("iframe").removeAttr("class");
    $("iframe").attr("src", "Riolu/computer/index.html");
    $("#carousel").addClass("d-none");
})

$(".ta").click(function() {
    $("iframe").removeAttr("class");
    $("iframe").attr("src", "Riolu/toys/index.html");
    $("#carousel").addClass("d-none");
})

$(".os").click(function() {
    $("iframe").removeAttr("class");
    $("iframe").attr("src", "Riolu/others stuff/index.html");
    $("#carousel").addClass("d-none");
})
