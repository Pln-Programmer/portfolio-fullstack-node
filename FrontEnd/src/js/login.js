async function login() {
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const res = await fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email.value,
            senha: senha.value
        })
    });

    if (!res.ok) {
        alert("Usuário ou senha inválidos!");
        return;
    }        

    const json = await res.json();
    localStorage.setItem("token", json.token);
    alert("Logado!");
    window.location.href = "http://127.0.0.1:5500/FrontEnd/src/Pages/User/user.html";
}