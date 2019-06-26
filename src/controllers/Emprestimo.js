const sequelize = require('./../models/connect').sequelize;
const Emprestimo = sequelize.import('./../models/Emprestimo');
const Empritem = sequelize.import('./../models/Empritem');



module.exports = () => {

    return {
        save: (req, res) => {

            const data = JSON.stringify(req.body)
            const result = data.replace("[]", "");
            const dataFinal = JSON.parse(result)
            console.log(dataFinal.aluno);


            Emprestimo.create({
                EM_USER: 1,
                EM_ALUNO: dataFinal.aluno,
                EM_OBSERV: "observacao padrao",
                EM_STATUS: 'A'
            })


            Emprestimo.create({
                EI_EMPRESTIMO: 1,
                EI_LIVRO: 3
            })

            /*  Emprestimo.max('EM_ID').then((idMax) => {
                  dataFinal.teste.forEach(empri => {
                      Emprestimo.create({
                          EI_EMPRESTIMO: idMax,
                          EI_LIVRO: empri
                      })
                  });
              })*/





        }
    }

}