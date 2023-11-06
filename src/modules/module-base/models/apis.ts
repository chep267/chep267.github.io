/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { DataSnapshot, QueryConstraint } from 'firebase/database';

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

export type { RealtimeDatabaseApiProps, CallApiPayloadType, CallApiResponseType };
