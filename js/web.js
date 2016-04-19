var main=function(){

  $('.menu_pic').click(function(){
    $('.extra').show();
  });

  $('.exit').click(function(){
    $('.extra').hide();
  });

  $('.btn').click(function(){

    var post = $('.status-box').val();
    var uname=$('.status-box1').val();

  //  $('<li>').text(post).prependTo('.posts').addClass('.sth');
  //  $('<p>').text(uname).appentTo('.sth');
    var ligen = document.querySelector('.posts');
    var lig = document.createElement("li");
    var p = document.createElement("p");
    var pp = document.createElement("p");


    var p1 =document.createTextNode(post);
    var p2 =document.createTextNode("Post by "+uname);


    ligen.insertBefore(lig, ligen.firstChild );
    ligen.insertBefore(pp,ligen.firstChild);
    pp.appendChild(p2);
    lig.insertBefore(p,lig.firstChild);

    pp.classList.add("username");
    p.appendChild(p1);

    $('.status-box').val('');
    $('.status-box1').val('');

    $('.com_btn').click(function(){
      $(this).hide();
      $('.comment').show();
    });
  });

  $('.emergency').click(function(){

    var post = $('.status-box').val();
    var uname=$('.status-box1').val();

  //  $('<li>').text(post).prependTo('.posts').addClass('.sth');
  //  $('<p>').text(uname).appentTo('.sth');
    var ligen = document.querySelector('.emerposts');
    var lig = document.createElement("li");
    var p = document.createElement("p");
    var pp = document.createElement("p");

    var p1 =document.createTextNode(post);
    var p2 =document.createTextNode("Post by "+uname);

    ligen.insertBefore(lig, ligen.firstChild );
    ligen.insertBefore(pp,ligen.firstChild);
    pp.appendChild(p2);
    lig.insertBefore(p,lig.firstChild);
    pp.classList.add("username");
    p.appendChild(p1);
  });

  $('.class_tab').click(function() {
    $('.description').hide();
    $(this).children('.description').show();
    $('.des_li').mouseover(function(){
      $(this).removeClass('back');
      $(this).addClass('current');
    });

    $('.des_li').mouseout(function(){
      $(this).removeClass('current');
      $(this).addClass('back');

    });
  });

  $('.com_btn').click(function(){
    $(this).hide();
    $('.comment').show();
  });

}

$(document).ready(main);
