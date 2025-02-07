
(function () {
  console.log(123)
})()

// 此示例中 JavaScript 部分仅用于预留功能扩展，目前不需要额外的逻辑
// 页面加载完成后可添加后续需要的功能
window.addEventListener('DOMContentLoaded', function () {
  // 这里可以添加其他初始化代码
});



// 检查是否是移动端竖屏
const isMobilePortrait = window.matchMedia('(orientation: portrait) and (max-width: 767px)').matches;

if (isMobilePortrait) {
    const tipElement = document.getElementById('pc-tip');
    // 原始提示文本
    const originalText = tipElement.textContent;
    let countdown = 2;

    // 显示提示
    tipElement.style.display = 'flex';

    // 更新提示内容，加入倒计时数字
    function updateTipText() {
        tipElement.textContent = `${originalText} ${countdown.toFixed(1)}`;
    }

    // 开始倒计时
    const countdownInterval = setInterval(() => {
        if (countdown > 0) {
            updateTipText();
            countdown -= 0.1;
        } else {
            // 倒计时结束，清除定时器并隐藏提示
            clearInterval(countdownInterval);
            tipElement.style.display = 'none';
        }
    }, 100);

    // 初始更新提示内容
    updateTipText();
}