$(() => {

    const tbl = '<thead> <tr> <th scope="col">#</th><th scope="col">Nome</th> <th scope="col">Turma</th><th scope="col">Opções</th></tr></thead>';



    $('#form-search').submit(() => {
        const data = $('#form-search').serialize();
        $('#table-aluno').html("<h1>Carregando...</h1>");
        const reqSearch = $.ajax({
            url: "/alunos/search",
            method: "get",
            contentType: "application/json",
            data: data
        }).done((data) => {
            $('#table-aluno').html(tbl);

            for (let i = 0; i <= data.length; i++) {
                $('#table-aluno').append("<tr>")
                    .append('<td>' + data[i].AL_ID + '</td>')
                    .append('<td>' + data[i].AL_NAME + '</td>')
                    .append('<td>' + data[i].turma.TR_NAME + '</td>')
                    .append('<td><a href="/alunos/' + data[i].AL_ID + '"><button class="btn btn-sm btn-warning">Editar</button></a><a href="/alunos/delete/' + data[i].AL_ID + ' "><button class="btn btn-sm btn-danger">Excluir</button></a> </td>')
                    .append("</tr>")
            }
        }).fail((err) => {
            console.log("Ocorreu um erro: " + err.status);
        })

        return false;
    })




})