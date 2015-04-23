function resume_show()
{
  $('#about-me-main').hide(1000);
  $('#resume').show(1000);
}

function resume_hide()
{
  $('#resume').hide(1000);
  $('#about-me-main').show(1000);
}

function name_show(index)
{
  $('#name' + "-" + index).stop(true, false).animate({'top':'225px'}, 200);
}

function name_hide(index)
{
  $('#name' + "-" + index).stop(true, false).animate({'top':'300px'}, 200);
}

function project_show(index)
{
$('#projects-main').hide(1000);
$('.projects').each(function() {
  $('#project' + "-" + index).show(1000);
});

}

function project_hide(index)
{
$('.projects').each(function() {
  $('#project' + "-" + index).hide(1000);
});
$('#projects-main').show(1000);
}

$(document).ready(function(){
/* HIDE RESUME AND PROJECT DETAILS */
  $('#resume').hide();
  $('.projects').each(function() {
  $(this).hide();
  });

return $("a.scrollable").click(function(e) {
      var targetScroll;
      e.preventDefault();
      targetScroll = $($(this).attr("href")).offset().top;
      return $('html, body').animate({
        scrollTop: targetScroll
      }, 500);
});

});
