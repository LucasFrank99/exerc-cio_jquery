$(document).ready(function() {
    $('#form-tarefa').submit(function(e) {
        e.preventDefault();
        const tarefa = $('#form-tarefa input').val();
        adicionarTarefa(tarefa);
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});

function adicionarTarefa(tarefa) {
    const li = $('<li>').text(tarefa);
    $('#lista-tarefas').append(li);
}
