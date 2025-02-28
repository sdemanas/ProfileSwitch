// popup.js
document.getElementById('profile1').addEventListener('click', () => {
    browser.runtime.sendMessage({ profile: 'profile1' });
  });
  
  document.getElementById('profile2').addEventListener('click', () => {
    browser.runtime.sendMessage({ profile: 'profile2' });
  });
  