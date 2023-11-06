export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'employer',
      title: 'Employer',
      description: 'Name of employer',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Job title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Description of job',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
