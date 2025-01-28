import { useState, useEffect } from 'react'

export const useOrder = () => {
    const [orderItems, setOrderItems] = useState<{ [key: string]: number }>({})

    useEffect(() => {
        const saved = localStorage.getItem('orderItems')
        if (saved) {
            setOrderItems(JSON.parse(saved))
        }
    }, [])

    const updateQuantity = (productId: string, delta: number) => {
        setOrderItems((prev) => {
            const newQuantity = (prev[productId] || 0) + delta
            const newOrderItems =
                newQuantity <= 0
                    ? (() => {
                        const { [productId]: _, ...rest } = prev
                        return rest
                    })()
                    : { ...prev, [productId]: newQuantity }

            localStorage.setItem('orderItems', JSON.stringify(newOrderItems))
            return newOrderItems
        })
    }

    const resetOrder = () => {
        localStorage.removeItem('orderItems')
        setOrderItems({})
    }

    return {
        orderItems,
        updateQuantity,
        resetOrder,
    }
} 