// Clean up any legacy theme settings
if (localStorage.getItem('theme')) {
    localStorage.removeItem('theme');
}

// Initialize AOS (Animate On Scroll) - iOS Safari 使用安全的動畫設定
// 檢測是否為 iOS Safari
const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
const isMobile = window.innerWidth <= 768;

if (isIOSSafari && isMobile) {
    // 在 iOS Safari 手機版上使用安全的動畫設定
    console.log('iOS Safari mobile detected - using safe animation settings');
    AOS.init({
        duration: 600,
        easing: 'ease',
        once: true,
        mirror: false,
        disable: false,
        // 使用只有 opacity 和 translate 的安全動畫
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'aos-animate'
    });
} else {
    // 其他設備正常初始化 AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const header = document.querySelector('.header');

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hide');
            // 顯示 header
            if (header) {
                header.style.opacity = '1';
            }
        }, 1000);
    }

    
    // iOS Safari 移動版專用：優化動畫以避免陰影問題
    if (isIOSSafari && isMobile) {
        // 添加 iOS Safari 專用 class
        document.body.classList.add('ios-safari-mobile');
        
        // 將有問題的動畫轉換為安全的動畫
        const aosElements = document.querySelectorAll('[data-aos]');
        aosElements.forEach(element => {
            const originalAnimation = element.getAttribute('data-aos');
            
            // 將可能造成陰影的動畫轉換為安全的 fade 動畫
            if (originalAnimation && (
                originalAnimation.includes('zoom') || 
                originalAnimation.includes('flip') || 
                originalAnimation.includes('slide') ||
                originalAnimation.includes('up') ||
                originalAnimation.includes('down')
            )) {
                element.setAttribute('data-aos', 'fade');
            }
            
            // 保持其他屬性但調整持續時間
            if (element.hasAttribute('data-aos-duration')) {
                element.setAttribute('data-aos-duration', '400');
            }
        });
        
        console.log('Optimized animations for', aosElements.length, 'elements on iOS Safari');
    }
});

// Custom Cursor (desktop only)
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');

// Only initialize cursor if elements exist
if (cursor && follower && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
        follower.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
    });

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navCenter = document.querySelector('.nav-center');

if (mobileMenuToggle && navCenter) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navCenter.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navCenter.classList.contains('active')) {
            navCenter.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // 檢查href是否為有效的選擇器（不只是'#'）
        if (href && href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 120; // 增加偏移量以避免區塊重疊
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navCenterRef = document.querySelector('.nav-center');
                const mobileMenuToggleRef = document.getElementById('mobileMenuToggle');
                if (navCenterRef && navCenterRef.classList.contains('active')) {
                    navCenterRef.classList.remove('active');
                    if (mobileMenuToggleRef) {
                        mobileMenuToggleRef.classList.remove('active');
                    }
                }
            }
        }
    });
});

// Language Management
// Check if translations are available
if (typeof translations === 'undefined') {
    console.error('Translations not loaded! Make sure languages.js is loaded before script.js');
}

let currentLanguage = localStorage.getItem('language') || 'zh-TW';

// Initialize language
function initializeLanguage() {
    console.log(`Initializing language system with: ${currentLanguage}`);
    console.log('Available languages:', Object.keys(translations));
    
    // Force re-apply the language
    setLanguage(currentLanguage);
    updateLanguageDisplay();
}

