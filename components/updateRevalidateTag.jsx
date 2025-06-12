'use client'
import { updateCountTag } from '../app/api'

export function UpdateRevalidateTag() {
    function onClick() {
        console.log('updated')

        updateCountTag()
    }
    return <button onClick={onClick}>updateRevalidateTag</button>
}
