const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(8081, function(){
    console.log("Server on")
})

app.get("/", function(req, res){
    res.render("index")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        idade: req.body.idade
    }).then(function(){
        res.redirect("/")
    })
})

app.get("/consultar", function(req, res){
    post.findAll().then(function(post){
        res.render("consultar", {post})
    })
})

app.get("/excluir/:id", function(req, res){
    post.destroy({where: {"id": req.params.id}}).then(function(){
        res.render("index")
    })
})

app.get("/editar/:id", function(req, res){
    post.findAll({where: {"id": req.params.id}}).then(function(post){
        res.render("editar", {post})
    })
})

app.post("/atualizar", function(req, res){
    post.update({
        nome: req.body.nome,
        idade: req.body.idade
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(){
        res.redirect("consultar")
    })
})