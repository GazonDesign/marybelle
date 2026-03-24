import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: {
    singular: 'Отзыв',
    plural: 'Отзывы',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Контент',
    defaultColumns: ['name', 'service', 'rating'],
  },
  fields: [
    {
      name: 'name',
      label: 'Имя клиента',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      label: 'Текст отзыва',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      label: 'Оценка',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
    },
    {
      name: 'service',
      label: 'Услуга',
      type: 'text',
    },
    {
      name: 'date',
      label: 'Дата',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'visible',
      label: 'Показывать на сайте',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
