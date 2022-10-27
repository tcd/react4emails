import _merge from "lodash/merge"

/**
 * Wrapper around [`_.merge`](https://lodash.com/docs/4.17.15#merge) that does not mutate objects.
 */
export const merge = <TSource>(...sources: TSource[]): TSource => {
    if (!Array.isArray(sources)) {
        throw new Error("[merge] invalid argument")
    }
    return _merge({}, ...sources)
}
