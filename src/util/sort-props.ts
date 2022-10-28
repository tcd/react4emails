/**
 * Sort an object to match the order of another object.
 *
 * FIXME: `toLowerCase()` isn't correct, need to use AttrMap objects.
 */
export const sortProps = <T>(props: T, sortedProps: T): T => {
    const sorted = Object.keys(sortedProps).reduce(
        (res, key) => {
            res[key.toLowerCase()] = props[key.toLowerCase()]
            return res
        },
        {} as T,
    )
    return sorted
}
