export default () => ({
  type: 'object',
  properties: {
    freelancerTypes: {
      type: 'array',
      minItems: 1,
      messages: {
        minItems: '~Check at least one checkbox',
      },
      default: [],
    },
    resumeUrl: {
      type: 'string',
      format: 'url',
      messages: {
        format: '~Incorrect url format',
      },
    },
  },
  required: [],
});
