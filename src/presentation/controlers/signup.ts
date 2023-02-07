import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../protocols/missing-param-errors'

export class SingUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
