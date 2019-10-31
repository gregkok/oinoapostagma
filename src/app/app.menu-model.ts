export interface Item {
    name: string;
    description?: string;
    price: string;
}

export interface Title {
    titleName: string;
    content: Item[];
}