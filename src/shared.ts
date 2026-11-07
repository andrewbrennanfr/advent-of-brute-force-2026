export const error = (value?: unknown): never => {
    throw new Error(inspect(value))
}

export const inspect = (value: unknown): string =>
    Bun.inspect(value, {
        colors: Bun.enableANSIColors,
        depth: Infinity,
        sorted: true,
    })

export const log = <T>(value: T, ...values: unknown[]): T => {
    console.log([value, ...values].map(inspect).join("\n"), "\n")

    return value
}
