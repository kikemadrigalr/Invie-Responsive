//script para animar el boton menu

  /*----------MediaQueries en JS----------*/

    /*-----Funcion para agregar la clase active-----*/
    var $burgerButton = document.getElementById('burger-button');
    var $menu = document.getElementById('menu');
      
      function toggleMenu(){
        $menu.classList.toggle('active');
      }
      /*-----Funcion para agregar la clase active-----*/


      var consulta = window.matchMedia('(max-width: 500px)');

      /*consulta.addListener, estara esperando un cambio en el navegador sin recargar la pagina*/
      consulta.addListener(mediaQuery);

      function mediaQuery(){
        if(consulta.matches){

          console.log('Se cumplio la condicion');  

          $burgerButton.addEventListener('touchstart', toggleMenu);
          
        }
        else{
          console.log('NOOO, Se cumplio la condicion');

           $burgerButton.removeEventListener('touchstart', toggleMenu);
        }
      }

      mediaQuery();

      /*-----Lazy Loading de Imagenes-----*/
      var bLazy = new Blazy({
        selector: 'img'
      });
      /*-----Lazy Loading de Imagenes-----*/

 
//script para animar el boton menu

/***************Gestos Touch**************/
function showMenu(){
        $menu.classList.add('active');
        document.body.classList.add('opened');
}

function hideMenu(){
        $menu.classList.remove('active');
        document.body.classList.remove('opened');
}

//capturando el elemento body 
var body = document.body;

//instanciando hammer, y pasando el elemento body para que sea quien espere el evento
var gestos = new Hammer(body);

//evento swipe left // se usa .on para que la varible gestos este escuchando y esperando el evento
//ocultar menu
gestos.on('swipeleft', hideMenu);

//evento swipe rigth, mostrar menu
gestos.on('swiperight', showMenu);

/***************Gestos Touch**************/