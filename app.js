"use strict";

const books = [
  {
    id: "jardin-interior",
    title: "El jardín interior",
    author: "Lucía Monteverde",
    category: "Literatura",
    description: "A veces, para encontrar el camino, basta con aprender a escuchar el silencio.",
    tone: "fern",
    pages: 186,
    available: true,
    reading: [
      "La primera vez que Clara oyó crecer una semilla, pensó que era la lluvia golpeando la ventana.",
      "Vivía entonces con las persianas a medio abrir y una taza de té que siempre se enfriaba antes del último sorbo. En la cocina, una maceta vacía llevaba meses esperándola. La había dejado allí su abuela, junto a una nota que decía: «No hace falta saber cómo florece todo. Solo hace falta empezar».",
      "Aquella mañana, Clara hundió los dedos en la tierra nueva. No pidió nada en voz alta. A veces una esperanza pequeña es la que tiene las raíces más fuertes.",
      "Afuera, el barrio despertaba despacio. Un autobús dobló la esquina, alguien abrió una ventana y el sol encontró, por fin, un lugar donde quedarse."
    ]
  },
  {
    id: "mapas-invisibles",
    title: "Mapas invisibles",
    author: "Tomás del Río",
    category: "Novelas",
    description: "Una historia sobre perderse un poco para descubrir adónde pertenecemos.",
    tone: "sunset",
    pages: 274,
    available: true,
    reading: [
      "En la estación, todos llevaban un mapa menos Julián. Aun así, fue el único que supo a qué andén ir.",
      "No lo supo por los carteles ni por la voz metálica que anunciaba retrasos. Lo supo porque en el bolsillo del abrigo encontró un billete que llevaba años sin mirar. El papel guardaba el nombre de un pueblo junto al mar y una fecha escrita con la letra de su hermana.",
      "El tren llegó con seis minutos de demora. Julián subió sin preguntar cuánto duraba el viaje. Por primera vez en mucho tiempo, la respuesta no le importaba."
    ]
  },
  {
    id: "pequenas-cosas",
    title: "La ciencia de las pequeñas cosas",
    author: "Dra. Elena Ríos",
    category: "Ciencia",
    description: "Curiosidades cotidianas que revelan lo extraordinario de nuestro mundo.",
    tone: "ocean",
    pages: 208,
    available: true,
    reading: [
      "Hay pocas cosas tan familiares como una gota de agua. Sin embargo, al mirarla de cerca, se convierte en una ventana diminuta.",
      "La luz no viaja a la misma velocidad en el aire que en el agua. Cuando atraviesa una gota, cambia de dirección y separa los colores que llevaba escondidos. Así nace el arcoíris: no en el cielo, sino en millones de gotas haciendo algo sencillo, cada una a su manera.",
      "La naturaleza no necesita cosas grandiosas para sorprendernos. Muchas veces basta con cambiar el ángulo desde el que miramos."
    ]
  },
  {
    id: "atlas-cotidiano",
    title: "Atlas de lo cotidiano",
    author: "Marina Soler",
    category: "Historia",
    description: "Objetos comunes y los viajes inesperados que los trajeron hasta nosotros.",
    tone: "gold",
    pages: 231,
    available: false,
  },
  {
    id: "tiempo-propio",
    title: "El tiempo que nos debemos",
    author: "Sofía Leal",
    category: "Educación",
    description: "Ideas amables para aprender, cambiar de ritmo y empezar de nuevo.",
    tone: "sage",
    pages: 168,
    available: true,
    reading: [
      "La primera lección fue una pregunta que nadie esperaba: ¿qué harías si no tuvieras que demostrar nada?",
      "Hubo un silencio largo. Fuera, las hojas de un plátano de sombra se movían apenas con el viento. Dentro del aula, alguien dejó el lápiz sobre la mesa. Por un momento, aprender no se pareció a alcanzar una respuesta, sino a darse permiso para pensarla.",
      "No existe una edad para volver a empezar. Lo que sí existe es un tiempo propio, pequeño y suficiente, que podemos recuperar una decisión cada vez."
    ]
  },
  {
    id: "codigo-humano",
    title: "Un código más humano",
    author: "Andrés Vidal",
    category: "Tecnología",
    description: "Una mirada cercana a la tecnología que hacemos para cuidarnos mejor.",
    tone: "plum",
    pages: 192,
    available: false,
  },
  {
    id: "casa-viento",
    title: "La casa del viento",
    author: "Valeria Costa",
    category: "Novelas",
    description: "Un faro encendido, una carta sin remitente y una familia por reconciliar.",
    tone: "sky",
    pages: 318,
    available: false,
  },
  {
    id: "arte-pregunta",
    title: "El arte de la pregunta",
    author: "Mateo Ferrer",
    category: "Literatura",
    description: "Ensayos breves sobre las preguntas que nos hacen mirar de nuevo.",
    tone: "rose",
    pages: 144,
    available: true,
    reading: [
      "«¿Te has fijado?», pregunta a veces una niña, y el mundo, que parecía terminado, vuelve a empezar.",
      "Los mayores confundimos aprender con cerrar puertas. Con saber el nombre de las cosas creemos haber terminado de mirarlas. Pero una palabra no explica una nube, ni un mapa agota el bosque que intenta dibujar.",
      "La buena pregunta no reclama una respuesta inmediata. Deja abierta una ventana. A veces eso es todo lo que hace falta para que entre aire nuevo."
    ]
  },
  {
    id: "libro-lento",
    title: "El libro de los días lentos",
    author: "Nora Beltrán",
    category: "Novelas",
    description: "Una pequeña invitación a encontrar belleza en los días normales.",
    tone: "paper",
    pages: 156,
    available: false,
  }
];

