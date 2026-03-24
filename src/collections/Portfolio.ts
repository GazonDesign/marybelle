import type { CollectionConfig } from 'payload'

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  labels: {
    singular: 'Работа',
    plural: 'Портфолио',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
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
      name: 'category',
      label: 'Категория',
      type: 'select',
      required: true,
      options: [
        { label: 'Ремонт шуб', value: 'Ремонт шуб' },
        { label: 'Окрашивание', value: 'Окрашивание' },
        { label: 'Перекрой', value: 'Перекрой' },
        { label: 'Химчистка', value: 'Химчистка' },
        { label: 'Ремонт дублёнок', value: 'Ремонт дублёнок' },
        { label: 'Ремонт кожи', value: 'Ремонт кожи' },
      ],
    },
    {
      name: 'description',
      label: 'Описание работы',
      type: 'textarea',
    },
    {
      name: 'beforeImage',
      label: 'Фото ДО',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'afterImage',
      label: 'Фото ПОСЛЕ',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'singleImage',
      label: 'Одно фото (если нет до/после)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'duration',
      label: 'Срок работы',
      type: 'text',
      admin: {
        description: 'Например: 14 дней',
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
  ],
}
