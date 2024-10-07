if (window.SimpleAnime) {
  new SimpleAnime();
}

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os links das sub-listas
  const links = document.querySelectorAll('.sub-lista li a');

  // Seleciona o iframe onde o vídeo será exibido
  const iframe = document.getElementById('video-principal');

  // Adiciona um evento de clique a cada link
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // Previne o comportamento padrão do link

      // Obtém o ID do vídeo diretamente da URL do link
      const videoId = this.href.split('v=')[1]; // Extrai o ID do vídeo da URL

      // Atualiza a URL do iframe para carregar o novo vídeo
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
    });
  });


  document.querySelectorAll('.item-lista').forEach(item => {
      item.addEventListener('click', () => {
          const subLista = item.querySelector('.sub-lista');
          const seta = item.querySelector('.seta');
          if (subLista.style.display === 'block') {
              subLista.style.display = 'none'; // Oculta a lista
              seta.textContent = '▼'; // Muda a seta
          } else {
              subLista.style.display = 'block'; // Mostra a lista
              seta.textContent = '▲'; // Muda a seta
          }
      });
  });
});

