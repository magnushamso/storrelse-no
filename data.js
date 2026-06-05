const SHOE_DATA = {
  herre: [
    { mm: 220, eu: 35,   uk: 3,    us: 3.5,  jp: 22   },
    { mm: 225, eu: 36,   uk: 3.5,  us: 4,    jp: 22.5 },
    { mm: 230, eu: 37,   uk: 4,    us: 4.5,  jp: 23   },
    { mm: 235, eu: 37.5, uk: 4.5,  us: 5,    jp: 23.5 },
    { mm: 240, eu: 38,   uk: 5,    us: 5.5,  jp: 24   },
    { mm: 245, eu: 39,   uk: 5.5,  us: 6,    jp: 24.5 },
    { mm: 250, eu: 40,   uk: 6,    us: 6.5,  jp: 25   },
    { mm: 255, eu: 40.5, uk: 6.5,  us: 7,    jp: 25.5 },
    { mm: 260, eu: 41,   uk: 7,    us: 7.5,  jp: 26   },
    { mm: 265, eu: 42,   uk: 7.5,  us: 8,    jp: 26.5 },
    { mm: 270, eu: 42.5, uk: 8,    us: 8.5,  jp: 27   },
    { mm: 275, eu: 43,   uk: 8.5,  us: 9,    jp: 27.5 },
    { mm: 280, eu: 44,   uk: 9,    us: 9.5,  jp: 28   },
    { mm: 285, eu: 44.5, uk: 9.5,  us: 10,   jp: 28.5 },
    { mm: 290, eu: 45,   uk: 10,   us: 10.5, jp: 29   },
    { mm: 295, eu: 46,   uk: 10.5, us: 11,   jp: 29.5 },
    { mm: 300, eu: 46.5, uk: 11,   us: 11.5, jp: 30   },
    { mm: 305, eu: 47,   uk: 11.5, us: 12,   jp: 30.5 },
    { mm: 310, eu: 48,   uk: 12,   us: 12.5, jp: 31   },
    { mm: 315, eu: 49,   uk: 12.5, us: 13,   jp: 31.5 },
    { mm: 320, eu: 50,   uk: 13,   us: 14,   jp: 32   },
    { mm: 325, eu: 51,   uk: 13.5, us: 14.5, jp: 32.5 },
  ],
  dame: [
    { mm: 205, eu: 33,   uk: 1,    us: 3,    jp: 20.5 },
    { mm: 210, eu: 34,   uk: 1.5,  us: 4,    jp: 21   },
    { mm: 215, eu: 35,   uk: 2,    us: 4.5,  jp: 21.5 },
    { mm: 220, eu: 35.5, uk: 2.5,  us: 5,    jp: 22   },
    { mm: 225, eu: 36,   uk: 3,    us: 5.5,  jp: 22.5 },
    { mm: 230, eu: 36.5, uk: 3.5,  us: 6,    jp: 23   },
    { mm: 235, eu: 37,   uk: 4,    us: 6.5,  jp: 23.5 },
    { mm: 240, eu: 38,   uk: 4.5,  us: 7,    jp: 24   },
    { mm: 245, eu: 38.5, uk: 5,    us: 7.5,  jp: 24.5 },
    { mm: 250, eu: 39,   uk: 5.5,  us: 8,    jp: 25   },
    { mm: 255, eu: 39.5, uk: 6,    us: 8.5,  jp: 25.5 },
    { mm: 260, eu: 40,   uk: 6.5,  us: 9,    jp: 26   },
    { mm: 265, eu: 41,   uk: 7,    us: 9.5,  jp: 26.5 },
    { mm: 270, eu: 42,   uk: 7.5,  us: 10,   jp: 27   },
    { mm: 275, eu: 42.5, uk: 8,    us: 10.5, jp: 27.5 },
    { mm: 280, eu: 43,   uk: 8.5,  us: 11,   jp: 28   },
    { mm: 285, eu: 44,   uk: 9,    us: 11.5, jp: 28.5 },
    { mm: 290, eu: 45,   uk: 9.5,  us: 12,   jp: 29   },
  ],
  barn: {
    spedbarn: [
      { mm: 95,  eu: 16,   uk: 0.5, us: 1   },
      { mm: 100, eu: 17,   uk: 1,   us: 1.5 },
      { mm: 105, eu: 18,   uk: 2,   us: 2.5 },
      { mm: 110, eu: 19,   uk: 3,   us: 3.5 },
      { mm: 115, eu: 20,   uk: 3.5, us: 4   },
      { mm: 120, eu: 21,   uk: 4,   us: 4.5 },
    ],
    smabarn: [
      { mm: 130, eu: 22,   uk: 5,   us: 5.5 },
      { mm: 135, eu: 23,   uk: 6,   us: 6.5 },
      { mm: 140, eu: 24,   uk: 7,   us: 7.5 },
      { mm: 145, eu: 25,   uk: 7.5, us: 8   },
      { mm: 150, eu: 26,   uk: 8,   us: 8.5 },
      { mm: 155, eu: 26.5, uk: 8.5, us: 9   },
      { mm: 160, eu: 27,   uk: 9,   us: 9.5 },
    ],
    junior: [
      { mm: 170, eu: 28,   uk: 10,   us: 10.5 },
      { mm: 175, eu: 29,   uk: 10.5, us: 11   },
      { mm: 180, eu: 30,   uk: 11,   us: 11.5 },
      { mm: 185, eu: 31,   uk: 11.5, us: 12   },
      { mm: 190, eu: 32,   uk: 12,   us: 12.5 },
      { mm: 195, eu: 33,   uk: 12.5, us: 13   },
      { mm: 200, eu: 34,   uk: 13,   us: "1Y" },
      { mm: 205, eu: 35,   uk: "1Y",   us: "2Y" },
      { mm: 210, eu: 35.5, uk: "1,5Y", us: "2,5Y" },
      { mm: 215, eu: 36,   uk: "2Y",   us: "3Y" },
      { mm: 220, eu: 37,   uk: "2,5Y", us: "3,5Y" },
      { mm: 225, eu: 38,   uk: "3Y",   us: "4Y" },
    ],
  },
};

const BRAND_NOTES = [
  { brand: "Converse",              note: "Gå ned ½–1 størrelse" },
  { brand: "Converse Chuck Taylor", note: "Gå ned 1 full størrelse" },
  { brand: "Adidas",                note: "US→UK er ½ størrelse (ikke 1 hel som de fleste merker)" },
  { brand: "Puma",                  note: "Gå opp ½ størrelse – løper liten" },
  { brand: "Skechers",              note: "Romslig passform – vurder å gå ned ½" },
  { brand: "New Balance",           note: "Lett stor – beste breddetilbud på markedet" },
];

// Hjelpefunksjon: finn nærmeste rad basert på verdi og felt
function finnNærmeste(tabell, felt, verdi) {
  return tabell.reduce((best, rad) => {
    const radVerdi = parseFloat(rad[felt]);
    const bestVerdi = parseFloat(best[felt]);
    return Math.abs(radVerdi - verdi) < Math.abs(bestVerdi - verdi) ? rad : best;
  });
}

// Konverter én verdi til alle andre systemer
function konverter(kjønn, felt, verdi) {
  let tabell;
  if (kjønn === "barn") {
    tabell = [
      ...SHOE_DATA.barn.spedbarn,
      ...SHOE_DATA.barn.smabarn,
      ...SHOE_DATA.barn.junior,
    ];
  } else {
    tabell = SHOE_DATA[kjønn];
  }
  return finnNærmeste(tabell, felt, parseFloat(verdi));
}
