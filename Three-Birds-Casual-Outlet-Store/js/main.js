// Example: Load homepage content from JSON
fetch('/content/pages/home.json')
  .then(res => res.json())
  .then(data => {
    if(document.getElementById('hero-title')) document.getElementById('hero-title').innerText = data.heroTitle;
    if(document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').innerText = data.heroSubtitle;
  })
  .catch(err => console.log('Content loading error', err));
