# Ejercicio 1

## Parte A – TypeScript en términos de Kuhn

1. **Generalización simbólica**  
   - TypeScript está basado en el estándar **ECMAScript**, pero agrega **tipado estático o fuerte** y **verificación en tiempo de compilación**, lo que mejora la detección de errores.  
   - Sus reglas escritas incluyen el uso de **tipos explícitos** (`string`, `number`, `boolean`, `any`, etc.) similares a las mencionadas en C, **estructuras de control** (`if`, `for`, `while`, `switch`) y **funciones** como en JavaScript.  
   - Las instrucciones se ejecutan **de forma secuencial**, pudiendo modificar el flujo mediante condicionales y bucles.  
   - Antes de ejecutarse, el código TypeScript se **transpila a JavaScript**, garantizando su compatibilidad con navegadores y entornos como Node.js (Todo esto lo veremos en el ejercicio práctico).  

2. **Creencias de los profesionales**  
   - Los desarrolladores valoran TypeScript porque ofrece **mayor seguridad y robustez** gracias al sistema de tipos.  
   - Se considera una **evolución de JavaScript**, más confiable y fácil de mantener en proyectos grandes.  
   - Permite detectar errores en tiempo de compilación, reduciendo fallos durante la ejecución.  
   - Dentro del paradigma estructurado, es apreciado por su **claridad en la lógica secuencial** y su **control sobre los datos**, manteniendo la simpleza de JavaScript pero con mayor precisión y orden.  

---

## Parte B – TypeScript en términos de elección de lenguaje

1. **¿Tiene una sintaxis y semántica bien definida? ¿Documentación oficial?**  
   - Sí. TypeScript tiene su sintaxis y semántica bien definidas por **Microsoft**, con documentación oficial en [typescriptlang.org](https://www.typescriptlang.org/).  

2. **¿Es posible comprobar el código producido?**  
   - Sí. El compilador (`tsc`) analiza el código antes de convertirlo a JavaScript, permitiendo detectar errores de tipo y sintaxis.  

3. **¿Es confiable?**  
   - Muy confiable, especialmente en proyectos grandes. El **tipado estático** reduce errores comunes y mejora la mantenibilidad del código.  

4. **¿Es ortogonal?**  
   - En gran medida sí. Sus características (tipos, funciones, estructuras de control) se combinan de forma coherente y predecible, aunque existen algunas limitaciones heredadas de JavaScript.  

5. **Consistencia y uniformidad**  
   - Es más **consistente** que JavaScript, ya que aplica reglas de tipado uniformes y un comportamiento predecible en su sintaxis.  
   - Promueve un código más legible y uniforme entre distintos desarrolladores.  

6. **¿Es extensible? ¿Subconjuntos?**  
   - Sí. Puede ampliarse con **tipos personalizados**, **interfaces** y **decoradores**.  
   - Su principal subconjunto es el propio **JavaScript**, ya que cualquier código JS válido también es válido en TypeScript.  

7. **¿Es transportable?**  
   - Totalmente. Al compilarse a JavaScript, el código TypeScript puede ejecutarse en cualquier entorno compatible con JS, como navegadores, servidores o dispositivos móviles.  

