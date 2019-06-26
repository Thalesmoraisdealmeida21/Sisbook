const sequelize = require('./../models/connect').sequelize;

const Livros = sequelize.import('./../models/Livro');
const Op = sequelize.Op;


module.exports = () => {

    return {

        index: (req, res) => {
            let books;

            Livros.findAll().then((books) => {
                res.render('livros/index', {
                    title: "Livros",
                    titlePanel: "Livros",
                    books: books
                })
            })



        },


        find: (req, res) => {
            let id = req.params.id;

            Livros.findAll({ where: { BK_ID: id } }).then((livro) => {
                res.status(200).json(livro);
            })
        },

        getBooks: (req, res) => {
            Livros.findAll().then((books) => {
                res.json(books)
            });

        },

        pages: (req, res) => {
            Livros.findAndCount().then((pages) => {
                let nregistros = parseFloat(pages.count);
                let nPages = nregistros % 5;

                if (nPages === 0) {
                    res.json(nregistros / 5);
                } else {
                    res.json(Math.trunc(nregistros / 5) + 1);
                }


            })
        },


        select: (req, res) => {
            let page = 0;



            if (req.params.skip) {
                page = parseInt(req.params.skip) * 5
            }




            Livros.findAll({
                limit: 5,
                offset: page
            }).then((books) => {
                res.render('livros/index', {
                    title: "Livros",
                    titlePanel: "Livros",
                    books: books
                })
            })
        },

        getAll: (req, res) => {
            Livros.findAll().then((livros) => {
                res.status(200).json(livros)
            })
        },

        register: (req, res) => {
            const data = {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                obs: req.body.obs,
                sinopse: req.body.sinopse
            }



            Livros.create({
                BK_TITLE: data.title,
                BK_GENRE: data.genre,
                BK_AUTOR: data.author,
                BK_OBS: data.obs,
                BK_SINOPSE: data.sinopse
            }).catch((err) => {
                res.send(err);
            })

            res.redirect('/livros')
        },


        delete: (req, res) => {
            let id = req.params.id

            Livros.destroy({
                where: {
                    BK_ID: id
                }
            })

            res.redirect('/livros')
        },

        editBook: (req, res) => {
            let id = req.params.id

            Livros.findAll({
                where: {
                    BK_ID: id
                }
            }).then((book) => {
                res.render('livros/update', {
                    title: "Livros",
                    titlePanel: "Editar Livro",
                    book: book
                })
            })
        },

        update: (req, res) => {


            const data = {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                obs: req.body.obs,
                sinopse: req.body.sinopse,
                id: req.body.id
            }


            Livros.update({
                BK_TITLE: data.title,
                BK_GENRE: data.genre,
                BK_AUTOR: data.author,
                BK_OBS: data.obs,
                BK_SINOPSE: data.sinopse
            }, {
                where: {
                    BK_ID: data.id
                }
            })

            res.redirect('/livros')
        },

        search: (req, res) => {
            const field = req.body.field;
            const search = req.body.search;


            if (field === "Titulo") {
                Livros.findAll({
                    where: {
                        BK_TITLE: {
                            [Op.like]: "%" + search + '%'
                        }
                    }
                }).then((result) => {
                    res.json(result);
                })
            }

            if (field === "Codigo") {
                Livros.findAll({
                    where: {
                        BK_ID: {
                            [Op.like]: "%" + search + '%'
                        }
                    }
                }).then((result) => {
                    res.json(result);
                })
            }
            if (field === "Genero") {
                Livros.findAll({
                    where: {
                        BK_GENRE: {
                            [Op.like]: "%" + search + '%'
                        }
                    }
                }).then((result) => {
                    res.json(result);
                })
            }
            if (field === "Autor") {
                Livros.findAll({
                    where: {
                        BK_AUTOR: {
                            [Op.like]: "%" + search + '%'
                        }
                    }
                }).then((result) => {
                    res.json(result);
                })
            }

            if (field === "Observação") {
                Livros.findAll({
                    where: {
                        BK_OBS: {
                            [Op.like]: "%" + search + '%'
                        }
                    }
                }).then((result) => {
                    res.json(result);
                })
            }

            if (field === "Sinopse") {
                Livros.findAll({
                    where: {
                        BK_SINOPSE: {
                            [Op.like]: "%" + search + '%'
                        }
                    }
                }).then((result) => {
                    res.json(result);
                })
            }












        }





    }


}