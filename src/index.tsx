import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './' }))

// Main page route
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Holdwell LTD - Strategic Consulting & Services</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/static/styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header" id="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <a href="/">Holdwell LTD</a>
                </div>
                <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#home" class="nav-link active">Home</a></li>
                    <li><a href="#about" class="nav-link">About Us</a></li>
                    <li><a href="#services" class="nav-link">Services</a></li>
                    <li><a href="#products" class="nav-link">Products</a></li>
                    <li><a href="#blog" class="nav-link">Blog</a></li>
                    <li><a href="#contact" class="nav-link">Contact Us</a></li>
                </ul>
                <div class="nav-cta">
                    <button class="btn btn-primary">Request Service</button>
                    <button class="btn btn-secondary">Explore Products</button>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-background">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">We Help Brands, Institutions & Individuals Communicate Clearly</h1>
                <p class="hero-subtitle">Strategic consulting, products, and services that move you forward</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary btn-large">Request Service</button>
                    <button class="btn btn-secondary btn-large">Explore Products</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Holdwell Section -->
    <section class="why-holdwell" id="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Why Choose Holdwell</h2>
                <p class="section-subtitle">We deliver excellence through four core principles</p>
            </div>
            <div class="cards-grid cards-grid-4">
                <div class="card feature-card">
                    <div class="card-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="card-title">Clarity</h3>
                    <p class="card-description">We simplify complex ideas and transform them into clear, actionable strategies that resonate with your audience.</p>
                </div>
                <div class="card feature-card">
                    <div class="card-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="card-title">Trust</h3>
                    <p class="card-description">Building lasting relationships through transparency, reliability, and unwavering commitment to your success.</p>
                </div>
                <div class="card feature-card">
                    <div class="card-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="card-title">Growth</h3>
                    <p class="card-description">Driving measurable results that propel your business forward with innovative solutions and data-driven insights.</p>
                </div>
                <div class="card feature-card">
                    <div class="card-icon">
                        <i class="fas fa-chess-knight"></i>
                    </div>
                    <h3 class="card-title">Strategy</h3>
                    <p class="card-description">Crafting tailored roadmaps that align with your vision and deliver sustainable competitive advantage.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">Comprehensive solutions designed to elevate your brand</p>
            </div>
            <div class="cards-grid cards-grid-2">
                <div class="card service-card">
                    <div class="card-icon">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <h3 class="card-title">Brand Strategy</h3>
                    <p class="card-description">Develop powerful brand identities that capture attention and build lasting connections with your target audience.</p>
                    <button class="btn btn-primary">Request Service</button>
                </div>
                <div class="card service-card">
                    <div class="card-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3 class="card-title">Communication Consulting</h3>
                    <p class="card-description">Strategic communication planning that ensures your message reaches and resonates with the right people.</p>
                    <button class="btn btn-primary">Request Service</button>
                </div>
                <div class="card service-card">
                    <div class="card-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <h3 class="card-title">Digital Solutions</h3>
                    <p class="card-description">Cutting-edge digital products and platforms that transform how you engage with your customers.</p>
                    <button class="btn btn-primary">Request Service</button>
                </div>
                <div class="card service-card">
                    <div class="card-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3 class="card-title">Partnership Development</h3>
                    <p class="card-description">Build strategic partnerships and collaborations that unlock new opportunities and drive growth.</p>
                    <button class="btn btn-primary">Request Service</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products" id="products">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Products</h2>
                <p class="section-subtitle">Innovative solutions that empower your success</p>
            </div>
            <div class="cards-grid cards-grid-3">
                <div class="card product-card">
                    <div class="product-image">
                        <div class="product-placeholder">
                            <i class="fas fa-book-open"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Beholder Magazine</h3>
                        <p class="card-description">A premium publication featuring insights, stories, and perspectives that inspire and inform leaders.</p>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div class="card product-card">
                    <div class="product-image">
                        <div class="product-placeholder">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">HoldApp</h3>
                        <p class="card-description">Your all-in-one productivity platform designed to streamline workflows and boost team collaboration.</p>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div class="card product-card">
                    <div class="product-image">
                        <div class="product-placeholder">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Lumivue</h3>
                        <p class="card-description">Advanced analytics and visualization tools that transform data into actionable business intelligence.</p>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div class="card product-card">
                    <div class="product-image">
                        <div class="product-placeholder">
                            <i class="fas fa-blog"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Hold'em Blog</h3>
                        <p class="card-description">Thought leadership and industry insights delivered through engaging content that matters to you.</p>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div class="card product-card">
                    <div class="product-image">
                        <div class="product-placeholder">
                            <i class="fas fa-briefcase"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Tree to Five</h3>
                        <p class="card-description">Professional development resources and training programs that cultivate leadership excellence.</p>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="process">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">How We Work</h2>
                <p class="section-subtitle">Our proven four-step process delivers exceptional results</p>
            </div>
            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <h3 class="step-title">Discover</h3>
                    <p class="step-description">We dive deep to understand your goals, challenges, and opportunities through comprehensive research and analysis.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <h3 class="step-title">Strategize</h3>
                    <p class="step-description">Crafting tailored solutions and actionable roadmaps that align perfectly with your vision and objectives.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <h3 class="step-title">Execute</h3>
                    <p class="step-description">Implementing strategies with precision and excellence, bringing your vision to life with meticulous attention to detail.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">4</div>
                    <h3 class="step-title">Optimize</h3>
                    <p class="step-description">Continuous monitoring and refinement to ensure sustained success and maximum return on your investment.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Preview Section -->
    <section class="blog-preview" id="blog">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Latest Insights</h2>
                <p class="section-subtitle">Stay informed with our latest articles and thought leadership</p>
            </div>
            <div class="cards-grid cards-grid-3">
                <article class="card blog-card">
                    <div class="blog-image">
                        <div class="blog-placeholder">
                            <i class="fas fa-newspaper"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">The Future of Brand Communication in 2026</h3>
                        <p class="card-description">Explore emerging trends and strategies that will shape how brands connect with audiences in the digital age.</p>
                        <button class="btn btn-text">Read More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </article>
                <article class="card blog-card">
                    <div class="blog-image">
                        <div class="blog-placeholder">
                            <i class="fas fa-newspaper"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Building Trust: The Foundation of Success</h3>
                        <p class="card-description">Discover proven strategies for establishing and maintaining trust with your stakeholders and customers.</p>
                        <button class="btn btn-text">Read More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </article>
                <article class="card blog-card">
                    <div class="blog-image">
                        <div class="blog-placeholder">
                            <i class="fas fa-newspaper"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Digital Transformation: A Strategic Approach</h3>
                        <p class="card-description">Learn how to navigate digital transformation successfully with strategic planning and execution excellence.</p>
                        <button class="btn btn-text">Read More <i class="fas fa-arrow-right"></i></button>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">What Our Clients Say</h2>
                <p class="section-subtitle">Trusted by leading brands and institutions</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-quote">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">"Holdwell transformed our brand strategy completely. Their clarity and strategic thinking delivered results beyond our expectations."</p>
                    <div class="testimonial-author">
                        <strong>Sarah Johnson</strong>
                        <span>CEO, TechVision Inc.</span>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-quote">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">"The partnership with Holdwell has been transformative. Their products and services are truly world-class."</p>
                    <div class="testimonial-author">
                        <strong>Michael Chen</strong>
                        <span>Director, Global Innovations</span>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-quote">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">"Outstanding results and exceptional service. Holdwell helped us achieve our communication goals with precision."</p>
                    <div class="testimonial-author">
                        <strong>Emily Rodriguez</strong>
                        <span>CMO, Creative Solutions</span>
                    </div>
                </div>
            </div>
            <div class="clients-logos">
                <h3 class="clients-title">Trusted by Leading Organizations</h3>
                <div class="logos-grid">
                    <div class="client-logo"><i class="fas fa-building"></i> Client 1</div>
                    <div class="client-logo"><i class="fas fa-building"></i> Client 2</div>
                    <div class="client-logo"><i class="fas fa-building"></i> Client 3</div>
                    <div class="client-logo"><i class="fas fa-building"></i> Client 4</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-col footer-about">
                    <h3 class="footer-title">Holdwell LTD</h3>
                    <p class="footer-description">Strategic consulting, products, and services that help brands, institutions, and individuals communicate clearly and grow sustainably.</p>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">Services</h4>
                    <ul class="footer-links">
                        <li><a href="#services">Brand Strategy</a></li>
                        <li><a href="#services">Communication Consulting</a></li>
                        <li><a href="#services">Digital Solutions</a></li>
                        <li><a href="#services">Partnership Development</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-heading">Contact Us</h4>
                    <ul class="footer-contact">
                        <li>
                            <i class="fas fa-phone"></i>
                            <a href="tel:+255792178828">+255 792 178 828</a>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:info@holdwell.co.tz">info@holdwell.co.tz</a>
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Dar es Salaam, Tanzania</span>
                        </li>
                    </ul>
                </div>
                <div class="footer-col footer-newsletter">
                    <h4 class="footer-heading">Newsletter</h4>
                    <p>Subscribe to receive our latest insights and updates.</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your email address" required>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Holdwell LTD. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="/static/app.js"></script>
</body>
</html>
  `)
})

export default app
