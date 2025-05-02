// ===================== COMMON DEFINE ==================== 
// Formatter VND
const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
});

function generateUUIDV4() {
    return 'xxx-xxy'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// ==================== DATABASE ==========================
let DATABASE = localStorage.getItem('DATABASE') ? JSON.parse(localStorage.getItem('DATABASE')) : {
    PRODUCTS: [],
    ACCOUNTS: [
        // Set User Default role ADMIN
        {
            ID: generateUUIDV4(),
            username: "Lê Hữu Phước",
            phoneNumber: "0949829682",
            address: "TP HỒ CHÍ MINH",
            email: "ADMIN@gmail.com",
            password: "123",
            role: "Admin"
        }
    ],
    ORDERS: [
        {
            "orderId": "562-59a",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Giao hàng thành công"
        },
        {
            "orderId": "40d-fc8",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H03",
                    "productName": "Suicidal Tendencies",
                    "price": 1250000,
                    "image": "T-shirt-1.jpg",
                    "quantity": 1
                },
                {
                    "code": "H04",
                    "productName": "Converse Collegiate",
                    "price": 1200000,
                    "image": "T-shirt.jpg",
                    "quantity": 1
                },
                {
                    "code": "H01",
                    "productName": "Chevron Jogger",
                    "price": 1200000,
                    "image": "jogger.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Giao hàng thành công"
        },
        {
            "orderId": "526-d58",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "G04",
                    "productName": "Cons Auckland Ultra",
                    "price": 900000,
                    "image": "sale-off-2-600x384.jpg",
                    "quantity": 1
                },
                {
                    "code": "G05",
                    "productName": "Found Leather X1",
                    "price": 1800000,
                    "image": "sale-off-1-600x384.jpg",
                    "quantity": 1
                },
                {
                    "code": "G06",
                    "productName": "Chuck Taylor Classic",
                    "price": 2000000,
                    "image": "women-classic-5.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Giao hàng thành công"
        },
        {
            "orderId": "fa8-76b",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H05",
                    "productName": "Poly Chuck Plus 1.0",
                    "price": 1000000,
                    "image": "balo-4-600x384.jpg",
                    "quantity": 1
                },
                {
                    "code": "H06",
                    "productName": "Speed 2 Backpack",
                    "price": 900000,
                    "image": "balo-3.jpg",
                    "quantity": 1
                },
                {
                    "code": "H07",
                    "productName": "Lil Duffel",
                    "price": 1200000,
                    "image": "balo-2.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Giao Hàng Thành Công"
        },
        {
            "orderId": "736-f6b",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 2
                }
            ],
            "createDate": "30/04/2025",
            "status": "Giao hàng thành công"
        },
        {
            "orderId": "519-1db",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "G08",
                    "productName": "One Star Sunbaked",
                    "price": 2100000,
                    "image": "women-sunbaked-4-600x384.jpg",
                    "quantity": 1
                },
                {
                    "code": "G09",
                    "productName": "Archive Prints Hi",
                    "price": 920000,
                    "image": "women-classic-7.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Đặt Hàng"
        },
        {
            "orderId": "410-4ab",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "G08",
                    "productName": "One Star Sunbaked",
                    "price": 2100000,
                    "image": "women-sunbaked-4-600x384.jpg",
                    "quantity": 1
                },
                {
                    "code": "G07",
                    "productName": "Taylor Classic",
                    "price": 1000000,
                    "image": "women-classic-3.jpg",
                    "quantity": 1
                },
                {
                    "code": "G09",
                    "productName": "Archive Prints Hi",
                    "price": 920000,
                    "image": "women-classic-7.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Đặt Hàng"
        },
        {
            "orderId": "272-818",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H01",
                    "productName": "Chevron Jogger",
                    "price": 1200000,
                    "image": "jogger.jpg",
                    "quantity": 1
                },
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Đặt Hàng"
        },
        {
            "orderId": "732-f4a",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H01",
                    "productName": "Chevron Jogger",
                    "price": 1200000,
                    "image": "jogger.jpg",
                    "quantity": 1
                },
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 1
                },
                {
                    "code": "H03",
                    "productName": "Suicidal Tendencies",
                    "price": 1250000,
                    "image": "T-shirt-1.jpg",
                    "quantity": 1
                },
                {
                    "code": "H04",
                    "productName": "Converse Collegiate",
                    "price": 1200000,
                    "image": "T-shirt.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Đặt Hàng"
        },
        {
            "orderId": "3c4-1b8",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H01",
                    "productName": "Chevron Jogger",
                    "price": 1200000,
                    "image": "jogger.jpg",
                    "quantity": 1
                },
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 1
                },
                {
                    "code": "H03",
                    "productName": "Suicidal Tendencies",
                    "price": 1250000,
                    "image": "T-shirt-1.jpg",
                    "quantity": 1
                },
                {
                    "code": "H04",
                    "productName": "Converse Collegiate",
                    "price": 1200000,
                    "image": "T-shirt.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Đặt Hàng"
        },
        {
            "orderId": "771-809",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H01",
                    "productName": "Chevron Jogger",
                    "price": 1200000,
                    "image": "jogger.jpg",
                    "quantity": 2
                },
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 1
                },
                {
                    "code": "H03",
                    "productName": "Suicidal Tendencies",
                    "price": 1250000,
                    "image": "T-shirt-1.jpg",
                    "quantity": 1
                },
                {
                    "code": "H04",
                    "productName": "Converse Collegiate",
                    "price": 1200000,
                    "image": "T-shirt.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "30/04/2025",
            "status": "Đặt Hàng"
        },
        {
            "orderId": "087-558",
            "userID": "e28-a0a",
            "customerInfo": {
                "customerName": "Phước Lê Hữu",
                "customerNumber": "00000",
                "customerAddress": "1221321",
                "customerEmail": "lehuuphuoc.1922@gmail.com",
                "customerNote": ""
            },
            "payMethod": "Giao Hàng Tại Nhà",
            "products": [
                {
                    "code": "H02",
                    "productName": "Pull Over Hoodie",
                    "price": 1400000,
                    "image": "T-shirt-2.jpg",
                    "quantity": 1
                }
            ],
            "createDate": "01/05/2025",
            "status": "Giao hàng thành công"
        }
    ]
};

