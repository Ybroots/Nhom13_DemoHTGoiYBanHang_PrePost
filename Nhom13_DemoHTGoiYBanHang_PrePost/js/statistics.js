// Lấy dữ liệu từ localStorage
let DATABASE = JSON.parse(localStorage.getItem('DATABASE')) || { ORDERS: [] };
let ORDERS = DATABASE.ORDERS;
console.log("ORDERS hiện tại:", ORDERS);

function calculateProductSummary(orders) {
    const productSummary = {};

    // Duyệt qua từng đơn hàng
    orders.forEach(order => {
        order.products.forEach(product => {
            if (productSummary[product.productName]) {
                productSummary[product.productName].quantity += product.quantity;
                productSummary[product.productName].revenue += product.price * product.quantity;
            } else {
                productSummary[product.productName] = {
                    quantity: product.quantity,
                    revenue: product.price * product.quantity
                };
            }
        });
    });

    return productSummary;
}

function displayProductSummary(productSummary) {
    const tableBody = document.getElementById('product-summary-body');
    tableBody.innerHTML = ''; // Xóa dữ liệu cũ trước khi thêm mới

    Object.entries(productSummary).forEach(([productName, details]) => {
        const row = `
            <tr>
                <td>${productName}</td>
                <td>${details.quantity}</td>
                <td>${details.revenue.toLocaleString()} VND</td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}

// Thêm vào sự kiện khi trang được load
document.addEventListener('DOMContentLoaded', () => {
    const productSummary = calculateProductSummary(ORDERS);
    displayProductSummary(productSummary);

    // Các hàm hiển thị khác
    displaySalesAndRevenue();
});

// Gợi ý sản phẩm bằng thuật toán PrePost (sử dụng thư viện FP-Growth)
function generateRecommendations(orders) {
    if (!orders || orders.length === 0) {
        console.warn("Không có đơn hàng để phân tích.");
        displayRecommendations([]);
        return;
    }

    const transactions = orders.map(order => order.products.map(product => product.productName));

    if (transactions.length === 0) {
        console.warn("Không có sản phẩm nào trong giao dịch.");
        displayRecommendations([]);
        return;
    }

    // Sử dụng thư viện FP-Growth
    const fpgrowth = new FPGrowth();

    fpgrowth
        .exec(transactions, 0.01) // Ngưỡng hỗ trợ tối thiểu: 10%
        .then(frequentItemsets => {
            console.log("Frequent Itemsets:", frequentItemsets);
            displayRecommendations(frequentItemsets);
        })
        .catch(error => {
            console.error("Lỗi khi chạy FP-Growth:", error);
            displayRecommendations([]);
        });
}

// Hiển thị danh sách gợi ý sản phẩm
function displayRecommendations(frequentItemsets) {
    const list = document.getElementById('recommendation-list');
    list.innerHTML = '';

    if (!frequentItemsets || frequentItemsets.length === 0) {
        const listItem = document.createElement('li');
        listItem.innerText = 'Không có gợi ý sản phẩm.';
        list.appendChild(listItem);
        return;
    }

    // Sắp xếp giảm dần theo mức hỗ trợ
    frequentItemsets.sort((a, b) => b.support - a.support);

    frequentItemsets.forEach(itemset => {
        const listItem = document.createElement('li');
        const items = itemset.items.join(', ');
        const support = (itemset.support * 100).toFixed(2); // Hiển thị phần trăm (0.5 -> 50%)
        if (itemset.items.length === 1) {
            listItem.innerText = `Mua thêm sản phẩm: ${items} (Phổ biến: ${support}%)`;
        } else {
            listItem.innerText = `Mua kèm: ${items} (Phổ biến: ${support}%)`;
        }
        list.appendChild(listItem);
    });
}
// Tính tổng doanh thu từng mặt hàng
function calculateRevenueByProduct(orders) {
    const revenueByProduct = {};

    if (!orders || orders.length === 0) return revenueByProduct;

    orders.forEach(order => {
        order.products.forEach(product => {
            const { productName, price, quantity } = product;

            if (!revenueByProduct[productName]) {
                revenueByProduct[productName] = 0;
            }

            revenueByProduct[productName] += price * quantity;
        });
    });

    return revenueByProduct;
}
//tong doanh thu 
// Hàm tính tổng doanh thu từ ORDERS
function calculateTotalRevenue(orders) {
    let totalRevenue = 0;

    orders.forEach(order => {
        order.products.forEach(product => {
            totalRevenue += product.price * product.quantity;
        });
    });

    return totalRevenue;
}

// Hiển thị tổng doanh thu
function displayTotalRevenue() {
    const totalRevenue = calculateTotalRevenue(ORDERS);
    document.getElementById('total-revenue').innerText = `${totalRevenue.toLocaleString()} VND`;
}


// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    displayTotalRevenue();
});