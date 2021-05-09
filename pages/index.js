import styles from '../styles.module.css'
import 'antd/dist/antd.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, DatePicker, version, Table } from "antd"

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
  }
];

export default function Home() {

  const [produto, setProduto] = React.useState({
    preco: 0,
    custoPreco: 0,
    margem: 0
  })

  const [custoFixo, setCustoFixo] = React.useState(0)

  const [series, setSeries] = React.useState([
    {
      name: 'Receita',
      data: [
        { category: '0', value: 0},
        { category: '800', value: 20000 },
      ],
    },
    {
      name: 'Custo Total',
      data: [
        { category: '0', value: 5000 },
        { category: '800', value: 15000 },
      ],
    },
  ])

  /* Table */
  
  /* let receita = item.volume * produto.preco
  let volumeDeItensECusto = item.volume * produto.custoPreco
  let custoTotal = volumeDeItensECusto + parseInt(custoFixo)
  let lucro = custoTotal - receita */

  const dataSource = [
    {
      key: '0',
      volume: 0,
      receita: 0 * produto.preco,
      custoTotal: 0 * produto.custoPreco,
      lucro: 0 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '1',
      volume: 100,
      receita: 100 * produto.preco,
      custoTotal: 100 * produto.custoPreco,
      lucro: 100 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '2',
      volume: 200,
      receita: 200 * produto.preco,
      custoTotal: 200 * produto.custoPreco,
      lucro: 200 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '3',
      volume: 300,
      receita: 300 * produto.preco,
      custoTotal: 300 * produto.custoPreco,
      lucro: 300 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '4',
      volume: 400,
      receita: 400 * produto.preco,
      custoTotal: 400 * produto.custoPreco,
      lucro: 400 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '5',
      volume: 500,
      receita: 500 * produto.preco,
      custoTotal: 500 * produto.custoPreco,
      lucro: 500 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '6',
      volume: 600,
      receita: 600 * produto.preco,
      custoTotal: 600 * produto.custoPreco,
      lucro: 600 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '7',
      volume: 700,
      receita: 700 * produto.preco,
      custoTotal: 700 * produto.custoPreco,
      lucro: 700 * produto.custoPreco - parseInt(custoFixo)
    },
    {
      key: '8',
      volume: 800,
      receita: 800 * produto.preco,
      custoTotal: 800 * produto.custoPreco,
      lucro: 800 * produto.custoPreco - parseInt(custoFixo)
    },
  ]
  /* Table */

  /* Functions */
  function formtReal(number) {
    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
  }

  
  /* Functions */
  
  
  return (
    <div className={styles.hello}>
      <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
        <h3>Produto</h3>   
        <input type="number" onBlur={(e) => {
          setProduto({...produto, preco: e.target.value, margem: e.target.value - produto.custoPreco})
        }}/>    
        <input type="number" onBlur={(e) => {
          setProduto({...produto, custoPreco: e.target.value, margem: produto.preco - e.target.value})
        }}/>
        <input type="number" disabled value={produto.margem}/>
      </div>
      <hr />
      <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
        <h3>Empresa</h3>   
        <input type="number" onBlur={(e) => setCustoFixo(e.target.value)}/>
      </div>
      <hr />
      <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
        <h3>Ponto de Equilíbrio</h3>  
        <input  disabled value={ `R$ ${custoFixo / produto.margem}` }/>
      </div>
      <hr />
      <Table dataSource={dataSource} columns={columns} />
      <hr />
      <div styles={{width: 300}}>
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
      </div>
    </div>
  )
}
