<!-- LISTA DE PRECIOS Y CALCULADORA - INSTRUCCIONES DE USO -->

# 📋 Nuevas Páginas: Lista de Precios y Calculadora

## Cambios Realizados

Se han creado/actualizado dos páginas principales para presentar los servicios de jardinería:

### 1. **prices.html** - Lista de Precios Rediseñada

**Ubicación:** `c:\Users\Usuario\Desktop\kort 2\prices.html`

**Características:**
- ✅ Diseño moderno y profesional con colores verde, negro y blanco
- ✅ Estructura vertical optimizada para móvil (tipo historia de WhatsApp)
- ✅ Secciones claramente organizadas:
  - **Planes Mensuales** (2 visitas)
    - Plan Básico: $50.000 (solo corte)
    - Plan Full: $60.000 (corte + bordeado)
  - **Visitas Particulares** (sin compromiso)
    - Corte Simple: $27.500
    - Corte + Bordeado: $34.000
  - **Recargos y Condiciones**
    - Pasto Excedido (+30% si > 20 cm)
    - Días de Lluvia (reprogramación)
    - Insumos Incluidos (nafta, tanza, bolsas)
  - **Calculadora Visual** (3 pasos simples)
  - **Beneficios** (6 puntos de valor)

**Elementos Visuales:**
- Iconos de Font Awesome (hojas, tijeras, calculadora, etc.)
- Gradientes verdes oscuros
- Cards interactivas con hover effects
- Responsive design para todos los dispositivos

---

### 2. **calculator.html** - Calculadora Interactiva (NUEVA)

**Ubicación:** `c:\Users\Usuario\Desktop\kort 2\calculator.html`

**Características:**
- ✅ Calculadora totalmente funcional e interactiva
- ✅ 3 Pasos de selección:
  1. **Frecuencia**: Visita Única vs Plan Mensual
  2. **Servicio**: Solo Corte vs Corte + Bordeado
  3. **Altura de Pasto**: Slider interactivo (5-30 cm)

- ✅ Resultados en Tiempo Real:
  - Precio final calculado automáticamente
  - Recargo del 30% si pasto > 20 cm
  - Tabla comparativa: Visita Única vs Plan Mensual
  - Ahorro estimado mensual

- ✅ Interfaz Profesional:
  - Resultado destacado en grande
  - Detalles de cálculo desglosados
  - Botones CTA (Contratar por WhatsApp, Reiniciar)
  - Tabla de comparación para mostrar ahorros

**Flujo de Usuario:**
```
1. Usuario selecciona frecuencia
2. Usuario selecciona tipo de servicio
3. Usuario ajusta slider de altura de pasto
4. Sistema calcula automáticamente
5. Se muestra precio final + detalles + comparativa
6. Usuario puede contratar por WhatsApp
```

---

## 🎨 Paleta de Colores Utilizada

Consistente con el sitio:
- **Verde Primario**: #5E8D20 (títulos, acentos)
- **Verde Oscuro**: #4D781B (fondos)
- **Verde Claro**: #93BF34 (highlights, botones)
- **Negro**: #161A12 (fondo principal)
- **Gris Texto**: #cccccc

---

## 🔗 Cómo Vincular las Páginas

Agrega estos enlaces a tu **header.html** o menú de navegación:

```html
<!-- En el menú de navegación -->
<li><a href="prices.html">Precios</a></li>
<li><a href="calculator.html">Calculadora</a></li>
```

---

## 📱 Responsiveness

Ambas páginas están optimizadas para:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (360px - 479px)

---

## 🔧 Funcionalidades JavaScript

### En calculator.html:
- Sistema de selección con estado visual
- Slider interactivo para altura de pasto
- Cálculo automático de precios
- Aplicación de recargo del 30%
- Tabla comparativa dinámica
- Botón reset para reiniciar

### En prices.html:
- Hover effects en cards
- Animaciones suaves
- Responsive grid layouts

---

## 💡 Sugerencias de Mejora Futura

1. **Integración de WhatsApp**: Hacer que los botones CTA abran WhatsApp con presupuesto
   ```javascript
   window.open('https://wa.me/yourphonenumber?text=Presupuesto:%20$27500...');
   ```

2. **Base de datos**: Guardar presupuestos generados
3. **Analytics**: Rastrear qué planes son más populares
4. **Notificaciones**: Alertas cuando alguien genera un presupuesto
5. **Pagos**: Integrar Mercado Pago para pagos online

---

## 📝 Notas Importantes

- Los precios están en **ARS (pesos argentinos)**
- La unidad de medida de altura es **centímetros**
- El recargo del 30% aplica solo si el pasto supera **20 cm**
- En días de lluvia, el servicio se reprograma automáticamente
- Todos los precios incluyen combustible, tanza y bolsas

---

## ✅ Testing Checklist

- [ ] Verificar que los colores se ven bien en móvil
- [ ] Probar calculator en diferentes navegadores
- [ ] Verificar que los botones WhatsApp funcionan
- [ ] Confirmar que los precios están correctos
- [ ] Revisar responsiveness en todos los breakpoints
- [ ] Verificar que los iconos se cargan correctamente

---

**Última actualización:** 22 de Enero, 2026
**Estado:** ✅ Completado
