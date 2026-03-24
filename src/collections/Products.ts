import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Товар',
    plural: 'Товары',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'updatedAt'],
    group: 'Контент',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Название',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'URL-адрес',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      label: 'Категория',
      type: 'select',
      required: true,
      options: [
        { label: 'Шубы', value: 'shuby' },
        { label: 'Пальто', value: 'palto' },
        { label: 'Кожаные изделия', value: 'kozha' },
      ],
    },
    {
      name: 'subcategory',
      label: 'Подкатегория',
      type: 'select',
      options: [
        { label: 'Норка', value: 'norka' },
        { label: 'Каракуль', value: 'karakul' },
        { label: 'Соболь', value: 'sobol' },
      ],
      admin: {
        condition: (data) => data?.category === 'shuby',
        description: 'Только для шуб',
      },
    },
    {
      name: 'price',
      label: 'Цена',
      type: 'text',
      required: true,
      defaultValue: 'Цена по запросу',
    },
    {
      name: 'images',
      label: 'Фотографии (загрузка)',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Фото',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'imagePaths',
      label: 'Пути к фото (из public/)',
      type: 'array',
      admin: {
        description: 'Для фото, которые уже лежат в public/. Формат: /images/magazin/...',
      },
      fields: [
        {
          name: 'path',
          label: 'Путь',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'details',
      label: 'Характеристики',
      type: 'array',
      fields: [
        { name: 'label', label: 'Свойство', type: 'text', required: true },
        { name: 'value', label: 'Значение', type: 'text', required: true },
      ],
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        { name: 'metaTitle', label: 'Meta Title', type: 'text' },
        { name: 'metaDescription', label: 'Meta Description', type: 'textarea' },
      ],
    },
  ],
}
