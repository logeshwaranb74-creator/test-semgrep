<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#2c5f2d">
    <title>Aswath Naturale Pvt Ltd</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<style>
    /* Cart Indicator Styles */
    .cart-nav-item {
        position: relative;
    }

    .cart-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #dc3545;
        color: white;
        border-radius: 50%;
        padding: 0.25em 0.6em;
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 1;
        display: none;
        /* Hidden by default until items added */
    }

    .cart-badge.show {
        display: inline-block;
    }
</style>

<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="images/logo.png" alt="Aswath Naturale" height="40" class="me-2">
                Aswath Naturale
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aboutus.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#benefits">Benefits</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                                            <li class="nav-item">
                            <a class="nav-link" href="login.php">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="register.php">Register</a>
                        </li>
                                        <li class="nav-item cart-nav-item">
                        <a class="nav-link" href="cart.php">
                            <i class="fas fa-shopping-cart"></i>
                            <span id="cart-badge" class="cart-badge">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="container">
            <h1>Aswath Naturale Pvt Ltd.</h1>
            <p>Transform your life with our premium ayurvedic hair oil, 10x Pain relief oil, Dhal Rice powder, Arogya
                Navaratna powder, delicious pickles, Garlic pepper paste, Nutrient flour mix powder, Home made recipes,
                beauty and wellness products—crafted for your wellness journey.</p>

        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-5">
        <div class="container">
            <h2 class="section-title">Our Premium Products</h2>
            <div class="row">
                <div class="col-12 mb-4"><h1 class="border-bottom pb-2">Food Products</h1></div>                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=4">
                                                                                                    <img src="images/dhal_rice_powder.jpeg"
                                                        alt="Aswath Dhal Rice Powder"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=4"
                                                    class="text-decoration-none text-dark">Aswath Dhal Rice Powder</a>
                                            </h4>
                                            <p class="text-muted">Nutritious dhal rice powder for a healthy diet.</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹95</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="4"
                                                    data-name="Aswath Dhal Rice Powder"
                                                    data-price="95.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=3">
                                                                                                    <img src="images/69660592db7a5.png"
                                                        alt="Aswath Navaratna Arogya Powder"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=3"
                                                    class="text-decoration-none text-dark">Aswath Navaratna Arogya Powder</a>
                                            </h4>
                                            <p class="text-muted">Premium health supplement powder for overall wellness.</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹160</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="3"
                                                    data-name="Aswath Navaratna Arogya Powder"
                                                    data-price="160.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=6">
                                                                                                    <img src="images/694e813220fea.jpeg"
                                                        alt="Pure Cow Ghee "
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=6"
                                                    class="text-decoration-none text-dark">Pure Cow Ghee </a>
                                            </h4>
                                            <p class="text-muted">Pure Cow Ghee prepared using the traditional Method with a good aroma. Contains no chemicals or preservatives of any sort </p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹490</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="6"
                                                    data-name="Pure Cow Ghee "
                                                    data-price="490.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=12">
                                                                                                    <img src="images/695f4cedef5c1.jpeg"
                                                        alt="Pure Cow Ghee"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=12"
                                                    class="text-decoration-none text-dark">Pure Cow Ghee</a>
                                            </h4>
                                            <p class="text-muted">Pure Cow ghee prepared using the traditional method</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹270</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="12"
                                                    data-name="Pure Cow Ghee"
                                                    data-price="270.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4"><h1 class="border-bottom pb-2">Hair Care</h1></div>                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=14">
                                                                                                    <img src="images/69761deaae2c3.jpeg"
                                                        alt="Herbal Hair Oil"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=14"
                                                    class="text-decoration-none text-dark">Herbal Hair Oil</a>
                                            </h4>
                                            <p class="text-muted">Our Hair oil is a solution for Dandruff, Lice, and Hair fall</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹386</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="14"
                                                    data-name="Herbal Hair Oil"
                                                    data-price="386.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=19">
                                                                                                    <img src="images/69762de228a81.jpeg"
                                                        alt="Hibiscus Shampoo"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=19"
                                                    class="text-decoration-none text-dark">Hibiscus Shampoo</a>
                                            </h4>
                                            <p class="text-muted">Helps reduce hair Fall
100 % Natural
 Our Shampoo is Paraben and Sulphide Free
