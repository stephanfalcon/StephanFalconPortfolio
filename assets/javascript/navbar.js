var portfolio = $("#portfolio")
var contact = $("#contact")
var link = $(".link")

portfolio.on("click",function(arg){
    $(".dropdown-menu").toggle()
})

link.hover(function(arg){
    this.toggle()
})
contact.on("click",function(arg){
    
})
