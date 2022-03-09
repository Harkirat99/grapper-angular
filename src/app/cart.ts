export class Cart {

    id: string = ''
    userId: string = ''
    productId: string = ''
    quantity: number | undefined 
    price: number | undefined 
    total: number | undefined 
    subTotal: number | undefined 



    constructor(obj?: any) {
   
        if (!obj) {
            return;
        }

        this.id = obj.id
        this.userId = obj.userId
        this.productId = obj.productId
        this.quantity = obj.quantity
        this.price = obj.price
        this.total = obj.total
        this.subTotal = obj.subTotal

    }
}