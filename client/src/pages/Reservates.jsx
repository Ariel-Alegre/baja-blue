import React, { useEffect, useState } from 'react';
import {
    Table,
    Space,
    Button,
    Avatar,
    Tag,
    Popconfirm,
    Modal,
    Alert,
    Form,
    Input, Grid,
    Upload, message,
    Dropdown, Menu, Select,
    Typography,
    List,
    Card
} from 'antd';
import {

    UsergroupAddOutlined, EllipsisOutlined, MessageOutlined, DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import axios from 'axios';
import { DownloadOutlined } from '@ant-design/icons';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
//import ActualizarClientes from '../components/ActualizarClientes';

const { useBreakpoint } = Grid;
const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

const Reservates = () => {
      const screens = useBreakpoint();
    const isMobile = !screens.md; // md = 768px
    const [successMessage, setSuccessMessage] = useState(null);


    const [clientes, setClientes] = useState([]);
    const [clientesFiltrados, setClientesFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [clienteEditando, setClienteEditando] = useState(null);

    const [dropdownVisible, setDropdownVisible] = useState(false);
  console.log(clientes)

    const eliminarCliente = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`https://server-bajablue-production.up.railway.app/api/cliente/${id}`, {
                headers: { Authorization: token },
            });
            setSuccessMessage('Cliente eliminado exitosamente');
            fetchClientes();
        } catch (error) {
            Modal.error({
                title: 'Error al eliminar cliente',
                content: error.message,
            });
        }
    };

    const handleMenuClick = (e) => {
        // Aquí puedes decidir si quieres cerrar el menú o no
        if (e.key === 'limpiar' || e.key === 'excel') {
            // Si quieres que se cierre, cierra el menú
            setDropdownVisible(false);
        } else {
            // Si quieres que no se cierre, no hagas nada o mantén abierto
        }
    };

    const handleVisibleChange = (flag) => {
        setDropdownVisible(flag);
    };
    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get('https://server-bajablue-production.up.railway.app/api/reservates', {
                headers: { Authorization: token },
            });
            setClientes(res.data.data);
            setClientesFiltrados(res.data.data);
        } catch (error) {
      
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

  const handleSearch = (value) => {
  setSearchText(value.toLowerCase());

  const filtered = clientes.filter((reserva) =>
    reserva.name?.toLowerCase().includes(value) ||
    reserva.lastName?.toLowerCase().includes(value) ||
    reserva.email?.toLowerCase().includes(value) ||
    reserva.phone?.toLowerCase().includes(value) ||
    reserva.country?.toLowerCase().includes(value) ||
    reserva.from?.toLowerCase().includes(value) ||
    reserva.to?.toLowerCase().includes(value) ||
    reserva.vehicles?.toLowerCase().includes(value) ||
    reserva.airline?.toLowerCase().includes(value) ||
    reserva.flightNumber?.toLowerCase().includes(value)
  );

  setClientesFiltrados(filtered);
};


   const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellido',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Desde',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'Hasta',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'Fecha de salida',
    dataIndex: 'departureDate',
    key: 'departureDate',
  },
  {
    title: 'Hora de salida',
    dataIndex: 'departureTime',
    key: 'departureTime',
  },
  {
    title: '¿Ida y vuelta?',
    dataIndex: 'isReturn',
    key: 'isReturn',
    render: (value) => value ? <Tag color="green">Sí</Tag> : <Tag color="default">No</Tag>,
  },
  {
    title: 'Fecha de regreso',
    dataIndex: 'returnDate',
    key: 'returnDate',
    render: (text) => text !== '-' ? text : <span style={{ color: '#999' }}>No aplica</span>
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
    render: (value, record) => `$${value} ${record.currency}`,
  },
];

    // Función para exportar Excel
