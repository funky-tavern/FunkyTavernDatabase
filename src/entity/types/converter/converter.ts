export interface BaseConverter<T> {
    to(value: any): T;
    from(value: T): any;
}
