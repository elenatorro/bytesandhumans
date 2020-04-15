---
layout: post
image: "paradigmas.png"
title: "Paradigmas con emoji"
excerpt: "¿Cuáles son los distintos paradigmas que existen por los que se clasifican los lenguajes de programación? Te lo cuento con emoji"
---

## Paradigmas de lenguajes de programación... con emoji

Antes de empezar, veamos la definición de **paradigma** en el diccionario:

> **Paradigma:** Teoría o conjunto de teorías cuyo núcleo central se acepta sin cuestionar y que suministra la base y modelo para resolver problemas y avanzar en el conocimiento [1]

Pero para poner esto en práctica y en el contexto de la programación, vamos a simplificar y adaptar el significado. Nos quedamos con la parte de que suministra la **base** y el **modelo** para **resolver problemas**, y es aquí donde entra el concepo de **programa informático**:

> Un **programa** informático es, por lo general, una serie de instrucciones que se ejecutan para **resolver un problema**.

En nuestro día a día tenemos un montón de problemas. Al menos yo tengo unos cuantos, vaya. En ocasiones, es posible resolver estos problemas **de maneras distintas**. Estas maneras dependen de muchas cosas externas, que pueden estar o no bajo nuestro control.

Las acciones, métodos y objetos, que empleamos para resolver un problema, junto con la situación en la que nos encontramos y los medios a nuestro alcance, son los que determinarán **cómo** resolveremos el problema.

En informática, hemos clasificado estas acciones y contextos en **paradigmas**. Es posible que para la resolución de un problema haya que aplicar **más de un** paradigma. Dependiendo de cómo queramos resolverlo, utilizaremos el **lenguaje de programación** que nos permita aplicar estos paradigmas.

A continuación tenemos una lista de ejemplos de **pseudocódigo** (código que no pertenece a un lenguaje de programación, pero que sirve para representar la lógica de un programa informático independientemente del lenguaje) para distintos tipos de paradigmas, junto con una breve explicación. Este pseudocódigo es un tanto especial porque utiliza uno de mis recursos favoritos de la tecnología: los **emoji**.

