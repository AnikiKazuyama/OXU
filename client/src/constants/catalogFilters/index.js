const filterItems = [
  {
    fields: [
      {
        type: 'checkbox',
        result: {
          isChecked: false
        },
        name: 'Manga',
        value: 'manga'
      },
      {
        type: 'checkbox',
        result: {
          isChecked: false
        },
        name: 'Staff',
        value: 'staff'
      }
    ],
    title: 'Type'
  },
  {
    fields: [
      {
        type: 'checkbox',
        result: {
          isChecked: false
        },
        name: 'Manhwa',
        value: 'manhwa'
      },
      {
        type: 'checkbox',
        result: {
          isChecked: false
        },
        name: 'Colored',
        value: 'colored'
      },
      {
        type: 'checkbox',
        result: {
          isChecked: false
        },
        name: 'Web',
        value: 'web'
      }
    ],
    title: 'Format'
  },
  {
    fields: [
      {
        type: 'slider',
        name: 'Year',
        value: 'year',
        min: 1950,
        max: 2018,
        result: {
          from: 1950,
          to: 2018
        }
      }
    ],
    title: 'Year'
  }
];

export default filterItems;
