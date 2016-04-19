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

    var ligen = document.querySelector('.posts');
    var lig = document.createElement("li");
    var p = document.createElement("p");
    var pp = document.createElement("p");
    var hr = document.createElement("hr");
    var a = document.createElement("a");
    var text = document.createElement("textarea");
    var a2= document.createElement("a");

    var p1 =document.createTextNode(post);
    var p2 =document.createTextNode("Post by "+uname);
    var ap= document.createTextNode("comment");
    var ap2= document.createTextNode("comment");

    a.classList.add("com_btn");
    a2.classList.add("com_new_btn");
    text.classList.add("comment");
    text.placeholder="comment";
    a.appendChild(ap);
    a2.appendChild(ap2);

    a.href="#";
    a2.href="#";

    ligen.insertBefore(lig, ligen.firstChild );
    ligen.insertBefore(pp,ligen.firstChild);
    pp.appendChild(p2);

    lig.insertBefore(a2,lig.firstChild);
    lig.insertBefore(text,lig.firstChild);
    lig.insertBefore(a,lig.firstChild);
    lig.insertBefore(hr,lig.firstChild);
    lig.insertBefore(p,lig.firstChild);

    pp.classList.add("username");
    p.appendChild(p1);

    $('.status-box').val('');
    $('.status-box1').val('');

    $('.com_btn').click(function(){
      $('.com_btn').show();
      $('.comment').hide();
      $('.com_new_btn').hide();
      $(this).hide();
      $(this).next().show();
      $(this).next().next().show();
    });
    $('.com_new_btn').click(function(){
    });
  });

  $('.emergency').click(function(){

    var post = $('.status-box').val();
    var uname=$('.status-box1').val();

    var ligen = document.querySelector('.emerposts');
    var lig = document.createElement("li");
    var p = document.createElement("p");
    var pp = document.createElement("p");
    var hr = document.createElement("hr");
    var a = document.createElement("a");
    var text = document.createElement("textarea");
    var a2= document.createElement("a");

    var p1 =document.createTextNode(post);
    var p2 =document.createTextNode("Post by "+uname);
    var ap= document.createTextNode("comment");
    var ap2= document.createTextNode("comment");

    a.classList.add("emer_com_btn");
    a2.classList.add("emer_com_new_btn");
    text.classList.add("emer_comment");
    text.placeholder="comment";
    a.appendChild(ap);
    a2.appendChild(ap2);

    a.href="#";
    a2.href="#";

    ligen.insertBefore(lig, ligen.firstChild );
    ligen.insertBefore(pp,ligen.firstChild);
    pp.appendChild(p2);

    lig.insertBefore(a2,lig.firstChild);
    lig.insertBefore(text,lig.firstChild);
    lig.insertBefore(a,lig.firstChild);
    lig.insertBefore(hr,lig.firstChild);
    lig.insertBefore(p,lig.firstChild);
    pp.classList.add("emeruser");
    p.appendChild(p1);

    $('.status-box').val('');
    $('.status-box1').val('');

    $('.emer_com_btn').click(function(){
      $('.emer_com_btn').show();
      $('.emer_comment').hide();
      $('.emer_com_new_btn').hide();
      $(this).hide();
      $(this).next().show();
      $(this).next().next().show();
    });
  });

  $('.com_btn').click(function(){
    $('.com_btn').hide();
    $('.emer_com_new_btn').hide();
    $('.emer_comment').hide();
    $('.emer_com_btn').show();
    $('.com_new_btn').show();
    $('.comment').show();
  });

  $('.emer_com_btn').click(function(){
    $('.emer_com_btn').hide();
    $('.com_new_btn').hide();
    $('.comment').hide();
    $('.com_btn').show();
    $('.emer_com_new_btn').show();
    $('.emer_comment').show();
  });

  $('.com_new_btn').click(function(){
    var post = $('.comment').val();
    $('<li>').text(post).appendTo('.composts');
  });

  $('.emer_com_new_btn').click(function(){
    var post = $('.emer_comment').val();
    $('<li>').text(post).appendTo('.emercomposts');
  });

}

$(document).ready(main);
