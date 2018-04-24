var NAleatorio;
	var NTentativas;
	limite = 20;

	function Aleatorio()
	{
		var hoje = new Date();
		var num1 = hoje.getTime();
		var num = Math.round(Math.abs(Math.sin(num1) * 1000000)) % limite;
		//window.alert(num1);
		//window.alert(num);
		return num;
	}

	function Iniciar()
	{
		NAleatorio = Aleatorio();
		NTentativas = 0;
		document.Fjogo.Saida.value='Estou a pensar num numero entre 0 e ' + (limite-1) +'. Tenta adivinhar qual é?';
		document.Fjogo.Tentativas.value=NTentativas;
		document.Fjogo.AltoBaixo.value='';
		document.Fjogo.Entrada.value='';
	}

	function Jogada(Numero)
	{
		if(Numero==NAleatorio)
		{
			NTentativas++;
			document.Fjogo.Saida.value='Acertaste em ' + NTentativas + ' tentativas! Era o numero ' + NAleatorio + '! Clica em Re-iniciar.';
			document.Fjogo.AltoBaixo.value='Está certo!';
		}
		else 
		{
			NTentativas++;
			document.Fjogo.Saida.value='Não, ' + Numero + ' não é o numero em que estou a pensar!';
			document.Fjogo.AltoBaixo.value=(NAleatorio > Numero) ? ' é mais alto!' : 'é mais baixo!';
			document.Fjogo.Tentativas.value=NTentativas;
		}
	}