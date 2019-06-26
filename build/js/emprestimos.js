$(() => {


    const teste = []
    const tableData = "<thead><tr><th>ID</th><th>Nome</th><th>Turma</th><th>Opção</th></tr></thead>";
    const tableDataLivro = "<thead><tr><th>ID</th><th>Titulo</th><th>Nome</th><th>Opção</th></tr></thead>";
    const tableEmpritem = "<thead><tr><th>ID</th><th>Titulo</th><th>Autor</th><th>Opções</th></tr></thead>";

    $('#table-alunos').html(tableData)
    $('#table-livros').html(tableDataLivro)
    $('#empritem').html(tableEmpritem)

    const reqAlunos = $.ajax({
        method: "get",
        url: "/alunos/all",
        dataType: "json"
    }).done((data) => {

        data.forEach((aluno) => {
                console.log(aluno)
                $('#table-alunos')
                    .append("<tr>")
                    .append("<td>" + aluno.AL_ID + "</td>")
                    .append("<td>" + aluno.AL_NAME + "</td>")
                    .append("<td>" + aluno.turma.TR_NAME + "</td>")

                .append("<td><button data-dismiss='modal' aria-label='Close' value='" + aluno.AL_ID + "'class='btn btn-sm btn-info'>Selecionar</button></td>")
                    .append("</tr>")
            }

        );
        $('#table-alunos').append("</tbody>")



        $("#table-alunos button").click(function() {
            let idAluno = $(this).val();
            const reqGetAluno = $.ajax({
                method: "get",
                url: "/alunos/find/" + idAluno,
                dataType: "json"
            }).done((result) => {
                $('#selectAluno').val(result.AL_NAME)
                $('#idAluno').val(result.AL_ID)
            })
        })
    })







    const reqLivros = $.ajax({
        method: "get",
        url: "/livros/all",
        dataType: "json"
    }).done((data) => {

        data.forEach((livro) => {
            $('#table-livros')
                .append("<tr>")
                .append("<td>" + livro.BK_ID + "</td>")
                .append("<td>" + livro.BK_TITLE + "</td>")
                .append("<td>" + livro.BK_AUTOR + "</td>")

            .append("<td><button data-dismiss='modal' aria-label='Close' value='" + livro.BK_ID + "' class='btn btn-sm btn-info'>Selecionar</button></td>")
                .append("</tr>")
        })
        $("#table-livros button").click(function() {

            let idLivro = $(this).val();

            let reqLivroselect = $.ajax({
                method: "get",
                url: "/livros/find/" + idLivro,
                dataType: "json"
            }).done((data) => {
                console.log(data);
                $('#empritem')
                    .append("<tr>")
                    .append("<td>" + data[0].BK_ID + "</td>")
                    .append("<td>" + data[0].BK_TITLE + "</td>")
                    .append("<td>" + data[0].BK_AUTOR + "</td>")
                    .append("<td><button value='" + data[0].BK_ID + "' class='btn btn-sm btn-info'>Remover</button></td>")
                    .append("</tr>")

                teste.push(data[0].BK_ID)


            })
        })


    })

    $('#saveEmpr').click(() => {


        let aluno = $('#idAluno').val()
        let data = {
            aluno: aluno,
            teste: teste
        }


        const reqSaveEmpr = $.ajax({
            method: "post",
            url: "/emprestimo/save",
            data: data
        }).done(() => {
            alert("Requisicao Encaminhada com sucesso")
        })
        console.log(dataForm)
    })

})