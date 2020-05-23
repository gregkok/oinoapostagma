export interface Item {
    name: string;
    description?: string;
    category?: string;
    price: string;
    type?: string;
}

export interface Section {
    sectionName: string;
    sectionContent: Item[];
}

export const kouzina: Section[] = [
    {
        sectionName: 'Σαλατες',
        sectionContent: [
            {
                name: 'Σαλάτα Οινοαπόσταγμα',
                description: 'σαλάτα με αποξηραμένα σύκα, κατίκι, προσούτο παστέλι και βινεγκρέτ',
                price: '8.80'
            },
            {
                name: 'Σαλάτα του Καίσαρα',
                description: 'μαρούλι, κοτόπουλο, παρμεζάνα, καλαμπόκι, κρουτόν και μπέικον',
                price: '7.80'
            },
            {
                name: 'Ντακάκια',
                description: 'παξιμαδάκια, ντομάτα, φέτα, κάπαρη και ελιές',
                price: '5.50'
            },
            {
                name: 'Χωριάτικη',
                description: 'ντομάτα, αγγούρι, κρεμμύδι, πιππεριές, φέτα και ελιές',
                price: '5.50'
            },
            {
                name: 'Σαλάτα Summer',
                description: 'ανάμεικτη σαλάτα, κράνμπερι, καβουρδισμένο κουκουνάρι, ξινόμιλα, ανθότυρο και σος ροδιού',
                price: '8.00'
            },
        ]
    },
    {
        sectionName: 'Μεζεδακια',
        sectionContent: [
            {
                name: 'Φέτα με λαδορίγανη',
                price: '3.50'
            },
            {
                name: 'Σαγανάκι κεφαλοτύρι',
                price: '4.50'
            },
            {
                name: 'Πατάτες τηγανιτές',
                price: '3.20'
            },
            {
                name: 'Πατάτες',
                description: 'Με λιωμένο τυρί και μπέικον',
                price: '5.50'
            },
            {
                name: 'Πατάτα γεμιστή με τυρί',
                description: 'Στο αλουμινόχαρτο',
                price: '5.80'
            },
            {
                name: 'Μανιτάρια πόρτομπελο',
                description: 'Γεμιστά με τυρί',
                price: '6.00'
            },
            {
                name: 'Καρβελάκι γεμιστό',
                description: 'Με μοσχαρίσιο κρέας',
                price: '7.50'
            },
            {
                name: 'Τηγανόψωμο',
                price: '6.00'
            },
            {
                name: 'Καταιφάκια αλμυρά',
                description: 'Με μέλι και  φέτα',
                price: '5.50'
            },
        ]
    },
    {
        sectionName: 'Τηγανι',
        sectionContent: [
            {
                name: 'Τηγανιά κοτόπουλο αλα κρέμ',
                description: 'Με πιππεριές',
                price: '6.50'
            },
            {
                name: 'Τηγανιά κοτόπουλο',
                description: 'Σβησμένη με μαστίχα, και σος φέτας',
                price: '6.50'
            },
            {
                name: 'Τηγανία χοιρινή',
                description: 'Σβησμένη με κρασί',
                price: '7.00'
            },
            {
                name: 'Κολοκυθοκεφτέδες',
                price: '4.50'
            },
            {
                name: 'Κεφτεδάκια κοκκινιστά',
                price: '6.50'
            },
            {
                name: 'Μανιτάρια πλευρότους',
                description: 'Στην σχάρα',
                price: '6.50'
            },
            {
                name: 'Αυγά με πατάτες',
                price: '4.50'
            },
            {
                name: 'Φέτα στο τηγάνι',
                description: 'Με μέλι και σουσάμι',
                price: '5.50'
            },
        ]
    },
    {
        sectionName: 'Σχαρα',
        sectionContent: [
            {
                name: 'Μπιφτέκια μοσχαρίσια',
                description: 'Στην σχάρα',
                price: '8.00'
            },
            {
                name: 'Μπιφτέκια γεμιστά',
                description: 'με φέτα',
                price: '8.50'
            },
            {
                name: 'Μπιφτέκια κοτόπουλο',
                description: 'Με ψητά λαχανικά',
                price: '8.50'
            },
            {
                name: 'Πανσετάκια',
                description: 'Με πατάτες και σος Οινοαπόσταγμα',
                price: '7.50'
            },
            {
                name: 'Μπριζολάκια χοιρινά',
                description: 'Με πατάτες και σος BBQ',
                price: '6.50'
            },
            {
                name: 'Φιλέτο στήθος κοτόπουλο',
                price: '7.80'
            },
            {
                name: 'Φιλέτο κοτόπουλο πανέ',
                description: 'Με πατάτες',
                price: '7.80'
            },
            {
                name: 'Λουκάνικο χωριάτικο',
                price: '6.00'
            },
            {
                name: 'Πιτούλα ψημένη',
                price: '0.50'
            },
        ]
    },
    {
        sectionName: 'Για την μέση',
        sectionContent: [
            {
                name: 'Σπαλομπριζόλα',
                description: '2 ατόμων 600γρ',
                price: '16.00'
            },
            {
                name: 'Ποικιλία κρεατικων',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: '2 ατόμων',
                price: '16.00',
                type: 'category'
            },
            {
                name: '',
                category: '4 ατόμων',
                price: '32.00',
                type: 'category'
            },
            {
                name: 'Μεζες',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: 'Για 2',
                price: '8.00',
                type: 'category'
            },
            {
                name: '',
                category: 'Για 4',
                price: '16.00',
                type: 'category'
            },
        ]
    }
];

