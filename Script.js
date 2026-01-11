// Lista de sugerencias con enlaces asociados
const datos = [
  { nombre: "Boligrafo Deli de gel 0.5mm", url: "1.html" },
  { nombre: "boligrafo de punta fina quality asurance", url: "2.html" },
  { nombre: "lapiz de grafito hexagonal paper mate HB No.2", url: "3.html" },
  { nombre: "tajador(sacapuntas) SABONIS SC010", url: "4.html" },
  { nombre: "corrector en cinta BAIHANG BH-100K", url: "5.html" },
  { nombre: "Pegamento en barra con diseño de pato marca Tren Art", url: "6.html" },
  { nombre: "Tijera infantil segura DI313 con punta Roma", url: "7.html" },
  { nombre: "Libteta generica de 100 hojas con pasta transparente", url: "8.html" },
  ;

const input = document.getElementById("busqueda");
const sugerencias = document.getElementById("sugerencias");

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  sugerencias.innerHTML = "";

  if (texto === "") return;

  const resultados = datos.filter(item => 
    item.nombre.toLowerCase().includes(texto)
  );

  resultados.forEach(resultado => {
    const li = document.createElement("li");
    li.textContent = resultado.nombre;

    // Al hacer clic: redirige a la URL
    li.addEventListener("click", () => {
      window.open(resultado.url, "_blank"); // Abre en nueva pestaña
      sugerencias.innerHTML = "";
      input.value = resultado.nombre;
    });

    sugerencias.appendChild(li);
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-menu")) {
    sugerencias.innerHTML = "";
  }
});

// --- NUEVO: Abrir con Enter y autocompletar ---
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const texto = input.value.toLowerCase();
    const resultado = datos.find(item =>
      item.nombre.toLowerCase().includes(texto)
    );

    if (resultado) {
      input.value = resultado.nombre; // Autocompleta
      window.open(resultado.url, "_blank"); // Abre el enlace
      sugerencias.innerHTML = "";
    }
  }
});
