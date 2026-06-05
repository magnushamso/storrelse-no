/* =====================
   Tilstand
   ===================== */
let aktivKjonn  = "herre";
let aktivGruppe = "spedbarn";

/* =====================
   Hjelpere
   ===================== */
function formaterVerdi(v) {
  if (v === undefined || v === null) return "–";
  if (typeof v === "string") return v;
  return Number.isInteger(v) ? String(v) : String(v).replace(".", ",");
}

function hentTabell() {
  if (aktivKjonn === "barn") return SHOE_DATA.barn[aktivGruppe];
  return SHOE_DATA[aktivKjonn];
}

function harJP() {
  return aktivKjonn !== "barn";
}

/* =====================
   Render tabell
   ===================== */
function renderTabell(aktiveRad) {
  const kropp  = document.getElementById("tabell-kropp");
  const tittel = document.getElementById("tabell-tittel");
  const jpKol  = document.getElementById("jp-kolonne-header");
  const tabell = hentTabell();

  const tittelMap = {
    herre: "Herre skostørrelser",
    dame:  "Dame skostørrelser",
    barn:  { spedbarn: "Spedbarn", smabarn: "Småbarn", junior: "Junior" },
  };
  tittel.textContent = aktivKjonn === "barn"
    ? tittelMap.barn[aktivGruppe]
    : tittelMap[aktivKjonn];

  jpKol.style.display = harJP() ? "" : "none";

  kropp.innerHTML = "";
  tabell.forEach(rad => {
    const tr = document.createElement("tr");
    if (aktiveRad && rad.mm === aktiveRad.mm) {
      tr.classList.add("aktiv-rad");
      tr.setAttribute("aria-current", "true");
    }

    const jpCell = harJP()
      ? `<td>${formaterVerdi(rad.jp)}</td>`
      : `<td style="display:none"></td>`;

    tr.innerHTML = `
      <td>${rad.mm}</td>
      <td>${formaterVerdi(rad.eu)}</td>
      <td>${formaterVerdi(rad.uk)}</td>
      <td>${formaterVerdi(rad.us)}</td>
      ${jpCell}
    `;
    kropp.appendChild(tr);
  });
}

/* =====================
   Render merkenotater
   ===================== */
function renderMerker() {
  const liste = document.getElementById("merke-liste");
  liste.innerHTML = "";
  BRAND_NOTES.forEach(({ brand, note }) => {
    const li = document.createElement("li");
    li.className = "merke-rad";
    li.innerHTML = `
      <span class="merke-navn">${brand}</span>
      <span class="merke-notat">${note}</span>
    `;
    liste.appendChild(li);
  });
}

/* =====================
   Konvertering
   ===================== */
function oppdaterResultat() {
  const system   = document.getElementById("system-velger").value;
  const raaVerdi = document.getElementById("verdi-input").value.trim();
  const grid     = document.getElementById("resultat-grid");

  if (!raaVerdi) {
    grid.style.display = "none";
    renderTabell(null);
    return;
  }

  const verdi = parseFloat(raaVerdi.replace(",", "."));
  if (isNaN(verdi)) { grid.style.display = "none"; return; }

  const tabell = hentTabell();
  const rad = finnNærmeste(tabell, system, verdi);
  if (!rad) return;

  grid.style.display = "grid";

  document.getElementById("val-mm").textContent = rad.mm;
  document.getElementById("val-eu").textContent = formaterVerdi(rad.eu);
  document.getElementById("val-uk").textContent = formaterVerdi(rad.uk);
  document.getElementById("val-us").textContent = formaterVerdi(rad.us);
  document.getElementById("val-jp").textContent = harJP() ? formaterVerdi(rad.jp) : "–";
  document.getElementById("res-jp").style.display = harJP() ? "" : "none";

  // Highlight valgt system
  ["mm", "eu", "uk", "us", "jp"].forEach(s => {
    document.getElementById(`res-${s}`).classList.toggle("highlight", s === system);
  });

  renderTabell(rad);

  const aktiveRad = document.querySelector("#tabell-kropp .aktiv-rad");
  if (aktiveRad) aktiveRad.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

/* =====================
   Kjønnsvelger
   ===================== */
document.querySelectorAll(".kjonn-knapp").forEach(knapp => {
  knapp.addEventListener("click", () => {
    document.querySelectorAll(".kjonn-knapp").forEach(k => {
      k.classList.remove("aktiv");
      k.setAttribute("aria-pressed", "false");
    });
    knapp.classList.add("aktiv");
    knapp.setAttribute("aria-pressed", "true");
    aktivKjonn = knapp.dataset.kjonn;

    const barnVelger = document.getElementById("underkategori-velger");
    barnVelger.style.display = aktivKjonn === "barn" ? "flex" : "none";

    const jpOption = document.querySelector("#system-velger option[value='jp']");
    jpOption.disabled = aktivKjonn === "barn";
    if (aktivKjonn === "barn" && document.getElementById("system-velger").value === "jp") {
      document.getElementById("system-velger").value = "eu";
    }

    document.getElementById("verdi-input").value = "";
    document.getElementById("resultat-grid").style.display = "none";
    renderTabell(null);
  });
});

/* =====================
   Underkategori
   ===================== */
document.querySelectorAll(".underkategori-knapp").forEach(knapp => {
  knapp.addEventListener("click", () => {
    document.querySelectorAll(".underkategori-knapp").forEach(k => {
      k.classList.remove("aktiv");
      k.setAttribute("aria-pressed", "false");
    });
    knapp.classList.add("aktiv");
    knapp.setAttribute("aria-pressed", "true");
    aktivGruppe = knapp.dataset.gruppe;
    document.getElementById("verdi-input").value = "";
    document.getElementById("resultat-grid").style.display = "none";
    renderTabell(null);
  });
});

/* =====================
   Input
   ===================== */
document.getElementById("verdi-input").addEventListener("input", oppdaterResultat);
document.getElementById("system-velger").addEventListener("change", oppdaterResultat);

/* =====================
   Init
   ===================== */
renderTabell(null);
renderMerker();
