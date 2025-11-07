const quadros = document.querySelectorAll('[class^="quadro"]');


quadros.forEach((quadro, index) => {
  quadro.addEventListener('click', () => {


    const links = [
      "camisas.html",
      "calças.html",
      "jaquetas.html",
      "sapatos.html"
    ];



    window.open(links[index], "_blank");
  });
});