const regions = {
  costa: {
    name: "La Costa",
    number: "01",
    descriptor: "Costa central",
    description: "Entre desiertos, valles y el Pacífico, antiguos caminos enlazaron comunidades y centros ceremoniales. Cerca de Lima, Pachacámac fue durante siglos un importante lugar de peregrinación.",
    imagePath: "img/personajes/costa.webp",
    storyIntro: "El santuario de Pachacámac, en el actual valle de Lurín, fue un centro religioso y de peregrinación de gran importancia, visitado por pueblos de distintas regiones. Su historia reúne etapas anteriores y posteriores a los incas.",
    story: [
      "En la costa, el desierto no separaba necesariamente a las comunidades: los valles y las rutas hacia el mar conectaban lugares de cultivo, intercambio y ceremonia.",
      "Pachacámac fue conocido como un importante oráculo y centro de peregrinación. Las personas llegaban desde distintos territorios para consultar allí. El santuario guarda capas de historia, construidas y transformadas a lo largo de muchos siglos.",
      "Este paisaje invita a escuchar cómo la memoria del litoral se compone de encuentros entre el mar, los valles y quienes recorrieron sus caminos."
    ],
    source: "Contexto: Museo de Sitio Pachacamac · Ministerio de Cultura",
    sourceUrl: "https://pachacamac.cultura.pe/"
  },
  sierra: {
    name: "La Sierra",
    number: "02",
    descriptor: "Memoria oral andina",
    description: "En los Andes, las historias viajan con las comunidades. La tradición oral de Inkarri reúne memorias de la conquista, el desarraigo y la esperanza de recomponer un mundo.",
    imagePath: "img/personajes/sierra.webp",
    storyIntro: "Inkarri es una figura de la tradición oral andina. Sus relatos tienen diversas versiones y han sido interpretados como memoria colectiva de la conquista y esperanza de renovación.",
    story: [
      "No hay una sola historia de Inkarri. En algunas versiones, su cuerpo queda separado y continúa reuniéndose bajo la tierra; su retorno anuncia la posibilidad de restaurar un orden quebrado.",
      "Narrada y transmitida en los Andes, esta tradición ha sido leída como una forma de elaborar la violencia de la conquista y sostener la esperanza. Cada comunidad y narrador puede contarla de modo distinto.",
      "Por eso, acercarse a Inkarri es acercarse también a la fuerza de la palabra compartida: una memoria que no se fija en una sola página."
    ],
    source: "Contexto: tradición oral andina · relatos con versiones diversas"
  },
  selva: {
    name: "La Selva",
    number: "03",
    descriptor: "Relatos de la Amazonía",
    description: "Los ríos son caminos, sustento y memoria en la Amazonía. En distintas tradiciones se cuentan relatos de Yacuruna, ser asociado con las aguas y con mundos que existen bajo su superficie.",
    imagePath: "img/personajes/selva.webp",
    storyIntro: "Yacuruna aparece en relatos de distintas comunidades amazónicas como un ser vinculado al agua. Las características y sentidos de estas narraciones cambian según quien las transmite.",
    story: [
      "En algunas narraciones amazónicas, el mundo visible tiene un reflejo bajo el agua: allí habita Yacuruna, relacionado con los ríos y con aquello que permanece oculto a la mirada cotidiana.",
      "Las historias sobre este ser no son idénticas en toda la Amazonía. Cambian de comunidad en comunidad y de narrador en narrador; los ríos, en cambio, permanecen centrales como espacios de vida y de relación.",
      "Escuchar estos relatos con respeto también implica recordar que la Amazonía no es una sola cultura: es una pluralidad de pueblos, lenguas y formas de nombrar el mundo."
    ],
    source: "Contexto: relatos amazónicos · tradición oral viva"
  }
};

const leyendas = window.leyendasData;
const coastalLegends = leyendas.filter((legend) => legend.categoria === "Costa");
const ancestralMyths = leyendas.filter((legend) => legend.categoria === "Mitos");

