

var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
    var $elem = $( selector );
    this.selector = $elem;
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
      var tablero = "<div id='"+selector+"' class='tablero'></div>"
      $("body").append(tablero);
      $(".menu").append("<div class='active' style='cursor:pointer;'>"+selector+"</div>");
  };

  initialize();
};

var count_post = 0;

var PostIt = function(contenido = "...") {
  // Aquí va el código relacionado con un post-it
    this.contenido = contenido;
    this.count_post = count_post += 1;
};

PostIt.prototype.makePost = function(tablero, top, left){
    post_it = '<div id="'+this.count_post+'" class="post-it" style="top:'+top+';left:'+left+'"><div class="header"><span class="close">X</span></div><div class="content" contenteditable="true" >'+this.contenido+'</div></div>'
    
    tablero.append(post_it)
}

$(function() {
    
    $("#nuevo").click(function(){
       $(".new-tablero").fadeIn(1000); 
    });
    
    
    $("#crear").click(function(){
        nombre_tablero = $("#nombre-t").val();
        tablero = new Board("#" + nombre_tablero);
    });
    
    
  // Esta es la fucnión que correrá cuando este listo el DOM 
    /*tablero = new Board('#board');
    
    tablero.selector.dblclick(function(e){
        
        var posX = $(this).position().left, posY = $(this).position().top;
        var left = e.pageX - posX
        var top = e.pageY - posY
        
        var post_it = new PostIt()
        
        post_it.makePost(tablero.selector, top, left);
        
        $(".post-it").draggable({handle: ".header", stack: "div"});
        
        $(".post-it").dblclick(function(event){
            event.stopPropagation();
        });
        
        $(".header span").on("click", function(){
            $(this).parent().parent().remove();
        });
        
    });
    
*/
    
   
});



