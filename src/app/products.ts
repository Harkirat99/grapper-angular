export class Product {
    id: string = ''
    productName: string = ''
    category: string = ''
    price: string = ''
    aboutProduct: string = ''
    stock: string = ''
    model: number | undefined
    colour: string = ''
    size: number | undefined
    dimension: string = ''
    discriptionHeading1: string = ''
    discriptionAbout1: string = ''
    discriptionHeading2: string = ''
    discriptionAbout2: string = ''
    discriptionHeading3: string = ''
    discriptionAbout3: string = ''
    weight: string = ''
    countryOrgin: string = ''
    ideal: string = ''
    manufacturer: string = ''
    fromManufacturer: string = ''
    tag: string =''
    // productA1: string = ''
    // productA2: string = ''
    // productA3: string = ''
    // productA4: string = ''
    // productA5: string = ''
    pic: string = ''

    comments: [] | undefined
    images: [] | undefined


    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.id = obj.id
        this.productName = obj.productName
        this.category = obj.category
        this.price = obj.price
        this.aboutProduct = obj.aboutProduct
        this.stock = obj.stock
        this.model = obj.model
        this.colour = obj.colour
        this.size = obj.size
        this.dimension =  obj.dimension
        this.discriptionHeading1 = obj.discriptionHeading1
        this.discriptionAbout1 = obj.discriptionAbout1
        this.discriptionHeading2 = obj.discriptionHeading2
        this.discriptionAbout2 = obj.discriptionAbout2
        this.discriptionHeading3 = obj.discriptionHeading3
        this.discriptionAbout3 = obj.discriptionAbout3
        this.weight = obj.weight
        this.countryOrgin = obj.countryOrgin
        this.ideal = obj.ideal
        this.manufacturer = obj.manufacturer
        this.fromManufacturer = obj.fromManufacturer
        this.tag = obj.tag
        this.pic = obj.pic
        this.images = obj.images

        // this.productA1 = obj.productA1
        // this.productA2 = obj.productA2
        // this.productA3 = obj.productA3
        // this.productA4 = obj.productA4
        // this.productA5 = obj.productA5
        this.comments =  obj.comments


    }
}