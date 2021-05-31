import styles from '../styles.module.css'
import 'antd/dist/antd.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, DatePicker, Table, Input, Tooltip as TooltipAntd } from "antd"

const columns = [
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Receita',
    dataIndex: 'receita',
    key: 'receita',
  },
  {
    title: 'Custo Total',
    dataIndex: 'custoTotal',
    key: 'custoTotal',
  },
  {
    title: 'Lucro',
    dataIndex: 'lucro',
    key: 'lucro',
  },
  {
    title: 'Custo Variavel',
    dataIndex: 'custoVariavel',
    key: 'custoVariavel',
  }
];

export default function Home() {

  const [produto, setProduto] = React.useState({
    preco: 0,
    custoPreco: 0,
    margem: 0
  })

  const [custoFixo, setCustoFixo] = React.useState(0)

  const series = [
    {
      name: 'Receita',
      data: [
        { category: '0', value: 0 * produto.preco},
        { category: '100', value: 100 * produto.preco},
        { category: '200', value: 200 * produto.preco},
        { category: '300', value: 300 * produto.preco},
        { category: '400', value: 400 * produto.preco},
        { category: '500', value: 500 * produto.preco},
        { category: '600', value: 600 * produto.preco},
        { category: '700', value: 700 * produto.preco},
        { category: '800', value: 800 * produto.preco},
      ],
    },
    {
      name: 'Custo Total',
      data: [
        { category: '0', value: 0 * produto.custoPreco + parseInt(custoFixo)},
        { category: '100', value: 100 * produto.custoPreco + parseInt(custoFixo)},
        { category: '200', value: 200 * produto.custoPreco + parseInt(custoFixo)},
        { category: '300', value: 300 * produto.custoPreco + parseInt(custoFixo)},
        { category: '400', value: 400 * produto.custoPreco + parseInt(custoFixo)},
        { category: '500', value: 500 * produto.custoPreco + parseInt(custoFixo)},
        { category: '600', value: 600 * produto.custoPreco + parseInt(custoFixo)},
        { category: '700', value: 700 * produto.custoPreco + parseInt(custoFixo)},
        { category: '800', value: 800 * produto.custoPreco + parseInt(custoFixo)},
        
      ],
    },
  ]

  /* Table */
  let custoTotal = parseInt(produto.custoPreco) + parseInt(custoFixo)
  

  const dataSource = [
    {
      key: '0',
      volume: 0,
      receita: 0 * produto.preco,
      custoTotal: 0 * produto.custoPreco + parseInt(custoFixo),
      lucro: (0 * produto.preco) - (0 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 0 * produto.custoPreco
    },
    {
      key: '1',
      volume: 100,
      receita: 100 * produto.preco,
      custoTotal: 100 * produto.custoPreco + parseInt(custoFixo),
      lucro: (100 * produto.preco) - (100 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 100 * produto.custoPreco
    },
    {
      key: '2',
      volume: 200,
      receita: 200 * produto.preco,
      custoTotal: 200 * produto.custoPreco + parseInt(custoFixo),
      lucro: (200 * produto.preco) - (200 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 200 * produto.custoPreco
    },
    {
      key: '3',
      volume: 300,
      receita: 300 * produto.preco,
      custoTotal: 300 * produto.custoPreco + parseInt(custoFixo),
      lucro: (300 * produto.preco) - (300 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 300 * produto.custoPreco
    },
    {
      key: '4',
      volume: 400,
      receita: 400 * produto.preco,
      custoTotal: 400 * produto.custoPreco + parseInt(custoFixo),
      lucro: (400 * produto.preco) - (400 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 400 * produto.custoPreco
    },
    {
      key: '5',
      volume: 500,
      receita: 500 * produto.preco,
      custoTotal: 500 * produto.custoPreco + parseInt(custoFixo),
      lucro: (500 * produto.preco) - (500 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 500 * produto.custoPreco
    },
    {
      key: '6',
      volume: 600,
      receita: 600 * produto.preco,
      custoTotal: 600 * produto.custoPreco + parseInt(custoFixo),
      lucro: (600 * produto.preco) - (600 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 600 * produto.custoPreco
    },
    {
      key: '7',
      volume: 700,
      receita: 700 * produto.preco,
      custoTotal: 700 * produto.custoPreco + parseInt(custoFixo),
      lucro: (700 * produto.preco) - (700 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 700 * produto.custoPreco
    },
    {
      key: '8',
      volume: 800,
      receita: 800 * produto.preco,
      custoTotal: 800 * produto.custoPreco + parseInt(custoFixo),
      lucro: (800 * produto.preco) - (800 * produto.custoPreco + parseInt(custoFixo)),
      custoVariavel: 800 * produto.custoPreco
    },
  ]
  /* Table */

  /* Functions */
  function formtReal(number) {
    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
  }

  
  /* Functions */
  
  
  return (
    <div className={styles.wrapperContainer}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span>
          <h3>Produto</h3>
          <TooltipAntd
            trigger={['focus']}
            title="Preço do Produto"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              type="number"
              placeholder="Preço"
              onBlur={(e) => {
                setProduto({...produto, preco: e.target.value, margem: e.target.value - produto.custoPreco})
              }}
              maxLength={25}
            />
          </TooltipAntd>

          <TooltipAntd
            trigger={['focus']}
            title="Custo Variável"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              type="number"
              placeholder="Custo Variável"
              onBlur={(e) => {
                setProduto({...produto, custoPreco: e.target.value, margem: produto.preco - e.target.value})
              }}
              maxLength={25}
            />
          </TooltipAntd>

          <TooltipAntd
            trigger={['focus']}
            title="{title}"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              type="number"
              disabled
              placeholder="Input a number"
              value={produto.margem}
              maxLength={25}
            />
          </TooltipAntd>

          <hr />

          <h3>Empresa</h3>   
          <TooltipAntd
            trigger={['focus']}
            title="Custo Fixo"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              type="number"
              placeholder="Custo Fixo"
              maxLength={25}
              onBlur={(e) => setCustoFixo(e.target.value)}
            />
          </TooltipAntd>

          <hr />

          <h3>Ponto de Equilíbrio</h3>
          <TooltipAntd
            trigger={['focus']}
            title="{title}"
            placement="topLeft"
            overlayClassName="numeric-input"
          >
            <Input
              disabled 
              value={ `R$ ${parseFloat(custoFixo / produto.margem) | 0}` }
              maxLength={25}
            />
          </TooltipAntd>  
        </span>
        <span className={styles.wrapperBox}> 
          <LineChart width={500} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" type="number" name="stature"/>
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
            {series.map((s) => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart>     
        </span>
      </div>
      <hr />
      <Table dataSource={dataSource} columns={columns} />
      <hr />
      
    </div>
  )
}
