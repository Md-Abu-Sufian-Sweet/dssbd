




AOS.init();


function showCategoryProduct(id){
  $('.product-carousel').removeClass('active');
  $('#product_'+id).addClass('active');
}







//-------------------------------------------------------------//

// image array
// var image=["red","green","blue","purple","orange", "black"];

// $(".list-group li").hover(function(){
//   var value=  $(this).index();
//   alert(value);
//   hoverContent(value);
// });
// function hoverContent(value){
//   $("#list-content li").removeClass('show');
//   $("#list-content li:nth-child("+value+")").addClass("show");
//   $("#bg").removeClass();
//   $("#bg").addClass(image[value]);
// }