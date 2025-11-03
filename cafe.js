const cafes = {
    "arábica": { temperatura: "18°C - 23°C", solo: "Profundo, bem drenado, fértil e aerado" },
    "bourbon": { temperatura: "18°C - 22°C", solo: "Profundo e bem drenado" },
    "catuaí": { temperatura: "18°C - 23°C", solo: "Profundo, fértil, bom para drenagem" },
    "mundo novo": { temperatura: "18°C - 23°C", solo: "Profundo, leve, fértil" },
    "acaiá": { temperatura: "18°C - 23°C", solo: "Profundo, bem drenado" },
    "icatu": { temperatura: "18°C - 23°C", solo: "Profundo, fértil, levemente ácido" },
    "catucai": { temperatura: "18°C - 23°C", solo: "Profundo e bem drenado" },
    "café arara": { temperatura: "18°C - 23°C", solo: "Profundo e bem drenado" },
    "arábica amarelo": { temperatura: "18°C - 23°C", solo: "Profundo, fértil" },
    "arábica vermelho": { temperatura: "18°C - 23°C", solo: "Profundo, fértil, boa drenagem" },
    "catiguá": { temperatura: "18°C - 23°C", solo: "Profundo, fértil, leve" },
    "topázio": { temperatura: "18°C - 23°C", solo: "Profundo, bem drenado" },
    "icatu amarelo": { temperatura: "18°C - 23°C", solo: "Profundo e fértil" },
    "robusta": { temperatura: "22°C - 26°C", solo: "Profundo, fértil, com boa drenagem" },
    "conilon": { temperatura: "22°C - 26°C", solo: "Profundo, fértil, levemente ácido" }
};

document.getElementById("buscarCafe").addEventListener("click", function() {
    const nome = document.getElementById("nomeCafe").value.toLowerCase().trim();
    const resultado = document.getElementById("resultadoCafe");

    if (cafes[nome]) {
        resultado.innerHTML = `<strong>${nome.charAt(0).toUpperCase() + nome.slice(1)}</strong><br>
                               Temperatura Ideal: ${cafes[nome].temperatura}<br>
                               Solo Ideal: ${cafes[nome].solo}`;
    } else {
        resultado.innerHTML = "Café não encontrado. Verifique a grafia.";
    }
});
