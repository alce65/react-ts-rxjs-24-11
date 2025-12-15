# TYPESCRIPT Y PROGRAMACIÓN REACTIVA

- [TYPESCRIPT Y PROGRAMACIÓN REACTIVA](#typescript-y-programación-reactiva)
  - [OBJETIVOS](#objetivos)
  - [Desarrollo](#desarrollo)
    - [Semana 1](#semana-1)
      - [Día 1 - Lunes 24/11/2026 (3 horas)](#día-1---lunes-24112026-3-horas)
      - [Día 2 - Martes 25/11/2026 (3 horas)](#día-2---martes-25112026-3-horas)
      - [Día 3 - Miércoles 26/11/2026 (3 horas)](#día-3---miércoles-26112026-3-horas)
      - [Día 4 - Jueves 25/11/2026 (3 horas)](#día-4---jueves-25112026-3-horas)
    - [Semana 2](#semana-2)
      - [Día 5 - Lunes 01/12/2026 (3-45 horas)](#día-5---lunes-01122026-3-45-horas)
      - [Día 6 - Martes 02/12/2026 (3-45 horas)](#día-6---martes-02122026-3-45-horas)
      - [Día 7 - Miércoles 03/12/2026 (3-45 horas)](#día-7---miércoles-03122026-3-45-horas)
      - [Día 8 - Jueves 04/12/2026 (3-45 horas)](#día-8---jueves-04122026-3-45-horas)
    - [Semana 3](#semana-3)
      - [Día 9 - Martes 09/12/2026 (3-45 horas)](#día-9---martes-09122026-3-45-horas)
      - [Día 10 - Miércoles 10/12/2026 (3-45 horas)](#día-10---miércoles-10122026-3-45-horas)
      - [Día 11 - Jueves 11/12/2026 (3-45 horas)](#día-11---jueves-11122026-3-45-horas)
    - [Semana 4](#semana-4)
      - [Día 12 - Lunes 15/12/2026 (3-45 horas)](#día-12---lunes-15122026-3-45-horas)

DURACIÓN: 45 horas

React
Typescript
RxJS
Avanzado

## OBJETIVOS

- Comprender los fundamentos de la **programación reactiva** en el desarrollo frontend, explorando sus ventajas y conceptos clave como flujos de datos asíncronos y la gestión de eventos.
- Adquirir habilidades avanzadas en **TypeScript** para la programación reactiva, mejorando el uso de **tipos** en componentes React y comprendiendo los tipos aplicados a flujos asíncronos, como `Promise` y `Observable`.
- Aplicar hooks avanzados en el contexto de programación reactiva, desarrollando **hooks personalizados** que gestionen observables y suscripciones, además de optimizar el rendimiento de la aplicación con `useMemo` y `useCallback`.
- Gestionar eficazmente el **estado** en aplicaciones React mediante el uso de **RxJS**, implementando flujos de estado reactivos con `BehaviorSubject` y `ReplaySubject`, y combinando la **API de Context** de React con RxJS para la compartición de datos entre componentes.
- Implementar **patrones de diseño** reactivos como `Pub/Sub` y `Observer`, utilizando operadores de RxJS para mapeo, filtrado y combinación de flujos de datos en escenarios reales de desarrollo.
- Consumir **APIs asíncronas** de manera eficiente con RxJS, gestionando flujos de datos desde peticiones HTTP y aplicando técnicas avanzadas para trabajar con WebSockets y datos en tiempo real en React.
- Realizar **testing** de aplicaciones reactivas mediante la configuración de Jest con TypeScript y RxJS, simulando flujos de datos y eventos en pruebas unitarias, y validando el comportamiento de observables y hooks personalizados.
- Aplicar **buenas prácticas** y **optimización** en la programación reactiva, gestionando correctamente las suscripciones, evitando memory leaks, y optimizando el rendimiento de las aplicaciones reactivas mediante operadores avanzados de RxJS.

## Desarrollo

### Semana 1

#### Día 1 - Lunes 24/11/2026 (3 horas)

- Presentación: formador y alumnos
- Introducción: curso, temario, objetivos, metodología, herramientas previas
- Instalación monorepo {monorepo}
- Configuración proyecto React + TS + Vite (ESlint)
- Incorporación de Vitest

[descanso] 16:50 - 17:10

- TypeScript: proyecto básico (pure TS) en el monorepo
- Introducción a TypeScript (1):
  - tipos básicos, interfaces y tipos

#### Día 2 - Martes 25/11/2026 (3 horas)

- Introducción a TypeScript (2)

  - combinación de tipos
  - clases (OOP)
  - narrowing: type guards, discriminated unions

- React básico
- Ejercicio práctico: proyecto React + TS + Vite -> convertir a componentes funcionales

  - Tiempo para el ejercicio

[descanso] Incluido en el tiempo de ejercicio

- 🧿**Footer**
  - Estructura de carpetas para componentes
  - Componentes funcionales y elementos JSX. Tipado con TypeScript
  - Estilos CSS: archivos CSS por componente
- 🧿**Header**
  - Props y tipado de props con TypeScript
- 🧿**Card**
  - Prop children y su tipado
- 🧿**Layout**
- 🧿**App**
  - Composición de componentes. Prop drilling
- 🧿**Counter**

  - Uso de hooks básicos: useState. Tipado del estado con TypeScript

- 👁️‍🗨️Tests unitarios con Vitest
  - Elementos de los tests. Matching
  - Testing Library. Querying
  - 👁️‍🗨️Testing de los componentes
- 🧿Componente Counter MultiButtons

#### Día 3 - Miércoles 26/11/2026 (3 horas)

- 🧿Componente Counter MultiButtons (continuación)

  - Tipado de eventos en TypeScript
    - Eventos específicos
    - target vs currentTarget. Casting
  - 👁️‍🗨️Testing del componente

- Formularios controlados

  - ⚙️Servicio usuarios (mock)
  - 🧿Componente LoginForm (controlado)
  - 👁️‍🗨️Tests de formularios

[descanso] : 17:25 - 17:40

- Formularios no controlados

  - 🧿Componente RegisterForm (no controlado)

#### Día 4 - Jueves 25/11/2026 (3 horas)

- Formularios no controlados (continuación)

  - Abstracción de lógica: funciones tools
  - 👁️‍🗨️Tests de formularios

- Add project demo1 clonado de Demo0

- Programación asíncrona v. reactiva
  - Conceptos
  - Promesas: then v. async/await
    - ⚙️Servicio getData basado en promesas
    - 👁️‍🗨️Test del servicio

[descanso] : 17:05 - 17:20

- 🧿Componente Search con promesas
  - Consumo del servicio getData
  - 👁️‍🗨️Test del componente
- 🧿Componente Search optimizado con debounce (promesas)
  - 👁️‍🗨️Test del componente (comentar)

### Semana 2

#### Día 5 - Lunes 01/12/2026 (3-45 horas)

- 🧿Componente con cancelación de peticiones (promesas)
  - 👁️‍🗨️Test del componente
- Conceptos de programación reactiva

- Patrones de diseño reactivos
  - Introducción
  - Iterator
  - Iterator: implementación en TypeScript y JS

[descanso] 16:30 - 16:45

- Patrones de diseño reactivos (continuación)

  - Pub/Sub (Observer)
  - Implementación de Pub/Sub en TypeScript: Event manager
  - Ventajas de Pub/Sub
  - Estrategias Push v. Pull

- Introducción a RxJS
  - Observables
  - Tipos: cold v. hot
- Instalación de RxJs en el proyecto demo1-TS

#### Día 6 - Martes 02/12/2026 (3-45 horas)

- Observable cold. Suscripciones
  - observers: next, error, complete
  - Unicast
  - Lazy
  - Subscription. Cancelación
- Observables hot. Subjects.

  - Multicast
  - Subject
  - BehaviorSubject
  - ReplaySubject
  - AsyncSubject

- Creación de observables: Operadores de creación
  - from
  - fromEvent

[descanso] 16:30 - 16:50

- Creación de observables: Operadores de creación (continuación)

  - of
  - interval, timer

- Operadores (Comentar Lista).
- Observables RxJS en componentes de React

  - Proyecto React + TS + RxJS + Vite
  - Observables y estado: 🧿ListNames
    - useState: creación del estado
    - useEffect y suscripciones: actualización del estado
    - uso de useMemo
  - Observables y eventos: 🧿ClickCounter
    - fromEvent: creación del observable
    - useEffect y suscripciones: actualización del estado
    - operadores de RxJS: map, scan..
  - Observables e intervalos: 🧿IntervalCounter
    - interval: creación del observable
    - useEffect y suscripciones: actualización del estado
  - 👁️‍🗨️Test de los componentes -

#### Día 7 - Miércoles 03/12/2026 (3-45 horas)

- Desuscripción

  - función de limpieza en useEffect
  - desuscripción automática
    - 🧿Componente IntervalCounter2 con takeUntil

- Typescript avanzado. Tipos en React (comentarios)
- Genéricos. Restricciones con Extend

[descanso] 16:20 - 16:35

- Genéricos en React. 🧿Componente List reutilizable

  - Genéticos en interfaces (o tipos)
  - Genéricos. Restricciones con Extend

- Manipulación de tipos
  - keyof & typeof
  - Indexed Access Types
  - Conditional Types

#### Día 8 - Jueves 04/12/2026 (3-45 horas)

- Manipulación de tipos (continuación)

  - Mapped Types
  - Comentar 🧿Componente User uniones v. condicionales

- Utility Types
- TypeScript y asincronía. Manejo de errores

  - Promesas con TS
  - Observables con TS

[descanso] 16:05 - 16:20

- Nuevo proyecto: demo3.rx: React + TS + RxJS + Vite
- Hooks Personalizados y RxJS
  - Introducción. Tipado de hooks personalizados
    - ⚙️useToggle
    - ⚙️useLocalStorage, usando genéricos
    - Test de los hooks
- Creación de hooks personalizados con RxJS
  - 🧿Componente Lista (datos, asincronía)->
    - ⚙️useObservable.v1
    - ⚙️useObservable.v2 + useSubscription
    - 👁️‍🗨️Test de los componentes -> test de los hooks
  - 🧿Componente ClicksCounter (Eventos) ->
    - ⚙️useObservable.v3 + useSubscription

### Semana 3

#### Día 9 - Martes 09/12/2026 (3-45 horas)

- Creación de hooks personalizados con RxJS (continuación)
- 🧿Componente ClicksCounter (Eventos) ->

  - Corregir errores (memoización)
  - 👁️‍🗨️Test de los componentes -> test de los hooks

- Hooks Personalizados y RxJS (continuación)
  - Componente y multiples estados: 🧿UserLogged -> ⚙️useUserLogged
  - Single Component Hook
- Integración y operaciones con Observables en componentes React
  - Debounces y Throttles
    - 🧿Componente Fibonacci-items: take, takeWhile, debounceTime

[descanso] 16:15 - 16:35

- Integración y operaciones con Observables en componentes React (continuación)

  - 🧿Componente Fibonacci (continuación)
    - Radio buttons en el componente padre
    - useMemo y useCallback en el componente

#### Día 10 - Miércoles 10/12/2026 (3-45 horas)

- Integración y operaciones con Observables en componentes React (continuación)

  - 👁️‍🗨️Test del componente Fibonacci
  - Combinación de observables
  - Constantes Observables
  - Observables de Orden Superior (Higher-Order Observables)

- Observables de Orden Superior (Higher-Order Observables)
  - 🧿Componente Fibonacci v.2
  - 🧿Componente GetData: MergeMap v. SwitchMap

[descanso] 16:40 - 17:00

- Observables de Orden Superior (Higher-Order Observables) (continuación)
  - 🧿Componente IntervalCounter3 (2 botones con switchMap)
  - 👁️‍🗨️Test del componente IntervalCounter3 (2 botones con switchMap)
  - 🧿Componente IntervalCounter4 (3 botones con switchMap)

#### Día 11 - Jueves 11/12/2026 (3-45 horas)

- Review: tests
  - 👁️‍🗨️Test del componente GetData
  - 👁️‍🗨️Test del componente IntervalCounter4 (3 botones con switchMap)

Http Client (introducción)

- nuevo proyecto TS-Rx-HttpClient: demo4
- promesas en fetch
- Peticiones HTTP con RxJS

  - ajax
  - fromFetch (más actual)

- Http Client
  - ⚙️Servicio genérico dataFetch
    - operadores fromFetch y switchMap, tipado
    - errores

[descanso] 16:20 - 16:40

- ⚙️Servicio específico userDataFetch
- 🧿Componente GetUser (by button)

- Manejo de API desde un input de búsqueda
  - 🧿Componente ReadInput
  - ⚙️Servicio SearchCountries

### Semana 4

#### Día 12 - Lunes 15/12/2026 (3-45 horas)

- Http Client (continuación)

- Manejo de API desde un input de búsqueda (continuación)

  - 🧿Componente SearchCountries

- Test de servicios HTTPClient

  - Test de servicios HTTPClient (continuación)
    - 👁️‍🗨️Test del servicio fetchService (generico)
    - 👁️‍🗨️Test del servicio fetchUserService (específico)
  - Test componentes que usan servicios HTTPClient
    - 👁️‍🗨️Test del componente GetUser (by button)
    - 👁️‍🗨️Test del componente SearchCountries

- Creación de flujos de datos reactivos con RxJS: Hot Observables
  - Concepto de Hot Observables
  - 🧿Componente ClicksCounter (con un Subject): Eventos y Subjects

[descanso] 16:35 - 16:55

    - Acciones con Subjects: patrón Flux
      - 🧿Componente Counter3Buttons
      - Mejora del "reducer" y tipos de acciones
      - El patrón flux nativo en react: useReducer
    - [Opción: useReducerRx (Sin desarrollar info, solo el código)]
    - Combinación de flujos y operadores complejos
      - ⚙️Servicios getByUrl y searchPokemon
      - 🧿Componente SearchPokemon

<!-- #### Día 13 - Martes 16/12/2026 (3 horas)

    - Flujos de datos en múltiples componentes
      - ⚙️SubjectManager: servicio para compartir flujos
      - 🧿DemoPage con componentes que com8parten flujos -->

<!-- [descanso] 16:13 - 16:30

- Creación de flujos de datos reactivos con RxJS: Hot Observables

- Gestión del estado. Subjects (Mod. 5)
  - React Context y programación reactiva (revisar)
    - Inyección en React: Contexto
      - Contextos de React, Hooks y servicios
        - 🌐Creación del contexto y del proveedor
      - Acceso al contexto
    - Contexto dinámico y custom Hooks
      - 🌐Theme \& Language Context (¿Mencionar?)
      - 🌐User Context
    - Contexto en React19. El API `use`
  - Gestión avanzada del estado con BehaviorSubject
    - 🌐Context
    - 🌐Interface Repository
  - - ⚙️Repository Service: Patrón repositorio (Repository)
    - ⚙️State Manager Service
    - 🧿Componente Notes con State Manager Service
    - 🧿Componente AddNotes con State Manager Service

Comentar lo abarcado de los módulos siguientes:

6 - patrones
7 - testing
8 - optimización -->
