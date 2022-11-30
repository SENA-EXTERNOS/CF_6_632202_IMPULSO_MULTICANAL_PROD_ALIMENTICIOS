<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-puzzle-piece
      h1 Actividad didáctica
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/opcion-multiple2.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Clientes y servicio empresarial

        p.mb-4 A partir de los temas elaborados en el componente formativo, desarrolle la siguiente actividad para verificar su apropiación temática, seleccionando la respuesta correcta:
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple
            .col-auto
              a.boton.boton--b.color-acento-contenido(:href="obtenerLink('/actividades/actividad1/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
