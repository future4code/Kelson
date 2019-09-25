let posts = new Array()
class Post {
    constructor(titulo, autor, post, img){
        this.titulo = titulo
        this.autor = autor
        this.post = post
        this.img = img
    }
}



function criar(){
    let post = new Post;
    post.titulo = document.getElementById('titulo').value;
    post.autor = document.getElementById('autor').value;
    post.post = document.getElementById('post').value;
    post.img = document.getElementById('img').value;
    
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('post').value = '';

    posts = buscaItem(posts);
    posts.push(post);
    salvaItem("posts", posts);

}    
posts = buscaItem("posts");
console.log(posts)
const main = document.querySelector("main");
for (post of posts){
    main.innerHTML +=
                 '<article>' + 
                            '<h1>' + post.titulo + '</h1>' +
                            '<h6>' + post.autor + '</h6>' +
                            '<p>' + post.post  + '</p>' +
                            '<img src="' + post.img + '" alt=""></img>' 
                   + '</article>';
}

function buscaItem(chave) {
    const valor = window.localStorage.getItem(chave);
    if (valor) {
      return JSON.parse(valor);
    }
    return [];
  }
  
  function salvaItem(chave, item) {
    if(item && chave) {
      window.localStorage.setItem(chave, JSON.stringify(item));
    }
  }