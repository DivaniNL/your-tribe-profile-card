jQuery(document).ready(function ($) {
    setActiveTab();
    checkActiveTab();
    $('nav .nav_item').on("click tap", function(){
        var $this = $(this);
        let num = $this.data('giver');
        $this.toggleClass("active")
        $this.siblings().removeClass('active');
        let toshow = $('article .wrapper[data-receiver='+num+']');
        toshow.toggleClass("active")
        toshow.siblings().removeClass('active');
        checkActiveTab();
    })

});

function checkActiveTab(){
    var hasActiveClass = $('.wrapper.active').length > 0;
    if(hasActiveClass) {
        $('aside').removeClass('no_tab_shown');
        $('aside').addClass('collapsed');
        $('article').addClass('collapsed');

    } else {
        $('aside').removeClass('collapsed');
        $('aside').addClass('no_tab_shown');
        $('article').removeClass('collapsed');
    }
}
function setActiveTab(){

    var $this = $('nav .nav_item').first();
    let num = $this.data('giver');
    $this.toggleClass("active")
    let toshow = $('article .wrapper[data-receiver='+num+']');
    toshow.toggleClass("active")

}