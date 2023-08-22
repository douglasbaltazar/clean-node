import { MissingParamError } from "../../errors"
import { Validation } from "./validation"
import { ValidationComposite } from "./validation-composite"

// interface SutTypes {

// }

const makeSut = (validations: Validation): ValidationComposite => {
  return new ValidationComposite([validations])
}

describe('validation Composite', () => {
  test('Should return an error if any validation fails', () => {
    class ValidationStub implements Validation {
      validate (input: any): Error | null {
        return new MissingParamError('field')
      }
    }
    const validationStub = new ValidationStub()
    const sut = makeSut(validationStub)
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