localStorage.setItem('DATABASE', JSON.stringify(DATABASE));

// Get table to use
let PRODUCTS = DATABASE.PRODUCTS;
let ACCOUNTS = DATABASE.ACCOUNTS;
let ORDERS = DATABASE.ORDERS;

// ==================== SESSION STORE ==========================
let SESSION = sessionStorage.getItem('SESSION') ? JSON.parse(sessionStorage.getItem('SESSION')) : null;

// ========================================= CART CLIENT ===========================================
let btn_cart = document.getElementById('btn-cart');
let cart_overlay = document.getElementById('cart-overlay');
let close_cart = document.getElementById('close-cart');
let cart_tbody = document.getElementById('cart-tbody');
// let cart_quantity = document.getElementById('cart-quantity');

btn_cart.addEventListener('click', cartOverlayOn);
close_cart.addEventListener('click', cartOverlayOff);

function cartOverlayOn() {
    cart_overlay.style.display = 'block';
    renderCartItems();
}

function cartOverlayOff() {
    cart_overlay.style.display = 'none';
}

// Cart Render Items
function renderCartItems() {
    let checkout = document.getElementById('checkout');
    let total_inner = document.getElementById('total');
    let products = SESSION.products;
    let contents = '';
    let total = 0;

    if (products === undefined || products.length === 0) {
        total_inner.innerHTML = `<p class="text-center">Không có sản phẩm trong giỏ.</p>`;
        checkout.style.display = 'none';
    } else {
        checkout.style.display = 'block';
        products.forEach(p => {
            contents += `
            <tr>
                <td>
                    <img src="images/${p.image}" alt="">
                </td>
                <td>
                    <p>${p.productName}</p>
                    <p>${formatter.format(p.price)}</p>
                </td>
                <td>
                    ${p.quantity}
                </td>
                <td>
                    ${formatter.format(p.price * p.quantity)}
                </td>
                <td>
                    
                </td>
            </tr>`;
            total += (p.price * p.quantity);
        })
        total_inner.innerHTML = `Tổng Tiền: ${formatter.format(total)}`;
        cart_tbody.innerHTML = contents;
    }
}


// ========================================= FORM ACCOUNT CLIENT ===========================================
let regiseter_form = document.getElementById('regiseter-form');
let login_form = document.getElementById('login-form');
let login_form_area = document.getElementById('login-form-area');
let regiseter_form_area = document.getElementById('regiseter-form-area');

