import gateways from './gateways'

export default [
  {
    mapId:0,
    name:'Central America',
    nameEs:'América Central',
    imgUrl:'map1.png',
    countries: gateways.filter(g => g.region === 'central-america')
  },
  {
    mapId:1,
    name:'Caribbean',
    nameEs:'Caribe',
    imgUrl:'map2.png',
    countries: gateways.filter(g => g.region === 'caribbean')
  },
  {
    mapId:2,
    name:'South America',
    nameEs:'América del Sur',
    imgUrl:'map3.png',
    countries: gateways.filter(g => g.region === 'south-america')
  },
]