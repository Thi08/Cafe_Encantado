document.getElementById('form-registro').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const dados = Object.fromEntries(formData.entries());

  try {
      const response = await fetch('http://localhost:3000/profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
      });

      const data = await response.json();
      console.log('Registro bem-sucedido:', data);
      alert('Obrigado por compartilhar seus interesses conosco!');
  } catch (error) {
      console.error('Erro ao registrar:', error);
      alert('Por favor, tente novamente.');
  }
});