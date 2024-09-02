jQuery(document).ready(function ($) {
    console.log('test')
    $('.nav_wrapper .nav_item').on("click tap", function(){
        console.log('hallooooo')
        // var $this = $(this);
        // let num = $this.data('giver');
        // $this.addClass("active")
        // $this.siblings().removeClass('active');
        // let toshow = $('.one-image-tab[data-receiver='+num+']');
        // toshow.addClass("active")
        // toshow.siblings().removeClass('active');
    })

});