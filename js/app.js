$(document).ready(function(){


     
    $("#reproductor").click(function(){
        $(".admin-frame").attr("src", "admin/videoadmin.html");
        $(".admin-frame").attr("id", "video");
       // $(this).hide();
    });

     $("#generar").click(function(){

       

         switch( $(".admin-frame").attr("id")){
                 case "video": 

                 
                 var iframe = $('admin-frame').contents().find('#srcvideo').attr("value");
                 $("#prevcomponente").attr("src", "iframe");
                 

                alert(iframe);
                 break;
                 default: break;

         } 
        
        
       // $(this).hide();
    });
});