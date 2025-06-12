'use server'
import { revalidateTag } from 'next/cache'

let count = 1
export async function getNextjsCount() {
    count++
    return {
        code: 0,
        data: count,
    }
}

export async function updateCountTag() {
    revalidateTag('count')
}
