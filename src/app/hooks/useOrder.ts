const updateQuantity = (productId: string, change: number, size: 'small' | 'big') => {
    setOrderItems((prevItems) => {
        const currentQuantity = prevItems[productId] || { small: 0, big: 0 };
        const newQuantity = { ...currentQuantity };

        if (size === 'small') {
            newQuantity.small = Math.max(0, newQuantity.small + change);
        } else {
            newQuantity.big = Math.max(0, newQuantity.big + change);
        }

        return { ...prevItems, [productId]: newQuantity };
    });
}; 