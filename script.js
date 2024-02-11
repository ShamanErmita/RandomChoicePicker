//Função que escolhe uma opção aleatória
let pickRandomChoice = () => {
    const choicesInput = document.getElementById("choices");
    const resultElement = document.getElementById("result");
  
    //Obter as escolhas escritas no local de escrita e divide as num array
    const choices = choicesInput.value.split("\n").map((choice) => choice.trim());
  
    //Verifica se foram escritas escolhas ou seja se o array não está vazio
    if (choices.length === 0 || (choices.length === 1 && choices[0] === "")) {
      resultElement.textContent = 'Please Enter Choices';
    }
    else{
      //Gerar um index aleatório do array
      const randomIndex = Math.floor(Math.random() * choices.length);
      //Mostrar a opção escolhida aleatoriamente
      const randomChoice = choices[randomIndex];
      resultElement.textContent = `Random Choice: ${randomChoice}`;
    }
  };
  
  const pickButton = document.getElementById("pickButton");
  //Adidiona um event listener ao botão
  pickButton.addEventListener("click", pickRandomChoice);