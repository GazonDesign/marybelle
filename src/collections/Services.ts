import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Услуга',
    plural: 'Услуги',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
      admin: {
        description: 'Например: remont-shub',
      },
    },
    {
      name: 'description',
      label: 'Краткое описание',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Фото для карточки',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'icon',
      label: 'Иконка (путь)',
      type: 'text',
      admin: {
        description: 'Например: /icons/services/repair.svg',
      },
    },
    {
      name: 'heroImage',
      label: 'Фото для hero-блока',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'fullDescription',
      label: 'Полное описание услуги',
      type: 'richText',
    },
    {
      name: 'features',
      label: 'Что включено',
      type: 'array',
      fields: [
        { name: 'title', label: 'Заголовок', type: 'text', required: true },
        { name: 'description', label: 'Описание', type: 'textarea', required: true },
        { name: 'image', label: 'Фото', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'prices',
      label: 'Цены',
      type: 'array',
      fields: [
        { name: 'label', label: 'Услуга', type: 'text', required: true },
        { name: 'price', label: 'Цена', type: 'text', required: true },
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
