function home() {
  $('#home').css({ display: 'block' });
  $('#home a:first-child').css({color:'#ff3399'});
  $('#detail').css({ display: 'none' });
  $('#love').css({ display: 'none' });
  $('#hobby').css({ display: 'none' });
}
function detail() {
  $('#home').css({ display: 'none' });
  $('#detail').css({ display: 'block' });
  $('#detail a:nth-child(2)').css({color:'#ff3399'});
  $('#detail a:first-child').css({color:'white'});
  $('#love').css({ display: 'none' });
  $('#hobby').css({ display: 'none' });
}

function love() {
  $('#home').css({ display: 'none' });
  $('#detail').css({ display: 'none' });
  $('#love').css({ display: 'block' });
  $('#love a:nth-child(3)').css({color:'#ff3399'});
  $('#love a:first-child').css({color:'white'});
  $('#hobby').css({ display: 'none' });
}

function hobby() {
  $('#home').css({ display: 'none' });
  $('#detail').css({ display: 'none' });
  $('#love').css({ display: 'none' });
  $('#hobby').css({ display: 'block' });
  $('#hobby a:nth-child(4)').css({color:'#ff3399'});
  $('#hobby a:first-child').css({color:'white'});
}
