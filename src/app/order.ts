export class Order {
    purpose:string =''
    buyer_name:string =''
    buyer_father_name:string =''
    redirect_url:string =''
    email:string =''
    phone: number | undefined 
    additional_number: number | undefined 
    amount: number | undefined
    street:string =''
    city:string =''
    district:string =''
    state:string =''
    landmark: string = ''
    pincode: number | undefined
    send_email:boolean = true 
    webhook: string = ''
    send_sms:boolean = false
    allow_repeated_payments:boolean = false

    constructor(obj?: any) {
        if (!obj) {
            return;}
        this.purpose = obj.purpose
        this.buyer_name = obj.buyer_name
        this.buyer_father_name= obj.buyer_father_name
        this.email = obj.email
        this.redirect_url = obj.redirect_url
        this.phone = obj.phone
        this.amount = obj.amount
        this.additional_number = obj.additional_number
        this.street = obj.street
        this.city = obj.city
        this.district = obj.district
        this.state = obj.state
        this.landmark = obj.landmark
        this.pincode = obj.pincode
        this.send_email = obj.send_email
        this.webhook = obj.webhook
        this.send_sms = obj.send_sms
        this.allow_repeated_payments = obj.allow_repeated_payments
    }
}