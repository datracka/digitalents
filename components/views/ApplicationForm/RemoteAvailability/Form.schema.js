export default () => ({
  type: 'object',
  properties: {
    remoteHourlyRate: {
      type: 'number',
      messages: {
        type: '~Enter correct number',
      },
      default: 0,
    },
    availableHoursPerWeek: {
      type: 'number',
      messages: {
        type: '~Enter correct number',
      },
      default: 0,
    },
  },
  required: [],
});
