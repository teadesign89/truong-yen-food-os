(function () {

    "use strict";


    /* =========================================
       TRƯỜNG YÊN FOOD OS
       TASK / ACTION LAYER v1
       ========================================= */


    const TASK_TYPES = [

        {
            key: "information",
            title: "Xem / cập nhật thông tin",
            description: "Làm việc với nguồn thông tin chính thức."
        },

        {
            key: "development",
            title: "Phát triển",
            description: "Phát triển sản phẩm, thương hiệu hoặc nội dung."
        },

        {
            key: "inspection",
            title: "Kiểm tra",
            description: "Kiểm tra yêu cầu, hồ sơ hoặc chất lượng."
        },

        {
            key: "approval",
            title: "Phê duyệt",
            description: "Thực hiện một bước phê duyệt bắt buộc."
        },

        {
            key: "deviation",
            title: "Xử lý sai lệch",
            description: "Ghi nhận và xử lý một sai lệch có kiểm soát."
        }

    ];


    const WORKSPACES = [

        {
            key: "knowledge",
            title: "Knowledge"
        },

        {
            key: "company",
            title: "Company"
        },

        {
            key: "brand",
            title: "Brand"
        },

        {
            key: "products",
            title: "Products"
        },

        {
            key: "qa",
            title: "QA GATE"
        }

    ];


    let selectedType = null;
    let selectedWorkspace = null;


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
       CREATE MODAL
       ========================================= */

    function createTaskModal() {

        if (
            document.getElementById(
                "ty-task-overlay"
            )
        ) {
            return;
        }


        const overlay =
            document.createElement("div");


        overlay.id =
            "ty-task-overlay";


        overlay.innerHTML = `

            <div
                class="ty-task-backdrop"
                data-task-close
            ></div>


            <div
                class="ty-task-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Tạo tác vụ"
            >

                <header class="ty-task-header">

                    <div>

                        <div class="ty-task-eyebrow">
                            TRƯỜNG YÊN FOOD OS
                        </div>

                        <h2>
                            Tạo tác vụ
                        </h2>

                        <p>
                            Chọn loại công việc và hệ thống cần xử lý.
                        </p>

                    </div>


                    <button
                        type="button"
                        class="ty-task-close"
                        data-task-close
                        aria-label="Đóng"
                    >
                        ×
                    </button>

                </header>


                <main class="ty-task-body">


                    <section>

                        <div class="ty-task-label">
                            01 — LOẠI TÁC VỤ
                        </div>


                        <div
                            class="ty-task-types"
                            data-task-types
                        ></div>

                    </section>


                    <section>

                        <div class="ty-task-label">
                            02 — HỆ THỐNG
                        </div>


                        <div
                            class="ty-task-workspaces"
                            data-task-workspaces
                        ></div>

                    </section>


                    <div
                        class="ty-task-summary"
                        data-task-summary
                    >
                        Chọn loại tác vụ và hệ thống để tiếp tục.
                    </div>

                </main>


                <footer class="ty-task-footer">

                    <button
                        type="button"
                        class="ty-task-cancel"
                        data-task-close
                    >
                        Hủy
                    </button>


                    <button
                        type="button"
                        class="ty-task-create"
                        data-task-create
                        disabled
                    >
                        Tạo tác vụ
                    </button>

                </footer>

            </div>

        `;


        document.body.appendChild(
            overlay
        );


        injectStyles();


        renderChoices(
            overlay
        );


        bindModal(
            overlay
        );

    }


    /* =========================================
       RENDER CHOICES
       ========================================= */

    function renderChoices(overlay) {

        const types =
            overlay.querySelector(
                "[data-task-types]"
            );


        types.innerHTML =
            TASK_TYPES.map(function (item) {

                return `

                    <button
                        type="button"
                        class="ty-task-type"
                        data-task-type="${item.key}"
                    >

                        <strong>
                            ${escapeHtml(item.title)}
                        </strong>

                        <span>
                            ${escapeHtml(item.description)}
                        </span>

                    </button>

                `;

            }).join("");


        const workspaces =
            overlay.querySelector(
                "[data-task-workspaces]"
            );


        workspaces.innerHTML =
            WORKSPACES.map(function (item) {

                return `

                    <button
                        type="button"
                        class="ty-task-workspace"
                        data-task-workspace="${item.key}"
                    >
                        ${escapeHtml(item.title)}
                    </button>

                `;

            }).join("");

    }


    /* =========================================
       MODAL EVENTS
       ========================================= */

    function bindModal(overlay) {

        overlay.addEventListener(
            "click",
            function (event) {


                if (
                    event.target.closest(
                        "[data-task-close]"
                    )
                ) {

                    closeTask();

                    return;

                }


                const type =
                    event.target.closest(
                        "[data-task-type]"
                    );


                if (type) {

                    selectType(
                        type.dataset.taskType
                    );

                    return;

                }


                const workspace =
                    event.target.closest(
                        "[data-task-workspace]"
                    );


                if (workspace) {

                    selectWorkspace(
                        workspace.dataset.taskWorkspace
                    );

                    return;

                }


                const create =
                    event.target.closest(
                        "[data-task-create]"
                    );


                if (create) {

                    createTask();

                }

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeTask();

                }

            }
        );

    }


    /* =========================================
       SELECT TYPE
       ========================================= */

    function selectType(key) {

        selectedType =
            TASK_TYPES.find(
                function (item) {

                    return item.key === key;

                }
            );


        document
            .querySelectorAll(
                "[data-task-type]"
            )
            .forEach(function (button) {

                button.classList.toggle(
                    "is-selected",
                    button.dataset.taskType === key
                );

            });


        updateState();

    }


    /* =========================================
       SELECT WORKSPACE
       ========================================= */

    function selectWorkspace(key) {

        selectedWorkspace =
            WORKSPACES.find(
                function (item) {

                    return item.key === key;

                }
            );


        document
            .querySelectorAll(
                "[data-task-workspace]"
            )
            .forEach(function (button) {

                button.classList.toggle(
                    "is-selected",
                    button.dataset.taskWorkspace === key
                );

            });


        updateState();

    }


    /* =========================================
       UPDATE STATE
       ========================================= */

    function updateState() {

        const summary =
            document.querySelector(
                "[data-task-summary]"
            );


        const create =
            document.querySelector(
                "[data-task-create]"
            );


        if (
            !selectedType ||
            !selectedWorkspace
        ) {

            if (summary) {

                summary.textContent =
                    "Chọn loại tác vụ và hệ thống để tiếp tục.";

            }


            if (create) {

                create.disabled = true;

            }

            return;

        }


        summary.innerHTML = `

            Tác vụ
            <strong>
                ${escapeHtml(selectedType.title)}
            </strong>

            cho
            <strong>
                ${escapeHtml(selectedWorkspace.title)}
            </strong>.

        `;


        create.disabled = false;

    }


    /* =========================================
       OPEN
       ========================================= */

    function openTask() {

        createTaskModal();


        const overlay =
            document.getElementById(
                "ty-task-overlay"
            );


        selectedType = null;
        selectedWorkspace = null;


        overlay
            .querySelectorAll(
                ".is-selected"
            )
            .forEach(function (item) {

                item.classList.remove(
                    "is-selected"
                );

            });


        updateState();


        overlay.classList.add(
            "is-open"
        );


        document.body.classList.add(
            "ty-task-open"
        );

    }


    /* =========================================
       CLOSE
       ========================================= */

    function closeTask() {

        const overlay =
            document.getElementById(
                "ty-task-overlay"
            );


        if (!overlay) {
            return;
        }


        overlay.classList.remove(
            "is-open"
        );


        document.body.classList.remove(
            "ty-task-open"
        );

    }


    /* =========================================
       CREATE TASK
       ========================================= */

    function createTask() {

        if (
            !selectedType ||
            !selectedWorkspace
        ) {
            return;
        }


        const task = {

            id:
                "TASK-" +
                Date.now(),

            type:
                selectedType.key,

            typeTitle:
                selectedType.title,

            workspace:
                selectedWorkspace.key,

            workspaceTitle:
                selectedWorkspace.title,

            status:
                "DRAFT",

            createdAt:
                new Date().toISOString()

        };


        const STORAGE_KEY = "ty-tasks";

        let tasks = [];

        try {

            tasks = JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                ) || "[]"
            );

        }
        catch (error) {

            tasks = [];

        }


        tasks.push(task);


        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );


        window.dispatchEvent(
            new CustomEvent(
                "ty-task-created",
                {
                    detail: task
                }
            )
        );


        window.location.href =
            "tasks.html?task=" +
            encodeURIComponent(task.id);

    }


    /* =========================================
       BIND BUTTON
       ========================================= */

    function bindTaskButton() {

        document.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        "[data-new-task]"
                    );


                if (!button) {
                    return;
                }


                event.preventDefault();
                event.stopPropagation();


                openTask();

            },
            true
        );

    }


    /* =========================================
       STYLES
       ========================================= */

    function injectStyles() {

        if (
            document.getElementById(
                "ty-task-styles"
            )
        ) {
            return;
        }


        const style =
            document.createElement("style");


        style.id =
            "ty-task-styles";


        style.textContent = `

            body.ty-task-open {
                overflow: hidden;
            }


            #ty-task-overlay {

                position: fixed;
                inset: 0;

                z-index: 10000;

                display: flex;
                justify-content: center;
                align-items: flex-start;

                padding-top: 90px;

                opacity: 0;
                visibility: hidden;

                transition:
                    opacity .15s ease,
                    visibility .15s ease;

            }


            #ty-task-overlay.is-open {

                opacity: 1;
                visibility: visible;

            }


            .ty-task-backdrop {

                position: absolute;
                inset: 0;

                background:
                    rgba(32,32,32,.30);

                backdrop-filter:
                    blur(3px);

            }


            .ty-task-panel {

                position: relative;

                width:
                    min(680px, calc(100vw - 32px));

                max-height:
                    calc(100vh - 120px);

                overflow-y: auto;

                background:
                    var(--surface, #fff);

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 16px;

                box-shadow:
                    0 24px 70px
                    rgba(0,0,0,.18);

            }


            .ty-task-header {

                display: flex;
                justify-content: space-between;
                gap: 20px;

                padding: 24px;

                border-bottom:
                    1px solid
                    var(--border, #e5e2dc);

            }


            .ty-task-eyebrow {

                margin-bottom: 6px;

                font-size: 9px;
                font-weight: 700;

                letter-spacing: 1.3px;

                color:
                    var(--brand, #795548);

            }


            .ty-task-header h2 {

                margin: 0 0 6px;

                font-size: 24px;
                font-weight: 600;

            }


            .ty-task-header p {

                margin: 0;

                color:
                    var(--muted, #777);

                font-size: 13px;

            }


            .ty-task-close {

                width: 34px;
                height: 34px;

                flex-shrink: 0;

                border-radius: 8px;

                font-size: 24px;

                color:
                    var(--muted, #777);

                cursor: pointer;

            }


            .ty-task-close:hover {

                background: #f4f1ed;

            }


            .ty-task-body {

                padding: 24px;

            }


            .ty-task-body section {

                margin-bottom: 26px;

            }


            .ty-task-label {

                margin-bottom: 12px;

                font-size: 9px;
                font-weight: 700;

                letter-spacing: 1.2px;

                color:
                    var(--brand, #795548);

            }


            .ty-task-types {

                display: grid;

                grid-template-columns:
                    repeat(2, 1fr);

                gap: 10px;

            }


            .ty-task-type {

                display: flex;
                flex-direction: column;

                gap: 5px;

                min-height: 82px;

                padding: 14px;

                text-align: left;

                background: white;

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 10px;

                cursor: pointer;

            }


            .ty-task-type:hover {

                border-color:
                    var(--brand, #795548);

            }


            .ty-task-type.is-selected {

                background: #f5eee8;

                border-color:
                    var(--brand, #795548);

                box-shadow:
                    inset 0 0 0 1px
                    var(--brand, #795548);

            }


            .ty-task-type strong {

                font-size: 13px;

            }


            .ty-task-type span {

                font-size: 11px;

                line-height: 1.45;

                color:
                    var(--muted, #777);

            }


            .ty-task-workspaces {

                display: grid;

                grid-template-columns:
                    repeat(5, 1fr);

                gap: 8px;

            }


            .ty-task-workspace {

                min-height: 46px;

                padding: 8px;

                background: white;

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 8px;

                font-size: 11px;

                cursor: pointer;

            }


            .ty-task-workspace:hover {

                border-color:
                    var(--brand, #795548);

            }


            .ty-task-workspace.is-selected {

                background:
                    var(--brand, #795548);

                border-color:
                    var(--brand, #795548);

                color: white;

            }


            .ty-task-summary {

                padding: 14px 16px;

                background: #f8f7f4;

                border:
                    1px solid
                    var(--border, #e5e2dc);

                border-radius: 9px;

                color:
                    var(--muted, #777);

                font-size: 12px;

            }


            .ty-task-summary strong {

                color:
                    var(--text, #202020);

            }


            .ty-task-footer {

                display: flex;

                justify-content: flex-end;

                gap: 10px;

                padding: 16px 24px;

                border-top:
                    1px solid
                    var(--border, #e5e2dc);

            }


            .ty-task-cancel,
            .ty-task-create {

                height: 40px;

                padding: 0 16px;

                border-radius: 8px;

                font-size: 13px;

                cursor: pointer;

            }


            .ty-task-cancel {

                background: white;

                border:
                    1px solid
                    var(--border, #e5e2dc);

            }


            .ty-task-create {

                background:
                    var(--brand, #795548);

                color: white;

            }


            .ty-task-create:disabled {

                opacity: .4;

                cursor: not-allowed;

            }


            @media (max-width: 600px) {

                #ty-task-overlay {

                    padding-top: 50px;

                }


                .ty-task-panel {

                    width:
                        calc(100vw - 20px);

                }


                .ty-task-body,
                .ty-task-header {

                    padding: 18px;

                }


                .ty-task-types {

                    grid-template-columns: 1fr;

                }


                .ty-task-workspaces {

                    grid-template-columns:
                        repeat(2, 1fr);

                }

            }

        `;


        document.head.appendChild(style);

    }


    /* =========================================
       INIT
       ========================================= */

    function init() {

        bindTaskButton();

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }


})();
