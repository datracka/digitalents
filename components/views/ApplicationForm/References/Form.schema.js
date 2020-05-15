export default () => ({
  type: 'object',
  properties: {
    githubId: {
      type: 'string',
      default: '',
    },
    linkedinUrl: {
      type: 'string',
      format: 'url',
      messages: {
        format: '~Incorrect url format',
      },
    },
    xingUrl: {
      type: 'string',
      format: 'url',
      messages: {
        format: '~Incorrect url format',
      },
    },
    website: {
      type: 'string',
      format: 'url',
      messages: {
        format: '~Incorrect url format',
      },
    },
  },
  required: [],
});
