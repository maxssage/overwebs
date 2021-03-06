{
  let heroData = {
    ana: {
      id: 'ana',
      name: 'Ana',
      unlockable: 64,
      color: '#400A44',
      background: false,
    },
    bastion: {
      id: 'bastion',
      name: 'Bastion',
      unlockable: 65,
      color: '#1D2B14',
      background: true,
    },
    dva: {
      id: 'dva',
      name: 'D.Va',
      unlockable: 63,
      color: '#F93080',
      background: true,
    },
    genji: {
      id: 'genji',
      name: 'Genji',
      unlockable: 64,
      color: '#32F600',
      background: true,
    },
    hanzo: {
      id: 'hanzo',
      name: 'Hanzo',
      unlockable: 63,
      color: '#706025',
      background: false,
    },
    junkrat: {
      id: 'junkrat',
      name: 'Junkrat',
      unlockable: 64,
      color: '#F27000',
      background: false,
    },
    lucio: {
      id: 'lucio',
      name: 'Lúcio',
      unlockable: 66,
      color: '#238B02',
      background: false,
    },
    mccree: {
      id: 'mccree',
      name: 'McCree',
      unlockable: 63,
      color: '#640607',
      background: true,
    },
    mei: {
      id: 'mei',
      name: 'Mei',
      unlockable: 64,
      color: '#1351E4',
      background: false,
    },
    mercy: {
      id: 'mercy',
      name: 'Mercy',
      unlockable: 64,
      color: '#F5E269',
      background: false,
    },
    pharah: {
      id: 'pharah',
      name: 'Pharah',
      unlockable: 65,
      color: '#001984',
      background: true,
    },
    reaper: {
      id: 'reaper',
      name: 'Reaper',
      unlockable: 66,
      color: '#1D0002',
      background: true,
    },
    reinhardt: {
      id: 'reinhardt',
      name: 'Reinhardt',
      unlockable: 66,
      color: '#334142',
      scaling: 0.9,
      background: false,
    },
    roadhog: {
      id: 'roadhog',
      name: 'Roadhog',
      unlockable: 64,
      color: '#6C2803',
      background: true,
    },
    soldier76: {
      id: 'soldier76',
      name: 'Soldier: 76',
      unlockable: 65,
      color: '#0F132E',
      scaling: 0.8,
      background: true,
    },
    sombra: {
      id: 'sombra',
      name: 'Sombra',
      unlockable: 58,
      color: '#75317E',
      background: true,
    },
    symmetra: {
      id: 'symmetra',
      name: 'Symmetra',
      unlockable: 64,
      color: '#2E7595',
      scaling: 0.9,
      background: false,
    },
    torbjorn: {
      id: 'torbjorn',
      name: 'Torbjörn',
      unlockable: 64,
      color: '#79120B',
      scaling: 0.9,
      background: false,
    },
    tracer: {
      id: 'tracer',
      name: 'Tracer',
      unlockable: 62,
      color: '#BA3202',
      background: true,
    },
    widowmaker: {
      id: 'widowmaker',
      name: 'Widowmaker',
      unlockable: 65,
      color: '#410B45',
      scaling: 0.7,
      background: true,
    },
    winston: {
      id: 'winston',
      name: 'Winston',
      unlockable: 64,
      color: '#46496A',
      background: true,
    },
    zarya: {
      id: 'zarya',
      name: 'Zarya',
      unlockable: 64,
      color: '#EB1C62',
      background: false,
    },
    zenyatta: {
      id: 'zenyatta',
      name: 'Zenyatta',
      unlockable: 64,
      color: '#F8DA1A',
      background: false,
    },
  }

  let elements = [];

  Polymer({
    is: 'overwebs-hero-data',
    properties: {
      heroes: {
        type: Object,
        notify: true,
        readOnly: true,
        value: heroData
      }
    },

    _notify: function() {
      this._setHeroes({});
      this._setHeroes(heroData);
    },

    ready: function () {
      elements.push(this);
      // this.$.haxxOn.onclick = () => {
      //   this.debounce('haxxOn', _ => {
      //     for (hero in heroData) {
      //       heroData[hero].background = true;
      //     }
      //     elements.forEach((e) => { e._notify() });
      //   });
      // }
      // this.$.haxxOff.onclick = () => {
      //   this.debounce('haxxOff', _ => {
      //     for (hero in heroData) {
      //       heroData[hero].background = false;
      //     }
      //     elements.forEach((e) => { e._notify() });
      //   });
      // }
    }
  });
}
