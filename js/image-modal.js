// 获取模态框元素
var modal = document.getElementById('myModal');
// 获取模态框图片元素
var modalImg = document.getElementById("img01");
// 获取原有的关闭按钮元素
var span = document.getElementsByClassName("close")[0];
// 获取新添加的关闭按钮元素
var closeModalButton = document.getElementById('close-modal-button');
// 获取所有图片元素
var images = document.querySelectorAll('.li1-box-item img');

// 为每个图片添加点击事件监听器
images.forEach(function (image) {
    image.onclick = function () {
        modal.style.display = "block";
        // 短暂延迟后添加 show 类，触发动画
        setTimeout(() => {
            modal.classList.add('show');
        }, 50);
        modalImg.src = this.dataset.src;
    }
});

// 关闭模态框
function closeModal() {
    modal.classList.remove('show');
    // 动画完成后隐藏模态框
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// 原有的关闭按钮点击事件
span.onclick = closeModal;

// 新添加的关闭按钮点击事件
closeModalButton.onclick = closeModal;

// 点击模态框背景关闭模态框
modal.addEventListener('click', function (event) {
    // 检查点击的元素是否为模态框本身或者模态框的子元素（除了图片）
    if (event.target === modal || (event.target !== modalImg && modal.contains(event.target))) {
        closeModal();
    }
});