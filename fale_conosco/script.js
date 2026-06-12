const links = document.querySelectorAll('.opcoes li a');

links.forEach(link => {
    link.addEventListener('click', function () {
        
        links.forEach(l => l.classList.remove('ativo'));
        
        this.classList.add('ativo');
    });
});




const inputNome     = document.querySelector('input[type="text"]');
const inputEmail    = document.querySelector('input[type="email"]');
const inputWhatsapp = document.querySelector('input[type="tel"]');
const btnContato    = document.querySelector('.btn-contato');


inputWhatsapp.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else if (v.length) v = `(${v}`;
    this.value = v;
});


[inputNome, inputEmail, inputWhatsapp].forEach(input => {
    input.addEventListener('input', function () {
        this.style.outline = '';
    });
});


btnContato.addEventListener('click', function (e) {
    e.preventDefault();

    const nome     = inputNome.value.trim();
    const email    = inputEmail.value.trim();
    const whatsapp = inputWhatsapp.value.trim();

    let valido = true;

  
    [inputNome, inputEmail, inputWhatsapp].forEach(input => {
        if (!input.value.trim()) {
            input.style.outline = '2px solid #ff0000';
            valido = false;
            alert("Preencha o e-mail corretamente")
        }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        inputEmail.style.outline = '2px solid #ff0000';
        valido = false;
         alert("Preencha seu whatsapp corretamente")
    }

    if (!valido) return;
    alert("Certo!Você será encaminhado")

});
    
