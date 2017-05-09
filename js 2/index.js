var machines, products, saved, pay, p1, p2, parsonActive, scadActive, ny, parsonsDetail;

function resetMenuButtons() {
  $("#menu_machines_img").attr("src","menu_machines.png");
  $("#menu_products_img").attr("src","menu_saved.png");
  $("#menu_saved_img").attr("src","menu_products.png");
  $("#menu_pay_img").attr("src","menu_pay.png");
}

function clearContent() {
  machines = false;
  products = false;
  saved = false;
  pay = false;
  ny = false;
  p1 = false;
  p2 = false;
  parsonActive = false;
  scadActive = false;
  ny = false;
  parsonsDetail = false;
  $('.demo').css('display','none');
  togglePay();
  toggleSaved();
  toggleProduct();
  toggleMachines();
}

function showMenu() {
  $(".menuItem").show();
}

function toggleProduct() {
  $('#productInfo').css('display','none');
  if(products) {
    // show products content
    $('#productContainer').show();
  } else {
    // hide products content
    resetProductPage();
    $('#productContainer').css('display','none');
  }
}

function toggleMachines() {
  if(machines) {
    // show machine content - machinesContainer
    $('.machineImage').show();
    $('#map').show();
    // heremap visualmap parsonmap
    $('.heremap').show();
    $('.visualmap').show();
    $('.parsonmap').show();
  } else {
    // hide machine content
    $('.parsonDirections').css('display','none');
    $(".pYellow").css('display','none');
    $(".nymap").attr("src","nymap.png");
    $('.dropClick').css('display','none');
    $('#map').css('display','none');
    $('.machineImage').css('display','none');

  }
}

function togglePay() {
  if(pay) {
    // show pay content
    $('#payContainer').show();
  } else {
    // hide pay content
    $('#payContainer').css('display','none');
  }
}

function toggleSaved() {
  if(saved) {
    // show saved content
    $('.savedImg').show();
    $('#scrollContainer').show();
    // scroll-bar-wrap
    $('.scroll-bar-wrap').show();
    // detailss
    $('.details').show();
  } else {
    // hide saved content
    // scrollContainer
    $('#scrollContainer').css('display','none');
    $('.savedImg').css('display','none');
    $('.saved').css('display','none');
    $('.save-detail').css('display','none');
  }
}

$('#menu_machines_btn').bind('click', function(e) {
  e.preventDefault();
  machines = !machines;
  if(machines) {
    // on machines page, make button yellow
    resetMenuButtons();
    $("#menu_machines_img").attr("src","menu_machines_y.png");
    clearContent();
    machines = true;
    toggleMachines();
  } else {
    // on home page, make button blue
    $("#menu_machines_img").attr("src","menu_machines.png");
    clearContent();
    showMenu();
  }
});


$('#menu_products_btn').bind('click', function(e) {
  e.preventDefault();
  products = !products;
  if(products) {
    // on products page, make button yellow
    resetMenuButtons();
    $("#menu_products_img").attr("src","menu_saved_y.png");
    clearContent();
    products = true;
    toggleProduct();
  } else {
    // on home page, make button blue
    $("#menu_products_img").attr("src","menu_saved.png");
    clearContent();
    showMenu();
  }
});


$('#menu_saved_btn').bind('click', function(e) {
  e.preventDefault();
  saved = !saved;
  if(saved) {
    // on products page, make button yellow
    resetMenuButtons();
    $("#menu_saved_img").attr("src","menu_products_y.png");
    clearContent();
    saved = true;
    toggleSaved();
  } else {
    // on home page, make button blue
    $("#menu_saved_img").attr("src","menu_products.png");
    clearContent();
    showMenu();
  }
});

$('#menu_pay_btn').bind('click', function(e) {
  e.preventDefault();
  pay = !pay;
  if(pay) {
    // on products page, make button yellow
    resetMenuButtons();
    $("#menu_pay_img").attr("src","menu_pay_y.png");
    clearContent();
    pay = true;
    togglePay();
  } else {
    // on home page, make button blue
    $("#menu_pay_img").attr("src","menu_pay.png");
    clearContent();
    showMenu();
  }
});

