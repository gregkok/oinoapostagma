export interface ItemImage {
    imageURL: string;
    imageDescription: string;
}

export interface Item {
    id: number;
    name: string;
    description?: string;
    category?: string;
    price?: string;
    type?: string;
    image?: ItemImage;
    isNew?: boolean;
    isPremium?: boolean;
    isVegeterian?: boolean;
}

export interface Section {
    sectionName: string;
    isNew?: boolean;
    sectionContent: Item[];
}

export const kouzina: Section[] = [
    {
        sectionName: 'Σαλατες',
        sectionContent: [
            {
                id: 0,
                name: 'Σαλάτα Οινοαπόσταγμα',
                description: 'Σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
                price: '8.80',
            },
            {
                id: 1,
                name: 'Σαλάτα του Καίσαρα',
                description: 'Μαρούλι, κοτόπουλο, παρμεζάνα, καλαμπόκι, κρουτόν και μπέικον',
                price: '8.50',
            },
            {
                id: 2,
                name: 'Ντάκος - Τούρτα',
                description: 'Παξιμαδάκια, ντομάτα, φέτα, κάπαρη και ελιές',
                price: '5.50',
            },
            {
                id: 3,
                name: 'Χωριάτικη',
                description: 'Ντομάτα, αγγούρι, κρεμμύδι, πιπεριές, φέτα και ελιές',
                price: '5.50',
            },
            // {
            //     id: 4,
            //     name: 'Σαλάτα Summer',
            //     description: 'Ανάμεικτη σαλάτα, κράνμπερι, καβουρδισμένο κουκουνάρι, ξινόμηλα, ανθότυρο και σως ροδιού',
            //     price: '8.50',
            // },
            {
                id: 108,
                name: 'Πολίτικη',
                description: 'Λάχανο, καρότο, πολύχρωμες πιπεριές φινόκιο, πράσινο μήλο',
                price: '7.00',
                isNew: true,
            },
        ]
    },
    {
        sectionName: 'Τσιμπολογήματα',
        sectionContent: [
            {
                id: 5,
                name: 'Φέτα με λαδορίγανη',
                price: '3.50',
            },
            {
                id: 6,
                name: 'Σαγανάκι κεφαλοτύρι',
                price: '4.50',
            },
            {
                id: 7,
                name: 'Πατάτες τηγανιτές',
                price: '3.50',
            },
            {
                id: 8,
                name: 'Πατάτες',
                description: 'Με λιωμένο τυρί και καραμελωμένο μπέικον',
                price: '5.50',
            },
            {
                id: 106,
                name: 'Τυροκαυτερή',
                price: '3.50',
            },
            {
                id: 107,
                name: 'Μελιτζανοσαλάτα καπνιστή',
                price: '4.50',
                isVegeterian: true,
            },
        ]
    },
    {
        sectionName: 'Μεζεκλίκια',
        sectionContent: [
            {
                id: 103,
                name: 'Αυγά με πατάτες',
                price: '4.50',
            },
            {
                id: 10,
                name: 'Μανιτάρια πόρτομπελο',
                description: 'Γεμιστά με τυρί',
                price: '6.50',
            },
            {
                id: 19,
                name: 'Μανιτάρια πλευρώτους',
                description: 'Στην σχάρα',
                price: '6.80',
                isVegeterian: true,
            },
            {
                id: 105,
                name: 'Ψητά λαχανικά',
                description: 'Με ανθότυρο και βαλσάμικο',
                price: '4.50',
                isVegeterian: true,
            },
            {
                id: 105,
                name: 'Αφράτοι Κολοκυθοκεφτέδες',
                description: 'Με γιαουρτάκι',
                price: '4.50',
                isVegeterian: true,
            },
            {
                id: 86,
                name: 'Κεφτεδάκια',
                price: '6.50',
            },
            {
                id: 104,
                name: 'Φέτα στο τηγάνι',
                description: 'Με μέλι και σουσάμι',
                price: '5.00',
            },
            // {
            //     id: 9,
            //     name: 'Πατάτα γεμιστή',
            //     description: 'Με τυρί και μπεικον',
            //     price: '5.80',
            // },
            // {
            //     id: 101,
            //     name: 'Πατάτα γεμιστή',
            //     description: 'Με λαχανικά και φυτικό βούτηρο',
            //     price: '5.00',
            //     isVegeterian: true,
            // },
            {
                id: 13,
                name: 'Καταϊφάκια αλμυρά',
                description: 'Με μέλι και ανθότυρο',
                price: '6.00',
            },
            // {
            //     id: 12,
            //     name: 'Τηγανόψωμο',
            //     price: '6.00',
            // },
            {
                id: 35,
                name: 'Μεζες',
                price: '',
                type: 'title',
            },
            {
                id: 36,
                name: '',
                category: 'Για 2',
                price: '8.00',
                type: 'category'
            },
            {
                id: 37,
                name: '',
                category: 'Για 4',
                price: '16.00',
                type: 'category'
            },
        ]
    },
    {
        sectionName: 'Για μερακλήδες',
        sectionContent: [
            {
                id: 118,
                name: 'Παστουρμάς',
                price: '5.00',
            },
            {
                id: 119,
                name: 'Απάκι',
                price: '5.00',
            },
            {
                id: 120,
                name: 'Σουτζούκι',
                price: '5.00',
            },
            {
                id: 121,
                name: 'Καβουρμάς',
                price: '5.00',
            },
            {
                id: 122,
                name: 'Η ποικιλία του μερακλή',
                price: '9.00',
            },
        ]
    },
    // {
    //     sectionName: 'Θαλασσινα',
    //     isNew: true,
    //     sectionContent: [
    //         {
    //             id:,
    //             name: 'Προσεχώς',
    //             image: {
    //                 imageURL: '',
    //                 imageDescription: 'kataifakia',
    //             }
    //         },
    //     ]
    // },
    {
        sectionName: 'Τηγανιές',
        sectionContent: [
            {
                id: 14,
                name: 'Τηγανιά κοτόπουλο αλα κρέμ',
                description: 'Με πιπεριές και μπείκον',
                price: '7.80',
            },
            {
                id: 15,
                name: 'Τηγανιά κοτόπουλο',
                description: 'Σβησμένη με μαστίχα',
                price: '7.80',
            },
            {
                id: 16,
                name: 'Τηγανιά χοιρινή "μεθυσμένη"',
                description: 'Σβησμένη με κρασί και σως φέτας',
                price: '7.80',
            },
            {
                id: 123,
                name: 'Τηγανιά"',
                description: 'με ποικιλία μανιταριών και ανθότυρο',
                price: '7.00',
                isVegeterian: true,
            },
        ]
    },
    {
        sectionName: 'Σχαρα',
        sectionContent: [
            {
                id: 22,
                name: 'Μπιφτέκια μοσχαρίσια',
                description: 'Στην σχάρα',
                price: '8.50',
            },
            {
                id: 23,
                name: 'Μπιφτέκια λαχανικών',
                price: '8.80',
            },
            {
                id: 24,
                name: 'Μπιφτέκια κοτόπουλο',
                description: 'Με ψητά λαχανικά',
                price: '8.50',
            },
            {
                id: 25,
                name: 'Πανσετάκια',
                description: 'Με πατάτες και σως',
                price: '8.00',
            },
            {
                id: 27,
                name: 'Φιλέτο στήθος κοτόπουλο',
                price: '7.80',
            },
            {
                id: 28,
                name: 'Φιλέτο κοτόπουλο πανέ',
                description: 'Με πατάτες',
                price: '7.80',
            },
            {
                id: 29,
                name: 'Λουκάνικο χωριάτικο Βόλου',
                price: '6.50',
            },
            {
                id: 26,
                name: 'Ζουμερά μπριζολάκια χοιρινά',
                description: 'Με πατάτες και σως BBQ',
                price: '8.00',
            },
            {
                id: 109,
                name: 'Σπαλομπριζόλα μοσχαρίσια',
                description: '2 ατομων',
                price: '21.00',
            },
            {
                id: 123,
                name: 'Παιδάκια αρνιού καρέ"',
                price: '15.00',
            },
            {
                id: 32,
                name: 'Ποικιλία κρεατικων',
                description: 'Λουκάνικο, πανσέτα, μπριζολάκια, πατάτες, μπιφτέκια, πίτες',
                price: '',
                type: 'title',
            },
            {
                id: 33,
                name: '',
                category: '2 ατόμων',
                price: '18.00',
                type: 'category'
            },
            {
                id: 34,
                name: '',
                category: '4 ατόμων',
                price: '36.00',
                type: 'category'
            }
        ]
    },
    {
        sectionName: 'Τα γλυκά μας',
        sectionContent: [
            {
                id: 124,
                name: 'Καταίφι',
            },
            {
                id: 125,
                name: 'Καταίφι με παγωτό',
                price: '5.50',
            },
            {
                id: 126,
                name: 'Κορμός',
                price: '2.50',
            },
            {
                id: 127,
                name: 'Σοκολατόπιτα',
            },
            {
                id: 128,
                name: 'Παγωτό',
                description: 'Γεύσεις: Σοκολάτα GOLD, Φράουλα, κανέλα σταφίδα',
                price: '2.50',
            },
        ]
    },
];

