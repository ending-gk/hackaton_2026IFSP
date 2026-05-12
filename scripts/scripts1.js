async function criar_usuario() {
    const usuario = {
    email:document.getElementById("email").value,
    senha:document.getElementById("senha").value,
    nome_usuario:document.getElementById("nome_usuario").value,
    prontuario:document.getElementById("prontuario").value
    };

    const resposta = await fetch("/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    });

    const dados = await resposta.json();

    if (resposta.ok) {
        alert("Usuário criado com sucesso! ID: " + dados.id);
    } else {
        alert("Erro ao criar usuário: " + dados.erro);
    }
}