$('form').on('submit', function(e){
    e.preventDefault();

    const tarefa = $('#text-input').val();
    const novaTarefa = $('<li></li>');
    $(`<p>${tarefa}</p>`).appendTo (novaTarefa);
    $(novaTarefa).appendTo ('ul');
    $(`#text-input`).val('');
    
    $('li').click(function(){
        $(this).toggleClass('lineThrough', true);
    })
    
})
