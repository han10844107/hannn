
        function ttt(){
        if (document.getElementById("switch_demo").checked ==true)
        {
          document.getElementById("sw").style="background-color:white;";
          $('.bar').css('background-color','white');
          $('.bar_icon').css('background','white');
          $('.bar_icon').css('color','black');
          $('.hot').css('background','white');
          $('.hot').css('color','black');
          $('.bdr').css('border','5px #FFBB00 solid');
          $('.bdr').css('box-shadow','0px 0px 40px red');
          $('#pop_1').css('border','4px black solid');
          $('#pop_2').css('border','4px black solid');
          $('#pop_3').css('border','4px black solid');
          $('.pop').css('color','green');

        }
        else{
          document.getElementById("sw").style="background-color:black;";
          $('.bar').css('background-color','black');
          $('.bar_icon').css('background','none');
          $('.bar_icon').css('color','white');
          $('.hot').css('background','black');
          $('.hot').css('color','white');
          $('.bdr').css('border','5px #000080 solid');
          $('.bdr').css('box-shadow','0px 0px 40px #FF1493');
          $('#pop_1').css('border','none');
          $('#pop_2').css('border','none');
          $('#pop_3').css('border','none');
          $('.pop').css('color','#FFBB00');
        }
      }
        