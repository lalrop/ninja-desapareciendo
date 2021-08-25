$(function() {
    $("img").on("click", function () {
        $(this).css("display","none");
    })
    $("#show-ninja").on("click",function () {
        $("img").show()
    })
})