regiseter_form.addEventListener('click', showRegisterForm);
login_form.addEventListener('click', showSignForm);

function showRegisterForm() {
    login_form_area.style.display = 'none';
    regiseter_form_area.style.display = 'block';
}

function showSignForm() {
    login_form_area.style.display = 'block';
    regiseter_form_area.style.display = 'none';
}

// ********************** REGISTER ACCOUNT **********************
// Declare Form Input
let name = document.getElementById('name');
let number = document.getElementById('number');
let address = document.getElementById('address');
let email = document.getElementById('email');
let password = document.getElementById('password');
// let condition = document.getElementById('condition');

let register_btn = document.getElementById('register');
register_btn.addEventListener('click', addNewAccount);

function addNewAccount() {
    let account = {
        ID: generateUUIDV4(),
        username: name.value,
        phoneNumber: number.value,
        address: address.value,
        email: email.value,
        password: password.value,
        role: "User"
    }
    if (validateFormRegister()) {
        ACCOUNTS.push(account);
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        alert("Tạo Tài Khoản Thành Công !");
        showSignForm();
    }
    register_btn.disabled = false;
}

function validateFormRegister() {
    let register_input = regiseter_form_area.querySelectorAll('input');
    let check = 0;

    register_input.forEach(input => {
        if (input.value === '') {
            input.style.border = "1px solid red";
            check++;
        } else {
            input.style.border = "1px solid #ced4da";
        }
    });

    // Stupid again :))
    if (check > 0) {
        register_btn.disabled = true;
        return false;
    } else {
        return true;
    }
}

// ********************** SIGNIN ACCOUNT **********************
let email_login = document.getElementById('email-login');
let password_login = document.getElementById('password-login');

let userAct = document.getElementById('userAct');
let userProfile = document.getElementById('userProfile');
let adminProfile = document.getElementById('adminProfile');

let sign_btn = document.getElementById('signin');
sign_btn.addEventListener('click', actSignIn);

function actSignIn() {
    let valueOfAuthen = authenticate(email_login.value, password_login.value);
    if (valueOfAuthen !== null) {
        alert('Đăng Nhập Thành Công !');
        sessionStorage.setItem('SESSION', JSON.stringify(valueOfAuthen));
        $('#form_account').modal('hide');
        checkSession();
    } else {
        alert('Đăng Nhập Thất Bại !');
    }
}

// Authenticate Account
function authenticate(email_login, password_login) {
    let userIDAndRole = null;
    ACCOUNTS.forEach(account => {
        if (account.email === email_login && account.password === password_login) {
            userIDAndRole = {
                userID: account.ID,
                role: account.role
            }
        }
    });
    return userIDAndRole;
}

window.onload = checkSession();

// Check Session Storage
function checkSession() {
    SESSION = JSON.parse(sessionStorage.getItem('SESSION'));

    if (SESSION === null) {
        userAct.style.display = 'flex';
        userProfile.style.display = 'none';
        adminProfile.style.display = 'none';
    } else {
        if (SESSION.role === 'User') {
            userAct.style.display = 'none';
            userProfile.style.display = 'block';
            adminProfile.style.display = 'none';
        } else {
            userAct.style.display = 'none';
            userProfile.style.display = 'none';
            adminProfile.style.display = 'block';
        }
    }
}

// ========================================= PROFILE ACCOUNT CLIENT ===========================================
userProfile.addEventListener('click', actProfileToggle);
adminProfile.addEventListener('click', actProfileToggle);

let logout = document.getElementById('logout');

logout.addEventListener('click', function () {
    sessionStorage.clear();
    location.reload();
})

function actProfileToggle() {
    SESSION = JSON.parse(sessionStorage.getItem('SESSION'));

    ACCOUNTS.forEach(function (account) {
        if (account.ID === SESSION.userID) {
            renderProfileDetail(account);
            renderProfileOrder(account.ID);
        }
    })
}

