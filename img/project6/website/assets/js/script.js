(function() {
  window.onload = function() {
    document.querySelector('#page').classList.add('displayed');
  }

  document.querySelector('.btn').onclick = function() {
    document.querySelector('.main-nav').classList.toggle('open');
  }
})();