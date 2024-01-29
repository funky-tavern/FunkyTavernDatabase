export interface BaseConverter<T> {
    to: (any) => T;
    from: (T) => T;
}
