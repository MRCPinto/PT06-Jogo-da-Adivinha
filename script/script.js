var NAleatorio;
	var NTentativas;
	limite = 20; //limite de números que a consola pode escolher, as possibilidades vão de 0 a 19

	function Aleatorio()//função que faz a consola escolher um número aleatório
	{
		var hoje = new Date();
		var num1 = hoje.getTime();
		var num = Math.round(Math.abs(Math.sin(num1) * 1000000)) % limite;
		//window.alert(num1);
		//window.alert(num);
		return num;
	}

	function Iniciar()//função que vai iniciar o jogo
	{
		NAleatorio = Aleatorio();
		NTentativas = 0;
		document.Fjogo.Saida.value='Estou a pensar num numero entre 0 e ' + (limite-1) +'. Tenta adivinhar qual é?';
		document.Fjogo.Tentativas.value=NTentativas;
		document.Fjogo.AltoBaixo.value='';
		document.Fjogo.Entrada.value='';
	}

	function Jogada(Numero)//função que verifica a jogada do utilizador e se acerou ou não no número
	{
		if(Numero==NAleatorio)//se acertar o jogo acaba e é dado o número de tentativas que o utilizador demorou até a acertar no número
		{
			NTentativas++;
			document.Fjogo.Saida.value='Acertaste em ' + NTentativas + ' tentativas! Era o numero ' + NAleatorio + '! Clica em Re-iniciar.';
			document.Fjogo.AltoBaixo.value='Está certo!';
		}
		else //se não acertar o jogo continua e a tentativa é adicionada às outras tentativas falhadas caso existam
		{
			NTentativas++;
			document.Fjogo.Saida.value='Não, ' + Numero + ' não é o numero em que estou a pensar!';
			document.Fjogo.AltoBaixo.value=(NAleatorio > Numero) ? ' é mais alto!' : 'é mais baixo!';
			document.Fjogo.Tentativas.value=NTentativas;
		}
	}