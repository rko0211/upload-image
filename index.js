const img_select = document.getElementById("ip"); // this the input tag
var img ="";

img_select.addEventListener('change', function(){

    const reader = new FileReader();
    reader.addEventListener('load',() =>{
    img = reader.result;
    document.getElementById('imageshow').style.backgroundImage = `url(${img})`;

    });

    reader.readAsDataURL(this.files[0]);

})