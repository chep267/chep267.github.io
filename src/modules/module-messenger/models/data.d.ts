/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { TypeItemIds, TypeItems } from '@module-base/models';

export type TypeDocumentThreadData = {
    tid: string;
    name?: string;
    type?: 'thread' | 'group';
    members?: TypeItemIds;
    lastMessage?: TypeDocumentMessageData;
};

export type TypeDocumentMessageData = {
    uid: string;
    tid: string;
    mid: string;
    text: string;
    fileIds: TypeItemIds;
    files: TypeItems<{
        fileData?: File | null;
        url: string;
        name: File['name'];
        size: File['size'];
        type: File['type'];
    }>;
    createdTime: number;
    updatedTime: number;
    type: 'text' | 'emoji';
};
