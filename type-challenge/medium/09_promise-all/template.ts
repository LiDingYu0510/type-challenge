declare function PromiseAll<T extends any[]>(
    values: readonly [...T],
): Promise<{
    [P in keyof T]: T[P] extends Promise<infer I> ? I : T[P]
}>
