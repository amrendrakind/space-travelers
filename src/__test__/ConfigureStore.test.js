import { rootReducer } from '../redux/configureStore';

test('rootReducer', () => {
  const state = rootReducer({
    Rockets: [{
      name: 'Falcon 1', id: 1, description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.', image: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'], reserved: false,
    }, {
      name: 'Falcon 9', id: 2, description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.', image: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg', 'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg', 'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg', 'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg', 'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg', 'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg'], reserved: false,
    }, {
      name: 'Falcon Heavy', id: 3, description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.', image: ['https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg', 'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg', 'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg', 'https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg'], reserved: false,
    }, {
      name: 'Starship', id: 4, description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.', image: ['https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg', 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg', 'https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg', 'https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg'], reserved: false,
    }],
    missions: [],
    dragons: [],

  }, {
    type: 'spacetravelers/rockets/GET_ROCKET_DATA',
    payload: [{
      name: 'Falcon 1', id: 1, description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.', image: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'], reserved: false,
    }, {
      name: 'Falcon 9', id: 2, description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.', image: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg', 'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg', 'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg', 'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg', 'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg', 'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg'], reserved: false,
    }, {
      name: 'Falcon Heavy', id: 3, description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.', image: ['https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg', 'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg', 'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg', 'https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg'], reserved: false,
    }, {
      name: 'Starship', id: 4, description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.', image: ['https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg', 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg', 'https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg', 'https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg'], reserved: false,
    }],
  });
  expect(state).toEqual({
    Rockets: [{
      name: 'Falcon 1', id: 1, description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.', image: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'], reserved: false,
    }, {
      name: 'Falcon 9', id: 2, description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.', image: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg', 'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg', 'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg', 'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg', 'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg', 'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg'], reserved: false,
    }, {
      name: 'Falcon Heavy', id: 3, description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.', image: ['https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg', 'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg', 'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg', 'https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg'], reserved: false,
    }, {
      name: 'Starship', id: 4, description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.', image: ['https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg', 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg', 'https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg', 'https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg'], reserved: false,
    }],
    missions: [],
    dragons: [],
  });
});
