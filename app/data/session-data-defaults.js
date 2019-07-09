/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/
module.exports.policyOwners = [
  {
    name: 'Sam Lister'
  },
  {
    name: 'Rannia Leontaridi / Andy Shields'
  },
  {
    name: 'Tim Lord'
  },
  {
    name: 'Richard Bruce'
  },
  {
    name: 'Ros Roughton (Director and SRO, DHSC)'
  },
  {
    name: 'Con: N Mackenzie, Rail: S Gaiger (DfT), Aero: G Lambert, Nuc: S Speed, AI: R Leontaridi, CI: S Blake (DCMS), OffWind: M Taylor, LS: K Mcleod, Auto: H Boardman'
  },
  {
    name: 'Food and Drink: Sally Warren (Defra), Tourism: Giles Smith (DCMS)'
  },
  {
    name: 'Alex Williams'
  },
  {
    name: 'Jenny Dibden (Greg Falconer)'
  },
  {
    name: 'Jenny Dibden (Greg Falconer)'
  },
  {
    name: 'Jenny Dibden (Paul Drabwell)'
  },
  {
    name: 'Jenny Dibden (Paul Drabwell)'
  },
  {
    name: 'Keith Smith (Apprenticeships), Jennifer Coupland (T levels and level 4/5 TE) DfE'
  },
  {
    name: 'Ian Coates'
  },
  {
    name: "Sinead O'Sullivan"
  },
  {
    name: 'Charles Small (DfT), Mischa Daniel (DfT)'
  },
  {
    name: 'Katie Ostheimer (HMT)'
  },
  {
    name: 'Mike Hill (DCMS)'
  },
  {
    name: 'Rannia Leontaridi (BEIS)'
  },
  {
    name: 'Darren Tierney (DIT)'
  },
  {
    name: 'Stephen Jones (BEIS / MHCLG)'
  },
  {
    name: 'Stephen Jones (BEIS / MHCLG)'
  },
  {
    name: 'Sinead O’Sullivan (regional skills policy & SAPs), Ben Coates (AEB), Sarah Lewis (Teachers) (DfE)'
  },
  {
    name: 'Simon Madden (CO)'
  },
  {
    name: 'Sam Lister (BEIS)'
  }
]
module.exports.areas = [
  {
    name: 'Grand Challenges'
  },
  {
    name: 'Sector Deals'
  },
  {
    name: 'Ideas'
  },
  {
    name: 'People'
  },
  {
    name: 'Infrastructure'
  },
  {
    name: 'Business Environment'
  },
  {
    name: 'Places'
  },
  {
    name: 'IS Council'
  }
]
module.exports = {

  // current policies
  'policies': [
    {
      title: 'General Grand Challenges',
      area: module.exports.areas[0].name,
      owner: module.exports.policyOwners[0].name
    },
    {
      title: 'Artificial Intelligence and Data',
      area: module.exports.areas[0].name,
      owner: module.exports.policyOwners[1].name
    },
    {
      title: 'Clean Growth',
      area: module.exports.areas[0].name,
      owner: module.exports.policyOwners[2].name
    },
    {
      title: 'Future of Mobility',
      area: module.exports.areas[0].name,
      owner: module.exports.policyOwners[3].name
    },
    {
      title: 'Ageing Society',
      area: module.exports.areas[0].name,
      owner: module.exports.policyOwners[4].name
    },
    {
      title: 'Published sector deals',
      area: module.exports.areas[1].name,
      owner: module.exports.policyOwners[5].name
    },
    {
      title: 'Sector deals under negotiation',
      area: module.exports.areas[1].name,
      owner: module.exports.policyOwners[6].name
    },
    {
      title: 'Emerging sector deals',
      area: module.exports.areas[1].name,
      owner: module.exports.policyOwners[7].name
    },
    {
      title: 'Increase R&D investment to 2.4% of GDP',
      area: module.exports.areas[2].name,
      owner: module.exports.policyOwners[8].name
    },
    {
      title: 'Industrial Strategy Challenge Fund',
      area: module.exports.areas[2].name,
      owner: module.exports.policyOwners[9].name
    },
    {
      title: 'Commercialisation (beyond ISCF)',
      area: module.exports.areas[2].name,
      owner: module.exports.policyOwners[10].name
    },
    {
      title: 'Strength in Places Fund',
      area: module.exports.areas[2].name,
      owner: module.exports.policyOwners[11].name
    },
    {
      title: 'Technical Skills',
      area: module.exports.areas[3].name,
      owner: module.exports.policyOwners[12].name
    },
    {
      title: 'STEM',
      area: module.exports.areas[3].name,
      owner: module.exports.policyOwners[13].name
    },
    {
      title: 'National Retraining Scheme',
      area: module.exports.areas[3].name,
      owner: module.exports.policyOwners[14].name
    },
    {
      title: 'Transforming Cities Fund',
      area: module.exports.areas[4].name,
      owner: module.exports.policyOwners[15].name
    },
    {
      title: 'NPIF',
      area: module.exports.areas[4].name,
      owner: module.exports.policyOwners[16].name
    },
    {
      title: 'Digital Infrastructure',
      area: module.exports.areas[4].name,
      owner: module.exports.policyOwners[17].name
    },
    {
      title: 'Access to Finance',
      area: module.exports.areas[5].name,
      owner: module.exports.policyOwners[18].name
    },
    {
      title: 'Long tail review',
      area: module.exports.areas[5].name,
      owner: module.exports.policyOwners[19].name
    },
    {
      title: 'Export Strategy',
      area: module.exports.areas[5].name,
      owner: module.exports.policyOwners[19].name
    },
    {
      title: 'Local Industrial Strategies',
      area: module.exports.areas[6].name,
      owner: module.exports.policyOwners[20].name
    },
    {
      title: 'UK Shared Prosperity Fund',
      area: module.exports.areas[6].name,
      owner: module.exports.policyOwners[21].name
    },
    {
      title: 'Regional Skills',
      area: module.exports.areas[6].name,
      owner: module.exports.policyOwners[22].name
    },
    {
      title: 'Public Body Relocation/ Places for Growth',
      area: module.exports.areas[6].name,
      owner: module.exports.policyOwners[23].name
    },
    {
      title: 'Formation of the Council',
      area: module.exports.areas[7].name,
      owner: module.exports.policyOwners[24].name
    }
  ]
}
