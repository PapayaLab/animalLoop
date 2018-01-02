const initialState = {
  client: [],
  banco: [
    'Banco Estado',
    'Banco Falabella',
    'Corpbanca',
    'Santander',
    'Itau',
  ],
  tipoCliente: [
    'A',
    'B',
    'C',
    'D',
  ],
  medioPago: [
    'Tranferencia',
    'Cheque',
    'Vale Vista',
    'Efectivo',
    'Transbanc',
  ],
  empresa: [
    'Rocha S.A',
    'Sillas y Sillas S.A',
    'Muebles y Diseños S.A',
    'Transporte jj Limitada',
  ],
  condicionPago: [
    '100% Contado',
    '50% Contado - 50% Entrega',
    '50% Contado - 40% Entrega - 10% 30 días',
    '100% 30 días',
    '100% 60 días',
    '100% 90 días',
    '3 cuotas',
    '6 cuotas',
    '12 cuotas',
  ],
  mercado: [
    'Privado',
    'Convenio Marco',
  ],
  sucursal: [
    'Los Conquistadores',
    'La Dehesa',
    'Camino Lonquen',
  ],
  clienteActivo: [
    'Si',
    'No',
  ],
  contacto: 1,
  loading: false,
  error: null,
};

export default initialState;