We use natural fragrances like Rose fragrance, Hibiscus fragrance 
We do not use artificial perfumes in our shampoo as research suggests they can cause allergic reactions, dandruff issues, and hormone imbalance.

</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹405</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="19"
                                                    data-name="Hibiscus Shampoo"
                                                    data-price="405.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=17">
                                                                                                    <img src="images/697623140af70.jpeg"
                                                        alt="Intense Hair Growth Serum"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=17"
                                                    class="text-decoration-none text-dark">Intense Hair Growth Serum</a>
                                            </h4>
                                            <p class="text-muted">Water based
No Chemical (Chemical Free)
Easy Application 
An intense hair care serum is a lightweight, concentrated formula designed to nourish, repair, and protect hair strands deeply. It typically features ingredients such as argan oil,  Redensyl oil, Tea tree essential oil, and Rosemary essential oil, which protect hair against damage. </p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹1,299</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="17"
                                                    data-name="Intense Hair Growth Serum"
                                                    data-price="1299.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-4"><h1 class="border-bottom pb-2">Skin Care</h1></div>                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=16">
                                                                                                    <img src="images/69762072da320.jpeg"
                                                        alt="Rose Moisturiser"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=16"
                                                    class="text-decoration-none text-dark">Rose Moisturiser</a>
                                            </h4>
                                            <p class="text-muted">Rose moisturizer is a hydrating skincare product infused with rose extract, oil, or water, designed to deeply nourish, soothe, and brighten the skin while providing a delicate floral scent

