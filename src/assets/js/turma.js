$(function() {
    //Captura URL

    const urlSearch = window.location.search;
    const url = window.location.href;
    const params = urlSearch.substring(urlSearch.indexOf("=") + 1, urlSearch.length);
    const page = url.substring(url.indexOf("page/") + 5, url.length);


    const pageLink = parseInt(page) + 1;

    //Printa mensagem de verificação de exclusão    
    if (params) {
        alertify.alert('Existe alunos nesta turma não é possivel excluir ')
            .setHeader('');
    }


    //Configura nav de paginas
    const id_nav_item_page = "#" + page.toString();
    $(id_nav_item_page).addClass('active');



    $("#next").click(() => {
        let URL = "/turmas/page/" + pageLink;
        window.location.href = URL;
    })


    $("#previous").click(() => {
        let pagePrevious = page - 1
        if (pagePrevious === -1) {
            $("previous").addClass(".disabled")
        } else {

            let URL2 = "/turmas/page/" + pagePrevious;
            console.log(pagePrevious);
            window.location.href = URL2

        }

    })

})

//HTML para converter os anos das turmas
const htmlFund = "<option>1 Ano</option><option>2 Ano</option><option>3 Ano</option><option>4 Ano</option><option>5 Ano</option><option>6 Ano</option><option>7 Ano</option><option>8 Ano</option><option>9 Ano</option>";
const htmlMedio = "<option>1 Ano</option><option>2 Ano</option><option>3 Ano</option>"




//Requisição para salvar uma turma nova
$('#formTurma').submit(() => {
    let data = $('#formTurma').serialize();
    const reqRegister = $.ajax({
        url: "/turmas/register/save",
        method: "get",
        data: data
    })


    reqRegister.done((e) => {
        $('#formTurma').hide();
        $('#msgAlert').append('Turma cadastrada com sucesso');
        $('#msgAlert').show();
        $('#btnNovaTurma').show();
        $('#btnBack').show();

    })




    return false;
})







//Trata a condição para os Anos de acordo com o tipo Ensino MEdia e FUndamental
$('#inputAno').change(() => {
    if ($("#inputAno").val() == "Ensino Fundamental") {
        $('#inputAno2').html(htmlFund)
    } else {
        $('#inputAno2').html(htmlMedio)
    }
})



const pages = $.ajax({
    url: '/turmas/npages',
    method: "get",
}).done((data) => {
    const pages = parseInt(data);
    let i2 = 0;

    $('#ul-pages').html('<li id="previous" class="page-item"><a class="page-link" href="#">Previous</a></li>')
    for (let i = 1; i <= pages; i++) {
        $('#ul-pages')
            .append('<li id="' + i2 + '"class="page-item"><a class="page-link" href="/turmas/page/' + i2 + '">' + i + '</a></li>')
        i2++;
    }

    $('#ul-pages').append('<li id="next" class="page-item"><a class="page-link" href="#">Next</a></li')




})