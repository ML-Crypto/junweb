// 產品詳細資料
const productsData = {
    'smart-cleaner': {
        title: '智能型超音波清洗機',
        description: '搭載AI控制系統的新一代清洗設備，適用於各種精密零件清洗，提供智能化清洗解決方案。',
        images: ['images/jpeg/1_1.jpeg', 'images/jpeg/1_2.jpeg'],
        features: ['智能控制', '高效清洗', '節能環保'],
        specifications: {
            '頻率範圍': '20-80 kHz',
            '功率': '100-2000W',
            '容量': '1-50L',
            '溫度控制': '常溫-80°C',
            '控制系統': 'AI智能控制',
            '顯示屏': '7寸彩色觸控螢幕'
        },
        applications: [
            '精密機械零件清洗',
            '電子元件表面處理',
            '醫療器械清潔',
            '光學元件維護',
            '珠寶首飾護理'
        ],
        advantages: [
            'AI智能識別污染類型，自動調整清洗參數',
            '多段式清洗程序，確保清洗效果',
            '節能設計，比傳統設備節省30%能耗',
            '人性化操作界面，簡單易用',
            '完整的清洗記錄和數據分析'
        ]
    },
    'precision-cleaner': {
        title: '精密電子清洗系統',
        description: '專為電子元件設計的精密清洗方案，有效去除助焊劑、油污等污染物。',
        images: ['images/jpeg/2-1.jpeg', 'images/jpeg/2-2.jpeg', 'images/jpeg/2-3.jpeg'],
        features: ['精密清洗', '電子專用', '無損清洗'],
        specifications: {
            '頻率範圍': '40-170 kHz',
            '功率': '50-800W',
            '容量': '0.5-20L',
            '溫度控制': '常溫-60°C',
            '清洗精度': '微米級',
            '材質': '316L不鏽鋼'
        },
        applications: [
            'PCB電路板清洗',
            '半導體元件處理',
            '電子連接器清潔',
            '精密感測器維護',
            '微電子組件清洗'
        ],
        advantages: [
            '超高頻清洗，不損傷電子元件',
            '專用清洗液，完全去除助焊劑',
            '防靜電設計，保護敏感元件',
            '精確溫控，避免熱損傷',
            '符合IPC清潔標準'
        ]
    },
    'industrial-cleaner': {
        title: '工業級超音波清洗設備',
        description: '大型工業清洗解決方案，適用於汽車零件、機械加工等重工業清洗需求。',
        images: ['images/jpeg/3_1.jpeg', 'images/jpeg/3_2.jpeg'],
        features: ['大型設備', '工業級', '高效率'],
        specifications: {
            '頻率範圍': '20-40 kHz',
            '功率': '1000-10000W',
            '容量': '50-500L',
            '溫度控制': '常溫-100°C',
            '材質': '工業級不鏽鋼',
            '自動化程度': '全自動/半自動'
        },
        applications: [
            '汽車零件清洗',
            '機械加工件除油',
            '金屬表面處理',
            '大型模具清潔',
            '重工業設備維護'
        ],
        advantages: [
            '大容量設計，提高生產效率',
            '強力清洗，快速去除頑固污漬',
            '自動化操作，降低人工成本',
            '耐用設計，適合24小時連續作業',
            '可客製化升降系統和傳送帶'
        ]
    },
    'lab-cleaner': {
        title: '實驗室清洗系統',
        description: '專為實驗室環境設計的小型精密清洗設備，適用於實驗器具、樣品容器清洗。',
        images: ['images/jpeg/4_1.jpeg', 'images/jpeg/4_2.jpeg'],
        features: ['實驗室級', '小型精密', '多功能'],
        specifications: {
            '頻率範圍': '25-130 kHz',
            '功率': '25-500W',
            '容量': '0.3-10L',
            '溫度控制': '常溫-80°C',
            '材質': '醫療級不鏽鋼',
            '認證': 'CE, FDA'
        },
        applications: [
            '實驗玻璃器皿清洗',
            '樣品容器清潔',
            '實驗工具維護',
            '精密儀器清洗',
            '分析樣品前處理'
        ],
        advantages: [
            '小巧設計，節省實驗室空間',
            '多頻率選擇，適應不同清洗需求',
            '低噪音運行，不干擾實驗環境',
            '定時功能，自動化清洗',
            '符合實驗室安全標準'
        ]
    },
    'medical-cleaner': {
        title: '醫療器械清洗機',
        description: '符合醫療標準的專業清洗設備，確保醫療器械的徹底清潔與消毒。',
        images: ['images/jpeg/5_1.jpeg', 'images/jpeg/5_2.jpeg'],
        features: ['醫療級', '無菌清洗', '認證標準'],
        specifications: {
            '頻率範圍': '25-80 kHz',
            '功率': '100-1500W',
            '容量': '2-30L',
            '溫度控制': '常溫-90°C',
            '材質': '醫療級316L不鏽鋼',
            '認證': 'CE, FDA, ISO13485'
        },
        applications: [
            '手術器械清洗',
            '牙科器具清潔',
            '內視鏡清洗',
            '實驗室器具消毒',
            '醫療設備維護'
        ],
        advantages: [
            '符合醫療器械清洗標準',
            '可追溯清洗記錄',
            '多級過濾系統',
            '自動排水和乾燥功能',
            '生物相容性材料製造'
        ]
    },
    'jewelry-cleaner': {
        title: '珠寶首飾清洗機',
        description: '專為珠寶首飾設計的溫和清洗系統，保護貴重物品同時達到完美清潔效果。',
        images: ['images/jpeg/6_1.jpeg', 'images/jpeg/6_2.jpeg'],
        features: ['珠寶專用', '溫和清洗', '精緻護理'],
        specifications: {
            '頻率範圍': '35-42 kHz',
            '功率': '15-200W',
            '容量': '0.1-3L',
            '溫度控制': '常溫-50°C',
            '材質': '優質不鏽鋼',
            '特殊功能': '溫和模式'
        },
        applications: [
            '黃金珠寶清洗',
            '銀飾品護理',
            '鑽石清潔',
            '手錶維護',
            '精品配件清洗'
        ],
        advantages: [
            '溫和頻率，不損傷貴重物品',
            '專用清洗液，恢復光澤',
            '小巧精緻，適合專櫃使用',
            '定時功能，防止過度清洗',
            '靜音設計，不影響營業環境'
        ]
    },
    'large-industrial': {
        title: '大型工業清洗系統',
        description: '高效率大型工業級超音波清洗設備，適用於重工業環境的零件清洗。',
        images: ['images/jpeg/7_1.jpeg', 'images/jpeg/7_2.jpeg'],
        features: ['大型容量', '工業級', '高效率'],
        specifications: {
            '頻率範圍': '25-45 kHz',
            '功率': '3000-10000W',
            '容量': '100-500L',
            '溫度控制': '常溫-90°C',
            '控制系統': '工業級PLC控制',
            '顯示屏': '10寸工業觸控屏'
        },
        applications: [
            '汽車零件清洗',
            '機械加工零件',
            '重工業設備維護',
            '大型模具清潔',
            '船舶零件處理'
        ],
        advantages: [
            '超大清洗容量，適合批量生產',
            '堅固耐用，適應惡劣工業環境',
            '自動化程度高，減少人工操作',
            '強力清洗能力，去除頑固污染',
            '模組化設計，方便維護升級'
        ]
    },
    'smart-control': {
        title: '智能控制清洗系統',
        description: '配備先進智能控制系統的自動化清洗設備，提供精確清洗參數控制。',
        images: ['images/jpeg/8_1.jpeg', 'images/jpeg/8_2.jpeg'],
        features: ['自動化', '智能控制', '精確參數'],
        specifications: {
            '頻率範圍': '25-80 kHz可調',
            '功率': '600W',
            '容量': '20L',
            '溫度控制': '室溫-85°C',
            '控制系統': '智能控制系統',
            '顯示屏': '彩色觸控屏'
        },
        applications: [
            '智能製造產線',
            '精密零件清洗',
            '實驗室設備',
            '品質控制清洗',
            '自動化生產線'
        ],
        advantages: [
            '智能參數調整，最佳清洗效果',
            '遠程監控，實時數據回饋',
            '多種清洗模式，適應不同需求',
            '數據記錄分析，持續優化',
            '故障診斷，預防性維護'
        ]
    },
    'precision-parts': {
        title: '精密零件清洗機',
        description: '專為精密零件設計的小型清洗設備，適用於精密製造業的品質控制。',
        images: ['images/jpeg/9_1.jpeg', 'images/jpeg/9_2.jpeg', 'images/jpeg/9_3.jpeg'],
        features: ['精密製造', '小型設備', '品質控制'],
        specifications: {
            '頻率範圍': '80-120 kHz',
            '功率': '200W',
            '容量': '6L',
            '溫度控制': '室溫-60°C',
            '控制系統': '精密控制',
            '顯示屏': 'LED數位顯示'
        },
        applications: [
            '精密機械零件',
            '光學元件清洗',
            '微電子零件',
            '鐘錶零件',
            '精密儀器零件'
        ],
        advantages: [
            '超高頻率，深度清洗微細污染',
            '溫和清洗，保護精密零件',
            '小巧設計，節省空間',
            '精確控制，避免損傷',
            '靜音運行，實驗室友善'
        ]
    },
    'multi-function': {
        title: '多功能清洗站',
        description: '集成多種清洗功能的綜合性清洗設備，適用於多樣化產品的清洗需求。',
        images: ['images/jpeg/10_1.jpeg', 'images/jpeg/10_2.jpeg'],
        features: ['多功能', '綜合性', '多樣化'],
        specifications: {
            '頻率範圍': '20-100 kHz全頻段',
            '功率': '1500W',
            '容量': '15L×3槽',
            '溫度控制': '室溫-80°C',
            '控制系統': '多功能控制面板',
            '顯示屏': '大型彩色屏幕'
        },
        applications: [
            '多種材料清洗',
            '不同尺寸零件',
            '多步驟清洗流程',
            '研發測試',
            '小批量生產'
        ],
        advantages: [
            '一機多用，提高設備利用率',
            '多槽設計，同時處理不同產品',
            '靈活配置，適應各種需求',
            '模組化升級，擴展功能',
            '智能排程，優化清洗流程'
        ]
    }
};

