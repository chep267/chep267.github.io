/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** types */
import type { IconSVGProps } from '@module-base/models';

export default function AppLogo(props: IconSVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props} viewBox="0 0 30 30">
            <circle cx={15} cy={15} r={15} fill="#141F49" />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={1.5}
                d="m8.617 20.04 1.103-9.534a.612.612 0 0 1 1.045-.433l5.884 4.913a2.372 2.372 0 0 1 .879 1.837 2.466 2.466 0 0 1-3.201 2.309 2.463 2.463 0 0 1-1.721-2.348c.034-.374.153-.736.346-1.059.14-.257.325-.486.547-.676 1.238-1.071 5.88-4.984 5.88-4.984a.612.612 0 0 1 1.033.446l1.104 9.507"
            />
        </svg>
    );
}
