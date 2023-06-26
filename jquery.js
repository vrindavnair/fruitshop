$(document).ready(function(){
    $('.btn1').click(function(){
        $('#p1').show()
        document.getElementById('b11').innerHTML="Read Less"
    })
    $('.btn1').mouseover(function(){
        $('#p1').hide()
        document.getElementById('b11').innerHTML="Read More"
    })
    
})
// $(document).ready(function(){
//     $('.btn3').click(function(){
//         $('#p1').hide()
//     })
    
// })



$(document).ready(function(){
    $('#pic1').click(function(){
        $('.f1').fadeOut(2000).fadeIn(2000)
    })
    
})

$('#pic2').mouseover(function(){
    $('.f2').fadeOut(1000).fadeIn(1000)
})



// $('#pic3').mouseover(function(){
//     $('.f3').slideUp(1000).slideDown(1000)
// })


// $('#pic4').mouseover(function(){
//     $('.f4').fadeOut(1000).fadeIn(1000)
// })



// $('#pic5').mouseover(function(){
//     $('.f5').fadeOut(1000).fadeIn(1000)
// })



$('#pic6').mouseover(function(){
    $('.f6').fadeOut(2000).fadeIn(2000)
})



$('#pic7').mouseover(function(){
    $('.f7').fadeOut(2000).fadeIn(2000)
})
