<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.my-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.svg')})`}"
        )(data-aos="fade-right")
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se orientará hacia el concepto de comercialización siguiendo las tendencias del mundo actual, que exigen que las empresas, en aras de su competitividad, crecimiento y desarrollo, proyecten e impulsen sus productos y marcas por medio del servicio al cliente. Esta atención está orientada a los puntos de ventas propios, los canales de distribución y los canales digitales, con el fin de ampliar la comercialización y promoción de los productos, pues son parte integral del servicio. A su vez, esto implica el establecimiento de protocolos de comunicación afables que despierten la empatía suficiente para que los clientes se sientan cómodos con los productos y servicios de la empresa, en lo que se denomina satisfacción al cliente.
 
    .row.justify-content-center.my-5
      .col-lg-8
        .cajon.color-primario.p-4
          p Dicho proceso se establece como metodología por parte del aprendiz para el desarrollo de las competencias, la apropiación de contenidos temáticos a partir de la lectura del material del componente formativo y la consulta de sus anexos. También es clave desarrollar las actividades planteadas en la guía de aprendizaje. 

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/SOmQLHJ4jLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
