document.querySelectorAll('.hover-img-link').forEach(link => {
    const img = link.querySelector('.hover-img');
    link.addEventListener('mouseover', () => {
      if (img) img.style.display = 'inline-block';
    });
    link.addEventListener('mouseout', () => {
      if (img) img.style.display = 'none';
    });
  });