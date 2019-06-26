const urlSearch = window.location.search;

const result = urlSearch.substring(urlSearch.indexOf("=") + 1, urlSearch.length);


if (result == 'true') {
    alertify.notify('Registro salvo com sucesso', 'success', 10, function() { console.log('dismissed'); });
}