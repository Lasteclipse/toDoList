const minhaUrl = "http://18.229.157.15:3306/tasks"
button = document.getElementById('botao')




// Get
function receberTask() {
    fetch(minhaUrl).then(function(response) {

        return response.json();
      
      }).then(function(data) {
      
        console.log(data);
      
      }).catch(function() {
      
        console.log("Houve algum problema!");
      
      });
}

button.addEventListener('click', () => {
    campo = document.getElementById('input')
    campotxt = campo.value
    enviar(campotxt)
})

// Post
function enviar(valor) {
    fetch("http://18.229.157.15:3306/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: valor })
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
