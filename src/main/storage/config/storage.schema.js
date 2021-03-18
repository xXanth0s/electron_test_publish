export const storageSchema = {
  index: {
    type: 'integer',
    minimum: 0,
  },
  tasks: {
    type: 'object',
    patternProperties: {
      "^.*$": {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            minimum: 0,
          },
          title: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          checked: {
            type: 'boolean',
            default: false
          }
        },
        required: ['id', 'title']
      }
    },
    "additionalProperties": false,
  }
}
