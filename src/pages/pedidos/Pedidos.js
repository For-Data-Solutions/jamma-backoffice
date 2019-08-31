import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Title } from 'react-admin'
import { Chip, Grid, Paper, CardHeader, CardMedia, Typography } from '@material-ui/core'
import { escogerPedidoAction } from './redux/actions';

const listaCategorias = [
	'All',
	'Comida desayuno',
	'Comida almuerzo',
	'Bebidas',
	'Postres',
]

const listaProductos = [
	{
		nombre: 'Lomo saltado',
		precio: '15.00',
		imagen: 'https://www.comedera.com/wp-content/uploads/2013/05/lomo-saltado-jugoso.jpg'
	},
	{
		nombre: 'Pollo frito',
		precio: '14.00',
		imagen: 'https://images-gmi-pmc.edge-generalmills.com/6c9c3378-79e4-4d1f-bbce-828b9a6f39bf.jpg'
	},
	{
		nombre: 'Ceviche',
		precio: '22.00',
		imagen: 'https://www.laylita.com/recetas/wp-content/uploads/2013/08/1-Cebiche-de-pescado.jpg'
	},
]

const Pedidos = (props) => {

	const { escogerPedidoAction, listaPedidos } = props

	const onClickCategoria = (e) => {

	}

	const escogerProducto = (prod) => {
		escogerPedidoAction(prod)
	}

	return (
		<div>
			<Title title="Pedidos" />
			<Grid container spacing={8}>
				<Grid container item sm={8} spacing={8}>
					<Grid item sm={12}>
						<Paper>
							{
								listaCategorias.map((c, i) => {
									return (
										<Chip
											key={`chip-${i}`}
											label={c}
											onClick={onClickCategoria}
										/>
									)
								})
							}
						</Paper>
					</Grid>
					<Grid container item sm={12} spacing={16}>
						{
							listaProductos.map((p, i) => {
								return (
									<ProductoItem key={`product-${i}`} producto={p} escogerProducto={escogerProducto} />
								)
							})
						}
					</Grid>
				</Grid>
				<Grid container item sm={4}>
					<Grid item sm={12}>
						<Card>
							<CardContent>
								Carrito
							{
									listaPedidos && listaPedidos.map((p, i) => {
										return (
											<PedidoItem key={`pedido-${i}`} pedido={p} />
										)
									})
								}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

const ProductoItem = (props) => {

	const { producto, escogerProducto } = props

	return (
		<Grid item sm={4}>
			<Card onClick={() => {
				escogerProducto(producto)
			}}>
				<CardMedia
					style={{ height: '100px' }}
					image={producto.imagen}
					title="hola"
				/>
				<CardContent>
					<Typography gutterBottom variant="title" component="h2">
						{producto.nombre}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						S/{producto.precio}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}

const PedidoItem = (props) => {

	const { pedido } = props

	return (
		<div>
			<Grid container>
				<Grid item sm={2}>
					<img style={{ width: '40px', height: '40px' }} src={pedido.imagen} />
				</Grid>
				<Grid item sm={4}>
					{pedido.nombre} - {pedido.precio}
				</Grid>
			</Grid>
		</div>
	)
}

const mapStateToProps = ({ pedido }) => {
	return {
		listaPedidos: pedido.listaPedidos
	}
}

const mapDispatchToProps = {
	escogerPedidoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos)
