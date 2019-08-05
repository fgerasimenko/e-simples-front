export const Data = {
    produtos: [{
        id: 1,
        nome: "Essência Hungria Hip Hop",
        marca: "Zomo",
        tipo: "Essência",
        descricao: "Essência mix de varios bagulho",
        cod_barras: "898726987293",
        preco_venda: 12.00,
        preco_compra: 8.00,
        medida: 1,
        unidade: "un",
        tags: ['essencia', 'mix', 'doce', 'especial', 'zomo'],
        data_cadastro: '24/06/2019',
        data_alteracao: null,
        ativo: true,
        caminho_img: 'https://cdn.zomoofficial.com/wp-content/uploads/2019/02/hungria_50g.jpg' 
    },
    {
        id: 2,
        nome: "Essência MC Gui",
        marca: "Zomo",
        tipo: "Essência",
        descricao: "Essência mix de varios bagulho",
        cod_barras: "898726987293",
        preco_venda: 12.00,
        preco_compra: 8.00,
        medida: 1,
        unidade: "un",
        tags: ['essencia', 'mix', 'doce', 'especial', 'mc', 'zomo'],
        data_cadastro: '24/06/2019',
        data_alteracao: null,
        ativo: true,
        caminho_img: 'http://images.tcdn.com.br/img/img_prod/613031/essencia_zomo_mc_gui_1695_1_20190123135719.jpg' 
    },
    {
        id: 3,
        nome: "Essência No Woman No Cry",
        marca: "Blue Horse",
        tipo: "Essência",
        descricao: "Essência mix de varios bagulho que fica bom",
        cod_barras: "898726987293",
        preco_venda: 14.00,
        preco_compra: 8.00,
        medida: 1,
        unidade: "un",
        tags: ['essencia', 'mix', 'doce', 'especial', 'bob marley', 'blue horse'],
        data_cadastro: '24/06/2019',
        data_alteracao: null,
        ativo: true,
        caminho_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y_thOYsnOhs7dscLha12_TCrN91HCLXT-Gckt44W8HkOjr58FQ' 
    },
    {
        id: 4,
        nome: "Consumo Rosh No Woman No Cry",
        marca: "Blue Horse",
        tipo: "Consumo",
        descricao: "Rosh para consumo na hora com a essência No Woman No Cry",
        cod_barras: null,
        preco_venda: 18.00,
        preco_compra: null,
        medida: 1,
        unidade: "un",
        tags: ['rosh','essencia', 'mix', 'doce', 'especial', 'bob marley', 'blue horse'],
        data_cadastro: '24/06/2019',
        data_alteracao: null,
        ativo: true,
        caminho_img: null
    },
    {
        id: 5,
        nome: "Consumo Rosh Hungria",
        marca: "Blue Horse",
        tipo: "Consumo",
        descricao: "Rosh para consumo na hora com a essência Hungria Hip Hop",
        cod_barras: null,
        preco_venda: 18.00,
        preco_compra: null,
        medida: 1,
        unidade: "un",
        tags: ['rosh','essencia', 'mix', 'doce', 'especial', 'hungria', 'zomo'],
        data_cadastro: '24/06/2019',
        data_alteracao: null,
        ativo: true,
        caminho_img: null
    }],

    pedidos: [
        {
            id: 1,
            id_cliente: null,
            data_pedido: new Date(),
            data_alteracao: null,
            ativo: true,
            itens_pedidos: [{
                id_produto: 5,
                quantidade: 3,
                status: 'P'
            },
            {
                id_produto: 4,
                quantidade: 1,
                status: 'P'
            }],
            status: 'P',
            preco_total: 0
        },
        {
            id: 2,
            id_cliente: null,
            data_pedido: new Date(),
            data_alteracao: null,
            ativo: true,
            itens_pedidos: [{
                id_produto: 4,
                quantidade: 2,
                status: 'P'
            }],
            status: 'P',
            preco_total: 0
        },
        {
            id: 3,
            id_cliente: null,
            data_pedido: new Date(),
            data_alteracao: null,
            ativo: true,
            itens_pedidos: [{
                id_produto: 5,
                quantidade: 3,
                status: 'P'
            },
            {
                id_produto: 4,
                quantidade: 1,
                status: 'P'
            }],
            status: 'P',
            preco_total: 0
        },
        {
            id: 4,
            id_cliente: null,
            data_pedido: new Date(),
            data_alteracao: null,
            ativo: true,
            itens_pedidos: [{
                id_produto: 5,
                quantidade: 5,
                status: 'P'
            },
            {
                id_produto: 2,
                quantidade: 3,
                status: 'P'
            },
            {
                id_produto: 4,
                quantidade: 2,
                status: 'P'
            }],
            status: 'P',
            preco_total: 0
        }
    ],
    marcas: ['Zomo','Blue Horse','Dozaj'],
    tipos: ['Consumo','Essência','Narguile','Rosh','Vaso']
}

export default Data;