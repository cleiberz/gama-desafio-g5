let produtos = [
    {
        "idProduto": 25754,
        "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
        "preco": 5.0,
        "departamento": {
            "id": 1,
            "nome": "Adaptadores"
        }
    },
    {
        "idProduto": 20212,
        "descricao": "ADAPTADOR CONECTOR HDMI FEMEA L / FEMEA",
        "preco": 2.8,
        "departamento": {
            "id": 1,
            "nome": "Adaptadores"
        }
    },
    {
        "idProduto": 11719,
        "descricao": "ALICATE PARA CRIMPAR TL-315 3 EM 1",
        "preco": 15.0,
        "departamento": {
            "id": 2,
            "nome": "Ferramentas"
        }
    },
    {
        "idProduto": 15883,
        "descricao": "CADEADO SEGURANCA PARA NOTEBOOK HLD F\u0026K LLAVE",
        "preco": 6.5,
        "departamento": {
            "id": 2,
            "nome": "Ferramentas"
        }
    },
    {
        "idProduto": 23213,
        "descricao": "ANTENA P/TV DIGITAL KOLKE KVV288 INTERNA VHF/UHF/FHD PRETO",
        "preco": 6.5,
        "departamento": {
            "id": 3,
            "nome": "Eletronicos"
        }
    },
    {
        "idProduto": 18092,
        "descricao": "APRESENTADOR LASER SATELLITE LR-26R PRETO",
        "preco": 8.0,
        "departamento": {
            "id": 3,
            "nome": "Eletronicos"
        }
    }
];

/*****  IMPLEMENTAÇÃO DO CÓDIGO  *****/

const express = require('express')
const app = express()
const port = 3000


//funçao valida objeto


/*****  lista todos os produtos  *****/
app.get('/produtos', (req, res) => {
    
  res.send(produtos)
})

/*****  lista todos os produtos  *****/
app.get('/produtos/:idProduto', (req, res) => {
    for (let i = 0; i < produtos.length; i++){
        if (produtos[i].idProduto == req.params.idProduto) {
            res.send(produtos[i])
        }  
    }
    let code = {serverError:404}
     res.status(code.serverError).json({
       message:'Produto não encontrado'
     }) 
  })
  

  /*****  Inclui produto JSON na base de dados */
let novoProduto = {
    "idProduto": 18198,
    "descricao": "teste",
    "preco": 0.1,
    "departamento": {
        "id": 3,
        "nome": "Eletronicos"}
}
produtos.push(novoProduto);

function invalido() {
    let v_idProduto = novoProduto.idProduto.length === 0;
    let v_descricao = novoProduto.descricao.length === 0;
    let v_preco = novoProduto.preco.length === 0 || novoProduto.preco === 0;
    let v_departamento = novoProduto.departamento.length === 0;
    let l_itens = [v_idProduto, v_descricao, v_preco, v_departamento];
    let invalido = false;
    for (let i = 0; i < l_itens.length; i++) {
        if (l_itens[i]){
            invalido = true;
        }
    } return invalido;
};
app.post('/produtos/novoProduto/',  (req, res) => {
    if (invalido()){    
        let code = {serverError:400}
        res.status(code.serverError)
        .send(novoProduto);
    } else {res.send(novoProduto)}
});

app.listen(port, () => {
  console.log(`app escutando em http://localhost:${port}`)
});