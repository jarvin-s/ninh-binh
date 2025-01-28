import { products } from '@/lib/products'

export const calculateTotal = (orderItems: { [key: string]: number }) => {
    return products.reduce((total, product) => {
        const quantity = orderItems[product.id] || 0
        if (typeof product.price === 'number') {
            return total + product.price * quantity
        }
        return total + (product.price || 0) * quantity
    }, 0)
}