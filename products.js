// 產品詳細資料
const productsData = {
    'smart-cleaner': {
        title: '天車式超音波清洗設備',
        description: '<strong>高效自動化搬運</strong><br>• 採用天車自動吊掛系統，精準控制清洗、浸洗、脫脂、蒸洗各站動作，大幅提升產能並降低人工誤差。<br><br><strong>彈性客製化設計</strong><br>• 從槽體尺寸、天車行程到過濾系統，全機皆可依工件大小與產線規格量身打造。',
        images: ['images/portfolio/1-1天車式超音波清洗設備.jpeg', 'images/portfolio/1-2天車式超音波清洗設備.jpeg'],
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
        title: '三槽式超音波清洗設備',
        description: '<strong>一機完成清洗、浸洗、蒸洗流程</strong><br>• 三槽式配置可同時進行超音波清洗、浸洗、蒸洗，流程完整、效率穩定。<br><br><strong>獨立槽體設計，避免交叉汙染</strong><br>• 三槽相互獨立，可搭配溢流漂洗、過濾循環，保持清洗液長時間穩定潔淨。<br><br><strong>體積精巧、空間好規劃</strong><br>• 相較多槽大型設備，三槽式占地小，適合中小型工廠或產線搭配改善使用。',
        images: ['images/portfolio/2-1 三槽式超音波清洗設備.jpeg', 'images/portfolio/2-2 三槽式超音波清洗設備.jpeg', 'images/portfolio/2-3 三槽式超音波清洗設備.jpeg', 'images/portfolio/2-4 三槽式超音波清洗設備.jpeg'],
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
        title: '五槽式超音波清洗設備',
        description: '<strong>槽體獨立、穩定性高</strong><br>• 五槽獨立運作，可搭配溢流、加熱、溫控與過濾系統，品質一致。<br><br><strong>適合大量生產線</strong><br>• 產能高、可長時間連續運轉，適用精密五金、電子零件、加工零件等。',
        images: ['images/portfolio/3-1 五槽式超音波清洗設備.jpeg', 'images/portfolio/3-2 五槽式超音波清洗設備.jpeg'],
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
        title: '船型超音波清洗設備',
        description: '<strong>獨特船型槽設計</strong><br>• 槽體呈船型結構，方便工件放置與取出，適合長條或大型工件，提高清洗覆蓋效率。<br><br><strong>適用中大型工件與批量生產</strong><br>• 船型結構搭配自動搬運或手動作業，適合中大型零件或產線批量清洗。',
        images: ['images/portfolio/5-1 船型超音波清洗設備.jpeg', 'images/portfolio/5-2 船型超音波清洗設備.jpeg', 'images/portfolio/5-3 船型超音波清洗設備.jpeg', 'images/portfolio/5-4 船型超音波清洗設備.jpeg', 'images/portfolio/5-5 船型超音波清洗設備.jpeg'],
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
        title: '溶劑蒸餾回收機',
        description: '<strong>高效溶劑回收</strong><br>• 透過蒸餾原理，可回收各類工業溶劑，回收率高，降低溶劑消耗成本。<br><br><strong>節能環保</strong><br>• 採用加熱控制與冷凝循環設計，降低能源消耗，並減少溶劑排放與環境污染。<br><br><strong>易清潔、易維護</strong><br>• 內槽採 SUS304 / SUS316L 不鏽鋼材質製作，耐腐蝕，維護保養簡單。',
        images: ['images/portfolio/6-2 溶劑蒸餾回收機.jpeg', 'images/portfolio/6-1 溶劑蒸餾回收機.jpeg'],
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
        title: '超音波電子發振機及振動鈑',
        description: '<strong>超音波發振機（Generator）</strong><br><br><strong>高效能輸出</strong><br>• 提供穩定高頻交流電，驅動振動鈑產生超音波震動。<br>• 可精準調整功率與頻率，適應不同清洗需求。<br><br><strong>振動鈑 / PZT 震盪子（Transducer）</strong><br><br><strong>高效轉換能量</strong><br>• 將電能精準轉換為機械超音波震動，產生微氣泡空化效應，提升清洗效果。',
        images: ['images/portfolio/7-1 超音波發振機及振動鈑.jpeg', 'images/portfolio/7-2 超音波發振機及振動鈑.jpeg'],
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
        title: '治具碳化清潔爐',
        description: '<strong>高效碳化去汙</strong><br>• 利用高溫悶燒熱處理，快速分解工件表面油脂、樹脂與碳化物，還原治具潔淨度。(不退鋼，效果大於噴砂機，亦可搭配噴砂機合併使用，效果更佳。)<br><br><strong>精準溫控</strong><br>• 配備智能溫控系統，可設定多段加熱曲線，確保清潔效果穩定一致。<br><br><strong>均勻加熱設計</strong><br>• 爐內採循環對流或多區加熱，使熱能分布均勻，避免局部過熱或清潔不完全。<br><br><strong>適用多種治具與工件</strong><br>• 適合於粉體液體塗裝治具清潔及塗裝不良脫模.模具脫模，提升二次加工與維護效率。',
        images: [
            'images/portfolio/8-1治具碳化清潔爐.jpeg',
            'images/portfolio/8-2治具碳化清潔爐.jpeg',
            'images/portfolio/8-3治具碳化清潔爐.jpeg',
            'images/portfolio/8-4治具碳化清潔爐.jpeg',
            'images/portfolio/8-5治具碳化清潔爐.jpeg'
        ],
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
        title: '自動化超音波清洗設備',
        description: '<strong>全自動搬運與流程控制</strong><br>• 透過機械手臂、天車或升降搬運模組，自動完成清洗、漂洗、風乾，提升效率並降低人工誤差。<br><br><strong>製程一致性高</strong><br>• 以 PLC 控制時間、溫度、超音波功率等關鍵參數，確保每批產品清洗品質一致。<br><br><strong>降低人力成本、提升產能</strong><br>• 自動化搬運與連續式作業模式，使清洗效率提升 20～50%，適合大量產線。',
        images: ['images/portfolio/4-1 自動化超音波清洗設備.jpeg', 'images/portfolio/4-2 自動化超音波清洗設備.jpeg', 'images/portfolio/4-3 自動化超音波清洗設備.jpeg', 'images/portfolio/4-4 自動化超音波清洗設備.jpeg'],
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
        title: '純水過濾設備',
        description: '<strong>高效去離子與雜質</strong><br>• 可過濾水中懸浮物、微粒、離子及微生物，確保水質純淨穩定。<br><br><strong>多段過濾設計</strong><br>• 常見配置：前置砂濾 → 活性碳濾 → 精密過濾 → 逆滲透（RO） → 去離子（DI）<br>• 分段過濾，延長濾材壽命，水質達工業或精密製程標準。<br><br><strong>適用多種產業</strong><br>• 適用電子、半導體、光電、醫療、超音波清洗、實驗室及精密製程。<br><br><strong>易維護與替換濾材</strong><br>• 模組化設計，濾芯更換簡單快速，維護方便，降低停機時間。',
        images: ['images/portfolio/9-1 純水過濾設備.jpeg'],
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
    'chemical-filter-system': {
        title: '藥水過濾系統',
        description: '<strong>高效濾除雜質，維持藥液潔淨度</strong><br>• 能有效過濾加工屑、粉塵與微粒。<br>• 延長藥水使用壽命，降低耗材成本。<br><br><strong>穩定藥水品質，提高清洗效果</strong><br>• 避免雜質干擾超音波 cavitation（空化效應）。<br>• 提升清洗均勻性、減少返工率。<br><br><strong>可搭配多種超音波清洗槽</strong><br>• 適用於酸性、鹼性、溶劑型或特殊配方藥液。<br>• 過濾材質可選 SUS、PP、PVDF 等耐化學材質。<br><br><strong>循環式過濾設計</strong><br>• 藥水連續循環，減少藥水回收次數，保持清洗槽穩定狀態。<br>• 適合長時間批量生產的工廠使用。',
        images: ['images/portfolio/10-1 藥水過濾系統.jpeg', 'images/portfolio/10-2 藥水過濾系統.jpeg'],
        features: ['高效過濾', '循環設計', '多槽適用'],
        specifications: {
            '過濾精度': '1-100 μm可選',
            '流量範圍': '10-200 L/min',
            '材質': 'SUS、PP、PVDF',
            '適用藥液': '酸性、鹼性、溶劑型',
            '運行方式': '連續循環',
            '控制系統': '自動化控制'
        },
        applications: [
            '超音波清洗槽配套',
            '電鍍藥水過濾',
            '化學藥劑循環',
            '工業清洗液處理',
            '精密製程藥液維護'
        ],
        advantages: [
            '高效過濾雜質，維持藥液潔淨度',
            '延長藥水使用壽命',
            '提升清洗效果與均勻性',
            '多種材質適應不同藥液',
            '循環設計適合長時間生產'
        ]
    },
    'wastewater-filter': {
        title: '廢水濾漆設備',
        description: '<strong>高效過濾漆渣與固體懸浮物</strong><br>• 能快速去除水性或油性塗裝廢水中的漆渣、顆粒與懸浮物，降低下游處理負擔。<br><br><strong>適用多種塗裝廢水</strong><br>• 適合汽車、五金、家具、電子及其他塗裝產業廢水處理。<br><br><strong>安全穩定可靠</strong><br>• 槽體與管路採耐腐蝕材質製作，長期運行穩定，操作安全。',
        images: ['images/portfolio/11-1 廢水濾漆設備.jpeg', 'images/portfolio/11-2 廢水濾漆設備.jpeg'],
        features: ['多功能', '綜合性', '多樣化'],
        specifications: {
            '過濾精度': '10-500 μm',
            '流量': '20-300 L/min',
            '適用廢水': '水性/油性塗裝廢水',
            '材質': '耐腐蝕不鏽鋼',
            '運行方式': '連續過濾',
            '控制系統': '自動化控制'
        },
        applications: [
            '汽車塗裝廢水',
            '五金電鍍廢水',
            '家具噴漆廢水',
            '電子製造廢水',
            '塗裝車間處理'
        ],
        advantages: [
            '高效去除漆渣與懸浮物',
            '適用多種塗裝廢水',
            '耐腐蝕材質製作',
            '長期穩定運行',
            '降低下游處理負擔'
        ]
    },
    'multi-function': {
        title: '廢水濾漆設備（舊）',
        description: '<strong>高效過濾漆渣與固體懸浮物</strong><br>• 能快速去除水性或油性塗裝廢水中的漆渣、顆粒與懸浮物，降低下游處理負擔。<br><br><strong>適用多種塗裝廢水</strong><br>• 適合汽車、五金、家具、電子及其他塗裝產業廢水處理。<br><br><strong>安全穩定可靠</strong><br>• 槽體與管路採耐腐蝕材質製作，長期運行穩定，操作安全。',
        images: [
            'images/portfolio/10-1廢水濾漆設備.jpeg',
            'images/portfolio/10-2廢水濾漆設備.jpeg',
            'images/portfolio/10-3廢水濾漆設備.jpeg'
        ],
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
    },
    'explosion-proof-pump': {
        title: '美製原裝氣動防爆桶裝專用泵浦',
        description: '<strong>美國原裝進口，品質可靠</strong><br>• 採用高精密零件與嚴格製程，耐用度高，壽命長，性能穩定。<br><br><strong>氣動驅動，安全無火花</strong><br>• 無需電源，完全氣動操作，防爆設計適用易燃液體，操作更安全。<br><br><strong>防爆設計</strong><br>• 全機符合防爆標準，適用油漆、溶劑、化工液體等危險環境。<br><br><strong>高效抽送能力</strong><br>• 適合桶裝液體快速抽送，輸送穩定，流量均勻，可長時間連續運行。<br><br><strong>耐腐蝕材質製作</strong><br>• 與液體接觸部分採不鏽鋼或特殊耐化學腐蝕材質，延長使用壽命。<br><br><strong>簡單操作與維護</strong><br>• 結構簡單、拆裝方便，維護成本低，操作快速容易上手。<br><br><strong>適用多種工業液體</strong><br>• 油漆、溶劑、清洗液、化工液體、酸鹼液等均可安全抽送。',
        images: ['images/portfolio/12-1 美製原裝氣動防爆桶裝專用泵浦.jpeg', 'images/portfolio/12-2 美製原裝氣動防爆桶裝專用泵浦.jpeg', 'images/portfolio/12-3 美製原裝氣動防爆桶裝專用泵浦.jpeg'],
        features: ['防爆設計', '氣動驅動', '專業級'],
        specifications: {
            '防爆等級': 'ATEX認證',
            '驅動方式': '氣動',
            '流量範圍': '10-200L/min',
            '壓力範圍': '0.2-8.3 bar',
            '材質': '不鏽鋼/鋁合金',
            '認證': 'CE, ATEX'
        },
        applications: [
            '化工廠液體輸送',
            '石油化工場所',
            '易燃溶劑處理',
            '危險區域作業',
            '防爆環境應用'
        ],
        advantages: [
            '符合國際防爆標準',
            '氣動驅動無電火花',
            '耐腐蝕材質製造',
            '操作簡單安全',
            '維護成本低'
        ]
    },
    'cooling-tower-cleaner': {
        title: '冷卻塔管路清洗機',
        description: '<strong>高效管路清洗</strong><br>• 專為冷卻塔及工業管路設計，可快速去除水垢、鐵鏽、藻類及沉積物，恢復管路流量與效率。<br><br><strong>全程自動化操作</strong><br>• 配備泵浦與循環系統，自動控制清洗流程與壓力，降低人工操作負擔。<br><br><strong>提升冷卻效率與設備壽命</strong><br>• 定期清洗管路，可維持冷卻效率，減少能源浪費並延長熱交換器及設備使用壽命。',
        images: ['images/portfolio/13-1 冷卻塔管路清洗機.jpeg', 'images/portfolio/13-2 冷卻塔管路清洗機.jpeg'],
        features: ['管路清洗', '冷卻系統', '高效能'],
        specifications: {
            '清洗方式': '循環清洗',
            '壓力範圍': '1-15 bar',
            '流量': '50-500L/min',
            '溫度控制': '常溫-80°C',
            '管徑適用': '25-300mm',
            '控制系統': '自動化控制'
        },
        applications: [
            '冷卻塔管路清洗',
            '空調系統維護',
            '工業冷卻設備',
            '熱交換器清洗',
            '循環水系統'
        ],
        advantages: [
            '高效去除水垢和沉積物',
            '自動化清洗程序',
            '多種管徑適用',
            '環保清洗液',
            '提升冷卻效率'
        ]
    },
    'hot-air-oven': {
        title: '熱風循環烘烤爐',
        description: '<strong>均勻熱風循環</strong><br>• 爐內配備循環風扇，熱風均勻分布，確保工件受熱一致，烘烤品質穩定。<br><br><strong>高效加熱</strong><br>• 採用電熱或油加熱系統，升溫迅速，縮短烘烤時間，提高產能。<br><br><strong>精準溫控</strong><br>• 配備智能溫控系統，可設定多段加熱曲線，確保工件烘烤過程可控且一致。<br><br><strong>適用多種工件</strong><br>• 適合五金零件、電子零件、塑膠件、烤漆件等各類工業產品乾燥與烘烤。',
        images: ['images/portfolio/14-1 熱風循環烘烤爐.jpeg'],
        features: ['熱風循環', '精確控溫', '節能環保'],
        specifications: {
            '溫度範圍': '室溫-300°C',
            '溫度精度': '±2°C',
            '容量': '50-500L',
            '加熱方式': '電加熱',
            '循環方式': '強制熱風循環',
            '控制系統': 'PID溫控器'
        },
        applications: [
            '零件烘乾處理',
            '預熱作業',
            '材料乾燥',
            '熱處理工藝',
            '實驗室烘烤'
        ],
        advantages: [
            '溫度分佈均勻',
            '節能環保設計',
            '精確溫度控制',
            '操作簡單安全',
            '多種容量選擇'
        ]
    },
    'ultrasonic-solvents': {
        title: '各式超音波清洗溶劑',
        description: '<strong>高效去汙能力</strong><br>• 能快速溶解油脂、膠質、粉塵、加工殘渣及其他污染物，提高清洗效率。<br><br><strong>適用各種材質</strong><br>• 提供不同溶劑配方，適用金屬、塑膠、玻璃、陶瓷及電子零件等多種材質。<br><br><strong>客製化配方</strong><br>• 可依清洗工件與汙染特性調整配方濃度與溶解性，達到最佳清洗效果。',
        images: ['images/portfolio/15-1 各式超音波清洗溶劑.jpeg'],
        features: ['專業配方', '多種用途', '高效清潔'],
        specifications: {
            '產品類型': '多種專業清洗溶劑',
            '適用溫度': '常溫-80°C',
            '包裝規格': '1L-20L',
            '環保等級': '符合環保標準',
            '保存期限': '2年',
            '稀釋比例': '依污染程度調整'
        },
        applications: [
            '金屬零件脫脂',
            '電子元件清洗',
            '精密儀器維護',
            '光學鏡片清潔',
            '珠寶首飾護理'
        ],
        advantages: [
            '專業配方，針對性強',
            '環保無毒，安全可靠',
            '清洗效果佳，殘留少',
            '適用範圍廣，效率高',
            '包裝齊全，使用方便'
        ]
    }
};

// 取得翻譯文字的輔助函數
function getProductTranslation(key, fallback) {
    const currentLang = localStorage.getItem('language') || 'zh-TW';
    if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    return fallback;
}

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

    // 使用翻譯系統取得產品資訊
    const productTitle = getProductTranslation(`product.${productId}.title`, product.title);
    const productDesc = getProductTranslation(`product.${productId}.desc`, product.description);
    const overviewText = getProductTranslation('product.modal.overview', '產品概述');
    const consultText = getProductTranslation('product.modal.consult', '立即諮詢');

    // 設定標題
    modalTitle.textContent = productTitle;

    // 生成簡化的詳細內容（包含圖片輪播）
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-images-section">
                <div class="product-image-gallery">
                    <div class="image-slider">
                        ${product.images.map((image, index) => `
                            <div class="modal-image ${index === 0 ? 'active' : ''}">
                                <img src="${image}" alt="${productTitle}">
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
                <h3>${overviewText}</h3>
                <div class="product-detail-description">${productDesc}</div>
            </div>

            <div class="product-detail-footer">
                <div class="action-buttons">
                    <a href="contact.html" class="btn btn-gradient">
                        <i class="fas fa-phone"></i>
                        <span>${consultText}</span>
                    </a>
                </div>
            </div>
        </div>
    `;

    // 重置圖片索引
    currentModalImageIndex = 0;

    // 為圖片區域加入觸控滑動支援
    const imageSlider = modalBody.querySelector('.image-slider');
    if (imageSlider && product.images.length > 1) {
        setupModalSwipe(imageSlider);
    }

    // 隱藏頁頭
    const header = document.querySelector('.header');
    if (header) {
        header.style.display = 'none';
    }

    // 顯示彈窗
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滾動
}

// 關閉產品詳情彈窗
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢復滾動

    // 顯示頁頭
    const header = document.querySelector('.header');
    if (header) {
        header.style.display = '';
    }
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
        let restartTimer;

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
            stopAutoSlide();
            autoSlideTimer = setInterval(nextImage, 4000);
        }

        function stopAutoSlide() {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
                autoSlideTimer = null;
            }
        }

        function scheduleRestart() {
            if (restartTimer) {
                clearTimeout(restartTimer);
            }
            restartTimer = setTimeout(startAutoSlide, 2000);
        }

        // 事件監聯器
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevImage();
                stopAutoSlide();
                scheduleRestart();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextImage();
                stopAutoSlide();
                scheduleRestart();
            });
        }

        // 指示器點擊
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showImage(index);
                stopAutoSlide();
                scheduleRestart();
            });
        });

        // 滑鼠懸停時暫停自動輪播
        gallery.addEventListener('mouseenter', () => {
            stopAutoSlide();
            if (restartTimer) {
                clearTimeout(restartTimer);
                restartTimer = null;
            }
        });
        gallery.addEventListener('mouseleave', startAutoSlide);

        // 觸控支援
        let touchStartX = 0;
        let touchEndX = 0;

        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
            if (restartTimer) {
                clearTimeout(restartTimer);
                restartTimer = null;
            }
        });

        gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            scheduleRestart();
        });
        
        function handleSwipe() {
            const swipeThreshold = 30;
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
    const modal = document.getElementById('productModal');
    const images = modal.querySelectorAll('.modal-image');
    const indicators = modal.querySelectorAll('.image-indicators .indicator');
    
    if (images.length <= 1) return;
    
    // 隱藏當前圖片
    images[currentModalImageIndex].classList.remove('active');
    if (indicators[currentModalImageIndex]) {
        indicators[currentModalImageIndex].classList.remove('active');
    }
    
    // 計算下一個索引
    currentModalImageIndex += direction;
    if (currentModalImageIndex >= images.length) {
        currentModalImageIndex = 0;
    } else if (currentModalImageIndex < 0) {
        currentModalImageIndex = images.length - 1;
    }
    
    // 顯示新圖片
    images[currentModalImageIndex].classList.add('active');
    if (indicators[currentModalImageIndex]) {
        indicators[currentModalImageIndex].classList.add('active');
    }
}

