function cardTop(card) {
	var boxOffset = $(card).offset();
	return boxOffset.top;
}

// A animação acontece aqui.
// Primeiro adicionamento a função .scroll ao documento, assim toda vez que o usuário utilizar o scroll a função é ativada.
(document).scroll(function() {
	// Adiciona o valor total do Scroll a variável documentTop
	
	var documentTop = $(this).scrollTop();
	
	// Verifica se o documentTop é maior que o Topo da box #azul menos 120px. Esses 120px é para que a função seja ativada um pouco antes da box chegar ao topo.
  // Se for maior ele adiciona a classe animar.
  // Caso contrário ele remove a classe animar.
	if (documentTop > cardTop('#card') - 200) {
		$('#card').addClass('animar');
	} else {
		$('#card').removeClass('animar');
	}
});

$('#card').html('<p>' + boxTop('#card') + 'px </p>' + '<h1>' + 'px </h1>');

