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
module.exports.policyOwners = []
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
      title: 'Artificial Intelligence and Data',
      area: module.exports.areas[0].name
    },
    {
      title: 'Clean Growth',
      area: module.exports.areas[0].name
    },
    {
      title: 'Future of Mobility',
      area: module.exports.areas[0].name
    },
    {
      title: 'Ageing Society',
      area: module.exports.areas[0].name
    },
    {
      title: 'Published sector deals',
      area: module.exports.areas[1].name
    },
    {
      title: 'Sector deals under negotiation',
      area: module.exports.areas[1].name
    },
    {
      title: 'Emerging sector deals',
      area: module.exports.areas[1].name
    },
    {
      title: 'Increase R&D investment to 2.4% of GDP',
      area: module.exports.areas[2].name
    },
    {
      title: 'Industrial Strategy Challenge Fund',
      area: module.exports.areas[2].name
    },
    {
      title: 'Commercialisation (beyond ISCF)',
      area: module.exports.areas[2].name
    },
    {
      title: 'Strength in Places Fund',
      area: module.exports.areas[2].name
    },
    {
      title: 'Technical Skills',
      area: module.exports.areas[3].name
    },
    {
      title: 'STEM',
      area: module.exports.areas[3].name
    },
    {
      title: ' National Retraining Scheme',
      area: module.exports.areas[3].name
    },
    {
      title: 'Transforming Cities Fund',
      area: module.exports.areas[4].name
    },
    {
      title: 'NPIF',
      area: module.exports.areas[4].name
    },
    {
      title: 'Digital Infrastructure',
      area: module.exports.areas[4].name
    },
    {
      title: 'Access to Finance',
      area: module.exports.areas[5].name
    },
    {
      title: 'Long tail review',
      area: module.exports.areas[5].name
    },
    {
      title: 'Export Strategy',
      area: module.exports.areas[5].name
    },
    {
      title: 'Local Industrial Strategies',
      area: module.exports.areas[6].name
    },
    {
      title: 'UK Shared Prosperity Fund',
      area: module.exports.areas[6].name
    },
    {
      title: 'Regional Skills',
      area: module.exports.areas[6].name
    },
    {
      title: 'Public Body Relocation/ Places for Growth',
      area: module.exports.areas[6].name
    },
    {
      title: 'Formation of the Council',
      area: module.exports.areas[7].name
    }
  ],
  'policyOwners': []

}
