$(".drop").click(function() {
    $(".dropdown-menu-item").toggleClass("d-none")
})

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

// Main Part

$(".upload-project").click(function() {

    if($(".name-input").val() == "") {
        $(".error").text("Please Enter Your Product Name")
    } else if($(".description").val() == "") {
        $(".error").text("Please Enter Your Product Description")
    } else if(localStorage.getItem("accType") == null) {
        $(".error").text("Please Select Your Product Type")
    } else if(localStorage.getItem("Favicon Img Name") == null) {
        $(".error").text("Please Upload A Favicon Image")
    } else if($(".dollar").val() == "") {
        $(".error").text("Please Enter How many Dollar Your Product Take");
    }else if($(".long-description").val() == "") {
        $(".error").text("Please Enter Your Product Long Description")
    } else {
        firebase.database().ref(localStorage.getItem('accType')+"/").child(localStorage.getItem('Name')+$(".name-input").val()).set({
            code : `<div class="card mb-3 rounded" style="width: 80%; margin-right: 5px; margin-top: 10px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${localStorage.getItem("Favicon Img Name")}" width="400" class="product-img" height="300" class="rounded" alt="Product Image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${$(".name-input").val()}</h5>
                    <p class="card-text">${$(".description").val()}</p>
                    <p class="card-text"><small class="text-muted">$${$(".dollar").val()}</small></p>
                    <button class="btn btn-outline-info" data-toggle="modal" data-target="#${$(".name-input").val()}">Buy</button>
                    </div>
                </div>
                </div>
            </div>`,
            code1 : `<div class="container">              
            <div class="modal fade show" id="${$(".name-input").val()}" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${$(".name-input").val()}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="material-icons">&#9747;</i>
                        </button>
                        
                        
                    </div>
                    <div class="modal-body">
                        <p>${$(".long-description").val()}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-link"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                        <button type="button" class="btn btn-link"><i class="fas fa-money-bill-wave-alt"></i> Buy Now</button>
                        <button type="button" class="btn btn-danger btn-link" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>`,
            accType : localStorage.getItem("accType"),
            name : $(".name-input").val()
        })

        $(".hide-div").removeClass("d-none");
        $(".registration-form").addClass("d-none");
    }
})

$(".ha").click(function() {
    localStorage.setItem("accType", "Home Access")
    $(".dropdown-menu-item").toggleClass("d-none")
})

$(".ba").click(function() {
    localStorage.setItem("accType", "Beauty Access")
    $(".dropdown-menu-item").toggleClass("d-none")
})

$(".ga").click(function() {
    localStorage.setItem("accType", "Game Access")
    $(".dropdown-menu-item").toggleClass("d-none")
})

$(".ca").click(function() {
    localStorage.setItem("accType", "Computer Access")
    $(".dropdown-menu-item").toggleClass("d-none")
})

$(".ta").click(function() {
    localStorage.setItem("accType", "Toys Access")
    $(".dropdown-menu-item").toggleClass("d-none")
})

$(".os").click(function() {
    localStorage.setItem("accType", "Others Stuff")
    $(".dropdown-menu-item").toggleClass("d-none")
})

document.querySelector(".upload").addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("Favicon Img Name", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
})

$(".go-back").click(function() {
    window.location = "../index.html";
})