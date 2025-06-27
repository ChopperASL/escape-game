const images = [
    "weekup",
    "vase",
  ];

  let indexActuel = 0;

  function changerImage() {
    indexActuel = indexActuel + 1;

    if (indexActuel >= images.length) {
      indexActuel = 0;
    }

    const imageElement = document.getElementById("monImage");
    imageElement.src = images[indexActuel];
  }