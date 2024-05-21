const games: Game[] = [
  { id: 1, title: 'Code Names', thumbnail: 'https://i.imgur.com/J6Xod2c.png' },
  { id: 2, title: 'Abyss', thumbnail: 'https://i.imgur.com/8DEMHyf.png' },
  { id: 3, title: 'Mysterium', thumbnail: 'https://i.imgur.com/Tpz8djU.png' },
  { id: 4, title: '7 Wonders', thumbnail: 'https://i.imgur.com/j2aZR4M.png' },
  { id: 5, title: '7 Wonders Duel', thumbnail: 'https://i.imgur.com/5qCxx04.png' },
  { id: 6, title: 'Loup garou pour 1 nuit', thumbnail: 'https://i.imgur.com/k8XR1HA.png' },
  { id: 8, title: 'Arena for the gods', thumbnail: 'https://i.imgur.com/fBixAHO.png' },
  { id: 9, title: 'Chronicles of Crime', thumbnail: 'https://i.imgur.com/gUKjKMJ.png' },
  {
    id: 10,
    title: 'Blanc Manger Coco',
    thumbnail: 'https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/61_245768_1_10_FR.PNG',
  },
  { id: 12, title: "Le jeu de l'année", thumbnail: 'https://i.imgur.com/64C7H6A.png' },
  { id: 13, title: 'Monopoly', thumbnail: 'https://i.imgur.com/30fqBkl.png' },
  { id: 14, title: 'Lâche pas la savonette', thumbnail: 'https://i.imgur.com/dq8XpsU.png' },
  { id: 15, title: 'Kingdom Rush ', thumbnail: 'https://i.imgur.com/8HjsMle.png' },
  { id: 16, title: 'Complots 2', thumbnail: 'https://i.imgur.com/HDHMVCS.png' },
  { id: 17, title: 'Welcome to your perfect home', thumbnail: 'https://i.imgur.com/tA3z4tC.png' },
  { id: 18, title: 'Nigthmarium', thumbnail: 'https://i.imgur.com/rkrNipV.png' },
  { id: 19, title: 'Scythe', thumbnail: 'https://i.imgur.com/LnQV2kR.png' },
  { id: 20, title: 'Pandemic', thumbnail: 'https://i.imgur.com/29W6NZ8.png' },
  { id: 21, title: 'Contagion', thumbnail: 'https://i.imgur.com/YAH1EQs.png' },
  { id: 22, title: 'Andor', thumbnail: 'https://i.imgur.com/FR4pUCT.png' },
  { id: 23, title: 'Eclipse', thumbnail: 'https://i.imgur.com/Gnq9Klk.png' },
  { id: 24, title: 'Mare nostrum', thumbnail: 'https://i.imgur.com/9pMC92P.png' },
  { id: 25, title: 'Dice forge ', thumbnail: 'https://i.imgur.com/LeV17F6.png' },
  { id: 26, title: 'Mystère', thumbnail: 'https://i.imgur.com/Gfw8SuY.png' },
  { id: 27, title: 'Imaginarium ', thumbnail: 'https://i.imgur.com/pixAd8y.png' },
  { id: 29, title: 'Takenoko ', thumbnail: 'https://i.imgur.com/R4CINLX.png' },
  { id: 30, title: 'Smallword ', thumbnail: 'https://i.imgur.com/njqaBUF.png' },
  { id: 31, title: 'Jamaica ', thumbnail: 'https://i.imgur.com/pqVjoo2.png' },
  { id: 32, title: 'Terraforming Mars ', thumbnail: 'https://i.imgur.com/lciuUpI.png' },
  { id: 33, title: 'Fief ', thumbnail: 'https://i.imgur.com/DyfSnCx.png' },
  { id: 34, title: 'Mascarade ', thumbnail: 'https://i.imgur.com/B52TyrF.png' },
  {
    id: 35,
    title: '4 gods',
    thumbnail: 'https://i.imgur.com/YSErIld.png',
  },
  { id: 38, title: 'Citadelle', thumbnail: 'https://i.imgur.com/6283gzl.png' },
  { id: 39, title: 'Dixit', thumbnail: 'https://i.imgur.com/AuXtkgj.png' },
  { id: 43, title: 'Catan', thumbnail: 'https://i.imgur.com/Evcca5u.png' },
  { id: 44, title: 'Exploding Kitten', thumbnail: 'https://i.imgur.com/pBqZLG1.png' },
  { id: 45, title: 'Cro Magnon', thumbnail: 'https://i.imgur.com/X3iDhGg.png' },
  { id: 46, title: '6 qui prend', thumbnail: 'https://i.imgur.com/428cvGl.png' },
  { id: 47, title: 'Donjon de Naheulbeuk', thumbnail: 'https://i.imgur.com/7zKdBHz.png' },
  { id: 48, title: 'Mint works', thumbnail: 'https://i.imgur.com/LML6Vvz.png' },
  { id: 49, title: 'Anachrony', thumbnail: 'https://i.imgur.com/UpVFVXX.png' },
  { id: 50, title: 'Les aventures du rail', thumbnail: 'https://i.imgur.com/iFrwmte.png' },
  { id: 52, title: 'Service compris', thumbnail: 'https://i.imgur.com/XXQ5XPM.png' },
  { id: 53, title: 'Wanted (dé)', thumbnail: 'https://i.imgur.com/mWaMHhn.png' },
  { id: 54, title: 'Queendomino', thumbnail: 'https://i.imgur.com/QHBLMOo.png' },
  { id: 55, title: 'Petit meurtres et faits divers', thumbnail: 'https://i.imgur.com/MQOg08K.png' },
]

const getAllGames = async (): Promise<Game[]> => {
  try {
    return games
  } catch (error) {
    throw error as Error
  }
}

export default getAllGames
