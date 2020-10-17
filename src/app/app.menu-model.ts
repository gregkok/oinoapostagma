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
                image: {
                    imageURL: 'assets/images/salataOinoapostagma.jpg',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 1,
                name: 'Σαλάτα του Καίσαρα',
                description: 'Μαρούλι, κοτόπουλο, παρμεζάνα, καλαμπόκι, κρουτόν και μπέικον',
                price: '8.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 2,
                name: 'Ντάκος - Τούρτα χανιώτικη',
                description: 'Παξιμαδάκια, ντομάτα, φέτα, κάπαρη και ελιές',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 3,
                name: 'Χωριάτικη',
                description: 'Ντομάτα, αγγούρι, κρεμμύδι, πιπεριές, φέτα και ελιές',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 4,
                name: 'Σαλάτα Summer',
                description: 'Ανάμεικτη σαλάτα, κράνμπερι, καβουρδισμένο κουκουνάρι, ξινόμηλα, ανθότυρο και σως ροδιού',
                price: '8.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 108,
                name: 'Πολίτικη',
                description: 'Λευκό-κόκκινο λάχανο, καρότο, σέλερι, σταφίδες, χαλούμι',
                price: '8.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isNew: true,
            },
        ]
    },
    {
        sectionName: 'Μεζεκλίκια',
        sectionContent: [
            {
                id: 5,
                name: 'Φέτα με λαδορίγανη',
                price: '3.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 104,
                name: 'Φέτα στο τηγάνι',
                description: 'Με μέλι και σουσάμι',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 6,
                name: 'Σαγανάκι κεφαλοτύρι',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 7,
                name: 'Πατάτες τηγανιτές',
                price: '3.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 8,
                name: 'Πατάτες',
                description: 'Με λιωμένο τυρί και μπέικον',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 9,
                name: 'Πατάτα γεμιστή',
                description: 'Με τυρί και μπεικον',
                price: '5.80',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 101,
                name: 'Πατάτα γεμιστή',
                description: 'Με λαχανικά και φυτικό βούτηρο',
                price: '5.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isVegeterian: true,
            },
            {
                id: 103,
                name: 'Αυγά με πατάτες',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 10,
                name: 'Μανιτάρια πόρτομπελο',
                description: 'Γεμιστά με τυρί',
                price: '6.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 102,
                name: 'Μανιτάρια πλευρότους',
                description: 'Στην σχάρα',
                price: '6.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isVegeterian: true,
            },
            // {
            //     id: 11,
            //     name: 'Καρβελάκι γεμιστό',
            //     description: 'Με μοσχαρίσιο κρέας',
            //     price: '7.50',
            //     image: {
            //         imageURL: '',
            //         imageDescription: 'kataifakia',
            //     }
            // },
            {
                id: 12,
                name: 'Τηγανόψωμο',
                price: '6.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 86,
                name: 'Κεφτεδάκια',
                price: '6.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 105,
                name: 'Κολοκυθοκεφτέδες',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isVegeterian: true,
            },
            {
                id: 13,
                name: 'Καταϊφάκια αλμυρά',
                description: 'Με μέλι και  φέτα',
                price: '5.50',
                image: {
                    imageURL: 'assets/images/saganaki_meli_squared.jpg',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 106,
                name: 'Τυροκαυτερή',
                price: '3.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 107,
                name: 'Μελιτζανοσαλάτα καπνιστή',
                price: '4.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isVegeterian: true,
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
        sectionName: 'Σχαρα',
        sectionContent: [
            {
                id: 22,
                name: 'Μπιφτέκια μοσχαρίσια',
                description: 'Στην σχάρα',
                price: '8.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 23,
                name: 'Μπιφτέκια γεμιστά',
                description: 'Με γραβιέρα',
                price: '8.80',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 24,
                name: 'Μπιφτέκια κοτόπουλο',
                description: 'Με ψητά λαχανικά',
                price: '8.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 25,
                name: 'Πανσετάκια',
                description: 'Με πατάτες και σως Οινοαπόσταγμα',
                price: '7.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 26,
                name: 'Μπριζολάκια χοιρινά',
                description: 'Με πατάτες και σως BBQ',
                price: '7.50',
                image: {
                    imageURL: 'assets/images/mprizolakia.jpg',
                    imageDescription: 'Mprizolakia xoirina',
                },
            },
            {
                id: 109,
                name: 'Μπριζόλα χοιρινή',
                description: 'Σταβλίσια',
                price: '16.00',
                image: {
                    imageURL: '',
                    imageDescription: 'Mprizolakia xoirina',
                },
            },
            {
                id: 27,
                name: 'Φιλέτο στήθος κοτόπουλο',
                price: '7.80',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 28,
                name: 'Φιλέτο κοτόπουλο πανέ',
                description: 'Με πατάτες',
                price: '7.80',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 108,
                name: 'Κοτόπουλο ¨Παπιγιόν¨',
                description: 'Ολόκληρο κοτόπουλο ξεκοκκαλιασμένο με σάλτσα εσπεριδοειδών',
                price: '15.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 29,
                name: 'Λουκάνικο χωριάτικο',
                price: '6.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
        ]
    },
    {
        sectionName: 'Τηγανιές',
        sectionContent: [
            {
                id: 14,
                name: 'Τηγανιά κοτόπουλο αλα κρέμ',
                description: 'Με πιπεριές',
                price: '6.80',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 15,
                name: 'Τηγανιά κοτόπουλο',
                description: 'Σβησμένη με μαστίχα',
                price: '7.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 16,
                name: 'Τηγανιά χοιρινή',
                description: 'Σβησμένη με κρασί και σως φέτας',
                price: '7.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
        ]
    },
    {
        sectionName: 'Για την μέση',
        sectionContent: [
            {
                id: 31,
                name: 'Σπαλομπριζόλα',
                description: '2 ατόμων 600γρ',
                price: '21.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 32,
                name: 'Ποικιλία κρεατικων',
                description: 'Λουκάνικο, πανσέτα, μπριζολάκια, πατάτες, πίτες',
                price: '',
                type: 'title',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 33,
                name: '',
                category: '2 ατόμων',
                price: '17.00',
                type: 'category'
            },
            {
                id: 34,
                name: '',
                category: '4 ατόμων',
                price: '34.00',
                type: 'category'
            },
            {
                id: 35,
                name: 'Μεζες',
                price: '',
                type: 'title',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 39,
                name: 'Tσιλιλή',
                description: 'Με γλυκάνισο 200ml',
                price: '9.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 40,
                name: 'Αγιονέρι παλαιωμένο τσίπουρο',
                price: '11.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 41,
                name: 'Αποστολάκη ',
                price: '9.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 42,
                name: 'Δεκαράκι',
                price: '8.70',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 87,
                name: 'Ηδωνικό 200ml',
                price: '9.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 90,
                name: 'Μαυρο Ρόδο 200ml',
                price: '9.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 110,
                name: 'Γάτσιου 200ml',
                price: '10.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isNew: true,
            },
            {
                id: 43,
                name: 'Τσίπουρο χύμα (μετέωρα)',
                price: '',
                type: 'title',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 59,
                name: 'Βενιαμίν 200ml',
                price: '9.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 60,
                name: 'Ποτήρι 50ml',
                price: '3.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 61,
                name: 'Πλωμάρι 200ml',
                price: '9.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 88,
                name: 'Καζανιστό Εξ’ Αποστάξεως',
                price: '10.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 64,
                name: 'Άλφα ποτήρι μεγάλο',
                price: '4.20',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 92,
                name: 'Άλφα weiss 500ml',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 65,
                name: 'Heineken 500ml',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 98,
                name: 'Κόρφου κόκκινη 500ml',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 66,
                name: 'Κόρφου bitter dark 330ml',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 67,
                name: 'Mάμος 500ml',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 99,
                name: 'Fisher 500ml',
                price: '5.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 100,
                name: 'Madam pilsner 330ml',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 114,
                name: 'Χίος καπνιστή 330ml',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isNew: true,
            },
            {
                id: 115,
                name: 'Χίος India Pale Ale 330ml',
                price: '5.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isNew: true,
            },
            {
                id: 116,
                name: 'Μηλοκλέφτης 330ml',
                price: '4.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isNew: true,
            },
            {
                id: 117,
                name: 'Beer of the week',
                description: 'Ρωτήστε μας',
                price: '',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 68,
                name: 'Άλφα χωρίς αλκοόλ 500ml',
                price: '4.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                price: '6.00',
                type: 'category'
            },
            {
                id: 72,
                name: '',
                category: '1 λίτρο',
                price: '12.00',
                type: 'category'
            },
            {
                id: 73,
                name: 'Ντουράκη ριζίτης',
                description: 'Μπουκάλι',
                price: '15.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 74,
                name: 'Κτήμα',
                description: 'Μπουκάλι',
                price: '',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 83,
                name: 'Βότκα',
                price: '7.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 84,
                name: 'Τζιν',
                price: '7.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 85,
                name: 'Ρούμι',
                price: '7.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 111,
                name: 'Σφηνάκια',
                price: '2.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 112,
                name: 'Υποβρύχιο ¨Οίνο¨',
                price: '4.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
                isNew: true,
            },
            {
                id: 113,
                name: 'Vodka Pink Soda',
                price: '8.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
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
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 76,
                name: 'Coca Cola light',
                price: '2.20',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 91,
                name: 'Τhree Cents Pink Grapefruit Soda',
                price: '4.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                },
            },
            {
                id: 77,
                name: 'Βίκος γκαζόζα',
                price: '2.20',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 78,
                name: 'Βίκος πορτοκαλάδα',
                price: '2.20',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 79,
                name: 'Πορτοκαλάδα μπλε',
                price: '2.20',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 80,
                name: 'Σόδα',
                price: '2.00',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
            {
                id: 81,
                name: 'Νερό λίτρο',
                price: '1.50',
                image: {
                    imageURL: '',
                    imageDescription: 'kataifakia',
                }
            },
        ]
    }
];

// max id number: 117

