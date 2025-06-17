import { c as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderScript, f as renderHead, g as renderSlot } from '../chunks/astro/server_Dkpx3T6_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logo = createSvgComponent({"meta":{"src":"/Proyecto-Web-Academia/_astro/logo_gb.DRT7o9uI.svg","width":62,"height":80,"format":"svg"},"attributes":{"width":"62","height":"80","viewBox":"0 0 62 80"},"children":"\n  <rect width=\"62\" height=\"80\" fill=\"#0087A9\" />\n  <text x=\"31\" y=\"25\" font-family=\"Helvetica, Arial, sans-serif\" font-size=\"14\" fill=\"#ffffff\" text-anchor=\"middle\">get</text>\n  <text x=\"31\" y=\"45\" font-family=\"Helvetica, Arial, sans-serif\" font-size=\"14\" fill=\"#ffffff\" text-anchor=\"middle\">brit.</text>\n  <line x1=\"5\" y1=\"53\" x2=\"57\" y2=\"53\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n  <text x=\"31\" y=\"70\" font-family=\"Helvetica, Arial, sans-serif\" font-size=\"6\" fill=\"#ffffff\" text-anchor=\"middle\">THE LEARNING CO</text>\n"});

const $$Astro$7 = createAstro("https://yeray-dev.github.io");
const $$CardDir = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardDir;
  const { name_emi } = Astro2.props;
  const { addres_emi } = Astro2.props;
  const { addres_emi_2 } = Astro2.props;
  const { class: className = "", ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-center ${className}`, "class")} data-astro-cid-ngscvcor> <h3 class="text-[20px] md:text-base lg:text-[34px]" data-astro-cid-ngscvcor>Escuela Municiapal de Idiomas de ${name_emi}</h3> <p class="text-[12px] md:text-base lg:text-[16px] lg:py-4" data-astro-cid-ngscvcor>${addres_emi}</p> <p class="text-[12px] md:text-base lg:text-[16px]" data-astro-cid-ngscvcor>${addres_emi_2}</p> </div> `;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Cards/Card_Dir.astro", void 0);

const $$Astro$6 = createAstro("https://yeray-dev.github.io");
const $$CardInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardInfo;
  const { urlImg } = Astro2.props;
  const { h3Text } = Astro2.props;
  const { h5Text } = Astro2.props;
  const { pText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="card" data-astro-cid-c5dq3afy> <img${addAttribute(urlImg, "src")} data-astro-cid-c5dq3afy> <h3 data-astro-cid-c5dq3afy> ${h3Text} </h3> <h5 data-astro-cid-c5dq3afy> ${h5Text} </h5> <p data-astro-cid-c5dq3afy> ${pText} </p> </div> `;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Cards/Card_Info.astro", void 0);

const $$Astro$5 = createAstro("https://yeray-dev.github.io");
const $$YellowButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$YellowButton;
  const { link } = Astro2.props;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-e6kgne7u> <button onclick="window.location.href='https://www.google.es'" data-astro-cid-e6kgne7u> <span data-astro-cid-e6kgne7u>${text}</span> </button> </div> `;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Buttoms/Yellow_button.astro", void 0);

const $$Astro$4 = createAstro("https://yeray-dev.github.io");
const $$CardAge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardAge;
  const { img } = Astro2.props;
  const { title } = Astro2.props;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-auto h-auto bg-blue-500" data-astro-cid-3fcdxgr3> <img class="hidden sm:block"${addAttribute(img, "src")} alt="" width="210" data-astro-cid-3fcdxgr3> <h3 data-astro-cid-3fcdxgr3>${title}</h3> <p data-astro-cid-3fcdxgr3>${text}</p> </div> `;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Cards/Card_age.astro", void 0);

const $$Astro$3 = createAstro("https://yeray-dev.github.io");
const $$CardCertification = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardCertification;
  const { name } = Astro2.props;
  const base = "/Proyecto-Web-Academia";
  const logo = [`${base}/Logo_Cambridge.svg`, null];
  let img;
  const Arraytext = ["Certificaciones oficiales para todos los niveles según el MCER", null];
  let text;
  if (name === "Cambridge") {
    img = logo[0];
    text = Arraytext[0];
  } else if (name === "Trinity") {
    img = logo[1];
    text = Arraytext[1];
  }
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-fjqwsn3i> <img${addAttribute(img, "src")} height="" data-astro-cid-fjqwsn3i> <p data-astro-cid-fjqwsn3i>${text}</p> </div> `;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Cards/Card_Certification.astro", void 0);

const ico_x = createSvgComponent({"meta":{"src":"/Proyecto-Web-Academia/_astro/circulo-marca-x.DX2l1DbS.svg","width":60,"height":60,"format":"svg"},"attributes":{"id":"Layer_1","data-name":"Layer 1","viewBox":"0 0 24 24","width":"60","height":"60"},"children":"\n<path fill=\"white\" d=\"m15.707,9.707l-2.293,2.293,2.293,2.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm8.293,2.293c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z\" />"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://yeray-dev.github.io");
const $$BurgerMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BurgerMenu;
  const { class: className = "", ...rest } = Astro2.props;
  const {
    links = [
      { label: "inicio", href: "/" },
      { label: "inicio", href: "/" }
    ],
    icon_emi,
    bg_lg,
    bg_md,
    bg_sd
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="bars__menu" data-astro-cid-ifmntzkc> <span', " data-astro-cid-ifmntzkc></span> <span", " data-astro-cid-ifmntzkc></span> <span", ' data-astro-cid-ifmntzkc></span> </div> <aside id="sidebar" class="sidebar hidden"', ' data-astro-cid-ifmntzkc> <button id="close-menu" aria-label="Cerrar men\xFA" data-astro-cid-ifmntzkc><img', ' alt="X" data-astro-cid-ifmntzkc></button> <nav data-astro-cid-ifmntzkc> <ul data-astro-cid-ifmntzkc> ', ' </ul> </nav> <div class="flex row justify-center mt-18" data-astro-cid-ifmntzkc> <img', ' alt="GetBrit!" data-astro-cid-ifmntzkc> <img', ' alt="" class="w-[180px] ml-6" data-astro-cid-ifmntzkc> </div> </aside> <div id="overlay" class="overlay hidden" data-astro-cid-ifmntzkc></div>  <script>\n	const line1__bars = document.querySelector(".line1__bars-menu")\n	const line2__bars = document.querySelector(".line2__bars-menu")\n	const line3__bars = document.querySelector(".line3__bars-menu")\n	const menuBtn = document.querySelector(".bars__menu")\n	const sidebar = document.querySelector(".sidebar")\n	const overlay = document.querySelector(".overlay")\n	const closeBtn = document.getElementById("close-menu")\n\n	function animateBars(){\n		line1__bars?.classList.toggle("activeline1__bars-menu")\n		line2__bars?.classList.toggle("activeline2__bars-menu")\n		line3__bars?.classList.toggle("activeline3__bars-menu")\n		}\n\n	function toggleMenu(){\n		animateBars()\n\n		sidebar?.classList.toggle("hidden") \n		sidebar?.classList.toggle("active")\n		overlay?.classList.toggle("hidden")\n		document.body.classList.toggle("menu-open")\n	}\n	menuBtn?.addEventListener("click", toggleMenu)\n	closeBtn?.addEventListener("click", toggleMenu)\n	overlay?.addEventListener("click", toggleMenu)\n<\/script>'])), maybeRenderHead(), addAttribute(`line1__bars-menu ${className}`, "class"), addAttribute(`line2__bars-menu ${className}`, "class"), addAttribute(`line3__bars-menu ${className}`, "class"), addAttribute(`--bgColor: ${bg_lg}`, "style"), addAttribute(ico_x.src, "src"), links.map((link) => renderTemplate`<li data-astro-cid-ifmntzkc><a${addAttribute(link.href, "href")} data-astro-cid-ifmntzkc>${link.label}</a></li>`), addAttribute(logo.src, "src"), addAttribute(icon_emi, "src"));
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Burger_menu.astro", void 0);

const $$Astro$1 = createAstro("https://yeray-dev.github.io");
const $$Contenido = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contenido;
  const { icon_emi } = Astro2.props;
  const { name_emi } = Astro2.props;
  const { addres_emi } = Astro2.props;
  const { addres_emi_2 } = Astro2.props;
  const base = "/Proyecto-Web-Academia";
  return renderTemplate`${maybeRenderHead()}<div id="Header" class="bg-blueGB h-auto grid grid-cols-2 " data-astro-cid-hzwqyo4a> <div id="Logos" class="flex pl-8 lg:relative lg:left-22" data-astro-cid-hzwqyo4a> <img${addAttribute(logo.src, "src")} alt="GetBrit!" data-astro-cid-hzwqyo4a> <p class="leading-tight pl-1 text-white mt-[6%] mb-[10px] text-[18px] hidden lg:block" data-astro-cid-hzwqyo4a>Escuela Municiapal de<br data-astro-cid-hzwqyo4a>
Idiomas de ${name_emi}</p> <p class="leading-tight pl-1 text-white mt-[6%] mb-[10px] text-[18px] lg:hidden" data-astro-cid-hzwqyo4a>Escuela Municiapal<br data-astro-cid-hzwqyo4a>
Idiomas de ${name_emi}</p> </div> <div id="Enlaces" class="hidden lg:block lg:flex justify-center items-center space-x-10 text-white" data-astro-cid-hzwqyo4a> <a${addAttribute(`/`, "href")} data-astro-cid-hzwqyo4a>Inicio</a> <a href="/" data-astro-cid-hzwqyo4a>Horarios</a> <a href="/" data-astro-cid-hzwqyo4a>La Escuela</a> <a href="/" data-astro-cid-hzwqyo4a>Prueba de Nivel</a> </div> ${renderComponent($$result, "BurgerMenu", $$BurgerMenu, { "client:visible": true, "class": "justify-self-end pr-6 block lg:hidden", "links": [
    { label: "Inicio", href: "/" },
    { label: "Horarios", href: "/" },
    { label: "La Escuela", href: "/" },
    { label: "Prueba de Nivel", href: "/" }
  ], "bg_lg": "#00788c", "icon_emi": icon_emi, "client:component-hydration": "visible", "client:component-path": "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Burger_menu.astro", "client:component-export": "default", "data-astro-cid-hzwqyo4a": true })} </div> <div class="container grid grid-cols-1 px-4 gap-4 lg:grid-cols-3 lg:pl-[20%] lg:gap-8 pt-4 pb-6 lg:pt-10 lg:pb-8 md:w-fit md:mx-auto" data-astro-cid-hzwqyo4a> <div id="logo_municipio" class="flex flex-col items-center justify-center lg:col-start-1 lg:col-end-2" data-astro-cid-hzwqyo4a> <p class="hidden md:block" data-astro-cid-hzwqyo4a>Con la colaboracion de</p> <img${addAttribute(icon_emi, "src")} alt="" class="w-[150px] lg:w-[270px]" data-astro-cid-hzwqyo4a> </div> ${renderComponent($$result, "CardDir", $$CardDir, { "name_emi": name_emi, "addres_emi": addres_emi, "addres_emi_2": addres_emi_2, "id": "card_municipio", "class": "lg:col-start-2 lg:col-end-4", "data-astro-cid-hzwqyo4a": true })} </div> <div class="InformationContainer" data-astro-cid-hzwqyo4a> <div class="InformationCards grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-12 lg:grid-cols-3 place-items-center py-4 px-4 md:px-16" data-astro-cid-hzwqyo4a> ${renderComponent($$result, "CardCurso", $$CardInfo, { "urlImg": `${base}/Imagenes_prueba/Curso.webp`, "h3Text": "CURSO 2025", "h5Text": "Curso 2025", "pText": "DESDE OCTUBRE HASTA JUNIO", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "CardCurso", $$CardInfo, { "urlImg": `${base}/Imagenes_prueba/Certificados.webp`, "h3Text": "EXAMENES OFICIALES", "h5Text": "Exámenes oficiales", "pText": "CONSULTA TODAS LAS FEHCAS DISPONIBLES PARA ESTE CURSO", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "CardCurso", $$CardInfo, { "urlImg": `${base}/Imagenes_prueba/Idiomas.webp`, "h3Text": "OTROS IDIOMAS", "h5Text": "Otros Idiomas", "pText": "DISPONEMOS DE DIFERENTES IDIOMAS", "data-astro-cid-hzwqyo4a": true })} </div> <div class="InformationButtons" data-astro-cid-hzwqyo4a> <div class="button grid grid-cols-2 gap-4 w-full max-w-xl mx-auto" data-astro-cid-hzwqyo4a> ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "www.google.es", "text": "Inglés", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "www.google.es", "text": "Francés", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "www.google.es", "text": "Alemán", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "www.google.es", "text": "Chino", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "www.google.es", "text": "Ejemplo", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "www.google.es", "text": "Ejemplo2", "data-astro-cid-hzwqyo4a": true })} </div> <div class="CardAge grid grid-cols-2 grid-rows-2" data-astro-cid-hzwqyo4a> ${renderComponent($$result, "CardAge", $$CardAge, { "img": `${base}/Imagenes_prueba/niña3años.webp`, "title": "Cursos Infants", "text": "De 3 a 5 años", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "CardAge", $$CardAge, { "img": `${base}/Imagenes_prueba/niña3años.webp`, "title": "Cursos Kids", "text": "De 6 a 11 años", "data-astro-cid-hzwqyo4a": true })} <!-- </div>
			<div class="CardAge"> --> ${renderComponent($$result, "CardAge", $$CardAge, { "img": `${base}/Imagenes_prueba/niña3años.webp`, "title": "Cursos Teens", "text": "De 12 a 17 años", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "CardAge", $$CardAge, { "img": `${base}/Imagenes_prueba/niña3años.webp`, "title": "Cursos Adults", "text": "Apartir de 18 años", "data-astro-cid-hzwqyo4a": true })} <!-- </div> --> </div> </div> <div class="CTA flex flex-col px-[75px] py-2 md:flex-row justify-around px-6" data-astro-cid-hzwqyo4a> ${renderComponent($$result, "YellowButton", $$YellowButton, { "link": "#", "text": "Inscríbete YA!", "data-astro-cid-hzwqyo4a": true })} ${renderComponent($$result, "YellowButton", $$YellowButton, { "ink": "#", "text": "Prueba de nivel", "data-astro-cid-hzwqyo4a": true })} </div> <div class="Certification" data-astro-cid-hzwqyo4a> <h3 data-astro-cid-hzwqyo4a>
Certificaciones Internacionales
</h3> <div data-astro-cid-hzwqyo4a> <p data-astro-cid-hzwqyo4a>
Certificate con nosotros en las instituciones mas prestigiosas del mundo.
			Años de experiencia y cientos de alumnos certificados avalan nuestra metodologia.
</p> </div> <div data-astro-cid-hzwqyo4a> ${renderComponent($$result, "CardCertification", $$CardCertification, { "name": "Cambridge", "data-astro-cid-hzwqyo4a": true })} </div> </div> <div class="Contact lg:flex items-center md:justify-center md:pb-[50px] md:pt-[80px] gap-40 " data-astro-cid-hzwqyo4a> <div class="contact_text w-auto px-2 mx-2 lg:w-[400px] md:text-center" data-astro-cid-hzwqyo4a> <h3 data-astro-cid-hzwqyo4a>
Solicita más información
</h3> <p data-astro-cid-hzwqyo4a>
Si quieres más detalles sobre nuestros cursos, prográmas, horarios, etc.
</p> <p data-astro-cid-hzwqyo4a>
Rellena el siguiente formulario o llamanos y estaremos encantados de ayudarte.
</p> <p data-astro-cid-hzwqyo4a>
Teléfono: <b data-astro-cid-hzwqyo4a>925 365 719</b> </p> <p data-astro-cid-hzwqyo4a>
HORARIO DE ATENCIÓN AL PÚBLICO:
</p> <ul data-astro-cid-hzwqyo4a> <li data-astro-cid-hzwqyo4a><strong data-astro-cid-hzwqyo4a>Lunes a jueves:</strong> 9:00 - 14:00 y 16:00 - 19:00</li> <li data-astro-cid-hzwqyo4a><strong data-astro-cid-hzwqyo4a>Viernes:</strong> 8:00 - 15:00</li> </ul> </div> <div data-astro-cid-hzwqyo4a> <form action="#" method="POST" class="w-auto px-2 py-4 mx-2 my-4 lg:w-[400px]" data-astro-cid-hzwqyo4a> <label for="name" data-astro-cid-hzwqyo4a>Nombre Completo:</label> <input type="text" id="name" name="name" required data-astro-cid-hzwqyo4a> <label for="email" data-astro-cid-hzwqyo4a>e-Mail:</label> <input type="email" id="email" name="email" placeholder="example@example.com" required data-astro-cid-hzwqyo4a> <label for="number" data-astro-cid-hzwqyo4a>Telefono:</label> <input type="tel" id="number" name="number" maxlength="9" minlength="9" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="xxx.xxx.xxx" required data-astro-cid-hzwqyo4a> <label for="comment" data-astro-cid-hzwqyo4a>Comentario:</label> <textarea id="comment" name="comment" rows="5" required data-astro-cid-hzwqyo4a> 
			</textarea> <button type="submit" data-astro-cid-hzwqyo4a>Enviar!</button> </form> </div> </div>       ${renderScript($$result, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Contenido.astro?astro&type=script&index=0&lang.ts")}</div>`;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/components/Contenido.astro", void 0);

const $$Astro = createAstro("https://yeray-dev.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/Proyecto-Web-Academia";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contenido", $$Contenido, { "icon_emi": `${base}/Escudo_Illescas.png`, "`": true, "name_emi": "Illescas", "addres_emi": "Espacio Creación Joven , C/ Joaquin Costa S/N (SOLO MAÑANAS)", "addres_emi_2": "C/ Baños de Jaraba, 3, 45200 Illescas" })} ` })}`;
}, "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/pages/index.astro", void 0);
const $$file = "/Users/yerayblancodelafuente/Documents/Programacion/Fullstack/web/GB/proyecto-web-Academia/src/pages/index.astro";
const $$url = "/Proyecto-Web-Academia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
