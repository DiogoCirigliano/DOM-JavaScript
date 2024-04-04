///------------------------------Mudança de valor ao clicar nos inputs-------------------------------------///
    const inputs = document.querySelectorAll(".input");
    inputs[1].style.borderColor = "blue";

    Array.from(inputs).forEach((input) => {
        const medida = document.getElementById("medida");
        input.addEventListener("click", () => {
            medida.innerText = input.value;
            inputs.forEach(input => {
                input.style.borderColor = "black";
            });
            input.style.borderColor = "blue";

        });
    });

///------------------Mudança das imagens ao clicar nas cores-------------------------------------------------------------///

    const imgfull = document.getElementById("imgFull");
    const cor = document.querySelectorAll('.cor');
    const btnColorChange = document.querySelectorAll(".buttonColorChange");
    btnColorChange[0].style = "border-radius:50px;border:solid 1px blue; paddind:3px;"
   
    btnColorChange.forEach((btnimg, index) => {
        btnimg.addEventListener("click", () => {
            const url = btnimg.querySelector('img').src;
            const filename = (url.substring(29, url.length-5));

            btnColorChange.forEach(btn => {
                btn.style.border = "none";
            });
            btnColorChange[index].style = "border-radius:50px;border:solid 1px blue; padding:3px;";

            const filenameUpper = filename.charAt(0).toUpperCase() + filename.slice(1);
            cor.forEach(function(string) {
                string.innerText = filenameUpper;
            });

            document.getElementById('imgFull').querySelector('img').src = "images/images-" + filename + "/imagem-1.jpeg";
            document.getElementById('img0').querySelector('img').src = "images/images-" + filename + "/imagem-0.jpeg";
            document.getElementById('img1').querySelector('img').src = "images/images-" + filename + "/imagem-1.jpeg";
            document.getElementById('img2').querySelector('img').src = "images/images-" + filename + "/imagem-2.jpeg";
        });
    });
    
///-------------------------------------------Mudança de imagem ao clicar nas mini imagens---------------------------------------------------------------///

    const imgFull = document.getElementById("imgFull");
    const imgMin = document.querySelectorAll(".imgmin");
    
    imgMin.forEach((img, index) => {
        img.addEventListener("click", () => {
            imgFull.querySelector('img').src = img.querySelector('img').src;
            imgMin.forEach(img => {
                img.style.border = "none";
            });
            imgMin[index].style = "border-bottom: 1px solid gray";
        });
    });
    