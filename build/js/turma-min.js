$(function(){const o=window.location.search,n=window.location.href,t=o.substring(o.indexOf("=")+1,o.length),e=n.substring(n.indexOf("page/")+5,n.length),i=parseInt(e)+1;t&&alertify.alert("Existe alunos nesta turma não é possivel excluir ").setHeader("");const a="#"+e.toString();$(a).addClass("active"),$("#next").click(()=>{let o="/turmas/page/"+i;window.location.href=o}),$("#previous").click(()=>{let o=e-1;if(-1===o)$("previous").addClass(".disabled");else{let n="/turmas/page/"+o;console.log(o),window.location.href=n}})});const htmlFund="<option>1 Ano</option><option>2 Ano</option><option>3 Ano</option><option>4 Ano</option><option>5 Ano</option><option>6 Ano</option><option>7 Ano</option><option>8 Ano</option><option>9 Ano</option>",htmlMedio="<option>1 Ano</option><option>2 Ano</option><option>3 Ano</option>";$("#formTurma").submit(()=>{let o=$("#formTurma").serialize();return $.ajax({url:"/turmas/register/save",method:"get",data:o}).done(o=>{$("#formTurma").hide(),$("#msgAlert").append("Turma cadastrada com sucesso"),$("#msgAlert").show(),$("#btnNovaTurma").show(),$("#btnBack").show()}),!1}),$("#inputAno").change(()=>{"Ensino Fundamental"==$("#inputAno").val()?$("#inputAno2").html(htmlFund):$("#inputAno2").html(htmlMedio)});const pages=$.ajax({url:"/turmas/npages",method:"get"}).done(o=>{const n=parseInt(o);let t=0;$("#ul-pages").html('<li id="previous" class="page-item"><a class="page-link" href="#">Previous</a></li>');for(let o=1;o<=n;o++)$("#ul-pages").append('<li id="'+t+'"class="page-item"><a class="page-link" href="/turmas/page/'+t+'">'+o+"</a></li>"),t++;$("#ul-pages").append('<li id="next" class="page-item"><a class="page-link" href="#">Next</a></li')});