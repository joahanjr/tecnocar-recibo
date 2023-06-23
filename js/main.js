document.addEventListener("DOMContentLoaded", () => {
     const button = document.querySelector(".convertir");
     
     button.addEventListener("click", () => {
          button.classList.add("inactive");
          const elementoConvertido = document.body;
          html2pdf()
               .set({
                    margin: 0.2,
                    filename: 'documento.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 3, letterRendering: true },
                    jsPDF: {
                         unit: "cm",
                         format: [21.6, 34],
                         orientation: 'portrait',
                    }
               })
               .from(elementoConvertido)
               .save()
               .then(() => {
                    console.log("guardado");
                    button.classList.remove("inactive");
                    const myform = document.querySelector(".myform");
                    if (myform) myform.reset();
               })
               .catch(err => console.log(err));
     });
});