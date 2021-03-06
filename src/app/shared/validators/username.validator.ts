import { FormControl } from '@angular/forms';

export class UsernameValidator {

  static validUsername(fc: FormControl) {
    if (fc.value.toLowerCase() === "abc" || fc.value.toLowerCase() === "123") {
      return {
        validUsername: true
      };
    } else {
      return null;
    }
  }
}