// 開啟產品詳情彈窗
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const product = productsData[productId];
    
    if (!product) {
        console.error('產品資料未找到:', productId);
        return;
    }
    
    // 設定標題
    modalTitle.textContent = product.title;
    
    // 生成簡化的詳細內容（包含圖片輪播）
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-images-section">
                <div class="product-image-gallery">
                    <div class="image-slider">
                        ${product.images.map((image, index) => `
                            <div class="modal-image ${index === 0 ? 'active' : ''}">
                                <img src="${image}" alt="${product.title}">
                            </div>
                        `).join('')}
                    </div>
                    ${product.images.length > 1 ? `
                        <div class="image-navigation">
                            <button class="nav-btn prev-btn" onclick="changeProductModalImage(-1)">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="nav-btn next-btn" onclick="changeProductModalImage(1)">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="image-indicators">
                            ${product.images.map((_, index) => `
                                <div class="indicator ${index === 0 ? 'active' : ''}" onclick="goToProductImage(${index})"></div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="product-detail-header">
                <h3>產品概述</h3>
                <p class="product-detail-description">${product.description}</p>
            </div>
            
            <div class="product-detail-footer">
                <div class="action-buttons">
                    <a href="contact.html" class="btn btn-gradient">
                        <i class="fas fa-phone"></i>
                        <span>立即諮詢</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // 重置圖片索引
    currentModalImageIndex = 0;
    
    // 顯示彈窗
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滾動
}

