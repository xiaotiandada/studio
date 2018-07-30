import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import cn from 'vee-validate/dist/locale/zh_CN'

Validator.localize('cn', cn)
Vue.use(VeeValidate)

//
// const dictionary = {
//   en: {
//     messages:{
//       alpha: () => 'Some English Message'
//     }
//   },
//   zh_CN: {
//     messages:{
//       alpha: () => '您只能输入字母哦!~',
//       alpha_num: () => '您只能输入字母字符，数字，短划线或下划线哦！~'
//     }
//   }
// };

// Override and merge the dictionaries
// Validator.localize(dictionary);
//
// const validator = new Validator({
//   'first_name' : 'alpha'
// })
//
// validator.localize('zh_CN'); // now this validator will generate messages in Arabic.