- [Paradigmas de lenguajes de programación... con emoji](#paradigmas-de-lenguajes-de-programaci%c3%b3n-con-emoji)
  - [Imperativo](#imperativo)
  - [Declarativo](#declarativo)
  - [Lógico](#l%c3%b3gico)
  - [Funcional](#funcional)
  - [Orientado a Objetos](#orientado-a-objetos)
  - [Dinámico](#din%c3%a1mico)
  - [Dirigido por Eventos](#dirigido-por-eventos)
- [Conclusiones](#conclusiones)
- [Fuentes](#fuentes)

### Imperativo

Este paradigma es el más antiguo, y consiste en escribir una **secuencia** de **pasos** o **instrucciones** claramente definidas. Un ejemplo muy práctico puede ser el de una **receta**.

Imaginemos que queremos hacer un bocadillo. ¿Qué pasos seguiríamos? Podríamos hacer los siguientes:

* Cortar pan
* Cortar queso
* Lavar la lechuga
* Lavar el tomate
* Cortar el tomate
* Cortar el jamón
* Poner todos los ingredientes juntos:
  * Primero una rebanada de pan
  * Luego la lechuga
  * El tomate
  * El jamón
  * El queso
  * Y otra rebanada de pan

Si eso fuera una **función**, podríamos decir que le **ordenaríamos** a la máquina hacer lo siguiente:

```
hacer_bocadillo() {
    1. 🍞🔪;
    2. 🧀🔪;
    3. 🥬🚰;
    4. 🍅🚰;
    5. 🍅🔪;
    6. 🥓🔪;
    
    return
        🍞 + 
        🥬 +
        🍅 + 
        🥓 + 
        🧀 +
        🍞;
}

$> hacer_bocadillo()
```

<div style="text-align: center;">
    <p style="font-size: 7em; margin: 0;">🥪</p>
</div>

### Declarativo

La programación declarativa es un estilo de programación en el que se especifica con **qué** datos se trabaja más que **cómo** se trabajan esos datos. Por ejemplo, queremos hacer uso de una función que sabemos que, dados unos ingredientes en orden, nos devuelve un _bocadillo_. Da igual en realidad el tipo de ingredientes, al final lo que está haciendo la función es _arrejuntarlos_ en orden para que te los puedas comer.

Siguiendo con el ejemplo anterior, esto es lo que haríamos para hacer un **sandwich**:

```
ingredientes = [🍞, 🥬, 🍅, 🥓, 🧀, 🍞]
🥪 <= hacer_bocadillo(ingredientes)
```

<div style="text-align: center;">
    <p style="font-size: 7em; margin: 0;">🥪</p>
</div>

Pero si queremos hacer una **hamburguesa**, sólo tenemos que cambiar los ingredientes y su orden:

```
ingredientes = [🍞, 🥬, 🥩, 🧀, 🍅, 🍞]
🍔 <= hacer_bocadillo(ingredientes)
```

<div style="text-align: center;">
    <p style="font-size: 7em; margin: 0;">🍔</p>
</div>

Si quisiéramos hacer una hamburguesa siguiendo el ejemplo imperativo anterior, tendríamos que tener dos funciones diferentes: **hacer_sandwich** y **hacer_hamburguesa**, porque la manera de preparar y cocinar los ingredientes es distinta.

### Lógico

Este paradigma es a su vez declarativo (en algunos sitios llaman a esto _subparadigma_). El paradigma lógico se basa en conceptos de **lógica matemática**, pero que esto no te asuste. Esto quiere decir que establece unas **reglas lógicas** a través de las cuáles **relacionar** distintos elementos para obtener **una respuesta**.

Imaginemos que tenemos a los siguientes individuos de una familia: dos niños pequeños, su madre y su abuela.

<div style="text-align: center;">
    <span style="font-size: 5em; margin: 0;">👦🏽</span>
    <span style="font-size: 5em; margin: 0;">👧🏽</span>
    <span style="font-size: 5em; margin: 0;">👩🏽</span>
    <span style="font-size: 5em; margin: 0;">👵🏽</span>
</div>

Y en nuestro programa tenemos una manera de detectar si una persona **es madre de otra**. Por ejemplo:

```
es 👩🏽 madre de 👧🏽
es 👩🏽 madre de 👦🏽
```

Estas dos afirmaciones nos conducen a una tercera afirmación: que 👦🏽 y 👧🏽 **son hermanos**:

```
es 👦🏽 hermano de 👧🏽
    es 👩🏽 madre de 👦🏽
    y
    es 👩🏽 madre de 👧🏽
```

Y del mismo modo, podríamos afirmar que 👵🏽 **es la abuela de** 👧🏽 porque:

```
es 👵🏽 abuela de 👧🏽
    es 👵🏽 madre de 👩🏽
    y
    es 👩🏽 madre de 👧🏽
```

### Funcional

Este paradigma también cumple el paradigma **declarativo**. Las principales características de la programación funcional son las siguientes:

* Inmutabilidad: No produce **cambios** en los datos de entrada
* No produce **cambios** o **efectos colaterales** fuera del **contexto** donde se produce
* Para unos mismos datos de entrada, produce la misma salida

Tenemos una función que se llama **es_vegano** que devuelve **sí** o **no** dependiendo si un ingrediente es vegano o no lo es. Esta función:

* Para un mismo ingrediente siempre va a producir la misma respuesta
* No cambia el ingrediente que está comprobando

```
es_vegano(ingrediente) => sí o no
```

Ahora, tenemos una función **filtrar** que lo que hará será recorrer cada uno de los ingredientes y devolver solo aquellos que sean veganos.

```
ingredientes = [🍞, 🥬, 🥩, 🧀, 🍅]
[🍞, 🥬, 🍅] <= filtrar(ingredientes, es_vegano)
```

Esta función:

* No altera la lista de ingredientes iniciales, solo indica cuáles son veganos
* No modifica ninguno de los ingredientes iniciales
* Para los mismos ingredientes, siempre produce la misma solución

### Orientado a Objetos

Lo que caracteriza a esta forma de programar es la utilización, como su propio nombre indica, de **objetos**. Un objeto es una **entidad** que tiene unas características propias y que puede hacer una serie de cosas.

Siguiendo en la línea de ejemplos de comida, podríamos tener una entidad u objeto llamada, sencillamente, **Comida**. Una comida se caracteriza por unos ingredientes, la temperatura a la que ha de cocinarse, la sal que lleva, el recipiente donde se va a comer y además una función **preparar**, a la cuál se le tiene que indicar cuántos minutos de preparación necesita:

```
Comida:
    - ingredientes
    - temperatura
    - sal
    - recipiente

    - preparar(minutos)
```

Podemos **preparar** una sopa creando una **nueva Comida** de la siguiente manera:

```
ingredientes = [🥬, 🥕, 🥔, 🍗, 💧]
temperatura = 50 grados celsius
sal = 5 gramos
recipiente = 🥣
minutos = 30

sopa = nueva Comida(ingredientes, temperatura, sal, recipiente)
sopa.preparar(minutos)
```

¡Y aquí la tenemos!

<div style="text-align: center;">
    <span style="font-size: 7em; margin: 0;">🍲</span>
    <span style="font-size: 5em; margin: 0;">🥄</span>
</div>

Utilizando la misma manera de **crear comidas**, podemos preparar ahora una maravillosa **ensalada**:

```
ingredientes = [🥬, 🍅, 🥒, 🥑]
temperatura = nula
sal = 10 gramos
recipiente = 🥣
minutos = 5

ensalada = nueva Comida(ingredientes, temperatura, sal, recipiente)
ensalada.preparar(minutos)
```

<div style="text-align: center;">
    <span style="font-size: 7em; margin: 0;">🥗</span>
    <span style="font-size: 5em; margin: 0;">🥄</span>
</div>

Tanto la sopa 🍲 como la ensalada 🥗 son **objetos** de tipo comida, por lo que tienen las mismas **propiedades** (una serie de ingredientes, etc...) y una función **preparar**.

Podríamos ir más allá definiendo un **objeto Menú** que estuviera compuesto por **varias comidas**, haciendo uso de los objetos que ya hemos creado, y además, añadiendo un **postre**:

```
ingredientes = [🍬, 🥚, 🥛, 🍋, 💧]
temperatura = 50
sal = 0
recipiente = 🍽️
minutos = 30

flan = nueva Comida(ingredientes, temperatura, sal, recipiente)
flan.preparar(minutos)
```

<div style="text-align: center;">
    <span style="font-size: 7em; margin: 0;">🍮</span>
    <span style="font-size: 5em; margin: 0;">🍴</span>
</div>

```
Menú:
    - primer plato
    - segundo plato
    - postre
```

```
menu = nuevo Menú(🥗, 🍲, 🍮)
```


### Dinámico

El objetivo principal de la programación dinámica es el de hacer más **óptimo** un programa u obtener la solución más **óptima** a un problema. Para ello, se estudia qué pasos hay que utilizar de manera que, entre todas las soluciones posibles, se obtenga **la mejor**.

En el siguiente ejemplo hay un hamster 🐹 que está rodeado por distintos alimentos. Pero lo que más le gusta al pequeño roedor es el queso 🧀. Por eso, decide pasar por **cada uno** de los alimentos hasta llegar al queso, que será el último que coma. Como es un hamster muy espabilado, empieza por el alimento que **más cerca está**, siempre y cuando:

* No haya probado ese alimento con anterioridad
* Ese alimento sea el queso pero aún le queden otros alimentos por probar

<iframe height="500" style="width: 100%;" scrolling="yes" title="dijkstra_p5" src="/sandbox/dijkstra_emoji.html" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
</iframe>

### Dirigido por Eventos

O también conocido como **orientado a eventos**. En este caso, el **flujo** del programa no va a estar determinado por una secuencia de pasos, sino por **eventos** externos, como otra parte del mismo programa u otro programa diferente. Estos eventos son **mensajes** que indican que **algo** ha pasado, alterando el flujo del programa.

Por ejemplo, imaginemos que hemos hecho el sistema de alarma de incendios de unas oficinas.

* El sistema está siempre encendido, esperando a que los sensores de temperatura (🌡️) detecten que esta se ha sobrepasado. Si lo detectan (🔥), avisan (👉) al sistema de alarma (🚨).

* Si el sistema recibe una señal (⚠️) de humo, inmediatamente empieza a sonar (🔊) y envía (👉) una señal para activar los **aspersores** (💦).

* Si los aspersores reciben una señal (⚠️) de activación, dejan salir el agua.

```
🌡️sensor_de_temperatura:
    🔥:
        1. 👉🚨

🚨sistema_de_alarma:
    ⚠️⚠️⚠️:
        1. 🔊🔊🔊
        2. 👉💦

💦aspersores:
    ⚠️⚠️⚠️:
        1. 🌧️🌧️🌧️
```

La resolución de un problema aplicando el paradigma dirigido a eventos puede dar lugar a la aplicación de otros paradigmas o técnicas como la **concurrencia** (¿pueden avisar todos los detectores de temperatura a la vez? ¿pueden activarse todos los aspersores a la vez, o si no, en qué orden?) o la **reactividad** (¿a qué estado pasa un aspersor cuando se enciende? ¿cuándo le aviso de que tiene que terminar?)

## Conclusiones

Como menciono al principio, utilizar un paradigma o estrategia no es incompatible con utilizar otro paradigma o estrategia. Esto dependerá del lenguaje de programación, del problema a resolver, y de otras variables.

Espero que hayas disfrutado de estas divertidas metáforas hechas con emoji 😅

## Fuentes

* [1] [Paradigma: Diccionario De La Lengua Española - https://dle.rae.es/paradigma](https://dle.rae.es/paradigma)
* [2] [Paradigmas de
Programación - Departamento de Informática
Universidad de Valladolid](https://www.infor.uva.es/~cvaca/asigs/docpar/intro.pdf)

