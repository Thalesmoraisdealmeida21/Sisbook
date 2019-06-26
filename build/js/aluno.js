//Colocar a turma no usuario após a pagina carregar
$(() => {
    const turma = $('#turma_id').val();

    $('#turma11').val(turma)
})

//Requisição ajax para cadastro de aluno
$('#form-aluno').submit(() => {
    let data = $('#form-aluno').serialize();

    //Notificações para succes e failure na inserção do aluno
    alertify.confirm('<h3 style="font-weight: bold">Confirma o cadastro de novo aluno<h1>',
            'sadsa')
        .set('onok', function(closeEvent) {
            const register = $.ajax({
                method: "post",
                url: "/alunos/register/save",
                dataType: "json",
                data: data
            })

            register.done((e, status, code) => {
                alertify.confirm('Cadastrado com sucesso !! \n Deseja cadastrar outro ?').set('onok', () => {
                    $('#name').val(null);
                    $('#age').val(null);
                    $('#obs').val(null);
                    $('#turma11').val(null);
                }).set('oncancel', () => {
                    alertify.success('Aluno cadastrado com sucesso !!!');
                    window.location.href = "/alunos";
                })

            })

            register.fail((e, status, code) => {
                alertify.error("Ocorreu uma falha ao tentar cadastrar o aluno: " + code);
            })
        })
        .set('labels', { ok: 'Sim!', cancel: 'Não' })
        .setHeader('');

    return false;
})


// Requisição par obter Turmas cadastradas 
const req = $.ajax({
    method: "get",
    url: "/turmas/all",
    dataType: "json"
})

req.done((data) => {
    console.log(data)
    data.forEach((turma) => {

        $('#turma11').append("<option value='" + turma.TR_ID + "'>" + turma.TR_NAME + "</option>")
    })
})

req.fail((data) => {

    alertify
        .alert("Ocorreu um erro e não foi possivel obter todos os dados" + data);



})





//Seta para input hidden o valor da ID da turma
$('#turma11').change(() => {
    $('#turma_id').val($('#turma11').val() + "")
})



//------------------------------------//





//Exibe formulario de cadastro
$('#btnNewEstudent').click(() => {
    $('form').show();
    $('#btnNewEstudent').hide();
    $('#msgRegister').hide();
});