// 關閉產品詳情彈窗
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢復滾動
}

// 下載產品型錄（模擬功能）
function downloadBrochure(productId) {
    const product = productsData[productId];
    alert(`正在下載 "${product.title}" 產品型錄...`);
    // 這裡可以實現實際的檔案下載功能
}

// 點擊彈窗外部關閉彈窗
document.addEventListener('click', function(e) {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeProductModal();
    }
});

// ESC鍵關閉彈窗
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});


// 當頁面載入時初始化功能
document.addEventListener('DOMContentLoaded', function() {
    // 延遲初始化以避免與語言系統衝突
    setTimeout(() => {
        initializeImageGallery();
        
        // 確保語言系統在產品腳本載入後仍然正常工作
        if (typeof window.forceLanguageInit === 'function') {
            console.log('Reinitializing language system after products.js load');
            window.forceLanguageInit();
        }
    }, 200);
});

// 圖片輪播功能
function initializeImageGallery() {
    const galleries = document.querySelectorAll('.product-image-gallery');
    
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.product-image');
        const indicators = gallery.querySelectorAll('.indicator');
        const prevBtn = gallery.querySelector('.image-nav.prev');
        const nextBtn = gallery.querySelector('.image-nav.next');
        
        let currentIndex = 0;
        let autoSlideTimer;
        
        // 顯示指定圖片
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }
        
        // 下一張圖片
        function nextImage() {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }
        
        // 上一張圖片
        function prevImage() {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(prevIndex);
        }
        
        // 自動輪播
        function startAutoSlide() {
            autoSlideTimer = setInterval(nextImage, 4000);
        }
        
        function stopAutoSlide() {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
            }
        }
        
        // 事件監聽器
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevImage();
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextImage();
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            });
        }
        
        // 指示器點擊
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showImage(index);
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            });
        });
        
        // 滑鼠懸停時暫停自動輪播
        gallery.addEventListener('mouseenter', stopAutoSlide);
        gallery.addEventListener('mouseleave', startAutoSlide);
        
        // 觸控支援
        let touchStartX = 0;
        let touchEndX = 0;
        
        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        });
        
        gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            setTimeout(startAutoSlide, 2000);
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const swipeLength = touchEndX - touchStartX;
            
            if (Math.abs(swipeLength) > swipeThreshold) {
                if (swipeLength > 0) {
                    prevImage();
                } else {
                    nextImage();
                }
            }
        }
        
        // 啟動自動輪播
        if (images.length > 1) {
            startAutoSlide();
        }
    });
}

