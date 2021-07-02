module.exports = {
    accepted: 'El valor del campo :attribute ha sido aceptado.',
    acceptedIf: 'El campo :attribute será aceptado si el parámetro :arg0 es :arg1.',
    acceptedNotIf: 'El campo :attribute no puede ser aceptado si el parámetro :arg0 es :arg1.',
    activeUrl: 'El campo :attribute no posee una url válida.',
    after: 'El campo :attribute debe tener una fecha posterior a :arg0.',
    afterOrEqual: 'El campo :attribute debe tener una fecha posterior o igual a :arg0.',
    alpha: 'El campo :attribute solo puede contener alfabetos.',
    alphaDash: 'El campo :attribute solo puede contener letras, números, y guiones.',
    alphaNum: 'El campo :attribute solo puede contener letras y números.',
    alphaNumeric: 'El campo :attribute solo puede contener letras y números.',
    array: 'El campo :attribute debe ser un arreglo.',
    arrayUnique: 'El campo :attribute debe ser un arreglo de valores únicos.',
    arrayUniqueObjects: 'El campo :attribute debe ser un arreglo de atributos únicos :args del objeto.',
    ascii: 'El campo :attribute solo puede contener caracteres ascii válidos.',
    base64: 'El campo :attribute debe ser una cadena base64 válida.',
    before: 'El campo :attribute debe tener un valor anterior a :arg0.',
    beforeOrEqual: 'El campo :attribute debe ser una fecha anterior o igual a :date.',
    between: 'El valor del campo :attribute debe estar entre :arg0 y :arg1',
    boolean: 'El campo :attribute debe ser booleano.',
    confirmed: 'La confirmación del campo :attribute no coincide.',
    contains: 'El campo :attribute debe contener :arg0.',
    creditCard: 'El valor del campo :attribute debe ser un número de tarjeta válido.',
    date: 'El campo :attribute debe ser una fecha válida.',
    dateAfter: 'El campo :attribute debe ser una fecha posterior a :arg0.',
    dateAfterToday: 'El campo :attribute debe ser una fecha posterior a :arg0 :arg1.',
    dateDaysAfterToday: 'El campo :attribute debe ser una fecha posterior a :arg0 días.',
    dateYearsAfterToday: 'El campo :attribute debe ser una fecha posterior a :arg0 años.',
    dateDaysBeforeToday: 'El campo :attribute debe ser una fecha anterior a :arg0 días.',
    dateYearsBeforeToday: 'El campo :attribute debe ser una fecha anterior :arg0 años.',
    dateBefore: 'El campo :attribute debe ser una fecha anterior a :arg0.',
    dateBeforeToday: 'El campo :attribute debe ser una fecha anterior a :arg0 :arg1.',
    dateFormat: 'El formato del campo :attribute no coincide con el formato de fecha requerido :arg0.',
    datetime: 'El campo :attribute debe ser una fecha y hora válida (YYYY-MM-DD HH:mm:ss).',
    dateiso: 'El campo :attribute debe ser una fecha ISO-8601 válida.',
    decimal: 'El campo :attribute debe ser un valor decimal válido.',
    different: 'El campo :attribute y :arg0 deben ser diferente.',
    digits: 'El campo :attribute debe ser de :arg0 dígitos.',
    digitsBetween: 'El campo :attribute debe estar entre :arg0 y :arg1.',
    dimensions: 'El campo :attribute debe cumplir las restricciones de dimensión como :args.',
    domain: 'El campo :attribute debe ser un dominio válido.',
    email: 'El campo :attribute debe ser una dirección de correo válida.',
    equals: 'El campo :attribute debe ser igual a :arg0.',
    gt: 'El campo :attribute debe ser mayor que :args.',
    gte: 'El campo :attribute debe ser mayor o igual a :args.',
    length: 'La longitud del campo :attribute no es aceptable.',
    lt: 'El campo :attribute debe ser menor que :args',
    lte: 'El campo :attribute debe ser menor o igual a :args',
    hash: 'El campo :attribute debe ser un hash válido :arg0.',
    hex: 'El campo :attribute debe ser un hexadecimal válido.',
    hexColor: 'El campo :attribute debe ser un color hexadecimal válido.',
    in: 'El campo :attribute es inválido.',
    integer: ':attribute debe ser un número entero.',
    ip: ':attribute debe ser una dirección IP válida.',
    ipv4: ':attribute debe ser una dirección IPv4 válida.',
    ipv6: ':attribute debe ser una dirección IPv6 válida.',
    iso8601: ':attribute debe ser una cadena ISO8601 válida.',
    json: 'El campo :attribute debe ser una cadena JSON válida.',
    latLong: 'El campo :attribute debe ser una latitud válida separada por comas y una longitud sin espacios.',
    lengthBetween: 'La longitud del campo :attribute debe estar entre :arg0 - :arg1.',
    macAddress: ':attribute debe ser una dirección mac válida.',
    max: 'El valor del campo :attribute no puede ser mayor a :arg0.',
    maxLength: 'El campo :attribute no puede tener mas de :arg0 caracteres.',
    mime: 'El campo :attribute debe ser un archivo de tipo: :args.',
    min: 'El valor del campo :attribute debe ser al menos :arg0.',
    minLength: 'El valor del campo :attribute no puede menos de :arg0 caracteres.',
    mongoId: 'El campo :attribute debe ser un ID de mongo válido.',
    notContains: 'El campo :attribute no puede contener :arg0.',
    notIn: 'El campo :attribute seleccionado no es válido.',
    nullable: ':attribute es obligatorio.',
    numeric: ':attribute debe ser un número.',
    object: ':attribute debe ser un objeto.',
    phoneNumber: 'El campo :attribute debe ser un número de teléfono válido.',
    regex: 'El formato del campo :attribute no es válido.',
    required: 'El campo :attribute es obligatorio.',
    requiredIf: 'El campo :attribute es obligatorio.',
    requiredNotIf: 'El campo :attribute es obligatorio.',
    requiredWith: 'El campo :attribute es obligatorio.',
    requiredWithout: 'El campo :attribute es obligatorio.',
    same: 'El campo :attribute y :arg0 deben coincidir.',
    size: 'El campo :attribute debe ser :arg0.',
    sometimes: 'El campo :attribute es obligatorio.',
    string: 'El campo :attribute debe ser una cadena.',
    timezone: 'El campo :attribute debe ser una zona válida.',
    unique: 'El campo :attribute ya está en uso.',
    url: 'El formato del campo :attribute no es válido.',
    any: 'Se debe proporcionar al menos uno de los atributos del campo :attribute.',
    $niceNames: {},
    $custom: {
      custom_attribute: 'Message gies here.',
      'custom_attribute.rule': 'Message gies here.'
    },
    $default: 'El valor del campo :attribute está mal formado.'
  }