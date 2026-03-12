// 新增：导航栏激活当前页面（加在DOMContentLoaded最顶部）
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.navbar .menu a');
navLinks.forEach(link => {
    const linkHref = link.getAttribute('href') || 'index.html';
    if (linkHref === currentPath || (linkHref === '#' && currentPath === 'code.html')) {
        link.classList.add('active');
    }
});
// 项目数据（可自行扩展）
const projectData = {
    "cashier-student": {
        title: "SpringBoot收银系统（学生毕设版）",
        img: "https://picsum.photos/800/400?random=1",
        desc: `
            <p><strong>核心功能：</strong></p>
            <p>1. 商品管理：新增/编辑/删除商品，支持分类、价格、库存设置</p>
            <p>2. 订单管理：查看所有订单，支持退款、核销、导出Excel</p>
            <p>3. 会员管理：简易会员等级、积分、储值功能</p>
            <p>4. 收银台：支持扫码支付、现金支付，自动计算找零</p>
            <p>5. 系统设置：店铺信息、打印设置、用户权限管理</p>
            <p><strong>部署方式：</strong>Windows一键启动/ Docker部署/ Linux手动部署</p>
            <p><strong>适配场景：</strong>学生毕业设计、小型店铺自用</p>
        `,
        trialLink: "https://pos.szijea.github.io" // 替换成你的演示地址
    },
    "springboot-admin": {
        title: "SpringBoot通用后台管理系统",
        img: "https://picsum.photos/800/400?random=2",
        desc: `
            <p><strong>核心功能：</strong></p>
            <p>1. 用户管理：新增用户、重置密码、分配角色</p>
            <p>2. 权限管理：基于RBAC的菜单/按钮级权限控制</p>
            <p>3. 数据字典：统一管理系统常量，无需硬编码</p>
            <p>4. 操作日志：记录所有用户操作，支持按条件查询</p>
            <p>5. 系统监控：CPU/内存/磁盘使用率实时查看</p>
            <p><strong>技术栈：</strong>SpringBoot + MyBatis-Plus + Vue2 + ElementUI</p>
        `,
        trialLink: "https://admin.szijea.github.io" // 替换成你的演示地址
    },
    "linux-tool": {
        title: "Linux服务器运维工具箱",
        img: "https://picsum.photos/800/400?random=3",
        desc: `
            <p><strong>核心功能：</strong></p>
            <p>1. 端口检测：一键检测端口占用情况，支持批量扫描</p>
            <p>2. 进程管理：查看/杀死进程，按CPU/内存排序</p>
            <p>3. 日志查看：Web端实时查看日志，支持关键字搜索</p>
            <p>4. 磁盘清理：识别大文件、无用日志，一键清理</p>
            <p>5. 备份工具：数据库/文件自动备份，支持定时任务</p>
            <p><strong>适配系统：</strong>Ubuntu/CentOS/Debian</p>
        `,
        trialLink: "https://tool.szijea.github.io" // 替换成你的演示地址
    },
    "vue-admin": {
        title: "Vue3+ElementPlus后台模板",
        img: "https://picsum.photos/800/400?random=4",
        desc: `
            <p><strong>核心功能：</strong></p>
            <p>1. 动态路由：基于权限自动生成菜单</p>
            <p>2. 主题切换：支持亮色/暗色模式，自定义主题色</p>
            <p>3. 表单生成器：可视化配置表单，无需手写代码</p>
            <p>4. 表格封装：支持分页、筛选、导出、批量操作</p>
            <p><strong>技术栈：</strong>Vue3 + Vite + ElementPlus + Pinia</p>
        `,
        trialLink: "https://vue-admin.szijea.github.io" // 替换成你的演示地址
    },
    "python-crawler": {
        title: "Python通用爬虫框架",
        img: "https://picsum.photos/800/400?random=5",
        desc: `
            <p><strong>核心功能：</strong></p>
            <p>1. 多线程/异步爬取：大幅提升爬取速度</p>
            <p>2. 反爬处理：自动切换UA、IP代理、验证码识别</p>
            <p>3. 数据存储：支持MySQL/Redis/CSV/Excel导出</p>
            <p>4. 定时任务：支持按时间/间隔自动爬取</p>
            <p><strong>技术栈：</strong>Python + Scrapy + aiohttp + BeautifulSoup</p>
        `,
        trialLink: "https://crawler.szijea.github.io" // 替换成你的演示地址
    }
};

// 打开弹窗
function openModal(projectKey) {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    const project = projectData[projectKey];

    // 填充弹窗内容
    modalContent.innerHTML = `
        <h2 class="modal-project-title">${project.title}</h2>
        <div class="modal-project-info">
            <div class="modal-project-img" style="background-image: url('${project.img}')"></div>
            <div class="modal-project-desc">${project.desc}</div>
        </div>
        <div class="modal-project-links">
            <a href="${project.trialLink}" target="_blank" class="btn btn-trial">跳转到演示环境</a>
            <a href="https://github.com/szijea" target="_blank" class="btn btn-detail">获取源码</a>
        </div>
    `;

    // 显示弹窗
    modal.style.display = "flex";
}

// 关闭弹窗
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
}

// 页面加载完成后执行所有交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 1. 全部分类 一键折叠/展开核心逻辑
    const categoryToggle = document.querySelector(".category-toggle");
    const allCategoryContainer = document.querySelector(".all-category-container");
    categoryToggle.addEventListener("click", function() {
        this.classList.toggle("active");
        allCategoryContainer.classList.toggle("active");
    });

    // 2. 分类筛选功能（原有保留，适配新结构）
    const categoryBtns = document.querySelectorAll(".category-btn");
    const projectCards = document.querySelectorAll(".project-card");

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            // 切换激活状态（只激活当前分类，取消其他）
            categoryBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const selectedCategory = this.getAttribute("data-category");

            // 筛选卡片：全部分类显示所有，其他分类匹配标签
            projectCards.forEach(card => {
                const cardCategories = card.getAttribute("data-category").split(" ");
                if (selectedCategory === "all" || cardCategories.includes(selectedCategory)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 3. 搜索功能（原有保留，全局搜索）
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        const searchText = this.value.toLowerCase().trim();
        // 搜索时重置分类激活状态，避免筛选冲突
        categoryBtns.forEach(b => b.classList.remove("active"));

        projectCards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const desc = card.querySelector(".card-desc").textContent.toLowerCase();
            const category = card.querySelector(".card-category").textContent.toLowerCase();

            if (title.includes(searchText) || desc.includes(searchText) || category.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});