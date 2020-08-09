//servidor
const express = require('express')
const server = express()

//chamando as paginas
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configuração de nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
        express: server,
        noCache: true,
    })
    //Inicio e configuração do servidor
server
//receber os dos do req.body
    .use(express.urlencoded({ extended: true }))
    //configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    //rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //start do servidor
    .listen(5500)