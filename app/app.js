/* =========================================
   TRƯỜNG YÊN FOOD OS
   GLOBAL SEARCH ENGINE
   ========================================= */

(function () {
    "use strict";


    /* =========================================
       SEARCH DATA
       ========================================= */

    const SEARCH_INDEX = [

        {
            title: "Knowledge",
            description: "Trung tâm tri thức chính thức của TRƯỜNG YÊN FOOD OS.",
            keywords: [
                "knowledge",
                "tri thức",
                "tài liệu",
                "kiến thức"
            ],
            url: "knowledge.html"
        },

        {
            title: "Knowledge Base",
            description: "Kho tri thức dùng chung của TRƯỜNG YÊN FOOD.",
            keywords: [
                "knowledge base",
                "tri thức",
                "tài liệu",
                "quản trị tri thức"
            ],
            url: "http://127.0.0.1:8000/systems/knowledge-base/"
        },

        {
            title: "AI Knowledge",
            description: "Tri thức dành cho hệ thống AI.",
            keywords: [
                "ai",
                "artificial intelligence",
                "trí tuệ nhân tạo",
                "ai knowledge"
            ],
            url: "http://127.0.0.1:8000/systems/ai-knowledge/"
        },

        {
            title: "Enterprise Constitution",
            description: "Hiến pháp và nguyên tắc quản trị doanh nghiệp.",
            keywords: [
                "enterprise",
                "constitution",
                "hiến pháp",
                "doanh nghiệp",
                "quản trị"
            ],
            url: "http://127.0.0.1:8000/systems/enterprise-constitution/"
        },

        {
            title: "Company",
            description: "Trung tâm quản trị doanh nghiệp của TRƯỜNG YÊN FOOD OS.",
            keywords: [
                "company",
                "doanh nghiệp",
                "hồ sơ doanh nghiệp"
            ],
            url: "company.html"
        },

        {
            title: "Company Profile",
            description: "Hồ sơ doanh nghiệp chính thức.",
            keywords: [
                "company profile",
                "hồ sơ",
                "thông tin doanh nghiệp"
            ],
            url: "http://127.0.0.1:8000/systems/company-profile/"
        },

        {
            title: "Brand",
            description: "Trung tâm quản trị thương hiệu của TRƯỜNG YÊN FOOD OS.",
            keywords: [
                "brand",
                "thương hiệu",
                "nhận diện",
                "tài sản thương hiệu"
            ],
            url: "brand.html"
        },

        {
            title: "Brand System",
            description: "Nền tảng và định hướng thương hiệu TRƯỜNG YÊN FOOD.",
            keywords: [
                "brand system",
                "thương hiệu",
                "định vị",
                "nhận diện"
            ],
            url: "http://127.0.0.1:8000/systems/brand-system/"
        },

        {
            title: "Products",
            description: "Trung tâm quản trị sản phẩm của TRƯỜNG YÊN FOOD OS.",
            keywords: [
                "products",
                "product",
                "sản phẩm",
                "quản trị sản phẩm"
            ],
            url: "products.html"
        },

        {
            title: "Product System",
            description: "Quản trị toàn bộ vòng đời sản phẩm.",
            keywords: [
                "product system",
                "sản phẩm",
                "vòng đời sản phẩm",
                "phát triển sản phẩm"
            ],
            url: "http://127.0.0.1:8000/systems/product-system/"
        },

        {
            title: "QA GATE",
            description: "Hệ thống kiểm soát chất lượng và các điểm phê duyệt bắt buộc.",
            keywords: [
                "qa",
                "qa gate",
                "quality",
                "chất lượng",
                "kiểm soát"
            ],
            url: "qa.html"
        },

        {
            title: "QA Gate Knowledge",
            description: "Kiểm soát chất lượng từ đầu vào đến phát hành.",
            keywords: [
                "qa gate",
                "quality",
                "kiểm soát chất lượng",
                "phê duyệt"
            ],
            url: "http://127.0.0.1:8000/systems/qa-gate/"
        }

    ];


    /* =========================================
       CURRENT PATH
       ========================================= */

    const currentPath =
        window.location.pathname;


    const isWorkspacePage =
        currentPath.includes("/workspaces/");


    /* =========================================
       PATH HELPER
       ========================================= */

    function resolveWorkspaceUrl(url) {

        if (
            url.startsWith("http://") ||
            url.startsWith("https://")
        ) {
            return url;
        }

        if (isWorkspacePage) {
            return url;
        }

        return "workspaces/" + url;
    }


    /* =========================================
       NORMALIZE SEARCH
       ========================================= */

    function normalizeText(value) {

        return String(value || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

    }


    /* =========================================
       SEARCH
       ========================================= */

    function searchItems(query) {

        const normalizedQuery =
            normalizeText(query);

        if (!normalizedQuery) {
            return SEARCH_INDEX;
        }

        const terms =
            normalizedQuery
                .split(/\s+/)
                .filter(Boolean);

        return SEARCH_INDEX
            .map(item => {

                const searchableText =
                    normalizeText(
                        [
                            item.title,
                            item.description,
                            item.keywords.join(" ")
                        ].join(" ")
                    );

                let score = 0;

                terms.forEach(term => {

                    if (
                        normalizeText(item.title)
                            .includes(term)
                    ) {
                        score += 10;
                    }

                    if (
                        searchableText.includes(term)
                    ) {
                        score += 3;
                    }

                });

                return {
                    item,
                    score
                };

            })
            .filter(result => result.score > 0)
            .sort(
                (a, b) =>
                    b.score - a.score
            )
            .map(result => result.item);

    }


    /* =========================================
       CREATE SEARCH UI
       ========================================= */

    function createSearchOverlay() {

        if (
            document.getElementById(
                "global-search-overlay"
            )
        ) {
            return;
        }


        const overlay =
            document.createElement("div");

        overlay.id =
            "global-search-overlay";


        overlay.innerHTML = `

            <div
                class="global-search-backdrop"
                data-search-close
            ></div>

            <div
                class="global-search-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Tìm kiếm"
            >

                <div class="global-search-header">

                    <div>
                        <div class="global-search-eyebrow">
                            TRƯỜNG YÊN FOOD OS
                        </div>

                        <h2>
                            Tìm kiếm
                        </h2>
                    </div>

                    <button
                        type="button"
                        class="global-search-close"
                        data-search-close
                        aria-label="Đóng"
                    >
                        ×
                    </button>

                </div>


                <div class="global-search-input-wrap">

                    <span>
                        🔍
                    </span>

                    <input
                        id="global-search-input"
                        type="search"
                        autocomplete="off"
                        placeholder="Tìm tài liệu, doanh nghiệp, thương hiệu, sản phẩm..."
                    >

                    <kbd>
                        ESC
                    </kbd>

                </div>


                <div
                    id="global-search-results"
                    class="global-search-results"
                ></div>

            </div>
        `;


        document.body.appendChild(overlay);


        injectSearchStyles();


        const input =
            document.getElementById(
                "global-search-input"
            );


        input.addEventListener(
            "input",
            function () {

                renderSearchResults(
                    input.value
                );

            }
        );


        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.matches(
                        "[data-search-close]"
                    )
                ) {
                    closeSearch();
                }

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {
                    closeSearch();
                }

            }
        );

    }


    /* =========================================
       OPEN SEARCH
       ========================================= */

    function openSearch() {

        createSearchOverlay();


        const overlay =
            document.getElementById(
                "global-search-overlay"
            );


        overlay.classList.add("is-open");


        document.body.classList.add(
            "search-open"
        );


        const input =
            document.getElementById(
                "global-search-input"
            );


        setTimeout(
            function () {

                input.focus();

                renderSearchResults("");

            },
            50
        );

    }


    /* =========================================
       CLOSE SEARCH
       ========================================= */

    function closeSearch() {

        const overlay =
            document.getElementById(
                "global-search-overlay"
            );


        if (!overlay) {
            return;
        }


        overlay.classList.remove(
            "is-open"
        );


        document.body.classList.remove(
            "search-open"
        );

    }


    /* =========================================
       RENDER RESULTS
       ========================================= */

    function renderSearchResults(query) {

        const container =
            document.getElementById(
                "global-search-results"
            );


        if (!container) {
            return;
        }


        const results =
            searchItems(query);


        if (!query.trim()) {

            container.innerHTML = `

                <div class="global-search-empty">

                    <strong>
                        Nguồn tri thức chính thức
                    </strong>

                    <span>
                        Bắt đầu nhập để tìm kiếm trong TRƯỜNG YÊN FOOD OS.
                    </span>

                </div>

            `;

            return;

        }


        if (!results.length) {

            container.innerHTML = `

                <div class="global-search-empty">

                    <strong>
                        Không tìm thấy kết quả
                    </strong>

                    <span>
                        Thử một từ khóa khác.
                    </span>

                </div>

            `;

            return;

        }


        container.innerHTML =
            results.map(item => `

                <a
                    class="global-search-result"
                    href="${resolveWorkspaceUrl(item.url)}"
                >

                    <span class="global-search-result-icon">
                        ◈
                    </span>

                    <span class="global-search-result-content">

                        <strong>
                            ${escapeHtml(item.title)}
                        </strong>

                        <span>
                            ${escapeHtml(item.description)}
                        </span>

                    </span>

                    <span class="global-search-arrow">
                        →
                    </span>

                </a>

            `).join("");

    }


    /* =========================================
       ESCAPE HTML
       ========================================= */

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================
       SEARCH BUTTON BINDING
       ========================================= */

    function bindSearchButtons() {

        const selectors = [
            "#dashboard-search-button",
            ".workspace-search",
            ".search-button"
        ];


        document
            .querySelectorAll(
                selectors.join(",")
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                        event.stopPropagation();

                        openSearch();

                    }
                );

            });

    }


    /* =========================================
       SEARCH CSS
       ========================================= */

    function injectSearchStyles() {

        if (
            document.getElementById(
                "global-search-styles"
            )
        ) {
            return;
        }


        const style =
            document.createElement("style");


        style.id =
            "global-search-styles";


        style.textContent = `

            body.search-open {
                overflow: hidden;
            }


            #global-search-overlay {
                position: fixed;
                inset: 0;

                z-index: 9999;

                display: flex;
                align-items: flex-start;
                justify-content: center;

                padding-top: 110px;

                visibility: hidden;
                opacity: 0;

                transition:
                    opacity 0.15s ease,
                    visibility 0.15s ease;
            }


            #global-search-overlay.is-open {
                visibility: visible;
                opacity: 1;
            }


            .global-search-backdrop {
                position: absolute;
                inset: 0;

                background:
                    rgba(32, 32, 32, 0.28);

                backdrop-filter:
                    blur(3px);
            }


            .global-search-panel {
                position: relative;

                width:
                    min(720px, calc(100vw - 32px));

                max-height:
                    calc(100vh - 150px);

                overflow: hidden;

                background:
                    var(--surface, #ffffff);

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 16px;

                box-shadow:
                    0 24px 70px
                    rgba(0, 0, 0, 0.18);
            }


            .global-search-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                padding: 24px 24px 18px;

                border-bottom:
                    1px solid
                    var(--border, #e5e2dc);
            }


            .global-search-eyebrow {
                margin-bottom: 6px;

                font-size: 9px;
                font-weight: 700;

                letter-spacing: 1.3px;

                color:
                    var(--brand, #795548);
            }


            .global-search-header h2 {
                margin: 0;

                font-size: 24px;
                font-weight: 600;
            }


            .global-search-close {
                width: 34px;
                height: 34px;

                display: grid;
                place-items: center;

                border-radius: 8px;

                font-size: 24px;
                line-height: 1;

                color:
                    var(--muted, #777777);

                cursor: pointer;
            }


            .global-search-close:hover {
                background: #f4f1ed;
                color:
                    var(--text, #202020);
            }


            .global-search-input-wrap {
                display: flex;
                align-items: center;
                gap: 10px;

                margin: 18px 24px;

                height: 50px;

                padding: 0 14px;

                background: #f8f7f4;

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 10px;
            }


            .global-search-input-wrap > span {
                font-size: 15px;
            }


            .global-search-input-wrap input {
                flex: 1;

                min-width: 0;

                border: 0;
                outline: 0;

                background: transparent;

                font-family: inherit;
                font-size: 14px;

                color:
                    var(--text, #202020);
            }


            .global-search-input-wrap input::placeholder {
                color:
                    var(--muted, #777777);
            }


            .global-search-input-wrap kbd {
                padding: 4px 7px;

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 5px;

                background: white;

                color:
                    var(--muted, #777777);

                font-size: 10px;
            }


            .global-search-results {
                max-height: 420px;

                overflow-y: auto;

                padding:
                    0 12px 14px;
            }


            .global-search-empty {
                display: flex;
                flex-direction: column;

                gap: 6px;

                padding:
                    30px 18px;

                text-align: center;

                color:
                    var(--muted, #777777);

                font-size: 13px;
            }


            .global-search-empty strong {
                color:
                    var(--text, #202020);

                font-size: 14px;
            }


            .global-search-result {
                display: flex;
                align-items: center;

                gap: 12px;

                padding: 14px 12px;

                border-radius: 10px;

                color:
                    var(--text, #202020);

                transition:
                    background 0.12s ease;
            }


            .global-search-result:hover {
                background: #f7f4f0;
            }


            .global-search-result-icon {
                width: 38px;
                height: 38px;

                flex-shrink: 0;

                display: grid;
                place-items: center;

                background: #f1ebe5;

                border-radius: 9px;

                color:
                    var(--brand, #795548);
            }


            .global-search-result-content {
                flex: 1;

                display: flex;
                flex-direction: column;

                gap: 4px;
            }


            .global-search-result-content strong {
                font-size: 13px;
            }


            .global-search-result-content span {
                font-size: 11px;

                line-height: 1.5;

                color:
                    var(--muted, #777777);
            }


            .global-search-arrow {
                color:
                    var(--muted, #777777);

                font-size: 16px;
            }


            @media (max-width: 600px) {

                #global-search-overlay {
                    padding-top: 70px;
                }

                .global-search-panel {
                    width:
                        calc(100vw - 20px);
                }

                .global-search-header {
                    padding: 18px;
                }

                .global-search-input-wrap {
                    margin: 14px 18px;
                }

            }

        `;


        document.head.appendChild(style);

    }


    /* =========================================
       INITIALIZE
       ========================================= */

    function initializeSearch() {

        bindSearchButtons();

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeSearch
        );

    } else {

        initializeSearch();

    }


    /* =========================================
       TY_DYNAMIC_WORKSPACE_SEARCH_V11
       Delegated event for dynamically loaded
       Workspace Shell buttons.
       ========================================= */

    document.addEventListener(
        "click",
        function (event) {

            const searchButton =
                event.target.closest(
                    ".workspace-search"
                );


            if (!searchButton) {
                return;
            }


            event.preventDefault();
            event.stopPropagation();


            openSearch();

        },
        true
    );


})();