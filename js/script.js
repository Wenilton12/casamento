document.addEventListener('DOMContentLoaded', function() {
    // Definir a data do casamento (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
    // Exemplo: 15 de Novembro de 2025 às 16:00:00 (coloque a data real do seu casamento aqui)
    const weddingDate = new Date('2025-11-15T16:00:00').getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = "<p>O grande dia chegou!</p>";
        }
    }, 1000);

    // Atualizar o ano no footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Lidar com o formulário de RSVP (exemplo simples sem backend)
    const rsvpForm = document.querySelector('#rsvp form');
    const formMessage = document.getElementById('formMessage');

    rsvpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Para fazer o formulário funcionar, você pode usar um serviço como Formspree.io
        // Basta mudar o action do formulário no HTML para action="https://formspree.io/f/seuemail@exemplo.com" method="POST"
        // E configurar seu email lá.
        
        formMessage.style.display = 'block';
        formMessage.innerHTML = '<div class="alert alert-success" role="alert">Obrigado por confirmar sua presença! Mal podemos esperar para te ver!</div>';
        rsvpForm.reset(); // Limpa o formulário

        // Opcional: esconder a mensagem após alguns segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });

    // Abrir imagem no modal da galeria
    const imageModal = document.getElementById('imageModal');
    imageModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // Botão que acionou o modal
        const photoSrc = button.getAttribute('data-bs-photo'); // Pega o atributo data-bs-photo
        const modalImage = imageModal.querySelector('#modalImage');
        modalImage.src = photoSrc;
    });
});