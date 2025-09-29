// Obtener parámetros de URL
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d'));

if (!isNaN(n) && !isNaN(d)) {
    class Quickchart {
        constructor(n, d) {
            this.n = n;
            this.d = d;
        }

        crearCadunos() {
            let cad = Array(this.d).fill(1); // todas las rebanadas iguales
            return cad.join(',');
        }

        generarEtiquetas() {
            let etiquetas = [];
            for (let i = 0; i < this.d; i++) {
                if (i < this.n) {
                    etiquetas.push(this.n + "/" + this.d); // poner la fracción en las primeras n
                } else {
                    etiquetas.push(""); // las demás sin etiqueta
                }
            }
            return etiquetas.join('|');
        }

        generarSrcImg() {
            let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
                + "&chs=500x250&chl=" + this.generarEtiquetas();
            return url;
        }
    }

    let q = new Quickchart(n, d);
    document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
} else {
    document.getElementById("contenido").innerHTML = "<p>Por favor, agrega n y d en la URL</p>";
}
