$(()=>{$.ajax({url:"/livros/pages",method:"post",dataType:"json"}).done(t=>{let e=0;for(let a=1;a<=parseInt(t);a++)$("#pagination-books").append('<li class="page-item"><a class="page-link" href="/livros/page/'+e+'">'+a+"</a></li>"),e++}).catch(t=>{console.log(t)});$("#form-search").submit(()=>{$("#table-book").html("<h1>Carregando...</h1>");let t=$("#form-search").serialize();$.ajax({url:"/livros/search",method:"post",dataType:"json",data:t}).done(t=>{$("#table-book").html('<thead> <tr> <th scope="col">#</th><th scope="col">Titulo</th> <th scope="col">Autor</th> <th scope="col">Genero</th><th scope="col">Opções</th></tr></thead>');for(let e=0;e<=t.length;e++)$("#table-book").append("<tr>").append("<td>"+t[e].BK_ID+"</td>").append("<td>"+t[e].BK_TITLE+"</td>").append("<td>"+t[e].BK_AUTOR+"</td>").append("<td>"+t[e].BK_GENRE+"</td>").append('<td><a href="/livros/edit/'+t[e].BK_ID+'"><button class="btn btn-sm btn-warning">Editar</button></a><a href="/livros/delete/'+t[e].BK_ID+' "><button class="btn btn-sm btn-danger">Excluir</button></a> </td>').append("</tr>")});return!1})});