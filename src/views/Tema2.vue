<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Atención y servicio al cliente

    .row.justify-content-center.my-5
      .col-lg-7
        p El servicio al cliente es el conjunto de actividades que realizan las empresas con el fin de que los clientes o consumidores puedan comprar u obtener bienes o productos de manera fácil, segura, en el momento y lugar deseados; así mismo, dentro de este conjunto están todas las acciones que se adelantan con los clientes en los procesos de compra y venta, lo que coteja varias etapas (antes, durante y después de la compra de un producto).

      .col-lg-5(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='')        

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-primario.p-3.mb-3(data-aos="fade-right")
          p Es importante recordar que un buen servicio al cliente va más allá de esperar preguntas, quejas o reclamos; consiste en orientarle e inducirle a información que aún no ha solicitado, de manera que perciba que es posible suplir sus necesidades a través de los bienes y productos de la empresa. Para esto es esencial realizar un ejercicio de anticipación a las demandas, supliendo las necesidades del cliente de manera eficaz, todo esto dentro de un protocolo de procedimientos por parte de los empleados, que cubre aspectos como la amabilidad, calidad, buenas maneras y trato al producto.

    separador

    #t_2_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.1 ¿Para qué el servicio al cliente?

    .row.my-5
      p El propósito de un proceso de servicio al cliente es favorecer la percepción y satisfacción de los consumidores o clientes, a fin de lograr o consolidar la fidelización de los clientes reales (compradores efectivos), además de ganar nuevos clientes o consumidores (clientes potenciales).     

    .row.my-5
      .bloque-texto-g.color-acento-botones.p-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.svg')})`}"
        )(data-aos="fade-right")
        .bloque-texto-g__texto.p-3(data-aos="fade-left")
          p Contar con un buen proceso de atención al cliente es fundamental pues, independientemente de que el producto sea o no de muy buena calidad, un buen servicio deja sensaciones complementarias que pueden ser positivas o negativas, a las cuales se les denomina momentos de verdad. 
          p.mb-0 De ser negativas estas sensaciones, las ventas transaccionales y de todo tipo pueden verse perjudicadas al ser este un multiplicador de malas experiencias. Por esta razón, en el proceso de servicio al cliente se deben proporcionar los canales de comunicación apropiados y necesarios para el intercambio de información entre los compradores, los consumidores y la empresa; siempre en una actitud de disposición favorable hacia el cliente con el fin de solventar, durante el proceso de compra, cualquier inconveniente y responder a posibles inquietudes.
 
    separador

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.2 El proceso del servicio al cliente

    .row.justify-content-center.my-5
      .col-lg-8
        .hr--line
        .row
          .bloque-texto-b.color-naranja.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Un proceso de servicio al cliente consiste en determinar el conjunto de iniciativas de actividad que una empresa debe emprender para ofrecer sus productos a los clientes o consumidores con la mayor calidad, dejando la mejor experiencia y una sensación agradable, lo que denota un proceso de servicio al cliente eficiente que refuerza la imagen positiva de la empresa, conduciendo así a la fidelización del cliente. 
              b.texto-derecha (Murillo, 2018).
              i.fas.fa-quote-right
      .col-lg-4.my-3(data-aos="fade-up-left")
          figure
            img(src='@/assets/curso/temas/tema2/img3.svg', alt='')         

    .row.my-5
      p.text.center A continuación, se presentan las etapas del proceso de servicio al cliente. Este tiene que favorecer el propósito de ganar clientes efectivos y fidelizados; requiere que las etapas del proceso de servicio al cliente se adapten al tipo de producto, así como a las necesidades del cliente o consumidor.

    .row.justify-content-center.my-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span #[i Etapas del proceso de servicio al cliente]

    .row.justify-content-center.my-5
      .col-lg-8(data-aos="zoom-in-up")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='')

          div(x="51%" y="33%" tooltip="" numero="1")
            h5 Recepción del cliente
            p Es el primer contacto que tiene la empresa con el cliente o consumidor donde, en consonancia con un momento de verdad positivo, gracias a una buena actitud y trato, se debe escuchar al cliente con el fin de capturar la PQRS, en caso de que la hubiera. Para esto los empleados de primer contacto deben tener un protocolo de comunicación e interlocución, asegurando un trato respetuoso, objetivo y rápido, haciendo las preguntas pertinentes para que el cliente se sienta atendido y pueda clarificar su inquietud, con el mejor de los resultados posibles.

          div(x="73%" y="45%" tooltip="" numero="2")
            h5 Realizar la venta
            p El cliente o consumidor hace la adquisición del producto física o virtualmente. En aras de un buen servicio al cliente, la empresa debe asegurarse de asesorar y orientar al posible consumidor respecto de la oferta que mejor responde a sus necesidades.

          div(x="73%" y="87%" tooltip="" numero="3")
            h5 Seguimiento de ruta
            p Es el seguimiento en ruta del transporte del producto comprado por el cliente, donde es importante llevar localizada la movilidad para que pueda establecerse de forma continua su trazabilidad. De esta forma, el cliente disminuye sus niveles de incertidumbre, favoreciendo sus indicadores de satisfacción. Dentro de este proceso de transporte se aconseja tener comunicación oral o escrita permanente con el cliente.

          div(x="27%" y="87%" tooltip="" numero="4")
            h5 Servicio posventa
            p Es la etapa donde el producto llega a manos del cliente, y es el cierre del proceso de distribución logística; sin embargo, se debe tener en cuenta que, luego de la entrega del producto, el cliente puede devolverlo o solicitar un cambio, si encuentra alguna anomalía en las cantidades, el estado del producto, la vida útil, entre otros aspectos. En esta etapa es muy importante aplicar encuestas a los clientes para identificar los niveles de satisfacción frente al servicio y, por ende, del producto entregado.

          div(x="27%" y="45%" tooltip="" numero="5")
            h5 Registro y análisis de PQRS
            p La empresa debe llevar un registro de las PQRS (preguntas, quejas, reclamos o solicitudes) de los consumidores, pues esta información le será útil para identificar los motivos y frecuencia de estas. En el caso de que se reciban preguntas, por ejemplo, la empresa debe mejorar sus comunicaciones en detalles descriptivos o ampliar canales; si se trata de reclamaciones, es necesario identificar sus motivos, que suelen ser la calidad del producto, oportunidad, mala facturación, etc. Estos registros y análisis sirven de base para el desarrollo de mejoras en los procesos, incluso si son solicitudes y particularidades, ya que son útiles para analizar las necesidades específicas de los clientes o consumidores. 

    .row.my-5
      h4 Puntos de contacto en el servicio y atención al cliente

    .row.justify-content-center.my-5
      .col-lg-8
        .hr--line
        .row
          .bloque-texto-b.color-naranja.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Todos estos registros en el sistema de PQRS al final le deben arrojar información a la empresa, que le permita identificar las características de los tipos de clientes y sus sensibilidades; de igual manera, se podrá identificar los tipos de solicitudes más comunes, información que sirve como base para el desarrollo de nuevas referencias o líneas de producto. 
              b.texto-derecha2 (Vizcaíno y Sepúlveda, 2018)
              i.fas.fa-quote-right

    .row.my-5
      p Para ampliar estos conceptos de cómo organizar una empresa y el departamento de atención al cliente, se recomienda revisar el #[strong Anexo 2] - Información y atención al cliente, adjunto a este componente formativo, así como el #[strong Anexo 1] - Tipos de clientes reales y puntos de contacto.

    .row.justify-content-center.my-5      
      .col-lg-10(data-aos="flip-up")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-1
            .col-3.col-sm-2.col-lg-2
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='').img7-tm1
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p #[strong Anexo 2 -] Información y atención al cliente.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo-2--información_y_atención_al_cliente.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.my-5
      h5.text-center Video: Tipos de servicios según puntos de contacto con clientes o consumidores

    .row.justify-content-center.my-5(data-aos="fade-zoom")
      .col-lg-8
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Cduh2iSuzZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption.mt-3 Fuente: Ecosistema de Recursos Educativos Digitales - SENA- https://youtu.be/Cduh2iSuzZg



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
