/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

function createMessageIntl<
    TMessage extends Readonly<Record<string, string>>,
    TReturn extends {
        [TKey in keyof TMessage]: { id: TKey; defaultMessage: TMessage[TKey] };
    },
>(message: TMessage): Readonly<TReturn> {
    const result = {} as TReturn;
    for (const key in message) {
        // @ts-ignore
        result[key] = {
            id: key,
            defaultMessage: message[key],
        };
    }
    return Object.freeze(result);
}

export { createMessageIntl };
