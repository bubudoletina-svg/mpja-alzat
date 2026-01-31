* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f5f7fa;
}

/* NAVBAR */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: #00aaff;
    color: white;
}

.logo span {
    color: #ffd500;
}

.cart-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

/* HERO */
.hero {
    text-align: center;
    padding: 60px;
    animation: fadeIn 1s ease;
}

/* PRODUCTS */
.products {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 40px;
}

.product {
    background: white;
    padding: 20px;
    border-radius: 20px;
    width: 220px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.product img {
    width: 100%;
}

.product button {
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    border: none;
    background: #00aaff;
    color: white;
    border-radius: 15px;
    cursor: pointer;
}

/* ANIMÁCIE */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

