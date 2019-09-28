//Create a new shopping item
$("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    let shoppingItem = $("#shopping-list-entry").val();
    let shoppingItemElement1 = "<li>" + `<span class="shopping-item">`+ shoppingItem + "</span>" +
                                `<div class="shopping-item-controls">` +
                                `<button class="shopping-item-toggle">`+
                                `<span class="button-label">check</span></button>`+" "+
                                `<button class="shopping-item-delete">`+
                                `<span class="button-label">delete</span></button></div></li>`;         
    $(".shopping-list").append(shoppingItemElement1);
});
//Delete an shopping item
$(document).on("click", ".shopping-item-delete", function(){
    $(this).closest("li").remove();
});
//Handle checked items
$(document).on("click",".shopping-item-toggle", function(){
    const checkedItem = $(this).closest("li").find('span.shopping-item');
    checkedItem.removeClass("shopping-item");
    checkedItem.toggleClass("shopping-item shopping-item__checked");
});