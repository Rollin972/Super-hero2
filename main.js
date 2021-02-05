var canvas = new fabric.Canvas("myCanvas")

Player_x = 10;
Player_y = 10;

block_width = 30;
block_height = 30;

player_img = "";
block_img = "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(img)
    {
       player_img = img;
       player_img.scaleToWidth(150);
       player_img.scaleToHeight(140);
       player_img.set({

          top: Player_y,
          left: Player_x
       });
       canvas.add(player_img);
    });

}

function block_update(get_img)
{
    fabric.Image.fromURL(get_img,function(img)
    {
       block_img = img;
       block_img.scaleToWidth(block_width);
       block_img.scaleToHeight(block_height);
       block_img.set({

          top: Player_y,
          left: Player_x
       });
       canvas.add(block_img);
    });

   }
   window.addEventListener("keydown",my_keydown);

   function my_keydown(e)
   {
      keypressed=e.keyCode;
      if (e.shiftKey==true && keypressed=='80')
      {
         block_width= block_width+10;
         block_height= block_height+10;
         document.getElementById("width").innerHTML=block_width;
         document.getElementById("height").innerHTML=block_height;
      }
   
      if (e.shiftKey==true && keypressed=='77')
      {
         block_width= block_width-10;
         block_height= block_height-10;
         document.getElementById("width").innerHTML=block_width;
         document.getElementById("height").innerHTML=block_height;
      }
   
      if(keypressed=='38')
      {
         up();
      }
   
      if(keypressed=='40')
      {
         down();
      }
   
      if(keypressed=='37')
      {
         left();
      }
   
      if(keypressed=='39')
      {
         right();
      }
   
      if(keypressed=='70')
      {
         block_update("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
      }
   
      if(keypressed=='66')
      {
         block_update("https://i.postimg.cc/FscwL6M0/spiderman-body.png");
      }
   
      if(keypressed=='76')
      {
         block_update("https://i.postimg.cc/KzF6GDqt/hulk-legs.png");
      }
   
      if(keypressed=='82')
      {
         block_update("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png");
      }
   
      if(keypressed=='72')
      {
         block_update("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png");
      }
   }
   
   function up()
   {
      if (Player_y >= 0)
      {
         Player_y = Player_y - block_height;
         canvas.remove(player_img);
         player_update();
      }
   }
   
   function down()
   {
      if (Player_y <= 500)
      {
         Player_y = Player_y + block_height;
         canvas.remove(player_img);
         player_update();
      }
   }
   
   function left()
   {
      if (Player_x >= 0)
      {
         Player_x = Player_x - block_width;
         canvas.remove(player_img);
         player_update();
      }
   }
   
   function right()
   {
      if (Player_x <= 700)
      {
         Player_x = Player_x + block_width;
         canvas.remove(player_img);
         player_update();
      }
   }