function configureProduct() {
  $('#product2').css('visibility','hidden');
  $('#productInfo').show();
  if(p1) {
    parsonActive = true;
  }
  if(p2) {
    scadActive = true;
    $("#product1").attr("src","product2.png");
  }
}

function resetProductPage() {
  p1 = false;
  p2 = false;
  parsonActive = false;
  scadActive = false;
  $('#productInfo').css('display','none');
  $('#product2').css('visibility','visible');
  $("#product1").attr("src","product1.png");
  $("#product2").attr("src","product2.png");
}

$( ".productImg" ).click(function() {
  resetProductPage();
});

$(function() {
  machines = false;
  products = false;
  saved = false;
  pay = false;
  p1 = false;
  p2 = false;
  parsonActive = false;
  scadActive = false;
  ny = false;
  parsonsDetail = false;
  togglePay();
  toggleMachines();
  toggleSaved();
  toggleProduct();

  $('#product1').click(function() {
    p1 = true;
    configureProduct();
  });

  $('#product2').click(function() {
    p2 = true;
    configureProduct();
  });

  $('#parson').click(function() {
    if(p1){
      $('#product2').css('visibility','visible');
      $("#product2").attr("src","productStock.png");
    }
  });

  $('#scad').click(function() {
    if(p2) {
      $('#product2').css('visibility','visible');
      $("#product2").attr("src","productStock.png");
    }
  });

  // Parsons Location clicked
  $('.parsonmap').click(function() {
  });

  // New York Title Clicked
  $('.nymap').click(function() {
    // hide other content
    $('.parsonmap').css('display','none');
    $('.visualmap').css('display','none');
    $('.heremap').css('display','none');
    ny = true;
    // change ny pic to search pic
    $(".nymap").attr("src","searchText.png");
    $('.parsonDirections').css('display','none');
    // add three dropdown pics
    $('.dropClick').show();

  });

  // NY Title Clicked --> Parsons Clicked / blueParsons.png
  $('.parsonDropdown').click(function() {
    parsonsDetail = true;
      $('.dropClick').css('display','none');
    $(".nymap").attr("src","blueParsons.png");
    // pYellow
    $('.pYellow').show();
  });

  // parsonmap
  $('.parsonmap').click(function() {
    $(".nymap").attr("src","blueParsons.png");
    $('.parsonDirections').show();
    $('.parsonmap').css('display','none');
    $('.visualmap').css('display','none');
    $('.heremap').css('display','none');
  });

  $('.pYellow').click(function() {
    $(".nymap").attr("src","blueParsons.png");
    $('.parsonDirections').show();
    $('.parsonmap').css('display','none');
    $('.visualmap').css('display','none');
    $('.pYellow').css('display','none');
    $('.heremap').css('display','none');
  });

  $('.product-1').click(function() {
    // show crayon image for product
    $('.scroll-bar-wrap').css('display','none');
    $('.p1detail').show();
    $('.saved').show();
  });

  $('.product-2').click(function() {
    // show crayola image for product
    $('.scroll-bar-wrap').css('display','none');
      $('.p2detail').show();
        $('.saved').show();
  });

  $('.product-3').click(function() {
    // show xl teal image
    $('.scroll-bar-wrap').css('display','none');
      $('.p3detail').show();
        $('.saved').show();
  });

  $('.saved').click(function() {
      $('.scroll-bar-wrap').css('display','none');
      $('.p2detail').css('display','none');
      $('.p3detail').css('display','none');
      $('.p1detail').css('display','none');
      $('.saved').css('display','none');
      $('.save-detail').show();
  });

  // savedImg
  $('.savedImg').click(function() {
    // reset product page
    clearContent();
    saved = true;
    toggleSaved();
  });
});
