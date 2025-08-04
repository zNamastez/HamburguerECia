import React from 'react';
import '../../styles/global.css';

const Sidebar = () => (
    <aside className="sidebar">
        <div className="logo">🍔 Burguer NFe</div>
        <nav>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/notas-fiscais">Notas Fiscais</a></li>
                <li><a href="/estoque">Estoque</a></li>
                <li><a href="/relatorios">Relatórios</a></li>
                <li><a href="/configuracoes">Configurações</a></li>
            </ul>
        </nav>
    </aside>
);

export default Sidebar;