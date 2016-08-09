//var colores = ["#7C7877","#490a3d","#4f953b", "#ef9e9f"]
//var random = Math.floor(Math.random(3)* 4);

//$("body").append("<div style='background-color:"+colores[random]+"'>Hola</div>")


var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
    var $elem = $( selector );
    this.selector = $elem;
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
      var colores = ["#1F2124","#274c5e","#4f953b", "#512645"]
      var random = Math.floor(Math.random(3)* 4);
      
      //id='"+selector+"'
      id = selector.slice(1);
      var tablero = "<div class='tablero' id='"+id+"' style='background-color:"+colores[random]+"'></div>"
      
      $("body").find(".tablero").hide();
      $("body").append(tablero);
      $(".menu").find("div").removeClass("active");
      $(".menu").append("<div class='active opcion' style='cursor:pointer;'>"+selector+"</div>");
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
        $("#nombre-t").val("");
        $(".new-tablero").fadeOut(1000);
    });
    
    $("body").on("click", ".opcion", function(){
        $(".menu").find("div").removeClass("active");
        $(this).addClass("active"); 
        ver_tablero = $(this).text();
        $("body").find(".tablero").hide();
        $(ver_tablero).show();
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



