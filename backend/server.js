// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos simulados (relleno)
const pedidos = [
  { id: '#ZG-001', cliente: 'Restaurante El Dorado', producto: 'Cilindro 45kg', estado: 'Entregado', monto: 'S/ 280' },
  { id: '#ZG-002', cliente: 'Panadería San Martín', producto: 'Cilindro 15kg', estado: 'En tránsito', monto: 'S/ 95' },
  { id: '#ZG-003', cliente: 'Hotel Plaza', producto: 'Cilindro 45kg x2', estado: 'Pendiente', monto: 'S/ 560' },
];

const clientes = [
  { id: 1, nombre: 'Restaurante El Dorado', direccion: 'Av. Arequipa 1234', telefono: '987654321' },
  { id: 2, nombre: 'Panadería San Martín', direccion: 'Calle Los Pinos 456', telefono: '998877665' },
  { id: 3, nombre: 'Hotel Plaza', direccion: 'Jr. Lima 789', telefono: '912345678' },
];

const entregas = [
  { id: 'E-001', pedidoId: '#ZG-001', repartidor: 'Carlos Ramos', fecha: '2025-07-10', estado: 'Entregado' },
  { id: 'E-002', pedidoId: '#ZG-002', repartidor: 'Luis Díaz', fecha: '2025-07-11', estado: 'En tránsito' },
];

// Rutas
app.get('/', (req, res) => {
  res.send('🚀 Bienvenido al backend de Z Gas');
});

app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});

app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

app.get('/api/entregas', (req, res) => {
  res.json(entregas);
});

// Ruta POST simulada (para crear pedidos nuevos)
app.post('/api/pedidos', (req, res) => {
  const nuevoPedido = req.body;
  pedidos.push(nuevoPedido);
  res.status(201).json({ mensaje: 'Pedido creado exitosamente', pedido: nuevoPedido });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en: http://localhost:${PORT}`);
});