function renderProfileDetail(account) {
    let p_name = document.getElementById('p_name');
    let p_number = document.getElementById('p_number');
    let p_email = document.getElementById('p_email');
    let p_address = document.getElementById('p_address');
    let p_nameTitle = document.getElementById('p_nameTitle');

    p_nameTitle.innerText = account.username;
    p_name.value = account.username;
    p_number.value = account.phoneNumber;
    p_email.value = account.email;
    p_address.value = account.address;

    let manager = document.getElementById('manager');
    if (account.role === "Admin") {
        manager.style.display = 'block';
    } else {
        manager.style.display = 'none';
    }

    // *** Update User Pr0fi|e ***
    let updateProfile = document.getElementById('updateProfile');
    updateProfile.addEventListener('click', updateUserProfile);

    function updateUserProfile() {
        account.username = p_name.value;
        account.phoneNumber = p_number.value;
        account.email = p_email.value;
        account.address = p_address.value;
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        alert('Update Thành Công !');
    }
}

function renderProfileOrder(ID) {
    let profileTbody = document.getElementById('profileTbody');
    let content = '';
    ORDERS.forEach(order => {
        if (order.userID === ID) {
            let productList = ``;
            let total_price = 0;
            order.products.forEach(p => {
                productList += `
                    ${p.productName} (x${p.quantity})<br>
                `
                total_price += p.quantity * p.price
            });

            content += `
            <tr>
                <th scope="row" class="text-info">${order.orderId}</th>
                <td>${order.createDate}</td>
                <td>${productList}</td>
                <td>${formatter.format(total_price)}</td>
                <td class="text-center">${order.status}</td>
            </tr>
            `;
        }
    })
    profileTbody.innerHTML = content;
}

// ********************** Show Profile *****************************
let s_profileInfo = document.getElementById('s_profileInfo');
let s_profileOrder = document.getElementById('s_profileOrder');

s_profileInfo.addEventListener('click', showProfileInfo);
s_profileOrder.addEventListener('click', showProfileOrder);

function showProfileInfo() {
    document.getElementById('account-info').style.display = 'block';
    document.getElementById('order-info').style.display = 'none';
}

function showProfileOrder() {
    document.getElementById('account-info').style.display = 'none';
    document.getElementById('order-info').style.display = 'block';
}

// ========================================= PRODUCT CLIENT ===========================================
let owl_slide = document.getElementById('owl-slide');
let extra_product = document.getElementById('extra-product');
let all_product = document.getElementById('all-product');

window.onload = loadProduct(PRODUCTS);

function loadProduct(PRODUCTS) {
    PRODUCTS.forEach(product => {
        if (product.idcategory === "2") {
            renderExtraProduct(product);
        } else {
            renderProduct(product);
        }
        renderAllProduct(product);
    });

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true
    });
}

function renderProduct(product) {
    let contents = `
        <div class="card" style="width: 18rem;" data-aos="fade-left">
            <img src="images/${product.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${formatter.format(product.price)}</p>
                <button class="btn btn-primary btn-sm" id="addCart" data-code="${product.code}">Thêm Giỏ Hàng</button>
            </div>
        </div>`;
    owl_slide.innerHTML += contents;
}

function renderExtraProduct(product) {
    let contents = `
    <div class="card text-center col-3 mb-2" data-aos="zoom-in-down">
        <img src="images/${product.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">${formatter.format(product.price)}</p>
            <button class="btn btn-primary btn-sm" id="addCart" data-code="${product.code}">Thêm Giỏ Hàng</button>
        </div>
    </div>`;
    extra_product.innerHTML += contents;
}

function renderAllProduct(product) {
    let contents = `
        <div class="card col-3 text-center mb-2" data-aos="zoom-in-right">
            <img src="images/${product.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${formatter.format(product.price)}</p>
                <button class="btn btn-primary btn-sm" id="addCart" data-code="${product.code}">Thêm Giỏ Hàng</button>
            </div>
        </div>
        `;
    all_product.innerHTML += contents;
}

// **********************  FILTER PRODUCT **********************
let filter_option = document.getElementById('filter-option');
filter_option.addEventListener('change', filterProduct);

function filterProduct() {
    let option = filter_option.value;
    if (option === 'priceUp') {
        PRODUCTS.sort(function (p1, p2) {
            return p1.price - p2.price;
        })
        all_product.innerHTML = '';
        PRODUCTS.forEach(product => renderAllProduct(product));
    }
    if (option === 'priceDown') {
        PRODUCTS.sort(function (p1, p2) {
            return p2.price - p1.price;
        })
        all_product.innerHTML = '';
        PRODUCTS.forEach(product => renderAllProduct(product));
    }
}

