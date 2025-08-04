import React, { useEffect, useState } from "react";
import "./dashboard.css";

const Dashboard = ({ onNovaVenda }) => {
    const [vendasHoje, setVendasHoje] = useState(null);
    const [nfesEmitidas, setNfesEmitidas] = useState(null);
    const [produtosCount, setProdutosCount] = useState(null);
    const [estoqueBaixoCount, setEstoqueBaixoCount] = useState(null);
    const [vendasRecentes, setVendasRecentes] = useState([]);
    const [itensEstoqueBaixo, setItensEstoqueBaixo] = useState([]);

    useEffect(() => {
        // Requisição para o backend (API)
        const fetchDashboardData = async () => {
            try {
                const response = await fetch('http://localhost:3001/dashboard'); // Altere para a URL correta
                const data = await response.json();

                console.log('Dados recebidos:', data);  // Adicione este console.log para depuração

                // Atualizando o estado com os dados recebidos
                setVendasHoje(data.vendasHoje);
                setNfesEmitidas(data.nfesEmitidas);
                setProdutosCount(data.produtosCount);
                setEstoqueBaixoCount(data.estoqueBaixoCount);
                setVendasRecentes(data.vendasRecentes);
                setItensEstoqueBaixo(data.itensEstoqueBaixo);
            } catch (error) {
                console.error("Erro ao buscar dados do dashboard", error);
            }
        };

        fetchDashboardData();
    }, []); // O array vazio [] faz a requisição uma vez ao montar o componente


    if (vendasHoje === null || nfesEmitidas === null || produtosCount === null || estoqueBaixoCount === null) {
        return <div>Carregando...</div>; // Exibe um loading enquanto os dados não são carregados
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <button className="nova-venda-btn" onClick={onNovaVenda}>
                    + Nova Venda
                </button>
            </div>
            <div className="dashboard-cards">
                <div className="card">
                    <span>Vendas Hoje</span>
                    <h3>R$ {vendasHoje.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h3>
                </div>
                <div className="card">
                    <span>NFes Emitidas</span>
                    <h3>{nfesEmitidas}</h3>
                </div>
                <div className="card">
                    <span>Produtos</span>
                    <h3>{produtosCount}</h3>
                </div>
                <div className="card">
                    <span>Estoque Baixo</span>
                    <h3>{estoqueBaixoCount}</h3>
                </div>
            </div>
            <div className="dashboard-panels">
                <div className="vendas-recentes">
                    <h4>Vendas Recentes</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>NFE</th>
                                <th>CLIENTE</th>
                                <th>VALOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendasRecentes.map((venda, idx) => (
                                <tr key={idx}>
                                    <td>{venda.nfe}</td>
                                    <td>{venda.cliente}</td>
                                    <td>R$ {venda.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="estoque-baixo">
                    <h4>Estoque Baixo</h4>
                    {itensEstoqueBaixo.map((item, idx) => (
                        <div className="estoque-item" key={idx}>
                            <span>
                                <b>{item.nome}</b>
                            </span>
                            <span>{item.qtd} unidades restantes</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