// Set language
function setLanguage(langCode) {
    console.log(`Switching to language: ${langCode}`); // 調試信息
    currentLanguage = langCode;
    localStorage.setItem('language', langCode);
    
    // Check if translations exist for this language
    if (!translations[langCode]) {
        console.error(`No translations found for language: ${langCode}`);
        return;
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    console.log(`Found ${elements.length} translatable elements`); // 調試信息
    
    let translatedCount = 0;
    let missingCount = 0;
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[langCode] && translations[langCode][key]) {
            if (element.tagName.toLowerCase() === 'title') {
                element.textContent = translations[langCode][key];
                document.title = translations[langCode][key];
            } else {
                // 使用 innerHTML 以支援 <br> 等 HTML 標籤
                element.innerHTML = translations[langCode][key];
            }
            translatedCount++;
        } else {
            // 調試：記錄缺失的翻譯鍵值
            console.warn(`Missing translation for key: ${key} in language: ${langCode}`);
            missingCount++;
        }
    });
    
    console.log(`Translation complete: ${translatedCount} translated, ${missingCount} missing`);
    
    // Force update the page title if it exists
    const titleElements = document.querySelectorAll('title, [data-translate="page.title"]');
    titleElements.forEach(element => {
        if (translations[langCode] && translations[langCode]['page.title']) {
            if (element.tagName.toLowerCase() === 'title') {
                element.textContent = translations[langCode]['page.title'];
                document.title = translations[langCode]['page.title'];
            }
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[langCode] && translations[langCode][key]) {
            element.placeholder = translations[langCode][key];
        }
    });
    
    // Update select options
    const selectOptions = document.querySelectorAll('option[data-translate]');
    selectOptions.forEach(option => {
        const key = option.getAttribute('data-translate');
        if (translations[langCode] && translations[langCode][key]) {
            option.textContent = translations[langCode][key];
        }
    });

    // Update alert messages (for buttons with data-translate-alert)
    const alertElements = document.querySelectorAll('[data-translate-alert]');
    alertElements.forEach(element => {
        const key = element.getAttribute('data-translate-alert');
        if (translations[langCode] && translations[langCode][key]) {
            element.setAttribute('data-alert', translations[langCode][key]);
        }
    });

    // Update document language
    document.documentElement.lang = langCode;

    updateLanguageDisplay();

    // 觸發語言變更事件，讓其他組件可以響應（如產品卡片翻譯）
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
}

// Update language display
function updateLanguageDisplay() {
    const currentLangElement = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (currentLangElement) {
        currentLangElement.textContent = languageNames[currentLanguage];
    }
    
    langOptions.forEach(option => {
        const langCode = option.getAttribute('data-lang');
        option.classList.toggle('active', langCode === currentLanguage);
    });
}

// Initialize language selector
function initializeLanguageSelector() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');

    if (langToggle && langDropdown) {
        let isDropdownOpen = false;

        // Toggle dropdown
        function toggleDropdown(e) {
            e.preventDefault();
            e.stopPropagation();

            // 手機版或小螢幕時調整位置
            if (window.innerWidth <= 768) {
                const toggleRect = langToggle.getBoundingClientRect();
                langDropdown.style.position = 'fixed';
                langDropdown.style.top = (toggleRect.bottom + 5) + 'px';
                langDropdown.style.right = (window.innerWidth - toggleRect.right) + 'px';
                langDropdown.style.left = 'auto';
            }

            isDropdownOpen = !isDropdownOpen;
            langDropdown.classList.toggle('show', isDropdownOpen);
        }

        // 只使用 click 事件，讓瀏覽器自動處理 touch 轉換
        langToggle.addEventListener('click', toggleDropdown);

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector') && isDropdownOpen) {
                isDropdownOpen = false;
                langDropdown.classList.remove('show');
            }
        });

        // Language option click handlers
        const langOptions = document.querySelectorAll('.lang-option');

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const langCode = option.getAttribute('data-lang');
                setLanguage(langCode);
                isDropdownOpen = false;
                langDropdown.classList.remove('show');
            });
        });
    } else {
        console.error('Language selector elements not found');
    }
}


// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');
const logoImage = document.querySelector('.logo-image');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) { // 調整導航高亮檢測偏移
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Number Counter Animation
const counters = document.querySelectorAll('.stats-number[data-count], .stat-number[data-count]');
const speed = 200;

const countUp = (counter) => {
    const targetValue = counter.getAttribute('data-count');
    const target = parseInt(targetValue.replace(/[^0-9]/g, ''));
    const count = parseInt(counter.innerText) || 0;
    const increment = target / speed;
    
    // 檢查是否有分離的符號元素（產品頁面的新結構）
    const hasSymbolSibling = counter.parentNode.querySelector('.stats-symbol');
    
    // 如果有分離的符號元素，不添加後綴
    // 如果沒有，則為聯絡頁面，需要添加+號
    const shouldShowPlus = !hasSymbolSibling && target >= 1000;
    const suffix = shouldShowPlus ? '+' : '';
    
    if (count < target) {
        const newCount = Math.ceil(count + increment);
        counter.innerText = newCount;
        setTimeout(() => countUp(counter), 15);
    } else {
        counter.innerText = target + suffix;
    }
};

// Trigger counter when in view
const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countUp(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Form Handling
const contactForm = document.querySelector('.contact-form-modern');
if (contactForm) {
    // Auto-resize textarea
    const textarea = contactForm.querySelector('textarea');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
    
    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Add loading state to button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        const loadingKey = 'contact.form.sending';
        const loadingText = translations[currentLanguage] && translations[currentLanguage][loadingKey] 
            ? translations[currentLanguage][loadingKey] 
            : '傳送中...';
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingText}`;
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message in current language
            const successKey = 'contact.form.success';
            const successMessage = translations[currentLanguage] && translations[currentLanguage][successKey] 
                ? translations[currentLanguage][successKey] 
                : '訊息已成功送出！我們會盡快與您聯繫。';
            showNotification(successMessage, 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: 500;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            z-index: 1000;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            color: #10b981;
            border-left: 4px solid #10b981;
        }
        
        .notification.info {
            color: #3b82f6;
            border-left: 4px solid #3b82f6;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 5000);
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');
const gradientSpheres = document.querySelectorAll('.gradient-sphere');

if (heroSection && heroContent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection.getBoundingClientRect().bottom > 0) {
            heroContent.style.transform = `translateY(${rate * 0.8}px)`;
            
            gradientSpheres.forEach((sphere, index) => {
                const speed = (index + 1) * 0.2;
                sphere.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });
}

// Magnetic Hover Effect for Buttons
const magneticButtons = document.querySelectorAll('.btn, .social-link');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');

const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const progress = bar.style.getPropertyValue('--progress');
            bar.style.width = progress;
            observer.unobserve(bar);
        }
    });
}, {
    threshold: 0.5
});

progressBars.forEach(bar => {
    bar.style.width = '0';
    progressObserver.observe(bar);
});

// Text Typing Effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Apply typing effect to hero title with translation support
function applyHeroTypingEffect(delay = 1500) {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const translateKey = heroTitle.getAttribute('data-translate');
        const currentLang = localStorage.getItem('language') || 'zh-TW';

        // 從翻譯資料中取得正確的文字
        let text = heroTitle.textContent; // 預設使用現有文字
        if (translateKey && typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][translateKey]) {
            text = translations[currentLang][translateKey];
        }

        setTimeout(() => {
            typeWriter(heroTitle, text, 80);
        }, delay);
    }
}

// Apply typing effect on page load
window.addEventListener('load', () => {
    applyHeroTypingEffect(1500);
});

// Re-apply typing effect when language changes
window.addEventListener('languageChanged', () => {
    applyHeroTypingEffect(100);
});

// Smooth Reveal Animation for Cards
const revealElements = document.querySelectorAll('.tech-card-modern, .product-card-modern, .solution-card-modern');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// Handle select form labels
function handleSelectLabels() {
    const selects = document.querySelectorAll('.contact-form-modern select');
    
    selects.forEach(select => {
        // Check initial state
        if (select.value && select.value !== '') {
            select.classList.add('has-value');
        }
        
        // Handle change events
        select.addEventListener('change', function() {
            if (this.value && this.value !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Handle focus events
        select.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        select.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting initialization...');
    
    // Initialize language FIRST - highest priority
    setTimeout(() => {
        initializeLanguage();
        initializeLanguageSelector();
    }, 50);
    
    // Initialize other features after language setup
    setTimeout(() => {
        handleSelectLabels();
    }, 100);
    
    // Remove no-js class
    document.body.classList.remove('no-js');
    
    // Add loaded class for animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Global function for testing language switching in console
window.testLanguage = function(langCode) {
    console.log(`Manual language test: switching to ${langCode}`);
    setLanguage(langCode);
    updateLanguageDisplay();
};

// Force re-initialize language system (for debugging)
window.forceLanguageInit = function() {
    console.log('Force reinitializing language system...');
    
    // Remove existing event listeners by cloning elements
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const newOption = option.cloneNode(true);
        option.parentNode.replaceChild(newOption, option);
        
        newOption.addEventListener('click', (e) => {
            e.preventDefault();
            const langCode = newOption.getAttribute('data-lang');
            console.log(`Forced language switch to: ${langCode}`);
            setLanguage(langCode);
            updateLanguageDisplay();
            document.getElementById('langDropdown').classList.remove('show');
        });
    });
    
    console.log('Language system reinitialized');
};

// Solution Image Gallery Functions
function initializeSolutionGalleries() {
    // 如果是 portfolio 頁面，由 products.js 處理，不重複初始化
    if (document.querySelector('script[src="products.js"]')) {
        console.log('Portfolio page detected, skipping script.js gallery init');
        return;
    }

    const galleries = document.querySelectorAll('.solution-image-gallery');

    galleries.forEach((gallery, galleryIndex) => {
        const images = gallery.querySelectorAll('.solution-image');
        const indicators = gallery.querySelectorAll('.solution-image-indicators .indicator');
        const prevBtn = gallery.querySelector('.solution-image-nav.prev');
        const nextBtn = gallery.querySelector('.solution-image-nav.next');

        let currentSlide = 0;

        function showSlide(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % images.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentSlide - 1 + images.length) % images.length;
            showSlide(prevIndex);
        }

        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => showSlide(index));
        });

        // 觸控滑動功能
        let touchStartX = 0;
        let touchEndX = 0;

        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 30;
            const swipeLength = touchEndX - touchStartX;

            if (Math.abs(swipeLength) > swipeThreshold) {
                if (swipeLength > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        });

        // Auto-play (optional)
        setInterval(nextSlide, 5000);
    });
}

// Flag to prevent double initialization
let imageModalInitialized = false;

// Initialize solution galleries when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeSolutionGalleries();
    // Add slight delay to ensure images are loaded
    setTimeout(() => {
        initializeImageModal();
    }, 1000);
});

// Image Modal Functions
let currentImageSet = [];
let currentImageIndex = 0;
let currentImageTitle = '';
let isImageSwitching = false;

function initializeImageModal() {
    if (imageModalInitialized) {
        console.log('Image modal already initialized, skipping...');
        return;
    }
    
    console.log('Initializing image modal...');
    imageModalInitialized = true;
    
    // Direct event listener approach
    const solutionImages = document.querySelectorAll('.solution-image img');
    console.log('Found solution images:', solutionImages.length);
    
    solutionImages.forEach((img, index) => {
        console.log('Adding click listener to image:', index, img.src);
        
        // Add visual indicator that image is clickable
        img.style.border = '2px solid transparent';
        img.style.borderRadius = '8px';
        img.addEventListener('mouseenter', function() {
            this.style.border = '2px solid #007bff';
        });
        img.addEventListener('mouseleave', function() {
            this.style.border = '2px solid transparent';
        });
        
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('=== IMAGE CLICKED ===');
            console.log('Solution image clicked!', this.src);
            console.log('Event target:', e.target);
            console.log('This element:', this);
            
            // Get the parent gallery to find all images in this set
            const gallery = this.closest('.solution-image-gallery');
            if (!gallery) {
                console.error('Gallery not found!');
                return;
            }
            
            const card = gallery.closest('.solution-card-modern');
            if (!card) {
                console.error('Card not found!');
                return;
            }
            
            const titleElement = card.querySelector('h3');
            const cardTitle = titleElement ? titleElement.textContent : '產業圖片';
            
            // Get all images in this gallery
            const allImagesInGallery = gallery.querySelectorAll('.solution-image img');
            currentImageSet = Array.from(allImagesInGallery).map(image => ({
                src: image.src,
                alt: image.alt
            }));
            
            // Find current image index
            currentImageIndex = Array.from(allImagesInGallery).indexOf(this);
            currentImageTitle = cardTitle;
            
            console.log('Opening modal with', currentImageSet.length, 'images, index:', currentImageIndex);
            openImageModal();
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('imageModal');
        if (modal && modal.classList.contains('show')) {
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'Escape') {
                closeImageModal();
            }
        }
    });
    
    // Close modal when clicking background
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageModal();
            }
        });

        // Add touch swipe support for modal
        let modalTouchStartX = 0;
        let modalTouchEndX = 0;

        modal.addEventListener('touchstart', (e) => {
            modalTouchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modal.addEventListener('touchend', (e) => {
            modalTouchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            const swipeLength = modalTouchEndX - modalTouchStartX;

            if (Math.abs(swipeLength) > swipeThreshold) {
                if (swipeLength > 0) {
                    // Swipe right - show previous image
                    showPrevImage();
                } else {
                    // Swipe left - show next image
                    showNextImage();
                }
            }
        }, { passive: true });
    } else {
        console.error('Image modal element not found!');
    }
}

function openImageModal() {
    console.log('openImageModal called');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalImageTitle');
    const imageCounter = document.getElementById('imageCounter');
    const header = document.querySelector('.header');

    if (!modal) {
        console.error('Modal not found!');
        return;
    }

    if (!modalImage) {
        console.error('Modal image not found!');
        return;
    }

    // Set current image
    modalImage.src = currentImageSet[currentImageIndex].src;
    modalImage.alt = currentImageSet[currentImageIndex].alt;
    if (modalTitle) modalTitle.textContent = currentImageTitle;
    if (imageCounter) imageCounter.textContent = `${currentImageIndex + 1} / ${currentImageSet.length}`;

    console.log('Showing modal with image:', currentImageSet[currentImageIndex].src);

    // Hide header when modal opens
    if (header) {
        header.style.display = 'none';
    }

    // Show modal
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    console.log('closeImageModal called');
    const modal = document.getElementById('imageModal');
    const header = document.querySelector('.header');

    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
        document.body.style.overflow = '';
        console.log('Modal closed');
    } else {
        console.error('Modal not found when trying to close');
    }

    // Show header when modal closes
    if (header) {
        header.style.display = '';
    }
}

function showPrevImage() {
    if (isImageSwitching) return;
    currentImageIndex = (currentImageIndex - 1 + currentImageSet.length) % currentImageSet.length;
    updateModalImage();
}

function showNextImage() {
    if (isImageSwitching) return;
    currentImageIndex = (currentImageIndex + 1) % currentImageSet.length;
    updateModalImage();
}

function updateModalImage() {
    if (isImageSwitching) return;
    isImageSwitching = true;

    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');

    // 先隱藏圖片
    modalImage.style.opacity = '0.5';

    // 預載新圖片
    const newImage = new Image();
    newImage.onload = function() {
        modalImage.src = currentImageSet[currentImageIndex].src;
        modalImage.alt = currentImageSet[currentImageIndex].alt;
        imageCounter.textContent = `${currentImageIndex + 1} / ${currentImageSet.length}`;
        modalImage.style.opacity = '1';
        isImageSwitching = false;
    };
    newImage.onerror = function() {
        // 載入失敗也要解鎖
        modalImage.src = currentImageSet[currentImageIndex].src;
        modalImage.style.opacity = '1';
        isImageSwitching = false;
    };
    newImage.src = currentImageSet[currentImageIndex].src;
}