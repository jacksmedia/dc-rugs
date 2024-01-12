export const tokenShortTicker = (ticker: string) => {
    const parts = ticker.split('-')

    return parts[0]
}
