/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Unsubscribe } from 'firebase/firestore';
import type { TypeCallApiPayload, TypeItemIds, TypeItems } from '@module-base/models';
import type { TypeDocumentThreadData, TypeDocumentMessageData } from '@module-messenger/models';

export interface MessengerApiProps {
    /** thread */
    GetListThread: {
        Payload: TypeCallApiPayload<{
            uid: string;
            fnCallback(data: { itemIds: TypeItemIds; items: TypeItems<TypeDocumentThreadData> }): void;
        }>;
        Response?: { unsubscribe: Unsubscribe };
    };
    CreateThread: {
        Payload: TypeCallApiPayload<{
            uid: string;
            tid: string;
            data: TypeDocumentThreadData;
        }>;
        Response?: void;
    };
    MoveThread: {
        Payload: TypeCallApiPayload<{
            uid: string;
            tid: string;
        }>;
        Response?: void;
    };

    /** message */
    GetListMessage: {
        Payload: TypeCallApiPayload<{
            uid: string;
            tid: string;
            fnCallback(data: { itemIds: TypeItemIds; items: TypeItems<TypeDocumentMessageData> }): void;
        }>;
        Response?: { unsubscribe: Unsubscribe };
    };
    CreateMessage: {
        Payload: TypeCallApiPayload<{
            uid: string;
            tid: string;
            mid: string;
            data: TypeDocumentMessageData;
        }>;
        Response: { message: TypeDocumentMessageData };
    };
    SendFile: {
        Payload: TypeCallApiPayload<{
            tid: string;
            mid: string;
            fid: string;
            file: TypeDocumentMessageData['files'][string];
        }>;
        Response?: { fid: string; url: string };
    };
}