</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹359</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="16"
                                                    data-name="Rose Moisturiser"
                                                    data-price="359.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-md-4 mb-4">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <a href="product_details.php?id=18">
                                                                                                    <img src="images/69762b4fa3c05.jpeg"
                                                        alt="Sun Screen Lotion"
                                                        style="width: 100%; height: 100%; object-fit: contain;">
                                                                                            </a>
                                        </div>
                                        <div class="p-4">
                                            <h4><a href="product_details.php?id=18"
                                                    class="text-decoration-none text-dark">Sun Screen Lotion</a>
                                            </h4>
                                            <p class="text-muted">Sunscreen lotion is a photoprotective topical product for the skin that helps protect against sunburn and prevent skin cancer</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span
                                                        class="h5 text-primary">₹389</span>
                                                    <small class="text-muted"> / unit</small>
                                                </div>
                                                <button class="btn btn-primary" data-id="18"
                                                    data-name="Sun Screen Lotion"
                                                    data-price="389.00">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            </div>

            <!-- Shipping Information -->
            <div class="row mt-5">
                <div class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h4 class="card-title mb-4"><i class="fas fa-shipping-fast me-2"></i>Shipping Information
                            </h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fas fa-map-marker-alt text-primary me-3 fa-2x"></i>
                                        <div>
                                            <h5 class="mb-1">Within Tamil Nadu</h5>
                                            <p class="mb-0">Shipping Cost: ₹50</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fas fa-globe text-primary me-3 fa-2x"></i>
                                        <div>
                                            <h5 class="mb-1">Outside Tamil Nadu</h5>
                                            <p class="mb-0">Additional Shipping Cost: ₹70</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-5 bg-light">
        <div class="container">
            <h2 class="section-title">Why Choose Our Products?</h2>
            <div class="row">
                <div class="col-md-4 text-center mb-4">
                    <div class="feature-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h4>100% Natural</h4>
                    <p>Our hair oils are made from the finest natural ingredients, free from harmful chemicals and
                        sulfates.</p>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="feature-icon">
                        <i class="fas fa-flask"></i>
                    </div>
                    <h4>Scientifically Tested</h4>
                    <p>Each formula is rigorously tested for safety and effectiveness by our team of hair care experts.
                    </p>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="feature-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h4>Cruelty-Free</h4>
                    <p>We never test on animals and source our ingredients from ethical, sustainable suppliers.</p>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="feature-icon">
                        <i class="fas fa-shipping-fast"></i>
                    </div>
                    <h4>Free Shipping</h4>
                    <p>Free shipping on orders above Rs 1000. Get your products delivered within 3-5 business days.</p>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="feature-icon">
                        <i class="fas fa-undo"></i>
                    </div>
                    <h4>Money-Back Guarantee</h4>
                    <p>Not satisfied? Get your money back within 30 days, no questions asked.</p>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="feature-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h4>24/7 Support</h4>
                    <p>Our customer service team is available round the clock to help with any questions or concerns.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-5">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <!-- First slide -->
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I used pain relief oil for my shoulder pain. I find good relief, although I
                                        tried many oils earlier, but Aswath Pain Relief Oil is very effective. I got
                                        relief in just 60 seconds."</p>
                                    <strong>Auditor Ramachandran FCA</strong><br>
                                    <small class="text-muted">72 years, Coimbatore | +91 98943-36441</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I purchased and used Navaratna Arogya Powder. I am diabetic, the ingredients are
                                        working miracles, my sugar levels have come down to normal in just a week. I
                                        feel more energetic these days as my sugar levels are under control."</p>
                                    <strong>Aravind</strong><br>
                                    <small class="text-muted">70 years, Gudalur | +91 6381236304</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I had knee pain for almost 10 years tried several remedies but did not get
                                        relief. I used Aswath pain relief oil and got good relief the ingredients are
                                        working well."</p>
                                    <strong>Bharathy</strong><br>
                                    <small class="text-muted">70 years, Gudalur</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Second slide -->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I used Aswath Ayurvedic Hair Oil. After using this oil for 20 days I see good
                                        hair growth and Hair fall has reduced drastically. I got amazing results."</p>
                                    <strong>Lakshmi Priya</strong><br>
                                    <small class="text-muted">Qatar</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I used Arogya Navaratna Powder for the last 5 days my sugar levels have dropped
                                        from almost over 280 to below 150. I see good improvement."</p>
                                    <strong>Vedavalli</strong><br>
                                    <small class="text-muted">Insurance Advisor</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I am 73 years diabetic and had wounds on my foot which did not heal for long. I
                                        tried applying Aswath Pain relief oil and the wound is healing."</p>
                                    <strong>Murugesan</strong><br>
                                    <small class="text-muted">73 years, Tiruchirappalli</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Third slide -->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I am using the Arogya Navaratna Powder, and I feel more energetic, and I have
                                        good appetite and am getting good sleep. This product's ingredients are working
                                        well."</p>
                                    <strong>Rajkumar. M</strong><br>
                                    <small class="text-muted">43 years, Coimbatore | +91 79042 72439</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I tried the Pain relief oil for my sinus problem, and it has given me good
                                        relief, and I feel a lot better now. Thanks to Aswath Naturale."</p>
                                    <strong>Senthilkumar SR</strong><br>
                                    <small class="text-muted">51 years, Coimbatore | +91 98425-40568</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I have been diabetic for the past 8 years. With 10 days of continuous use of
                                        Arogya Navaratna Powder, my sugar levels have dropped to almost 110."</p>
                                    <strong>Mrs. Anandhi</strong><br>
                                    <small class="text-muted">54 years, Coimbatore</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fourth slide -->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I used pain relief oil for my shoulder pain, and the pain has reduced very much.
                                        The product is excellent."</p>
                                    <strong>Udhayshankar M</strong><br>
                                    <small class="text-muted">Mob: +91 9843020263</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I used Arogya Navartna Powder my cholesterol levels and BP have become normal. I
                                        feel more energetic these days to travel and work."</p>
                                    <strong>Treeman Logunathan</strong><br>
                                    <small class="text-muted">60 years</small>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I used Pain relief oil for my leg and knee pain. I am happy to state that I got
                                        immediate relief, and the product is really working well."</p>
                                    <strong>Dhamodaran</strong><br>
                                    <small class="text-muted">79 years, Coimbatore</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fifth slide -->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="testimonial-card">
                                    <div class="testimonial-rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                            class="fas fa-star"></i>
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p>"I purchased Arogya Navaratna Powder as I felt tired and lack of sleep. After
                                        using this product I am getting better sleep, less stress and feel more
                                        energised."</p>
                                    <strong>Sundaram</strong><br>
                                    <small class="text-muted">64 years, Coimbatore</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Carousel controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
                <!-- Carousel indicators -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0"
                        class="active"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="4"></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5><i class="fas fa-leaf"></i> Aswath Naturale</h5>
                    <p>Premium natural products for health, beauty, and wellness. Transform your lifestyle with our
                        expertly crafted products.</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/share/16VZh3Cydb/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/herbhari_india"><i class="fab fa-instagram"></i></a>
                        <a href="https://wa.me/91979166610"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://youtube.com/@herbhari"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        <li><a href="#testimonials">Reviews</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5>Support</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="return_policy.php">Returns & Refunds</a></li>
                        <li><a href="privacy_policy.php">Privacy Policy</a></li>
                        <li><a href="terms_conditions.php">Terms & Conditions</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact Info</h5>
                    <p><i class="fas fa-map-marker-alt"></i> 5 PNR Colony, Trichy Road, Coimbatore - 641018</p>
                    <p><i class="fas fa-phone"></i> +91 9791666100</p>
                    <p><i class="fas fa-envelope"></i> aswathnaturale@gmail.com</p>
                    <p><i class="fas fa-clock"></i> Mon-Fri: 9AM-6PM IST</p>
                </div>
            </div>
            <hr class="my-4">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2025 Aswath Naturale Pvt Ltd. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="me-3">Privacy Policy</a>
                    <a href="#" class="me-3">Terms of Service</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Newsletter Popup -->
    <div class="modal fade" id="newsletterPopup" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title"><i class="fas fa-envelope-open-text"></i> Subscribe to Our Newsletter</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="newsletterForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="phone" name="phone" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Subscribe</button>
                    </form>
                    <div id="newsletterMessage" class="mt-3 text-center" style="display: none;"></div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add to cart functionality
        function updateCartBadge() {
            fetch('api/cart_actions.php?action=count')
                .then(response => response.json())
                .then(data => {
                    const badge = document.getElementById('cart-badge');
                    if (data.success && data.count > 0) {
                        badge.textContent = data.count;
                        badge.classList.add('show');
                    } else {
                        badge.classList.remove('show');
                    }
                })
                .catch(err => console.error('Error fetching cart count:', err));
        }

        // Initial check
        updateCartBadge();

        document.querySelectorAll('.btn-primary').forEach(button => {
            if (button.textContent.includes('Add to Cart')) {
                button.addEventListener('click', function () {
                    const originalText = this.textContent;

                    // Use data attributes set in the PHP loop
                    const productId = this.getAttribute('data-id');
                    const name = this.getAttribute('data-name');
                    const price = this.getAttribute('data-price');

                    if (!productId) {
                        alert('Error: Product ID not found');
                        return;
                    }

                    fetch('api/cart_actions.php?action=add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            product_id: productId,
                            name: name,
                            price: price
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                this.textContent = 'Added!';
                                this.style.backgroundColor = '#28a745';
                                updateCartBadge();

                                setTimeout(() => {
                                    this.textContent = originalText;
                                    this.style.backgroundColor = '';
                                }, 2000);
                            } else {
                                alert('Failed to add to cart');
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                });
            }
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(44, 95, 45, 0.95)';
            } else {
                navbar.style.backgroundColor = '';
            }
        });

        document.addEventListener('DOMContentLoaded', function () {
            // Show popup after 3 seconds
            setTimeout(() => {
                if (!localStorage.getItem('newsletterShown')) {
                    new bootstrap.Modal(document.getElementById('newsletterPopup')).show();
                }
            }, 3000);

            // Handle form submission
            document.getElementById('newsletterForm').addEventListener('submit', function (e) {
                e.preventDefault();

                const formData = new FormData(this);
                const messageDiv = document.getElementById('newsletterMessage');

                fetch('process_newsletter.php', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        messageDiv.style.display = 'block';
                        messageDiv.className = data.success ? 'alert alert-success' : 'alert alert-danger';
                        messageDiv.textContent = data.message;

                        if (data.success) {
                            localStorage.setItem('newsletterShown', 'true');
                            setTimeout(() => {
                                bootstrap.Modal.getInstance(document.getElementById('newsletterPopup')).hide();
                            }, 2000);
                        }
                    })
                    .catch(error => {
                        messageDiv.style.display = 'block';
                        messageDiv.className = 'alert alert-danger';
                        messageDiv.textContent = 'An error occurred. Please try again later.';
                    });
            });
        });
    </script>
</body>

<script>'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd && (window._trfd=[]),_trfd.push({'tccl.baseHost':'secureserver.net'},{'ap':'cpsh-oh'},{'server':'p3plzcpnl509441'},{'dcenter':'p3'},{'cp_id':'10459569'},{'cp_cl':'8'}) // Monitoring performance to make your website faster. If you want to opt-out, please contact web hosting support.</script><script src='https://img1.wsimg.com/traffic-assets/js/tccl.min.js'></script></html>
