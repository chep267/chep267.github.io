/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Unsubscribe } from '@firebase/firestore';
import type { CallApiPayloadType, TypeItemIds, TypeItems } from '@module-base/models';

type DocumentTypeThreadData = {
    tid: string;
    name: string;
    type: 'thread' | 'group';
    members: string[];
};

interface MessengerApiProps {
    GetListThread: {
        Payload: CallApiPayloadType<{
            uid: string;
            fnCallback(data: { itemIds: TypeItemIds; items: TypeItems<any> }): void;
        }>;
        Response?: { unsubscribe: Unsubscribe };
    };
    CreateThread: {
        Payload: CallApiPayloadType<{
            uid: string;
            tid: string;
            data: DocumentTypeThreadData;
        }>;
        Response?: void;
    };
    MoveThread: {
        Payload: CallApiPayloadType<{
            uid: string;
            tid: string;
        }>;
        Response?: void;
    };
}

export type { MessengerApiProps, DocumentTypeThreadData };
