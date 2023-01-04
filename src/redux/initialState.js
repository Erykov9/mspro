const initialState = {
  langData: [
    {
      id: '1',
      lang: 'pl',
      description: 'Polski opis',
    },

    {
      id: '2',
      lang: 'gb',
      description: 'English description'
    },

    {
      id: '3',
      lang: 'de',
      description: 'Deutsch Bezeichnung',
    }
  ],

  menu: [
    {
      pl: ['Strona główna', 'Oferta', 'Kontakt'],
      gb: ['Home', 'Offert', 'Contact'],
      de: ['Startseite','Angeboten','Berührung'],
    }
  ],

  offert: [
    {
      pl: ['Schody półkowe', 'Meble loft', 'Balustrady', 'Usługi spawalnicze/prototypownia'],
      gb: ['Shelf stairs', 'Loft furniture', 'Balustrades', 'Welding services/prototype workshop'],
      de: ['Regaltreppen','Loftmöbel','Balustraden', 'Schweißservice/Musterwerkstatt']
    }
  ]
};

export default initialState;