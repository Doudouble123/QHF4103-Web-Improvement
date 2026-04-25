var cars = [
    { model: "sedan", year: 2024, color: "red", price: 10000000, location: "Wuhan", seller: "Hou Yiwen", image: "images/sedan.jpg" },
    { model: "suv", year: 2025, color: "white", price: 666666, location: "Chengdu", seller: "Wu Shuang", image: "images/suv.jpg" },
    { model: "truck", year: 2026, color: "red", price: 888888, location: "Liaoning", seller: "Wang Shuyi", image: "images/truck.jpg" }
];

window.onload = function () {
    var current_url = window.location.href;
    if (current_url.indexOf("car-detail") > -1) {
        var carindex = new URLSearchParams(window.location.search).get('carindex');
        var car = cars[carindex];
        if (car) {
            document.getElementById("carimg").src = car.image;
            document.getElementById("model").innerHTML = car.model;
            document.getElementById("year").innerHTML = car.year;
            document.getElementById("price").innerHTML = car.price;
            document.getElementById("color").innerHTML = car.color;
            document.getElementById("location").innerHTML = car.location;
            document.getElementById("seller").innerHTML = car.seller;
        }
        return;
    }

    var searchform = document.getElementById("search");
    searchform.onsubmit = function (event) {
        event.preventDefault();
        var carmodel = document.getElementById("cartype").value;
        var caryear = document.getElementById("caryear").value;

        var result = cars.filter(function (car) {
            var matchModel = carmodel === "" || car.model === carmodel;
            var matchYear = caryear === "" || car.year == caryear;
            return matchModel && matchYear;
        });

        if (result.length > 0) {
            showcars(result);
        } else {
            alert("Not found");
            showcars([]);
        }
    };

    showcars(cars);
};

function showcars(list) {
    var carbox = document.getElementById("carlist");
    carbox.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        var car = list[i];
        var card = document.createElement("div");
        card.className = "carcard";
        var html = "<img src='" + car.image + "'><div class='carinfo'><p class='carprice'>" + car.price + "</p><a href='car-detail.html?carindex=" + i + "' class='detaillink'>More details</a></div>";
        card.innerHTML = html;
        carbox.appendChild(card);
    }
}

// Store Search Simulation
function searchShop() {
    let city = document.getElementById("cityInput").value.trim().toLowerCase();
    let shopList = document.getElementById("shopList");

    if (city === "london") {
        shopList.innerHTML = `
            <div class="shop-card">
                <img src="images/shop1.jpg">
                <p>London Shop 1</p>
            </div>
            <div class="shop-card">
                <img src="images/shop2.jpg">
                <p>London Shop 2</p>
            </div>
            <div class="shop-card">
                <img src="images/shop3.jpg">
                <p>London Shop 3</p>
            </div>
        `;
    } else {
        shopList.innerHTML = `<p style="color:#fff;">No shop in this city</p>`;
    }
}