// Modal 圖片輪播功能
let currentModalImageIndex = 0;

function changeProductModalImage(direction) {
    const images = document.querySelectorAll('.modal-image');
    const indicators = document.querySelectorAll('.indicator');
    
    if (images.length <= 1) return;
    
    // 隱藏當前圖片
    images[currentModalImageIndex].classList.remove('active');
    indicators[currentModalImageIndex].classList.remove('active');
    
    // 計算下一個索引
    currentModalImageIndex += direction;
    if (currentModalImageIndex >= images.length) {
        currentModalImageIndex = 0;
    } else if (currentModalImageIndex < 0) {
        currentModalImageIndex = images.length - 1;
    }
    
    // 顯示新圖片
    images[currentModalImageIndex].classList.add('active');
    indicators[currentModalImageIndex].classList.add('active');
}

function goToProductImage(index) {
    const images = document.querySelectorAll('.modal-image');
    const indicators = document.querySelectorAll('.indicator');
    
    if (index < 0 || index >= images.length) return;
    
    // 隱藏當前圖片
    images[currentModalImageIndex].classList.remove('active');
    indicators[currentModalImageIndex].classList.remove('active');
    
    // 設定新索引
    currentModalImageIndex = index;
    
    // 顯示新圖片
    images[currentModalImageIndex].classList.add('active');
    indicators[currentModalImageIndex].classList.add('active');
}

// 確保函數在全局範圍可用
window.changeProductModalImage = changeProductModalImage;
window.goToProductImage = goToProductImage;