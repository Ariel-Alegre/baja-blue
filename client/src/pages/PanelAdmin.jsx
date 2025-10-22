import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,        // ícono para "Mis negocios" general
  ShopOutlined,            // ícono para un solo negocio (más visual que TeamOutlined)
  FolderAddOutlined,       // ícono para "Registrar negocio"
  TeamOutlined,
  IdcardOutlined,
  SolutionOutlined,
  PlusCircleOutlined,
  FileAddOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';



import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Grid,
  Button,
  Avatar,
  Dropdown,
  Space,
  Drawer,
} from 'antd';
import { useNavigate, Link, Outlet } from "react-router-dom";
import axios from 'axios';

const { Header, Content, Sider } = Layout;
const { useBreakpoint } = Grid;

const PanelAdmin = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const screens = useBreakpoint();
useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://panel-isaac-production.up.railway.app/api/usuario', {
          headers: {
            Authorization: token,
          },
        });

        setUsuario(res.data);
      } catch (err) {
        setError('No se pudo cargar el perfil');
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/iniciar-sesion');
  };

 const items2 = [
  {
    key: 'sub1',
    icon: <AppstoreOutlined />, // mejor ícono general para "Mis negocios"
    label: 'Mis negocios',
    children: [
      {
        key: 'mis-negocio',
        icon: <ShopOutlined />, // ícono de tienda/local
        label: <Link to="mis-negocios">Mis negocios</Link>,
      },
      {
        key: 'registrar-clientes-negocio',
        icon: <FolderAddOutlined />, // ícono de registrar/agregar un negocio
        label: <Link to="registrar-negocio">Registrar negocio</Link>,
      },
    ],
  },
  {
    key: 'sub2',
    icon: <IdcardOutlined />,
    label: 'Clientes',
    children: [
      {
        key: 'clientes',
        icon: <TeamOutlined />,
        label: <Link to="clientes">Mis clientes</Link>,
      },
      {
        key: 'registrar-clientes',
        icon: <PlusCircleOutlined />,
        label: <Link to="registrar-clientes">Registrar clientes</Link>,
      },
    ],
  },
  {
    key: 'sub3',
    icon: <SolutionOutlined />,
    label: 'Empleados',
    children: [
      {
        key: 'empleados',
        icon: <TeamOutlined />,
        label: <Link to="empleados">Mis empleados</Link>,
      },
      {
        key: 'registrar-empleados',
        icon: <FileAddOutlined />,
        label: <Link to="registrar-empleados">Registrar empleado</Link>,
      },
      {
        key: 'fichaje',
        icon: <ClockCircleOutlined />,
        label: <Link to="fichaje">Fichar</Link>,
      },
    ],
  },
];



  const avatarMenu = {
    items: [
   /*    {
        key: '1',
        label: 'Mi perfil',
           onClick: () => navigate('/perfil'),
      }, */
      {
        key: '2',
        label: 'Cerrar sesión',
        onClick: handleLogout,
      },
    ],
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          backgroundColor: "#000"
       
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {!screens.md && (
            <Button
              type="text"
              icon={<MenuUnfoldOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ color: '#fff', marginRight: 16 }}
            />
          )}
        </div>
  <Dropdown menu={avatarMenu} placement="bottomRight" arrow>
          <Space style={{ color: '#fff', cursor: 'pointer' }}>
        !Hola! Adimistrador
         <Avatar
           size="large"
          src={require('../img/Logo.jpg')}
          style={{
            backgroundColor: usuario?.color_del_fondo || '#ffffff',
            color: '#000',
            fontWeight: 'bold',
            fontSize: 24,
          }}
        >
          {
            !usuario?.avatar && usuario?.nombre_completo
              ? usuario?.nombre_completo.charAt(0).toUpperCase()
              : null
          }
        </Avatar>
          {/*   <DownOutlined /> */}
          </Space>
        </Dropdown>
  
      </Header>

      <Layout>
{/*         {screens.md ? (
          <Sider
            width={200}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{ background: colorBgContainer }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
        ) : (
          <Drawer
            title="Menú"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
              onClick={() => setDrawerVisible(false)}
            />
          </Drawer>
        )} */}

  <Layout style={{ padding: screens.md ? '0 24px 24px' : 0,  }}>
  <Breadcrumb
    items={[{ title: '' }]}
    style={{ margin: screens.md ? '16px 0':   0 }}
  />
  <Content
    style={{
      padding: screens.md ? 24 : 0,
      margin: 0,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}
  >
    <Outlet />
  </Content>
</Layout>

      </Layout>
    </Layout>
  );
};

export default PanelAdmin;
