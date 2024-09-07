document.getElementById('manageButton').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('featuresButton').classList.remove('active');

  });
  
  document.getElementById('featuresButton').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('manageButton').classList.remove('active');
  });
  