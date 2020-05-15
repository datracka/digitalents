export default () => ({
  type: 'object',
  properties: {
    hourlyRate: {
      type: 'number',
      minimum: 0.01,
      messages: {
        type: '~Enter correct number',
        minimum: '~Minimum 0.01',
        required: '~Required field',
      },
    },
    onSiteAvailable: {
      type: 'boolean',
      default: false,
    },
    maxTravelDistanceKm: {
      type: 'number',
      messages: {
        type: '~Enter correct number',
      },
      default: 0,
    },
    city: {
      type: 'string',
      default: '',
    },
    country: {
      type: 'string',
      default: '',
    },
    countryState: {
      type: 'string',
      default: '',
    },
    zipCode: {
      type: 'string',
      messages: {
        required: '~Required field',
      },
    },
    submitApplication: {
      type: 'boolean',
      default: true,
    },
  },
  required: ['hourlyRate', 'zipCode'],
});
