// Nhỏ gọn: demo click CTA
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('moreInfoBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('More info coming soon ✨');
    });
  }
});
