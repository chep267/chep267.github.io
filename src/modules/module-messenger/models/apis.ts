/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Unsubscribe } from '@firebase/firestore';
import type { CallApiPayloadType, TypeItemIds, TypeItems } from '@module-base/models';

type TypeDocumentThreadData = {
    tid: string;
    name: string;
    type: 'thread' | 'group';
    members: string[];
};

type TypeDocumentMessageData = {
    uid: string;
    tid: string;
    mid: string;
    text: string;
    fileIds: TypeItemIds;
    files: TypeItems<File & { url: string }>;
    createdTime: number;
    updatedTime: number;
    type: 'text' | 'emoji';
};

interface MessengerApiProps {
    /** thread */
    GetListThread: {
        Payload: CallApiPayloadType<{
            uid: string;
            fnCallback(data: { itemIds: TypeItemIds; items: TypeItems<TypeDocumentThreadData> }): void;
        }>;
        Response?: { unsubscribe: Unsubscribe };
    };
    CreateThread: {
        Payload: CallApiPayloadType<{
            uid: string;
            tid: string;
            data: TypeDocumentThreadData;
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

    /** message */
    GetListMessage: {
        Payload: CallApiPayloadType<{
            uid: string;
            tid: string;
            fnCallback(data: { itemIds: TypeItemIds; items: TypeItems<TypeDocumentMessageData> }): void;
        }>;
        Response?: { unsubscribe: Unsubscribe };
    };
    CreateMessage: {
        Payload: CallApiPayloadType<{
            uid: string;
            tid: string;
            mid: string;
            data: TypeDocumentMessageData;
        }>;
        Response?: void;
    };
    SendFile: {
        Payload: CallApiPayloadType<{
            tid: string;
            mid: string;
            fid: string;
            file: File;
        }>;
        Response?: { fid: string; url: string };
    };
}

export type { MessengerApiProps, TypeDocumentThreadData, TypeDocumentMessageData };
