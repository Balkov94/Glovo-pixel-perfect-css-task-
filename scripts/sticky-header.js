
(function () {
     let entireHeaderDiv = document.getElementById("header_container");// header top + sticky hidden part
     let header = document.getElementById("header"); // header top logo + button -> ALWAYS VISIBLE!
     let stickySpanText = document.getElementById("span_container"); //inline inner hidden scroll text
     let stickyAddressField = document.getElementById("header_sticky_part"); //header bottom -> hidden address field

     window.addEventListener("load", function () {
          stickySpanText.style.display = "none";
          // hide -> " Въведете адреса си, за да знаете какво има близо до Вас"
     })
     window.addEventListener("load", function () {
          stickyAddressField.style.display = "none";
          // hide -> " address text field"
     })

     window.addEventListener("scroll", function () {
          // !!! windos,pageYOffset -> y scrolling position of the window!
          yOffset = window.pageYOffset;

          if (yOffset > 0) {
               header.id = "header_scroll";                   
          }

          if(yOffset===0){
               header.id = "header";         
          } 

          if (yOffset > 230) {
               header.id = "header_scroll";
               header.style.boxShadow = "none";
               entireHeaderDiv.id = "header_scroll";

               stickySpanText.style.display = "inline"; //hidden span text

               stickyAddressField.style.display = "inline"; //hidden address field
               stickyAddressField.style.position = "fixed";
               stickyAddressField.style.top = "100px";

               stickyAddressField.style.boxShadow="0 2px 4px rgb(0 0 0 / 10%)" ;

               // add input field - "What is your address to sticky header" 
          }
          else{
               // header.id = "header";   
               header.style.boxShadow="0 2px 4px rgb(0 0 0 / 10%)" 
               entireHeaderDiv.id = "header";
               stickySpanText.style.display = "none";
               stickyAddressField.style.display = "none";
          }
     })
})()