const storageKeys = {
  favorites: "la-biblioteca:favorites",
  profile: "la-biblioteca:profile",
  subscribers: "la-biblioteca:subscribers"
};
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#book-search");
if (searchInput) searchInput.value = new URLSearchParams(window.location.search).get("q") || "";
const regionCards = [...document.querySelectorAll("[data-region-card], [data-catalog-category]")];
const regionSearchEmpty = document.querySelector("#region-search-empty");
const legendsCatalog = document.querySelector("#legends-catalog");
const categoryFilters = [...document.querySelectorAll(".legend-filter[data-categoria]")];
let legendCatalogCards = [];
let activeLegendCategory = "todas";
const favoritesContent = document.querySelector("#favorites-content");
const bookDialog = document.querySelector("#book-dialog");
const dialogContent = document.querySelector("#dialog-content");
const accountDialog = document.querySelector("#account-dialog");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector("#nav-toggle");
const mainNavigation = document.querySelector("#main-navigation");
const regionStage = document.querySelector("#region-stage");
const regionTabs = [...document.querySelectorAll("[data-region-select]")];
const regionDialog = document.querySelector("#region-dialog");
const coastalLegendsSection = document.querySelector("#coastal-legends");
const ancestralMythsSection = document.querySelector("#ancestral-myths");
const legendVideoDialog = document.querySelector("#legend-video-dialog");
const legendVideo = document.querySelector("#legend-video");
const legendVideoTitle = document.querySelector("#legend-video-title");
const legendVideoCategory = document.querySelector("#legend-video-category");
const legendVideoError = document.querySelector("#legend-video-error");
const legendVideoActions = document.querySelector("#legend-video-actions");
const legendVideoEnded = document.querySelector("#legend-video-ended");
const legendVideoEndedTitle = document.querySelector("#legend-video-ended-title");
const legendVideoEndedPdf = document.querySelector("#legend-video-ended-pdf");
const videoModal = document.querySelector("#video-modal");
const modalVideoPlayer = document.querySelector("#modal-video-player");
const modalClose = document.querySelector(".modal-close");
const bgMusic = document.querySelector("#bgMusic");
let activeNarratedVideoButton = null;
document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("error", () => {
    const source = video.getAttribute("src");
    if (source?.startsWith("assets/videos/") && !video.dataset.legacyFallbackTried) return;
    const mediaError = video.error;
    console.warn("No se pudo cargar un video.", {
      source: video.currentSrc || video.querySelector("source")?.src || video.src,
      code: mediaError?.code,
      message: mediaError?.message
    });
  });
});
let activeRegionId = "costa";
let favorites = loadStoredList(storageKeys.favorites);
let toastTimeout;
let activeDialogBookId = "";
let activeDialogMode = "details";
let activeLegend = null;
let returnToRegionDialogOnVideoClose = false;

function loadStoredList(key) {
  try {
    const storedValue = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(storedValue) ? storedValue.filter((id) => books.some((book) => book.id === id)) : [];
  } catch (error) {
    console.error(`No se pudieron recuperar los datos guardados (${key}).`, error);
    showToast("No se pudieron cargar tus datos guardados en este navegador.");
    return [];
  }
}

function saveStoredValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`No se pudieron guardar los datos (${key}).`, error);
    showToast("No se pudieron guardar los cambios. Revisa el almacenamiento del navegador.");
    return false;
  }
}

function loadSubscriberEmails() {
  try {
    const storedValue = JSON.parse(localStorage.getItem(storageKeys.subscribers) || "[]");
    return Array.isArray(storedValue)
      ? storedValue.filter((email) => typeof email === "string")
      : [];
  } catch (error) {
    console.error("No se pudieron recuperar las suscripciones guardadas.", error);
    showToast("No se pudieron cargar tus suscripciones en este navegador.");
    return [];
  }
}

function coverMarkup(book) {
  const ornament = book.category === "Ciencia" ? "✳" : book.category === "Historia" ? "✦" : "✿";
  return `
    <div class="book-cover" role="img" aria-label="Portada ilustrada de ${escapeHTML(book.title)}, de ${escapeHTML(book.author)}">
      <span class="cover-art ${`tone-${book.tone}`}"></span>
      <span class="cover-type">
        <span class="cover-title">${escapeHTML(book.title)}</span>
        <span class="cover-author">${escapeHTML(book.author)}</span>
      </span>
      <span class="cover-ornament" aria-hidden="true">${ornament}</span>
    </div>`;
}

function renderRegionCards() {
  const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
  const query = normalizeText(searchInput?.value.trim() || new URLSearchParams(window.location.search).get("q") || "");
  let visibleCount = 0;
  regionCards.forEach((card) => {
    const searchableText = `${card.textContent} ${card.dataset.search}`;
    const matchesQuery = !query || normalizeText(searchableText).includes(query);
    card.hidden = !matchesQuery;
    if (matchesQuery) visibleCount += 1;
  });
  const matchingLegendCards = legendCatalogCards.filter((card) => {
    const matchesQuery = !query || normalizeText(`${card.textContent} ${card.dataset.search}`).includes(query);
    const matchesCategory = activeLegendCategory === "todas" || card.dataset.categoria === activeLegendCategory;
    return matchesQuery && matchesCategory;
  });
  legendCatalogCards.forEach((card) => { card.hidden = !matchingLegendCards.includes(card); });
  visibleCount += matchingLegendCards.length;
  if (regionSearchEmpty) regionSearchEmpty.hidden = visibleCount > 0;
}

