jQuery(document).ready(function ($) {
    $('.nav_wrapper .nav_item').on("click tap", function(){
        var $this = $(this);
        let num = $this.data('giver');
        console.log(num);
        $this.addClass("active")
        $this.siblings().removeClass('active');
        let toshow = $('.article .wrapper[data-receiver='+num+']');
        toshow.addClass("active")
        toshow.siblings().removeClass('active');
    })

});