const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Reservas');

  // Encabezados de reservas
  const headers = [
    { header: 'Nombre', key: 'name', width: 20 },
    { header: 'Apellido', key: 'lastName', width: 20 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Teléfono', key: 'phone', width: 20 },
    { header: 'País', key: 'country', width: 20 },
    { header: 'Aerolínea', key: 'airline', width: 20 },
    { header: 'Nro. Vuelo', key: 'flightNumber', width: 20 },
    { header: 'Desde', key: 'from', width: 20 },
    { header: 'Hasta', key: 'to', width: 20 },
    { header: 'Fecha Salida', key: 'departureDate', width: 20 },
    { header: 'Hora Salida', key: 'departureTime', width: 20 },
    { header: '¿Regreso?', key: 'isReturn', width: 15 },
    { header: 'Fecha Regreso', key: 'returnDate', width: 20 },
    { header: 'Hora Regreso', key: 'returnTime', width: 20 },
    { header: 'Vehículo', key: 'vehicles', width: 20 },
    { header: 'Precio', key: 'price', width: 15 },
    { header: 'Moneda', key: 'currency', width: 10 },
    { header: 'Comentario', key: 'comment', width: 40 },
  ];

  worksheet.columns = headers;

  // Agregar filas con las reservas
  clientesFiltrados.forEach(reserva => {
    worksheet.addRow({
      name: reserva.name || '',
      lastName: reserva.lastName || '',
      email: reserva.email || '',
      phone: reserva.phone || '',
      country: reserva.country || '',
      airline: reserva.airline || '',
      flightNumber: reserva.flightNumber || '',
      from: reserva.from || '',
      to: reserva.to || '',
      departureDate: reserva.departureDate || '',
      departureTime: reserva.departureTime || '',
      isReturn: reserva.isReturn ? 'Sí' : 'No',
      returnDate: reserva.returnDate || '-',
      returnTime: reserva.returnTime || '-',
      vehicles: reserva.vehicles || '',
      price: reserva.price || '',
      currency: reserva.currency || '',
      comment: reserva.comment || '',
    });
  });

  // Estilo para celdas (excepto encabezado)
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber !== 1) {
      row.eachCell(cell => {
        cell.alignment = {
          vertical: 'middle',
          horizontal: 'left',
          indent: 1,
        };
      });
    }
  });

  // Estilo para encabezados
  worksheet.getRow(1).eachCell(cell => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '000000' }, // negro
    };
    cell.font = {
      color: { argb: 'FFFFFF' }, // blanco
      bold: true,
    };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });

  // Descargar archivo
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  saveAs(blob, 'Reservas.xlsx');
};

    const mobileMenu = (
        <Menu onClick={handleMenuClick}>

            <Menu.Item key="excel">
                <Button
                    type="primary"
                    onClick={exportToExcel}
                    icon={<DownloadOutlined />}
                    block
                >
                    Exportar Excel
                </Button>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'row' : '',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: 24,
                    padding: isMobile ? '20px' : 0,

                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <UsergroupAddOutlined style={{ fontSize: 28, color: '#1890ff' }} />
                    <Title level={3} style={{ margin: 0 }}>Gestión de Reservas</Title>
                </div>
                <Dropdown overlay={mobileMenu} trigger={['click']} visible={dropdownVisible}
                    onVisibleChange={handleVisibleChange}>
                    <Button icon={<EllipsisOutlined />} />
                </Dropdown>

            </div>

            <div style={{ marginBottom: 16 }}>


                <Search
                    placeholder="Buscar por nombre, correo, provincia o ciudad"
                    allowClear
                    enterButton="Buscar"
                    size="large"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onSearch={handleSearch}
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        display: 'block',
                        padding: '0 10px',
                        boxSizing: 'border-box',
                    }}
                />
            </div>
                <Table
                    dataSource={clientesFiltrados}
                    columns={columns}
                    rowKey="id"
                    loading={loading}
                    pagination={{ pageSize: 10 }}
                    scroll={{ x: 'max-content' }}
                />

        {/*     {isMobile ? (
                <List
                    dataSource={clientesFiltrados}
                    loading={loading}
                    renderItem={item => (
                        <Card
                            style={{ marginBottom: 16 }}
                            title={item.nombre_completo}
                            extra={
                                <a href={`https://wa.me/54${item.celular.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                                    <MessageOutlined style={{ color: '#25D366' }} />
                                </a>
                            }
                        >
                            <p><strong>Correo:</strong> {item.correo_electronico}</p>
                            <p><strong>Celular:</strong> {item.celular}</p>
                            <div style={{ display: 'flex', gap: 16 }}>
                                <EditOutlined
                                    style={{ fontSize: 18, color: '#1890ff', cursor: 'pointer' }}
                                    onClick={() => {
                                        setClienteEditando(item);
                                        setIsModalVisible(true);
                                    }}
                                />
                                <Popconfirm
                                    title="¿Seguro que quieres eliminar este cliente?"
                                    onConfirm={() => eliminarCliente(item.id)}
                                    okText="Sí"
                                    cancelText="No"
                                >
                                    <DeleteOutlined style={{ fontSize: 18, color: 'red', cursor: 'pointer' }} />
                                </Popconfirm>
                            </div>
                        </Card>
                    )}
                />
            ) : (
                   <Table
                    dataSource={clientesFiltrados}
                    columns={columns}
                    rowKey="id"
                    loading={loading}
                    pagination={{ pageSize: 10 }}
                    scroll={{ x: 'max-content' }}
                />
            )} */}

{/*             <Modal
                title="Editar Cliente"
                visible={isModalVisible}
                onCancel={() => {
                    setIsModalVisible(false);
                    setClienteEditando(null);
                }}
                footer={null}
            >
                <ActualizarClientes clienteEditando={clienteEditando} fetchClientes={fetchClientes} setIsModalVisible={setIsModalVisible} />
            </Modal> */}

        </div>
    );
};

export default Reservates;
