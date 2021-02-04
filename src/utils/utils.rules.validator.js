/* eslint no-template-curly-in-string: "off" */
export default class RulesValidator {
  static defaultValidateMessages = {
    required: '${label}을(를) 입력해주세요.',
    types: {
      email: `유효하지 않은 이메일 형식입니다.`,
    },
    string: {
      len: '${label}은(는) ${len}자 이어야 합니다.',
      min: '${label}은(는) ${min}자 이상 입력해주세요.',
      max: '${label}은(는) ${max}자 이하로 입력해주세요.',
      range: '${label}은(는) ${min}자 이상 ${max}자 이내로 입력해주세요.',
    },
  }
}
