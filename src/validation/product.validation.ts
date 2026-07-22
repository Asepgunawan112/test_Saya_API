import joi from 'joi'

export const createProductValidation = (payload: { name: string; price: number }) => {
  const schema = joi.object({
    name: joi.string().required(),
    price: joi.number().allow('', null),
  })

  return schema.validate(payload)
}
