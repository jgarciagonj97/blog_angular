export class Post {

    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    constructor(PTitulo = '', pTexto = '', pAutor = '', pImagen = '', pFecha = '', pCategoria = '') {
        this.titulo = PTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }

}