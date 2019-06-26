$(() => {
    const pageRequest = $.ajax({
        url: "/livros/pages",
        method: "post",
        dataType: "json"

    }).done((data) => {
        let i2 = 0;
        for (let i = 1; i <= parseInt(data); i++) {
            $('#pagination-books').append('<li class="page-item"><a class="page-link" href="/livros/page/' + i2 + '">' + i + '</a></li>')
            i2++;
        }

    }).catch((err) => {
        console.log(err)
    })


    $('#form-search').submit(() => {

        const tbl = '<thead> <tr> <th scope="col">#</th><th scope="col">Titulo</th> <th scope="col">Autor</th> <th scope="col">Genero</th><th scope="col">Opções</th></tr></thead>';
        $('#table-book').html("<h1>Carregando...</h1>");

        let data = $("#form-search").serialize();



        const searchRequest = $.ajax({
            url: "/livros/search",
            method: "post",
            dataType: "json",
            data: data
        }).done((data) => {

            $('#table-book').html(tbl);

            for (let i = 0; i <= data.length; i++) {
                $('#table-book').append("<tr>")
                    .append('<td>' + data[i].BK_ID + '</td>')
                    .append('<td>' + data[i].BK_TITLE + '</td>')
                    .append('<td>' + data[i].BK_AUTOR + '</td>')
                    .append('<td>' + data[i].BK_GENRE + '</td>')
                    .append('<td><a href="/livros/edit/' + data[i].BK_ID + '"><button class="btn btn-sm btn-warning">Editar</button></a><a href="/livros/delete/' + data[i].BK_ID + ' "><button class="btn btn-sm btn-danger">Excluir</button></a> </td>')
                    .append("</tr>")
            }



        })

        return false
    })




});