function mediaType(path) {
  const extension = path?.split(".").pop().toLocaleUpperCase("es");
  return extension === "PDF" || extension === "MP4" ? extension : "";
}

function renderLegendActions(legend) {
  const pdfAction = mediaType(legend.pdf) === "PDF" && legend.pdfValidado
    ? `<a class="btn-card btn-pdf" href="${escapeHTML(legend.pdf)}" target="_blank" rel="noopener noreferrer">Leer PDF</a>`
    : "";
  const narratedVideoAction = legend.categoria === "Sierra" && mediaType(legend.video) === "MP4"
    ? `<button class="btn-video-narrado" type="button" data-video="${escapeHTML(legend.video)}">Ver Leyenda</button>`
    : "";
  const videoAction = mediaType(legend.video) === "MP4"
    ? `<button class="btn-card btn-video coastal-legend-play" type="button" data-legend-action="play"
        data-legend-number="${escapeHTML(legend.number)}" data-legend-category="${escapeHTML(legend.categoria)}">Ver video MP4</button>`
    : "";
  return `${pdfAction}${narratedVideoAction}${videoAction}`;
}

function renderLegendCatalog() {
  if (!legendsCatalog) return;
  legendsCatalog.innerHTML = leyendas.map((legend) => `
    <article class="coastal-legend-card legend-catalog-card" data-categoria="${escapeHTML(legend.categoria)}"
      data-search="${escapeHTML(`${legend.title} ${legend.categoria} ${legend.number}`)}">
      <img src="${escapeHTML(legend.portada)}" alt="Portada de ${escapeHTML(legend.categoria)} para ${escapeHTML(legend.title)}" loading="lazy" />
      <span class="legend-category-label badge-${escapeHTML(legend.categoria.toLocaleLowerCase("es"))}">${escapeHTML(legend.categoria)}</span>
      <h3>${escapeHTML(legend.title)}</h3>
      <div class="coastal-legend-actions">${renderLegendActions(legend)}</div>
      ${legend.pdfValidationMessage ? `<p class="coastal-legend-validation" role="status">${escapeHTML(legend.pdfValidationMessage)}</p>` : ""}
    </article>`).join("");
  legendCatalogCards = [...legendsCatalog.querySelectorAll(".legend-catalog-card")];
}

function updateFavoriteCount() {
  const count = document.querySelector(".favorite-count");
  if (!count) return;
  count.textContent = String(favorites.length);
  count.setAttribute("aria-label", `${favorites.length} libros favoritos`);
}

