export default () => ({
  messageEnter,
  messagePromptEmail,
  messagePasswordLength,
  messagePromptPassword,
  messagePromptAccountType,
}) => ({
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      messages: {
        format: messagePromptEmail,
        required: messageEnter,
      },
    },
    password: {
      minLength: 8,
      type: 'string',
      messages: {
        minLength: messagePasswordLength,
        required: messagePromptPassword,
      },
    },
    accountType: {
      enum: ['freelancer', 'company'],
      messages: {
        required: messagePromptAccountType,
      },
    },
  },
  required: ['accountType', 'email', 'password'],
});
