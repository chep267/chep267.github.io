/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { DataSnapshot, QueryConstraint } from '@firebase/database';
import type { Unsubscribe } from '@firebase/firestore';

type CallApiDebounceType = { timer?: number };

type CallApiPayloadType<Data = unknown> = CallApiDebounceType & Data;

type CallApiResponseType<Data = unknown> = {
    data: Data;
    fnCallback(snapshot: DataSnapshot, previousChildName?: string | null | undefined): unknown;
};

type GetParamsType = {
    path?: string;
    queryConstraints?: QueryConstraint[];
};

interface RealtimeDatabaseApiProps {
    Get: {
        Payload: CallApiPayloadType<GetParamsType>;
        Response?: CallApiResponseType;
    };
    OnGet: {
        Payload: CallApiPayloadType<
            GetParamsType & { type?: 'child-add' | 'child-remove' | 'child-change'; callback: () => void }
        >;
        Response?: CallApiResponseType;
    };
    SET: {
        Payload: CallApiPayloadType<GetParamsType>;
        Response?: CallApiResponseType;
    };
}

interface FirestoreApiProps {
    Get: {
        Payload: {
            path: string;
            pathSegments: string | string[];
            fnCallback: any;
        };
        Response?: { unsubscribe: Unsubscribe };
    };
    OnGet: {
        Payload: {
            path: string;
            pathSegments: string | string[];
            fnCallback: any;
        };
        Response?: { unsubscribe: Unsubscribe };
    };
    Set: {
        Payload: {
            path: string;
            pathSegments: string | string[];
            data: any;
        };
        Response: void;
    };
}

export type { RealtimeDatabaseApiProps, CallApiPayloadType, CallApiResponseType, FirestoreApiProps };
