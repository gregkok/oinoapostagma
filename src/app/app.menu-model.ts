export interface Item {
    name: string;
    description?: string;
    price: string;
}

export interface Section {
    sectionName: string;
    sectionContent: Item[];
}

export const sections: Section[] = [
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
                price: '4.80'
            },
            {
                name: 'Τυροκαυτερή',
                price: '3.50'
            },
            {
                name: 'Καγιάνας',
                price: '4.50'
            },
            {
                name: 'Τηγανόψωμο',
                price: '6.00'
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
        ]
    },
    {
        sectionName: 'Τηγανι',
        sectionContent: [
            {
                name: 'Τηγανιά κοτόπουλο αλα κρέμ',
                price: '6.50'
            },
            {
                name: 'Τηγανία χοιρινή',
                description: 'Σβησμένη με κρασί',
                price: '7.00'
            },
            {
                name: 'Ντοματοκεφτέδες',
                price: '5.20'
            },
            {
                name: 'Κολοκυθοκεφτέδες',
                price: '5.20'
            },
            {
                name: 'Κεφτεδάκια',
                description: 'Με ούζο και σος γιαουρτιού',
                price: '6.50'
            },
            {
                name: 'Μανιτάρια πλευρότους',
                description: 'Στην σχάρα',
                price: '6.50'
            },
            {
                name: 'Αυγά με πατάτες',
                price: '5.50'
            },
            {
                name: 'Φέτα στο τηγάνι',
                description: 'Με μέλι και σουσάμι',
                price: '5.50'
            },
            {
                name: 'Σαγανάκι κεφαλοτύρι',
                price: '5.00'
            },
        ]
    },
    {
        sectionName: 'Σχαρα',
        sectionContent: [
            {
                name: 'Ποικιλία κρεατικών',
                description: 'Για 2 άτομα',
                price: '16.00'
            },
            {
                name: 'Ποικιλία κρεατικών',
                description: 'Για 4 άτομα',
                price: '32.00'
            },
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
                description: 'Με σος Οινοαπόσταγμα',
                price: '7.50'
            },
            {
                name: 'Φιλέτο στήθος κοτόπουλο',
                price: '7.80'
            },
            {
                name: 'Χοιρινό σνίτσελ',
                price: '7.50'
            },
            {
                name: 'Φιλέτο κοτόπουλο πανέ',
                price: '7.80'
            },
            {
                name: 'Μεζές για 2',
                price: '5.50'
            },
            {
                name: 'Μεζές για 4',
                price: '16.00'
            },
            {
                name: 'Πιτούλα ψημένη',
                price: '0.50'
            },
        ]
    }
];

