import type { CollectionConfig } from 'payload'

export const Prices: CollectionConfig = {
  slug: 'prices',
  labels: {
    singular: 'Прайс-категория',
    plural: 'Прайс-лист',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'categoryName',
    group: 'Контент',
    defaultColumns: ['categoryName', 'sortOrder'],
  },
  fields: [
    {
      name: 'categoryName',
      label: 'Название категории',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sortOrder',
      label: 'Порядок сортировки',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'items',
      label: 'Позиции',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Название услуги',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          label: 'Цена',
          type: 'text',
          required: true,
        },
        {
          name: 'note',
          label: 'Примечание',
          type: 'text',
        },
      ],
    },
  ],
}
