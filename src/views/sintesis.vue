<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La gestión comercial de productos alimenticios debe ser cada vez más asertiva para mitigar el riesgo de que las empresas sean relevadas por su competencia; por ello, uno de los ejercicios más importantes consiste en identificar y conocer a sus clientes, a fin de saber cómo impulsar los productos de conformidad con las características de los tipos de clientes, buscando siempre aumentar la tasa de ventas y de participación en el mercado, además del grado de recordación o posicionamiento para que, al momento de compra, los productos de la empresa sean la primera opción para los clientes, lo que requiere un ejercicio de comunicaciones muy dinámico.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
