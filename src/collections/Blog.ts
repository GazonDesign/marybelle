import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',
  labels: {
    singular: 'Статья',
    plural: 'Блог',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Контент',
    defaultColumns: ['title', 'status', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок',
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
      name: 'excerpt',
      label: 'Краткое описание',
      type: 'textarea',
    },
    {
      name: 'content',
      label: 'Содержание',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Обложка',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'readTime',
      label: 'Время чтения (мин)',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      label: 'Статус',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Черновик', value: 'draft' },
        { label: 'Опубликовано', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      label: 'Дата публикации',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
