// Filter functionality for categories
document.querySelectorAll('.category-filter a').forEach(function (categoryLink) {
    categoryLink.addEventListener('click', function (event) {
      event.preventDefault();
  
      // Remove active class from all links
      document.querySelector('.category-filter .active').classList.remove('active');
  
      // Add active class to clicked link
      this.classList.add('active');
  
      // Get category from clicked link
      const category = this.textContent.toLowerCase();
  
      // Show/hide items based on category
      const items = document.querySelectorAll('.menu-item');
      items.forEach(function (item) {
        if (category === 'all categories' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
 // Show more functionality
document.querySelector('.show-more-btn').addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.menu-item.hidden');

  // Show 4 hidden items at a time
  let count = 0;
  hiddenItems.forEach(function (item) {
      if (count < 4) {
          item.classList.remove('hidden');
          count++;
      }
  });

  // If there are no more hidden items, hide the button
  if (document.querySelectorAll('.menu-item.hidden').length === 0) {
      // Uncomment the following line if you want to keep the button visible
      // this.style.display = 'none';
  }
});

  