export default () => ({
  type: 'object',
  properties: {
    profileImageUrl: {
      type: 'string',
      format: 'url',
      messages: {
        format: '~Incorrect url format',
      },
    },
    firstName: {
      type: 'string',
      messages: {
        required: '~Required field',
      },
    },
    lastName: {
      type: 'string',
      messages: {
        required: '~Required field',
      },
    },
    aboutMe: {
      type: 'string',
      default: '',
    },
  },
  required: ['firstName', 'lastName'],
});