function renderFavorites() {
  if (!favoritesContent) {
    updateFavoriteCount();
    return;
  }
  const favoriteBooks = favorites.map((id) => books.find((book) => book.id === id)).filter(Boolean);
  if (favoriteBooks.length === 0) {
    favoritesContent.innerHTML = `<div class="favorites-empty"><svg class="icon"><use href="#icon-heart" /></svg><span>Cuando guardes un libro, lo encontrarás aquí.</span></div>`;
  } else {
    const displayedBooks = favoriteBooks.slice(0, 5);
    favoritesContent.innerHTML = displayedBooks.map((book) => `
      <button class="favorite-mini tone-${book.tone}" type="button" data-action="details" data-id="${book.id}"
        aria-label="Ver detalles de ${escapeHTML(book.title)}">
        <span>${escapeHTML(book.title)}</span>
      </button>`).join("") +
      (favoriteBooks.length > 5 ? `<span class="favorite-mini-more" aria-label="${favoriteBooks.length - 5} favoritos más">+${favoriteBooks.length - 5}</span>` : "");
  }
  updateFavoriteCount();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderRegionStory(region) {
  document.querySelector("#region-dialog-kicker").textContent = `TERRITORIO ${region.number} · ${region.name.toLocaleUpperCase("es")}`;
  document.querySelector("#region-dialog-title").innerHTML = `${escapeHTML(region.name)}<span>.</span>`;
  document.querySelector("#region-dialog-intro").textContent = region.storyIntro;
  const citation = region.sourceUrl
    ? `<p><a href="${escapeHTML(region.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(region.source)}</a></p>`
    : `<p class="region-reading-source">${escapeHTML(region.source)}</p>`;
  document.querySelector("#region-dialog-reading").innerHTML =
    `${region.story.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}${citation}`;
  coastalLegendsSection.hidden = region !== regions.costa;
  if (region === regions.costa) {
    coastalLegendsSection.querySelector(".coastal-legend-grid").innerHTML =
      coastalLegends.map((legend) => renderLegendCard(legend)).join("");
  }
  ancestralMythsSection.querySelector(".coastal-legend-grid").innerHTML =
    ancestralMyths.map((legend) => renderLegendCard(legend)).join("");
}

function renderLegendCard(legend) {
  return `
    <article class="coastal-legend-card">
      <img src="${escapeHTML(legend.portada)}" alt="Portada de ${escapeHTML(legend.categoria)} para ${escapeHTML(legend.title)}" loading="lazy" />
      <h3>${escapeHTML(legend.number)} · ${escapeHTML(legend.title)}</h3>
      <div class="coastal-legend-actions">${renderLegendActions(legend)}</div>
      ${legend.pdfValidationMessage ? `<p class="coastal-legend-validation" role="status">${escapeHTML(legend.pdfValidationMessage)}</p>` : ""}
    </article>`;
}

function renderLegendPdfAction(legend, label, className = "button button-primary") {
  if (mediaType(legend.pdf) === "PDF" && legend.pdfValidado) {
    return `<a class="${className}" href="${escapeHTML(legend.pdf)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)}</a>`;
  }
  return `<button class="${className} legend-video-pdf-pending" type="button" disabled>PDF pendiente de validación</button>`;
}

function closeNarratedVideoModal() {
  if (!videoModal || !modalVideoPlayer) return;
  videoModal.classList.remove("active");
  videoModal.setAttribute("aria-hidden", "true");
  modalVideoPlayer.pause();
  modalVideoPlayer.removeAttribute("src");
  delete modalVideoPlayer.dataset.legacyFallbackTried;
  modalVideoPlayer.load();
  activeNarratedVideoButton?.focus();
  activeNarratedVideoButton = null;
}

function playLegacyVideoFallback(player, onError) {
  const source = player.getAttribute("src");
  if (!source?.startsWith("assets/videos/") || player.dataset.legacyFallbackTried) return false;

  player.dataset.legacyFallbackTried = "true";
  player.src = source.replace("assets/videos/", "assets/leyendas/videos/");
  player.load();
  player.play().catch(onError);
  return true;
}

function reportNarratedVideoError(error) {
  if (!videoModal?.classList.contains("active") || error.name === "AbortError") return;
  console.error("No se pudo reproducir el video narrado de la Sierra.", error);
  showToast("No se pudo reproducir el video narrado. Comprueba que el archivo esté disponible.");
}

modalVideoPlayer?.addEventListener("error", () => {
  if (modalVideoPlayer.dataset.legacyFallbackTried) return;
  if (playLegacyVideoFallback(modalVideoPlayer, reportNarratedVideoError)) return;
  reportNarratedVideoError(new Error("No se pudo cargar el video narrado de la Sierra."));
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-video-narrado");
  if (!button || !videoModal || !modalVideoPlayer) return;

  const videoSrc = button.getAttribute("data-video");
  if (!videoSrc) return;
  activeNarratedVideoButton = button;
  delete modalVideoPlayer.dataset.legacyFallbackTried;
  modalVideoPlayer.src = videoSrc;
  videoModal.classList.add("active");
  videoModal.setAttribute("aria-hidden", "false");
  modalClose?.focus();
  modalVideoPlayer.load();
  modalVideoPlayer.play().catch((error) => {
    if (modalVideoPlayer.getAttribute("src") !== videoSrc) return;
    reportNarratedVideoError(error);
  });
});

modalClose?.addEventListener("click", closeNarratedVideoModal);
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) closeNarratedVideoModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && videoModal?.classList.contains("active")) {
    closeNarratedVideoModal();
  }
});

function openLegend(number, category) {
  const legend = leyendas.find((entry) => entry.number === number && entry.categoria === category);
  if (!legend) return;

  activeLegend = legend;
  legendVideoTitle.textContent = `${legend.number} · ${legend.title}`;
  legendVideoCategory.textContent = `VIDEO · LEYENDAS DE ${category.toLocaleUpperCase("es")}`;
  legendVideoEndedTitle.textContent = legend.title;
  delete legendVideo.dataset.legacyFallbackTried;
  legendVideo.src = legend.video;
  legendVideoActions.innerHTML = renderLegendPdfAction(legend, "Leer la leyenda en PDF");
  legendVideoEndedPdf.innerHTML = renderLegendPdfAction(legend, "Leer la leyenda en PDF");
  legendVideoEnded.classList.remove("is-visible");
  legendVideoEnded.setAttribute("aria-hidden", "true");
  legendVideoEnded.inert = true;
  legendVideoError.hidden = true;
  legendVideoError.textContent = "";
  legendVideo.load();

  returnToRegionDialogOnVideoClose = regionDialog.open;
  if (returnToRegionDialogOnVideoClose) regionDialog.close();
  legendVideoDialog.showModal();
  legendVideo.play().catch((error) => {
    if (!legendVideoDialog.open || activeLegend !== legend || error.name === "AbortError"
      || legendVideo.getAttribute("src") !== legend.video) return;
    console.error(`No se pudo reproducir la animación de ${legend.title}.`, error);
    legendVideoError.textContent = "No se pudo reproducir esta animación. Comprueba que el archivo de video esté disponible.";
    legendVideoError.hidden = false;
  });
}

