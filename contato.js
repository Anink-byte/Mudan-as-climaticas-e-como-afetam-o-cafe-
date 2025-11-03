(function () {
            emailjs.init("eOxKKl9NtEKpWhNq7"); 
        })();

        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_jwv9qzf", "template_nknb22l", this)
                .then(function () {
                    alert("Mensagem enviada com sucesso!");
                }, function (error) {
                    alert("Erro ao enviar mensagem: " + JSON.stringify(error));
                });
        });
