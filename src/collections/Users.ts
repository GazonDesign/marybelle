import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  auth: true,
  access: {
    // Allow creating the first user when no users exist
    create: async ({ req }) => {
      const users = await req.payload.find({ collection: 'users', limit: 1 })
      if (users.totalDocs === 0) return true
      return !!req.user
    },
  },
  admin: {
    useAsTitle: 'email',
    group: 'Настройки',
  },
  fields: [
    {
      name: 'name',
      label: 'Имя',
      type: 'text',
    },
    {
      name: 'role',
      label: 'Роль',
      type: 'select',
      defaultValue: 'editor',
      options: [
        { label: 'Администратор', value: 'admin' },
        { label: 'Редактор', value: 'editor' },
      ],
    },
  ],
}
