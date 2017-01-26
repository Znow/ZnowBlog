// truncate.ts
import { Pipe, PipeTransform } from '@angular/core';

/*
 * Truncate text by a given integer length
 * Usage:
 *   value | truncate:length:omit
 * Example:
 *   {{ "Hey, It's me Daniel" |  truncate:10:'...'}}
 *   formats to: "Hey It's m...""
*/
@Pipe({
  name: 'myTruncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
