export const createProdAction = (product: any) => {
    return {
        type: 'PRODUCT_CREATE',
        payload: product,
    }
}

export const deleteProdAction = (id: any) => {
    return {
        type: 'PRODUCT_DELETE',
        payload: id,
    }
}

export const updateProdAction = (product: any) => {
    return {
        type: 'PRODUCT_UPDATE',
        payload: product,
    }
}