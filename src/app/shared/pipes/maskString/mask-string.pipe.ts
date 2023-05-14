import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskString'
})
export class MaskStringPipe implements PipeTransform {

  transform(value: string, ): string {
    // get index of '@' from email address
    let emailAddressIndex = value.indexOf('@');
    // get email address value till '@' character
    let newEmailAddress = value.slice(0,emailAddressIndex)

    // replace email part with ***
    return `${newEmailAddress}@****`;
  }

}