function goToProductImage(index) {
    const modal = document.getElementById('productModal');
    const images = modal.querySelectorAll('.modal-image');
    const indicators = modal.querySelectorAll('.image-indicators .indicator');
    
    if (index < 0 || index >= images.length) return;
    
    // 隱藏當前圖片
    images[currentModalImageIndex].classList.remove('active');
    if (indicators[currentModalImageIndex]) {
        indicators[currentModalImageIndex].classList.remove('active');
    }
    
    // 設定新索引
    currentModalImageIndex = index;
    
    // 顯示新圖片
    images[currentModalImageIndex].classList.add('active');
    if (indicators[currentModalImageIndex]) {
        indicators[currentModalImageIndex].classList.add('active');
    }
}

// 確保函數在全局範圍可用
window.changeProductModalImage = changeProductModalImage;
window.goToProductImage = goToProductImage;

// Modal 圖片觸控滑動功能
let modalSwipeTouchStartX = 0;

function setupModalSwipe(element) {
    element.addEventListener('touchstart', function(e) {
        modalSwipeTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    element.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const swipeLength = touchEndX - modalSwipeTouchStartX;

        if (Math.abs(swipeLength) > swipeThreshold) {
            if (swipeLength > 0) {
                // 向右滑動 - 上一張
                changeProductModalImage(-1);
            } else {
                // 向左滑動 - 下一張
                changeProductModalImage(1);
            }
        }
    }, { passive: true });
}