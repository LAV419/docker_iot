
const btnDelete= document.querySelectorAll('.btn-borrar');
if(btnDelete) {
  const btnArray = Array.from(btnDelete);
  btnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if(!confirm('¿Está seguro de querer borrar?')){
        e.preventDefault();
      }
    });
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const themeSelector = document.getElementById("themeSelector");
  const themeLink = document.getElementById("theme-link");

  const savedTheme = localStorage.getItem('theme') || 'flatly';
  themeLink.setAttribute("href", `https://bootswatch.com/5/${savedTheme}/bootstrap.min.css`);

  if(themeSelector) {
    themeSelector.value = savedTheme;

    themeSelector.addEventListener("change", function () {
      const selectedTheme = themeSelector.value;
      themeLink.setAttribute("href", `https://bootswatch.com/5/${selectedTheme}/bootstrap.min.css`);
      
      localStorage.setItem('theme', selectedTheme);
    });
  }
});

