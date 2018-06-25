<template>
  <div class="content">
    <h2>Nuevas Herramientas</h2>
    <p>En esta lección aprenderemos un par de herramientas que nos servirá mucho al momento de declarar nuesto <b>Grid container</b></p>
    <h3 class="mb-0">Función repeat()</h3>
    <p class="mt-0">Es una función que nos brinda CSS para acortar nuestras declaraciones de filas y columnas. Esta función recibe dos parámentros: la cantidad de veces que va a repetir, y lo que tiene que repetir. Así pues, si deseo declarar 4 columnas y 6 filas de 30px y 45px respectivamente, lo puedo declarar de la siguiente manera:</p>
    <gr-code-box>
      <span class="red">.</span>grid <span class="red">{</span><br>
        <span class="ml-2">grid-template: repeat(6, 45px) / repeat(4, 30px);</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <h3 class="mb-0">La unidad fr</h3>
    <p class="mt-0">Como se dijo en lecciones pasadas, los <b>Grid tracks</b> (filas y columnas) pueden ser definidos con cualquier unidad de medida. Ahora, <b>CSS Grid Layout</b> trea consigo esta nueva unidad que equivale a una fracción del espacio disponible. Podemos entender el valor de 1fr con el siguiente modelo de un <b>Grid container</b> con <b>500px</b> de ancho:</p>
    <ul>
      <li>Si declaramos una columna de 1fr: El espacio disponible será una sola fracción.</li>
      <gr-code-box class="mb-2">
        1fr <span class="red">=</span> Ancho disponible <span class="red">=</span> 500px<br>
        Ancho de columna <span class="red">=</span> 500px
      </gr-code-box>
      <li>Si delcaramos dos columnas de 1fr: El espacio disponible se dividirá en dos fracciones iguales.</li>
      <gr-code-box class="mb-2">
        2fr <span class="red">=</span> 500px<br>
        1fr <span class="red">=</span> 250px<br>
        Ancho de columna <span class="red">=</span> 250px
      </gr-code-box>
      <li>Si declaramos una columna de 2fr y dos de 1fr <b>(2fr 1fr 1fr)</b>: El espacio disponible se dividrá en cuatro fracciones iguales (2+1+1).</li>
      <gr-code-box class="mb-2">
        4fr <span class="red">=</span> 500px<br>
        1fr <span class="red">=</span> 125px<br>
        Primera columna <span class="red">=</span> 2fr <span class="red">=</span> 2 * 125px <span class="red">=</span> 250px<br>
        Siguientes columnas <span class="red">=</span>1fr cada una <span class="red">=</span> 125px cada una<br>
      </gr-code-box>
      <li>Si declaramos cuatro columnas de 1fr y dos de 3fr: El ancho total se va a dividir en diez fracciones iguales.</li>
      <gr-code-box class="mb-2">
        10fr <span class="red">=</span> 500px<br>
        1fr <span class="red">=</span> 50px<br>
        Primeras 4 columnas <span class="red">=</span> 50px cada una<br>
        Siguientes 2 columnas <span class="red">=</span> 150px cada una<br>
      </gr-code-box>
    </ul>
    <h3 class="mb-0">Función minmax()</h3>
    <p class="mt-0">Y una ayuda más para nuestro diseño responsivo. Esta función recibe dos parámetro (un mínimo y un máximo) y define un rango de tamaño. La verdad es que es muy intuitivo y te puede ayudar en más de una ocasión. Por ejemplo, quieres definir el ancho de tus columnas con un mínimo de 100px y un máximo de 20% del ancho total</p>
    <gr-code-box>
      <span class="red">.</span>grilla <span class="red">{</span><br>
      <span class="ml-2">grid-template-columns: repeat(3, minmax(100px, 1fr));</span><br>
      <span class="red">}</span>
    </gr-code-box>
    <p>Así tendremos tres columnas cuyo ancho será un tercio del espacio disponible, pero con mínimo de 100px.</p>
  </div>
</template>
<script>
import grCodeBox from '@/components/CodeBox.vue'

export default {
  name: 'leccion4',
  components: { grCodeBox }
}
</script>
<style>

</style>