export const kava: Section[] = [
    {
        sectionName: 'Τσιπουράκι',
        sectionContent: [
            {
                name: 'Tσιλιλή',
                description: 'Χωρίς γλυκάνισο 200ml',
                price: '8.50'
            },
            {
                name: 'Tσιλιλή',
                description: 'Με γλυκάνισο 200ml',
                price: '9.00'
            },
            {
                name: 'Αγιονέρι παλαιωμένο τσίπουρο',
                price: '11.50'
            },
            {
                name: 'Αποστολάκη ',
                price: '11.00'
            },
            {
                name: 'Δεκαράκι',
                price: '8.70'
            },
            {
                name: 'Τσίπουρο χύμα (μετέωρα)',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: '100ml',
                price: '4.00',
                type: 'category'
            },
            {
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
                name: 'Ρακομελάκι ζεστό',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
            {
                name: '',
                category: '500ml',
                price: '16.50',
                type: 'category'
            },
            {
                name: 'Οινόμελο ζεστό η κρύο',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
            {
                name: '',
                category: '500ml',
                price: '16.50',
                type: 'category'
            },
            {
                name: 'Μαστίχα',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: '100ml',
                price: '4.50',
                type: 'category'
            },
            {
                name: '',
                category: '250ml',
                price: '8.50',
                type: 'category'
            },
            {
                name: '',
                category: '500ml',
                price: '16.50',
                type: 'category'
            },
        ]
    },
    {
        sectionName: 'Ουζάκι ',
        sectionContent: [
            {
                name: 'Καζανιστό 200ml',
                price: '8.50'
            },
            {
                name: 'Βενιαμίν 200ml',
                price: '8.50'
            },
            {
                name: 'Ποτήρι',
                price: '3.50'
            },
            {
                name: 'Πλωμάρι 200ml',
                price: '9.00'
            },
            {
                name: 'Βαρβαγιάννη μπλε',
                price: '10.50'
            },
        ]
    },
    {
        sectionName: 'Μπύρες',
        sectionContent: [
            {
                name: 'Άλφα ποτήρι μικρό',
                price: '3.20'
            },
            {
                name: 'Άλφα ποτήρι μεγάλο',
                price: '4.20'
            },
            {
                name: 'Heineken',
                price: '4.20'
            },
            {
                name: 'Άμστελ',
                price: '4.00'
            },
            {
                name: 'Mάμος',
                price: '4.20'
            },
            {
                name: 'Άλφα χωρίς αλκοόλ',
                price: '4.00'
            },
        ]
    },
    {
        sectionName: 'Όινος',
        sectionContent: [
            {
                name: 'Λευκό, κόκκινο ή ημίγλυκο',
                price: '',
                type: 'title'
            },
            {
                name: '',
                category: 'Ποτήρι',
                price: '3.50',
                type: 'category'
            },
            {
                name: '',
                category: '500ml',
                price: '6.00',
                type: 'category'
            },
            {
                name: '',
                category: '1 λίτρο',
                price: '11.00',
                type: 'category'
            },
            {
                name: 'Ντουράκη ριζίτης',
                description: 'Μπουκάλι',
                price: '15.00'
            },
            {
                name: 'Κτήμα',
                description: 'Μπουκάλι',
                price: ''
            },
        ]
    },
    {
        sectionName: 'Αναψυκτικά',
        sectionContent: [
            {
                name: 'Coca Cola',
                price: '2.20'
            },
            {
                name: 'Coca Cola light',
                price: '2.20'
            },
            {
                name: 'Βίκος γκαζόζα',
                price: '2.20'
            },
            {
                name: 'Βίκος πορτοκαλάδα',
                price: '2.20'
            },
            {
                name: 'Πορτοκαλάδα μπλε',
                price: '2.20'
            },
            {
                name: 'Σόδα',
                price: '2.00'
            },
            {
                name: 'Νερό Βίκος ',
                price: '1.50'
            },
        ]
    },
    {
        sectionName: 'Τα βαριά',
        sectionContent: [
            {
                name: 'Ουίσκι',
                price: '7.00'
            },
            {
                name: 'Βότκα',
                price: '7.00'
            },
            {
                name: 'Τζιν',
                price: '7.00'
            },
            {
                name: 'Ρούμι',
                price: '7.00'
            },
        ]
    }
];