function replayCoastalLegend() {
  if (!activeLegend) return;
  legendVideoEnded.classList.remove("is-visible");
  legendVideoEnded.setAttribute("aria-hidden", "true");
  legendVideoEnded.inert = true;
  legendVideoError.hidden = true;
  legendVideo.currentTime = 0;
  legendVideo.play().catch((error) => {
    if (!legendVideoDialog.open || error.name === "AbortError") return;
    console.error(`No se pudo volver a reproducir la animación de ${activeLegend.title}.`, error);
    legendVideoError.textContent = "No se pudo volver a reproducir esta animación. Comprueba que el archivo de video esté disponible.";
    legendVideoError.hidden = false;
  });
}

legendVideo.addEventListener("ended", () => {
  if (!activeLegend) return;
  legendVideoEnded.setAttribute("aria-hidden", "false");
  legendVideoEnded.inert = false;
  legendVideoEnded.classList.add("is-visible");
});

legendVideo.addEventListener("error", () => {
  if (!activeLegend || !legendVideoDialog.open) return;
  if (legendVideo.dataset.legacyFallbackTried) return;
  if (playLegacyVideoFallback(legendVideo, (error) => {
    if (!legendVideoDialog.open || error.name === "AbortError") return;
    console.error(`No se pudo reproducir la animación de ${activeLegend.title}.`, error);
    legendVideoError.textContent = "No se pudo reproducir esta animación. Comprueba que el archivo de video esté disponible.";
    legendVideoError.hidden = false;
  })) return;
  console.error(`No se pudo cargar la animación de ${activeLegend.title}.`, legendVideo.error);
  legendVideoError.textContent = "No se pudo cargar esta animación. Comprueba que el archivo de video esté disponible.";
  legendVideoError.hidden = false;
});

legendVideoDialog.addEventListener("close", () => {
  legendVideo.pause();
  legendVideo.removeAttribute("src");
  legendVideo.load();
  activeLegend = null;
  if (returnToRegionDialogOnVideoClose && !regionDialog.open) regionDialog.showModal();
  returnToRegionDialogOnVideoClose = false;
});

function createRegionParticles() {
  const particleLayer = document.querySelector("#region-particles");
  particleLayer.replaceChildren();
  const colors = ["#F4D35E", "#EE964B", "#FFFFFF"];
  for (let index = 0; index < 13; index += 1) {
    const particle = document.createElement("span");
    const horizontalPosition = 12 + Math.random() * 76;
    const verticalPosition = 28 + Math.random() * 58;
    particle.className = "region-particle";
    particle.style.setProperty("--particle-x", `${horizontalPosition}%`);
    particle.style.setProperty("--particle-y", `${verticalPosition}%`);
    particle.style.setProperty("--particle-size", `${3 + Math.random() * 5}px`);
    particle.style.setProperty("--particle-rise", `${38 + Math.random() * 50}px`);
    particle.style.setProperty("--particle-drift", `${Math.round(Math.random() * 36 - 18)}px`);
    particle.style.setProperty("--particle-color", colors[index % colors.length]);
    particleLayer.append(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  }
}

regionStage?.addEventListener("animationend", (event) => {
  if (event.target === regionStage && event.animationName === "region-enter") {
    regionStage.classList.remove("is-entering");
  }
});

function selectRegion(regionId) {
  const region = regions[regionId];
  if (!region || !regionStage) return;
  if (regionId === activeRegionId) return;
  activeRegionId = regionId;
  regionStage.dataset.region = regionId;
  regionStage.setAttribute("aria-label", `Ilustración provisional de la región ${region.name.replace(/^La /, "")}`);
  const character = regionStage.querySelector("[data-character]");
  character.className = `region-character character-${regionId}`;
  character.dataset.character = regionId;
  character.setAttribute("aria-label", `Personaje provisional de ${region.name.replace(/^La /, "")}, ilustración editorial creada con CSS`);
  document.querySelector("#scene-image-note").textContent =
    `Personaje provisional · preparado para ${region.imagePath}`;
  document.querySelector("#region-panel").setAttribute("aria-labelledby", `tab-${regionId}`);
  document.querySelector("#region-eyebrow").textContent =
    `TERRITORIO ${region.number} · ${region.name.toLocaleUpperCase("es")}`;
  document.querySelector("#region-title").textContent = region.name;
  document.querySelector("#region-description").textContent = region.description;
  document.querySelector("#region-context").textContent = region.descriptor;
  regionTabs.forEach((tab) => {
    const selected = tab.dataset.regionSelect === regionId;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  regionStage.classList.remove("is-entering");
  void regionStage.offsetWidth;
  regionStage.classList.add("is-entering");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelector("#region-particles").replaceChildren();
  } else {
    createRegionParticles();
  }
  renderRegionStory(region);
}

regionCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.catalogCategory === "ancestral") {
      window.location.href = "libros.html#legends-catalog";
      return;
    }
    selectRegion(card.dataset.regionCard);
    document.querySelector("#explora-peru").scrollIntoView({ behavior: "smooth" });
  });
});

regionTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectRegion(tab.dataset.regionSelect));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % regionTabs.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + regionTabs.length) % regionTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = regionTabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    regionTabs[nextIndex].focus();
    selectRegion(regionTabs[nextIndex].dataset.regionSelect);
  });
});

document.querySelector("#explore-region")?.addEventListener("click", () => {
  renderRegionStory(regions[activeRegionId]);
  regionDialog.showModal();
});

let musicLoadErrorReported = false;

function reportMusicLoadError() {
  if (musicLoadErrorReported) return;
  musicLoadErrorReported = true;
  console.error("No se pudo cargar la música ambiental.", bgMusic.error);
  showToast("No se pudo cargar la música ambiental. Revisa el archivo de audio.");
}

function retryBackgroundMusic() {
  bgMusic.play().catch((error) => {
    if (error.name === "NotAllowedError") {
      document.addEventListener("pointerdown", retryBackgroundMusic, { once: true });
      document.addEventListener("keydown", retryBackgroundMusic, { once: true });
      document.addEventListener("touchstart", retryBackgroundMusic, { once: true });
      return;
    }

    console.error("No se pudo iniciar la música ambiental.", error);
    reportMusicLoadError();
  });
}

bgMusic?.addEventListener("error", reportMusicLoadError);
if (bgMusic) retryBackgroundMusic();

const parallaxEnabled = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
if (parallaxEnabled.matches && regionStage) {
  let pointerX = 0;
  let pointerY = 0;
  let parallaxFrame = 0;
  const parallaxLayers = [...regionStage.querySelectorAll("[data-parallax]")];

  regionStage.addEventListener("pointermove", (event) => {
    const bounds = regionStage.getBoundingClientRect();
    pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
    pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    if (parallaxFrame) return;
    parallaxFrame = requestAnimationFrame(() => {
      parallaxLayers.forEach((layer) => {
        const depth = Number(layer.dataset.parallax) * 15;
        layer.style.translate = `${(pointerX * depth).toFixed(2)}px ${(pointerY * depth).toFixed(2)}px`;
      });
      parallaxFrame = 0;
    });
  });

  regionStage.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
    if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
    parallaxFrame = requestAnimationFrame(() => {
      parallaxLayers.forEach((layer) => { layer.style.translate = "0 0"; });
      parallaxFrame = 0;
    });
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

function toggleFavorite(bookId) {
  const isFavorite = favorites.includes(bookId);
  const nextFavorites = isFavorite
    ? favorites.filter((id) => id !== bookId)
    : [...favorites, bookId];
  if (!saveStoredValue(storageKeys.favorites, nextFavorites)) return;
  favorites = nextFavorites;
  renderFavorites();
  if (bookDialog.open && activeDialogBookId === bookId) {
    const book = books.find((entry) => entry.id === bookId);
    if (activeDialogMode === "read" && book.available) renderReadingView(book);
    else renderBookDetails(bookId);
  }
  const book = books.find((entry) => entry.id === bookId);
  showToast(isFavorite ? `“${book.title}” se quitó de tus favoritos.` : `“${book.title}” se guardó en tus favoritos.`);
}

function openBookDialog(bookId, mode = "details") {
  const book = books.find((entry) => entry.id === bookId);
  if (!book) return;
  if (mode === "read" && !book.available) {
    showToast("La muestra digital de este libro todavía no está disponible.");
    return;
  }
  if (mode === "read") {
    activeDialogBookId = bookId;
    activeDialogMode = "read";
    renderReadingView(book);
  } else {
    activeDialogBookId = bookId;
    activeDialogMode = "details";
    renderBookDetails(bookId);
  }
  bookDialog.showModal();
}

function renderBookDetails(bookId) {
  const book = books.find((entry) => entry.id === bookId);
  if (!book) return;
  const isFavorite = favorites.includes(bookId);
  dialogContent.innerHTML = `
    <div class="dialog-book-layout">
      <div class="dialog-cover">${coverMarkup(book)}</div>
      <div class="dialog-book-info">
        <span class="book-category">${escapeHTML(book.category)}</span>
        <h2 id="dialog-title">${escapeHTML(book.title)}</h2>
        <p class="dialog-byline">por ${escapeHTML(book.author)}</p>
        <p class="dialog-description">${escapeHTML(book.description)}</p>
        <div class="dialog-metadata"><span>${book.pages} páginas</span><span>${escapeHTML(book.category)}</span>
          <span>${book.available ? "Muestra digital disponible" : "Lectura digital próximamente"}</span></div>
        <div class="dialog-book-actions">
          ${book.available ? `<button class="button button-primary" type="button" data-action="read" data-id="${book.id}">Leer muestra <svg class="icon"><use href="#icon-arrow" /></svg></button>` : ""}
          <button class="dialog-favorite${isFavorite ? " is-favorite" : ""}" type="button" data-action="favorite" data-id="${book.id}" aria-pressed="${isFavorite}">
            <svg class="icon"><use href="#icon-heart" /></svg> ${isFavorite ? "En tus favoritos" : "Guardar en favoritos"}
          </button>
        </div>
      </div>
    </div>`;
}

function renderReadingView(book) {
  dialogContent.innerHTML = `
    <article class="reading-content">
      <div class="reading-header"><svg class="icon"><use href="#icon-book" /></svg> MUESTRA DE LECTURA · ${escapeHTML(book.category)}</div>
      <h2 id="dialog-title">${escapeHTML(book.title)}</h2>
      <p class="reading-note">Por ${escapeHTML(book.author)} · Esta es una muestra de lectura digital</p>
      <h3>Unas páginas para empezar</h3>
      ${book.reading.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
      <button class="dialog-favorite${favorites.includes(book.id) ? " is-favorite" : ""}" type="button"
        data-action="favorite" data-id="${book.id}" aria-pressed="${favorites.includes(book.id)}">
        <svg class="icon"><use href="#icon-heart" /></svg> ${favorites.includes(book.id) ? "En tus favoritos" : "Guardar en favoritos"}
      </button>
    </article>`;
}

function closeMobileMenu() {
  mainNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  menuToggle.innerHTML = '<svg class="icon"><use href="#icon-menu" /></svg>';
}

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  window.location.href = `libros.html${query ? `?q=${encodeURIComponent(query)}` : ""}`;
});
searchInput?.addEventListener("input", renderRegionCards);
categoryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeLegendCategory = button.dataset.categoria;
    categoryFilters.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });
    renderRegionCards();
  });
});