// ****************** Search ********************************
let search = document.getElementById("search");
search.addEventListener('input', actSearch);

// Trong home.js
// Cập nhật actSearch
function actSearch() {
    let searchInput = search.value;
    let productCompare = PRODUCTS.filter(product => searchCompare(searchInput, product.productName));
    all_product.innerHTML = '';
    productCompare.forEach(product => {
        renderAllProduct(product);
    });

    let recommendationList = document.getElementById('recommendation-list');
    if (!recommendationList) {
        console.error("Không tìm thấy recommendation-list");
        return;
    }
    recommendationList.innerHTML = '';

    if (productCompare.length === 1) {
        let product = productCompare[0];
        let recommendations = getFrequentlyBoughtTogether(product.code);
        if (recommendations.length > 0) {
            let recommendationHTML = '<li class="list-group-item"><strong>Thường được mua kèm:</strong></li>';
            recommendations.forEach(p => {
                recommendationHTML += `
                    <li class="list-group-item d-flex align-items-center">
                        <img width="50" height="30" src="images/${p.image}" alt="${p.productName}">
                        <span class="ml-2">${p.productName} - ${formatter.format(p.price)}</span>
                        <button class="btn btn-primary btn-sm ml-auto" id="addCart" data-code="${p.code}">Thêm</button>
                    </li>`;
            });
            recommendationList.innerHTML = recommendationHTML;

            recommendationList.querySelectorAll('#addCart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        } else {
            recommendationList.innerHTML = '<li class="list-group-item">Không có gợi ý sản phẩm mua kèm.</li>';
        }
    } else {
        console.log("Số sản phẩm tìm thấy:", productCompare.length); // Debug
    }
}

// Search Compare
function searchCompare(searchInput, productName) {
    let searchInputLower = searchInput.toLowerCase();
    let productNameLower = productName.toLowerCase();
    return productNameLower.includes(searchInputLower);
}

// ========================================= CART CLIENT ===========================================
// ********************** ADD CART **********************
let addCarts = document.querySelectorAll('#addCart');

addCarts.forEach(function (addCart) {
    addCart.addEventListener('click', addToCart);
})

function addToCart() {
    let productCode = this.getAttribute('data-code');
    let products = SESSION.products;
    let productSaveCart;

    PRODUCTS.forEach(p => {
        if (p.code === productCode) {
            productSaveCart = p;
        }
    })

    let { image, productName, price } = productSaveCart;

    let product = {
        code: productCode,
        productName: productName,
        price: price,
        image: image,
        quantity: 1
    }

    if (products !== undefined) {
        let check = 0;
        products.forEach(p => {
            if (p.code === productCode) {
                p.quantity = p.quantity + 1;
                check++;
            }
        })

        if (check === 0) {
            products.push(product);
        }

    } else {
        SESSION.products = [];
        SESSION.products.push(product);
    }

    sessionStorage.setItem('SESSION', JSON.stringify(SESSION));
    alert('Thêm Sản Phẩm Vào Giỏ Hàng Thành Công !');

}

// ********************** CART DETAIL **********************
let checkout = document.getElementById('checkout');
let body_content = document.getElementById('body-content');
let body_cart = document.getElementById('body-cart');

let cart_table = document.getElementById('cart-table');

checkout.addEventListener('click', showCartDetail);

function showCartDetail() {
    cartOverlayOff();
    body_content.style.display = 'none';
    body_cart.style.display = 'block';
    renderCartDetail();
}

function renderCartDetail() {
    let products = SESSION.products;
    let contents = '';
    let total_price = 0;
    let total_quantity = 0;

    products.forEach(p => {
        contents += `
        <tr>
            <td>
                <img width="50" height="25" src="images/${p.image}" alt="">
            </td>
            <td>${p.productName}</td>
            <td>${formatter.format(p.price)}</td>
            <td>
                <i class="fas fa-minus-circle text-secondary" id="minus" data-code="${p.code}"></i>
                <input type="text" value="${p.quantity}" min="1" style="width: 35px; padding-left: 8px;" disabled />
                <i class="fas fa-plus-circle text-success" id="plus" data-code="${p.code}"></i>
            </td>
            <td>${formatter.format(p.price * p.quantity)}</td>
            <td>
                <i class="fas fa-times text-danger" id="remove" data-code="${p.code}"></i>
            </td>
        </tr> `;
        total_price += p.price * p.quantity;
        total_quantity += p.quantity;
    });

    cart_table.innerHTML = contents;
    document.getElementById('payment-info').innerHTML = `
        <div class="col-6">
            <p>Tổng số lượng:</p>
            <p>Tổng giá:</p>
            <p>Giảm giá:</p>
            <p>Thành tiền:</p>
        </div>
        <div class="col-6">
            <p>${total_quantity}</p>
            <p>${formatter.format(total_price)}</p>
            <p>0 ₫</p>
            <p>${formatter.format(total_price)}</p>
        </div>
    `;
    loadUserInfo();
}

function loadUserInfo() {
    ACCOUNTS.forEach(function (account) {
        if (account.ID === SESSION.userID) {
            renderUserInfo(account);
        }
    })
}
let customer_name = document.getElementById('customer-name');
let customer_number = document.getElementById('customer-number');
let customer_address = document.getElementById('customer-address');
let customer_email = document.getElementById('customer-email');
let customer_note = document.getElementById('customer-note');
let customer_check = document.getElementById('customer-check');

function renderUserInfo(account) {
    customer_name.value = account.username;
    customer_number.value = account.phoneNumber;
    customer_address.value = account.address;
    customer_email.value = account.email;
}

// ********************** CART ACTION **********************
cart_table.addEventListener('click', actCartProduct);

function actCartProduct(event) {
    let ev = event.target;
    let data_code = ev.getAttribute('data-code');

    if (ev.matches('#minus')) {
        let nValue = parseInt(ev.nextElementSibling.value) - 1;
        if (nValue <= 0) {
            nValue = 1;
            ev.nextElementSibling.value = nValue;
        } else {
            ev.nextElementSibling.value = nValue;
        }
        updateCartProduct(data_code, nValue);
    }

    if (ev.matches('#plus')) {
        let nValue = parseInt(ev.previousElementSibling.value) + 1;
        ev.previousElementSibling.value = nValue;
        updateCartProduct(data_code, nValue);
    }

    if (ev.matches('#remove')) {
        let products = SESSION.products;
        products = products.filter(product => product.code !== data_code);
        SESSION.products = products;
        sessionStorage.setItem('SESSION', JSON.stringify(SESSION));
        renderCartDetail();
    }
}

function updateCartProduct(code, nQuantity) {
    let products = SESSION.products;

    products.forEach(p => {
        if (p.code === code) {
            p.quantity = nQuantity;
        }
    })

    sessionStorage.setItem('SESSION', JSON.stringify(SESSION));
    renderCartDetail();
}

// ********************** ORDER ACTION **********************
let order_btn = document.getElementById('order');

order_btn.addEventListener('click', actOrder);

// Cập nhật actOrder
function actOrder() {
    let order = {
        orderId: generateUUIDV4(),
        userID: SESSION.userID,
        customerInfo: {
            customerName: customer_name.value,
            customerNumber: customer_number.value,
            customerAddress: customer_address.value,
            customerEmail: customer_email.value,
            customerNote: customer_note.value
        },
        payMethod: 'Giao Hàng Tại Nhà',
        products: SESSION.products,
        createDate: moment(new Date()).format("DD/MM/YYYY"),
        status: 'Đặt Hàng'
    }

    if (validateForm()) {
        ORDERS.push(order);
        localStorage.setItem('DATABASE', JSON.stringify(DATABASE));
        prepost(2); // Cập nhật tập hợp phổ biến
        alert('Đặt hàng thành công !');
        SESSION.products = [];
        sessionStorage.setItem('SESSION', JSON.stringify(SESSION));
        location.reload();
    }

    order_btn.disabled = false;
}
function validateForm() {
    let customer_form = document.getElementById('customer-form');
    let customer_input = customer_form.querySelectorAll('input');
    let check = 0;
    customer_input.forEach(input => {
        if (input.value === '') {
            input.style.border = "1px solid red";
            check++;
        } else {
            input.style.border = "1px solid #ced4da";
        }
    })

    // Stupid again :))
    if (check > 0) {
        order_btn.disabled = true;
        return false;
    } else {
        return true;
    }
}
// Trong home.js

// ==================== PREPOST (PP-TREE) ==========================
let FREQUENT_ITEMSETS = localStorage.getItem('FREQUENT_ITEMSETS') 
    ? JSON.parse(localStorage.getItem('FREQUENT_ITEMSETS')) 
    : [];

function prepost(minSupport) {
    if (!ORDERS || ORDERS.length === 0) {
        console.log("Không có đơn hàng để chạy PrePost");
        FREQUENT_ITEMSETS = [];
        localStorage.setItem('FREQUENT_ITEMSETS', JSON.stringify(FREQUENT_ITEMSETS));
        return;
    }

    // Bước 1: Đếm tần suất sản phẩm
    let itemCount = {};
    ORDERS.forEach(order => {
        order.products.forEach(p => {
            itemCount[p.code] = (itemCount[p.code] || 0) + 1;
        });
    });

    // Lọc sản phẩm đạt min-support
    let frequentItems = Object.entries(itemCount)
        .filter(([_, count]) => count >= minSupport)
        .sort((a, b) => b[1] - a[1])
        .map(([code]) => code);

    // Bước 2: Sắp xếp giao dịch
    let transactions = ORDERS.map(order => {
        return order.products
            .map(p => p.code)
            .filter(code => frequentItems.includes(code))
            .sort((a, b) => frequentItems.indexOf(a) - frequentItems.indexOf(b));
    }).filter(t => t.length > 0);

    // Bước 3: Xây dựng PP-Tree
    let ppTree = { item: null, count: 0, children: {}, preOrder: 0, postOrder: 0 };
    let preOrderCounter = 0;
    let postOrderCounter = 0;

    function addTransaction(node, transaction, index) {
        if (index >= transaction.length) return;

        let item = transaction[index];
        if (!node.children[item]) {
            node.children[item] = {
                item,
                count: 0,
                children: {},
                preOrder: 0,
                postOrder: 0
            };
        }
        node.children[item].count++;
        if (index === 0) {
            node.children[item].preOrder = ++preOrderCounter;
        }
        addTransaction(node.children[item], transaction, index + 1);
        if (index === 0) {
            node.children[item].postOrder = ++postOrderCounter;
        }
    }

    transactions.forEach(transaction => {
        addTransaction(ppTree, transaction, 0);
    });

    // Bước 4: Khai thác tập hợp phổ biến
    FREQUENT_ITEMSETS = [];
    function minePPTree(tree, prefix, minSupport) {
        Object.entries(tree.children).forEach(([item, node]) => {
            let support = node.count;
            if (support >= minSupport) {
                let newItemset = [...prefix, item];
                FREQUENT_ITEMSETS.push({ itemset: newItemset, support });
                if (node.preOrder > 0 && node.postOrder > 0) {
                    minePPTree(node, newItemset, minSupport);
                }
            }
        });
    }

    frequentItems.forEach(item => {
        let node = ppTree.children[item];
        if (node && node.count >= minSupport) {
            FREQUENT_ITEMSETS.push({ itemset: [item], support: node.count });
            minePPTree(node, [item], minSupport);
        }
    });

    console.log("Frequent Itemsets:", FREQUENT_ITEMSETS); // Debug
    localStorage.setItem('FREQUENT_ITEMSETS', JSON.stringify(FREQUENT_ITEMSETS));
}

function getFrequentlyBoughtTogether(productCode) {
    console.log("Product Code:", productCode); // Debug
    if (!FREQUENT_ITEMSETS || FREQUENT_ITEMSETS.length === 0) {
        console.log("Không có FREQUENT_ITEMSETS");
        return [];
    }

    let relatedItemsets = FREQUENT_ITEMSETS.filter(itemset => 
        itemset.itemset.includes(productCode)
    );
    console.log("Related Itemsets:", relatedItemsets); // Debug

    let productCounts = {};
    relatedItemsets.forEach(itemset => {
        itemset.itemset.forEach(code => {
            if (code !== productCode) {
                productCounts[code] = (productCounts[code] || 0) + itemset.support;
            }
        });
    });

    let recommendations = Object.entries(productCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([code]) => PRODUCTS.find(p => p.code === code))
        .filter(p => p);

    console.log("Recommendations:", recommendations); // Debug
    return recommendations;
}

// Gọi PrePost khi tải trang
window.onload = function() {
    checkSession();
    prepost(2); // Min-support = 2
    loadProduct(PRODUCTS);
};