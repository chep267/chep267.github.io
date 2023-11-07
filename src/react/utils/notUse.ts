/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/** test tree-shaking */
function notUsed() {
    alert('should not bundle');
    return 'NOT_USED';
}

export { notUsed };
