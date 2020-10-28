$( document ).ready(function () {
   $(".gallery_two").slice(0, 1).show();
   if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
   }		
   $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".gallery_two:hidden").slice(0, 6).slideDown();
      if ($(".gallery_two:hidden").length == 0) {
         $("#loadMore").fadeOut('slow');
      }
   });
});