export const kava: Section[] = [
    {
        sectionName: 'Τσιπουράκι',
        sectionContent: [
            {
                id: 38,
                name: 'Tσιλιλή',
                description: 'Χωρίς γλυκάνισο 200ml',
                price: '8.50',
            },
            {
                id: 39,
                name: 'Tσιλιλή',
                description: 'Με γλυκάνισο 200ml',
                price: '9.00',
            },
            {
                id: 40,
                name: 'Αγιονέρι παλαιωμένο τσίπουρο',
                price: '11.50',
            },
            {
                id: 41,
                name: 'Αποστολάκη ',
                price: '9.50',
            },
            {
                id: 87,
                name: 'Ηδωνικό 200ml',
                price: '9.50',
            },
            {
                id: 90,
                name: 'Μαυρο Ρόδο 200ml',
                price: '9.50',
            },
            {
                id: 110,
                name: 'Γάτσιου 200ml',
                price: '10.00',
                isNew: true,
            },
            {
                id: 43,
                name: 'Τσίπουρο χύμα (μετέωρα)',
                price: '',
                type: 'title',
            },
            {
                id: 44,
                name: '',
                category: '100ml',
                price: '4.00',
                type: 'category'
            },
            {
                id: 45,
                name: '',
                category: '250ml',
                price: '8.00',
                type: 'category'
            },
        ]
    },
    {
        sectionName: 'Ρακομελάκι',
        sectionContent: [
            {
                id: 46,
                name: 'Ρακομελάκι ζεστό',
                price: '',
                type: 'title',
            },
            {
                id: 47,
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                id: 48,
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
            {
                id: 49,
                name: '',
                category: '500ml',
                price: '16.50',
                type: 'category'
            },
            {
                id: 50,
                name: 'Οινόμελο ζεστό η κρύο',
                price: '',
                type: 'title',
            },
            {
                id: 51,
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                id: 52,
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
            {
                id: 53,
                name: '',
                category: '500ml',
                price: '16.50',
                type: 'category'
            },
            {
                id: 54,
                name: 'Μαστίχα',
                price: '',
                type: 'title',
            },
            {
                id: 55,
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                id: 56,
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
            {
                id: 93,
                name: 'Λεμοντσέλο',
                price: '',
                type: 'title',
            },
            {
                id: 94,
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                id: 95,
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            }
        ]
    },
    {
        sectionName: 'Ουζάκι ',
        sectionContent: [
            {
                id: 58,
                name: 'Καζανιστό 200ml',
                price: '9.00',
            },
            {
                id: 59,
                name: 'Βενιαμίν 200ml',
                price: '9.00',
            },
            {
                id: 60,
                name: 'Ποτήρι 50ml',
                price: '3.50',
            },
            {
                id: 61,
                name: 'Πλωμάρι 200ml',
                price: '9.50',
            },
            {
                id: 88,
                name: 'Καζανιστό Εξ’ Αποστάξεως',
                price: '10.00',
                isPremium: true,
            },
            {
                id: 89,
                name: 'Βαρβαγιάννη μπλέ 200ml',
                price: '9.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
        ]
    },
    {
        sectionName: 'Οινοιαποστάγματα Σπέσιαλ',
        sectionContent: [
            {
                id: 96,
                name: 'Ρακί με γεύση φουντούκι',
                price: '',
                type: 'title',
            },
            {
                id: 94,
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                id: 95,
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
        ]
    },
    {
        sectionName: 'Μπύρες',
        sectionContent: [
            {
                id: 63,
                name: 'Άλφα ποτήρι μικρό',
                price: '3.20',
            },
            {
                id: 64,
                name: 'Άλφα ποτήρι μεγάλο',
                price: '4.20',
            },
            {
                id: 92,
                name: 'Άλφα weiss 500ml',
                price: '4.50',
            },
            {
                id: 65,
                name: 'Heineken 500ml',
                price: '4.50',
            },
            {
                id: 98,
                name: 'Κόρφου κόκκινη 500ml',
                price: '5.50',
            },
            {
                id: 66,
                name: 'Κόρφου bitter dark 330ml',
                price: '5.50',
            },
            {
                id: 67,
                name: 'Mάμος 500ml',
                price: '4.50',
            },
            {
                id: 99,
                name: 'Fisher 500ml',
                price: '5.00',
            },
            {
                id: 100,
                name: 'Madam pilsner 330ml',
                price: '5.50',
            },
            {
                id: 114,
                name: 'Χίος καπνιστή 330ml',
                price: '5.50',
                isNew: true,
            },
            {
                id: 115,
                name: 'Χίος India Pale Ale 330ml',
                price: '5.50',
                isNew: true,
            },
            {
                id: 116,
                name: 'Μηλοκλέφτης 330ml',
                price: '4.00',
                isNew: true,
            },
            {
                id: 117,
                name: 'Beer of the week',
                description: 'Ρωτήστε μας',
                price: '',
            },
            {
                id: 68,
                name: 'Άλφα χωρίς αλκοόλ 500ml',
                price: '4.00',
            },
        ]
    },
    {
        sectionName: 'Οινος',
        sectionContent: [
            {
                id: 69,
                name: 'Λευκό, κόκκινο ή ημίγλυκο',
                price: '',
                type: 'title',
            },
            {
                id: 70,
                name: '',
                category: 'Ποτήρι',
                price: '4.00',
                type: 'category'
            },
            {
                id: 71,
                name: '',
                category: '500ml',
                price: '7.00',
                type: 'category'
            },
            {
                id: 72,
                name: '',
                category: '1 λίτρο',
                price: '14.00',
                type: 'category'
            },
            {
                id: 73,
                name: 'Ντουράκη ριζίτης',
                description: 'Μπουκάλι',
                price: '16.00',
            },
            {
                id: 74,
                name: 'Κτήμα',
                description: 'Μπουκάλι',
                price: '',
            },
        ]
    },
    {
        sectionName: 'Τα βαριά',
        sectionContent: [
            {
                id: 82,
                name: 'Ουίσκι',
                price: '7.00',
            },
            {
                id: 83,
                name: 'Βότκα',
                price: '7.00',
            },
            {
                id: 84,
                name: 'Τζιν',
                price: '7.00',
            },
            {
                id: 85,
                name: 'Ρούμι',
                price: '7.00',
            },
            {
                id: 111,
                name: 'Σφηνάκια',
                price: '2.50',
            },
            {
                id: 112,
                name: 'Υποβρύχιο ¨Οίνο¨',
                price: '4.50',
                isNew: true,
            },
            {
                id: 113,
                name: 'Vodka Pink Soda',
                price: '8.00',
            },
        ]
    },
    {
        sectionName: 'Αναψυκτικά',
        sectionContent: [
            {
                id: 75,
                name: 'Coca Cola',
                price: '2.20',
            },
            {
                id: 76,
                name: 'Coca Cola light',
                price: '2.20',
            },
            {
                id: 91,
                name: 'Τhree Cents Pink Grapefruit Soda',
                price: '4.00',
            },
            {
                id: 77,
                name: 'Βίκος γκαζόζα',
                price: '2.20',
            },
            {
                id: 78,
                name: 'Βίκος πορτοκαλάδα',
                price: '2.20',
            },
            {
                id: 79,
                name: 'Πορτοκαλάδα μπλε',
                price: '2.20',
            },
            {
                id: 80,
                name: 'Σόδα',
                price: '2.00',
            },
            {
                id: 81,
                name: 'Νερό λίτρο',
                price: '1.50',
            },
        ]
    }
];

// max id number: 117