document.addEventListener("click", (event) => {
  const legendAction = event.target.closest("[data-legend-action]");
  if (legendAction) {
    if (legendAction.dataset.legendAction === "play") {
      openLegend(legendAction.dataset.legendNumber, legendAction.dataset.legendCategory);
    } else if (legendAction.dataset.legendAction === "replay") {
      replayCoastalLegend();
    } else if (legendAction.dataset.legendAction === "catalog") {
      legendVideoDialog.close();
    }
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    const { action, id } = actionTarget.dataset;
    if (action === "favorite") toggleFavorite(id);
    if (action === "details") openBookDialog(id);
    if (action === "read") openBookDialog(id, "read");
  }

  const accountButton = event.target.closest("[data-account-trigger], .account-button, .footer-account-link");
  if (accountButton) {
    if (accountButton.matches("[data-account-trigger]")) event.preventDefault();
    const accountForm = document.querySelector("#account-form");
    const accountMessage = document.querySelector("#account-message");
    accountMessage.textContent = "";
    accountMessage.classList.remove("is-error");
    try {
      const profile = JSON.parse(localStorage.getItem(storageKeys.profile) || "null");
      if (profile && typeof profile.name === "string" && typeof profile.email === "string") {
        accountForm.elements.name.value = profile.name;
        accountForm.elements.email.value = profile.email;
      }
    } catch (error) {
      console.error("No se pudieron recuperar los datos de la cuenta.", error);
      showToast("No se pudieron cargar los datos guardados de tu cuenta.");
    }
    accountDialog.showModal();
  }
});

document.querySelector("#newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("#newsletter-email");
  const message = document.querySelector("#newsletter-message");
  message.classList.remove("is-error");
  if (!emailInput.validity.valid || !emailInput.value.trim()) {
    emailInput.setAttribute("aria-invalid", "true");
    message.textContent = "Escribe un correo electrónico válido para continuar.";
    message.classList.add("is-error");
    emailInput.focus();
    return;
  }
  emailInput.removeAttribute("aria-invalid");
  const normalizedEmail = emailInput.value.trim().toLocaleLowerCase("es");
  const subscribers = loadSubscriberEmails();
  if (!subscribers.includes(normalizedEmail)) subscribers.push(normalizedEmail);
  if (!saveStoredValue(storageKeys.subscribers, subscribers)) return;
  message.textContent = "¡Listo! Te avisaremos cuando haya novedades.";
  event.target.reset();
});

document.querySelector("#account-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const nameInput = form.elements.name;
  const emailInput = form.elements.email;
  const message = document.querySelector("#account-message");
  message.classList.remove("is-error");
  const trimmedName = nameInput.value.trim();
  if (!trimmedName || !emailInput.validity.valid || !emailInput.value.trim()) {
    message.textContent = !trimmedName ? "Escribe tu nombre para continuar." : "Escribe un correo electrónico válido.";
    message.classList.add("is-error");
    (!trimmedName ? nameInput : emailInput).focus();
    return;
  }
  const profile = { name: trimmedName, email: emailInput.value.trim() };
  if (!saveStoredValue(storageKeys.profile, profile)) return;
  message.textContent = `¡Qué gusto tenerte aquí, ${trimmedName}!`;
});

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNavigation.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.innerHTML = `<svg class="icon"><use href="#icon-${isOpen ? "close" : "menu"}" /></svg>`;
});
mainNavigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileMenu();
});

for (const dialog of [bookDialog, accountDialog, regionDialog, legendVideoDialog]) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
document.querySelectorAll(".dialog-close").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

renderLegendCatalog();
renderRegionCards();
renderFavorites();
renderRegionStory(regions[activeRegionId]);
