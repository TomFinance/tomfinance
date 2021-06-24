$(function () {
  $('.gnb-menu').on('click', function () {
    $(this).toggleClass('is-mbgnb-open')
    $(this).next('div').toggleClass('mb_hidden')
  })

  var langBtn = $('.lang .cnt'),
    langList = $('.lang > div')
  langBtn.on('click', function () {
    langList.toggle()
  })
})
