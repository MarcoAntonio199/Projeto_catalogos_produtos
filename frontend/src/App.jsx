import { useEffect, useState } from "react";
import Header from "./components/Header";
import FormProduto from "./components/FormProduto";
import ListaProdutos from "./components/ListaProdutos";


export default function App(){
    const [produtos, setProdutos] = useState([]);
    const [mensagem, setMensagem] = useState("");



     async function carregarProdutos() {
        try{
            const resposta = await fetch("/api/produtos");
        const dados = await resposta.json();

        setProdutos(dados);
        }catch{
        setMensagem("Nao foi possivel carregar os produtos")
        }
     }

     useEffect(()=>{
        carregarProdutos();
     }, []);

     async function cadastrarProduto(produto){
        setMensagem("");


        try{
            const resposta = await fetch ("/api/produtos", {
                method: "Post",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(produto)
            });

            if (!resposta.ok){
                const erro = await resposta.json();
                setMensagem(erro.mensagem);
                return;
            }

            const novoProduto = await resposta.json();

            setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto])
            setMensagem("Produto cadastrado com sucesso");
        

        }catch{
            setMensagem("nao foi possivel cadastrar o produto");
        }
     }

      return(
        <>
        <Header/>

        <main className="container">
        <FormProduto aoCadastrar={cadastrarProduto}/>

        {mensagem && <p className="mensagem">{mensagem}</p>} 

        <ListaProdutos produtos={produtos}/>
        </main>
        </>
    )
}