const btn = document.querySelector(".no");
let position = 0;
const moveButton = () => {
position = position ? 0 : 150;
btn.style.transform = `translate(${position}px, 0px)`;
btn.style.transition = "all 0.2s ease";
};

btn.addEventListener("click", moveButton);
btn.addEventListener("mouseover", moveButton);


const sim = document.getElementById('yes');

sim.addEventListener("click", () => {
    setTimeout(() => {
      let timerInterval;
      Swal.fire({
        title: 'Te amo gatinha ♥️',
        html: 'Prometo te encher o saco todos os dias... Mas também te fazer feliz e sorrir sempre',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector('b');
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('aperta logo');
        }
      });
    }, 5000); 
  
    setTimeout(() => {
      window.location.href = 'https://open.spotify.com/intl-pt/track/6TXq9LKugf2bgLg4MwifES?si=24eb26deff1e407d';
    }, 8000); 
  });