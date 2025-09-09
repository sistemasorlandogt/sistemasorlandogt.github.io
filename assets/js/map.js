document.addEventListener("DOMContentLoaded", (event) => {
   

    setTimeout(()=>{

        document.querySelector('#load-iframe-map').innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d525.6505905238339!2d-90.61983456669884!3d14.47915667862715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sgt!4v1757348154719!5m2!1ses-419!2sgt" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>           
        `;

    }, 500);

});