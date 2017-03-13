var index = 0;



$(document).ready(function(){
  appendDom();
});

function appendDom() {
  $('button').on("click", function() {
    index++;
    $('.container').append('<div class="newDiv">' +
                            '<p>'+index+'</p>' +
                            '<button class="swap">Swap</button>' +
                            '<button class="delete">Delete</button>'+
                            '</div>');
    $('.swap').on("click", function(){
    $(this).parents('div.newDiv').css('background-color', 'yellow');
    });

    $('.delete').on("click", function(){
    $(this).parents('div.newDiv').hide('newDiv');
    });
  });
}
