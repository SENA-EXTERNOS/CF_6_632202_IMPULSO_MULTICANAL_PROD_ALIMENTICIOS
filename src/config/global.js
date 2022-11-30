export default {
  global: {
    componenteFormativo: 'Clientes y servicio empresarial',
    descripcionCurso:
      'En este componente formativo se desarrollarán los aspectos relacionados con los clientes, cómo se clasifican, qué es la atención al cliente y cómo es un protocolo de servicios eficiente. También se observará la importancia del buen manejo de las comunicaciones, con el fin de que las empresas generen protocolos de atención inclusivos para todo tipo de clientes potenciales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Importancia de los clientes para las empresas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de los clientes',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atención y servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Propósito de un proceso de servicio al cliente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso de servicio al cliente',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de comunicación empresarial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Funciones de la comunicación en las empresas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Etiqueta y protocolo empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Parámetros para establecer etiqueta y protocolo en la empresa',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Componentes de los portafolios de atención y servicio al cliente',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procesos de atención al cliente/ consumidor/ usuario',
      referencia:
        'Ariza Ramírez, F. J. y Ariza Ramírez, J.M. (s.f.) <i>Organización de la atención al cliente,</i> Ed. McGraw Hill Educación.',
      tipo: 'Libro',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/8448196813.pdf',
    },
    {
      tema: 'Protocolos de atención',
      referencia:
        'Wellnes & Sport Consulting. (2019). <i>Manual De Atención Al Cliente y del Proceso De Ventas.</i> (S. Ed.)',
      tipo: 'Artículo',
      link: 'https://www.wscconsulting.net/calendario/manualdeventas.pdf',
    },
    {
      tema: 'Proceso de atención y servicio al cliente',
      referencia:
        'Ecosistema de Recursos Digitales SENA. (2022).  <i>Proceso de atención y servicio al cliente.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/MjYTz9vzCFw',
    },
    {
      tema: 'Servicio al cliente',
      referencia:
        'Ecosistema de Recursos Digitales SENA. (2020).  <i>Servicio al cliente.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/dB6FOVF-wWs',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'es un producto de origen natural o artificial que se dispone con el propósito de ser consumido para aportar al cuerpo humano nutrientes y/o energía. Es también un objeto de distribución y comercialización.',
    },
    {
      termino: 'Atención al cliente:',
      significado:
        'es el conjunto de acciones que desarrollan los operadores que tienen contacto con los clientes o canalizan sus preguntas o solicitudes, con el fin de suplir sus necesidades. Actividad enmarcada dentro de lo que se denomina protocolo.',
    },
    {
      termino: 'Canal propio o directo:',
      significado:
        'es cuando la empresa se encarga de hacer llegar sus productos al consumidor final sin intermediarios, aplicando medios físicos convencionales o medios digitales.',
    },
    {
      termino: 'Clientes efectivos',
      significado:
        'son aquellos clientes que responden a las iniciativas comerciales y de comunicación de la empresa, lo que expresan por medio de las compras.',
    },
    {
      termino: 'Clientes potenciales:',
      significado:
        'son el conjunto de posibles consumidores de los productos de la empresa que aún no se deciden a comprar; también son los clientes que están insatisfechos con los productos de la competencia.',
    },
    {
      termino: 'Comunicación externa:',
      significado:
        'son el conjunto de mensajes de información comercial para el impulso de productos, los cuales la empresa diseña y promueve según el tipo de cliente real o potencial.',
    },
    {
      termino: 'Distribución',
      significado:
        'es la función de poner el producto a disposición del cliente en el lugar, las cantidades y el momento requerido.',
    },
    {
      termino: '<i>E-mail marketing:</i>',
      significado:
        'canal digital que busca enviar correos electrónicos a bases de datos de contactos de clientes o prospectos, con el fin de obtener nuevos consumidores; se usa también para fidelizar a los clientes ya existentes.',
    },
    {
      termino: 'Etiqueta empresarial:',
      significado:
        'son el conjunto de buenas maneras que debe tenerse para la atención al cliente y el desarrollo del trabajo, que parte de la apatía, expresiones educadas, el tono y la manera de vestir. Se complementa con el protocolo para generar procesos de servicio al cliente efectivos.',
    },
    {
      termino: 'Las redes sociales',
      significado:
        'son canales de comunicación externa a la empresa que inducen a interconectar comunidades de individuos y clientes de las empresas con fines de promover el consumo, facilitar las ventas y generar posicionamiento y recordación de los productos y sus marcas.',
    },
    {
      termino: 'Momento de verdad:',
      significado:
        'es un encuentro que tienen los clientes con la empresa, el cual puede ser directo, indirecto, personal o por medio de canales digitales, donde se genera una sensación positiva o negativa conforme a si se resuelve o no su necesidad.',
    },
    {
      termino: 'PQRS',
      significado:
        'sigla de los tipos de requerimientos que hacen los clientes a las empresas: Preguntas, Quejas, Reclamos o Solicitudes. Las solicitudes pueden estar, en su mayoría, asociadas a ventas y comercialización. ',
    },
    {
      termino: 'Protocolo',
      significado:
        'iniciativa de gestión de servicio al cliente que promueve un derrotero de actuación ante las necesidades que tengan los clientes, el cual permite fijar un proceso, por ende, debe tener niveles de calidad y productividad en ventas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, A. L. (2017). <i>Canales de Distribución.</i> Bogotá: Fondo editorial Areandino. ',
      link: 'https://core.ac.uk/download/pdf/326423549.pdf',
    },
    {
      referencia:
        'Cruz Roche, I. (2013). <i>Canales de distribución. Especial Referencia a los productos de alimentación.</i> Pirámide. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/48995?page=6',
    },
    {
      referencia:
        'Juan Vigaray, M. (2010). <i>COMERCIALIZACIÓN Y RETAILING- DISTRIBUCIÓN COMERCIAL APLICADA.</i> Madrid: PEARSON. ',
      link:
        'https://www.ecotec.edu.ec/material/material_2016F1_MKT360_11_63978.pdf',
    },
    {
      referencia:
        'Edix. (2022). <i>Canales de venta: vender más y mejor.</i> Edix- Grupo Proeduca. ',
      link: 'https://www.edix.com/es/revolucion-profesional/',
    },
    {
      referencia:
        'Iciar Astiasarán, A., & Hernández, A. (2013). <i>ALIMENTOS- Composición y Propiedades.</i> McGraw-Hill. ',
      link:
        'https://fisiogenomica.com/assets/Blog/pdf/Alimentos-Composicion-y-Propiedades.pdf',
    },
    {
      referencia:
        'Fernández Torres, M. (2020). <i>Atención al cliente, Consumidor y Usuario.</i> Editorial Síntesis. ',
      link: 'https://www.sintesis.com/data/indices/9788413570006.pdf',
    },
    {
      referencia:
        'Monge Mediavilla, B. (2016). <i>Comunicación y Atención al Cliente.</i> Ed. Educalia.',
      link:
        'https://www.e-ducalia.com/archivo/muestra-comunicacion-at-cliente-pdf.PDF',
    },
    {
      referencia:
        'Murillo Moreno, L. (2018). <i>Fundamentos de Servicio al Cliente.</i> Fundación Universitaria del Área Andina. ',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/3523/93%20FUNDAMENTOS%20DE%20SERVICIO%20AL%20CLIENTE.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Paz, H. R. (2010). <i>Canales de Distribución: gestión comercial y logística.</i> Lectorum- Ugerman.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/76765?page=6',
    },
    {
      referencia: 'SENA. (s.f.). ETIQUETA Y PROTOCOLO EMPRESARIAL. ',
      link: 'https://www.webcolegios.com/file/9e9d6d.pdf',
    },
    {
      referencia:
        'Universidad Manuela Beltrán, V. (s.f.). SERVICIO AL CLIENTE. ',
      link:
        'http://virtualnet2.umb.edu.co/virtualnet/archivos/open.php/1037/Contenido_Modulo_II_Servicio_al_cliente.pdf',
    },
    {
      referencia:
        'Velázquez Velázquez, E. (2012). <i>Canales de distribución y logística.</i> Editorial: RED TERCER MILENIO S.C. ',
      link:
        'https://www.academia.edu/8867648/Canales_de_distribucion_y_logistica',
    },
    {
      referencia:
        'Vizcaíno, A. y Sepúlveda, I. (2018). <i>Servicio al cliente e integración del marketing mix de servicios.</i> Centro Universitario de Ciencias Económico Administrativas- Universidad de Guadalajara. ',
      link:
        'https://www.cucea.udg.mx/sites/default/files/documentos/adjuntos_pagina/servicio_al_cliente_e_integracion_del_marketing_mix_de_servicios.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
