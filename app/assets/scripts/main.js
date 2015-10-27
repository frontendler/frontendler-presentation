function Presentation (){
    this.total = $(".slide").size();
    this.currentSlide = 1;

    this.next = function () {
        if (this.currentSlide < this.total){
            this.currentSlide ++;
            $(".slide").eq(this.currentSlide - 1).removeClass("disable");
            $(".controls .count").html(this.currentSlide);
        }
    }

    this.previous = function () {
        if (this.currentSlide > 1 ){
            this.currentSlide --;
            $(".slide").eq(this.currentSlide).addClass("disable");
            $(".controls .count").html(this.currentSlide);
        }
    }
}

$(document).ready(function (){
    var presentation = new Presentation();

    $(".controls .bt.right").click(function () {
        presentation.next();
    })

    $(".controls .bt.left").click(function () {
        presentation.previous();
    })
});
